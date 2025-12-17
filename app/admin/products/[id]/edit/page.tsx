"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useGetProductQuery,
  useUpdateProductMutation,
  useGetCategoriesQuery,
} from "@/generated/graphql";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import Image from "next/image";

type EditProductForm = {
  title: string;
  slug: string;
  description: string;
  price: string;
  stock: string;
  categoryId: string;
  isFavourite: boolean;
};

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data: categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData?.categories ?? [];

  const { data, loading: productLoading } = useGetProductQuery({
    variables: { id: id as string },
  });

  const [updateProduct, { loading: updating }] =
    useUpdateProductMutation();

  const [preview, setPreview] = useState<string | null>(null);
  const [newImageUrl, setNewImageUrl] = useState<string | null>(null);

  // ---------- FORMIK ----------
  const formik = useFormik<EditProductForm>({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      price: "",
      stock: "",
      categoryId: "",
      isFavourite: false,
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      slug: Yup.string().required("Slug is required"),
      price: Yup.number().min(1).required("Price is required"),
      stock: Yup.number().min(0).required("Stock is required"),
      categoryId: Yup.string().required("Category is required"),
    }),

    onSubmit: async (values) => {
      try {
        await updateProduct({
          variables: {
            id: id as string,
            data: {
              title: values.title,
              slug: values.slug,
              description: values.description,
              price: Number(values.price),
              stock: Number(values.stock),
              categoryId: values.categoryId,
              isFavourite: values.isFavourite,
            },
          },
        });

        // 🔥 Replace primary image if uploaded
        if (newImageUrl) {
          await fetch("/api/products/replace-primary-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              productId: id,
              imageUrl: newImageUrl,
            }),
          });
        }

        alert("Product updated successfully!");
        router.push("/admin/products");
      } catch (err: any) {
        alert(err.message);
      }
    },
  });

  // ---------- LOAD PRODUCT ----------
  useEffect(() => {
    if (data?.product) {
      const primaryImage =
        data.product.images.find((i) => i.isPrimary)?.url ||
        data.product.images[0]?.url ||
        null;

      formik.setValues({
        title: data.product.title,
        slug: data.product.slug,
        description: data.product.description || "",
        price: data.product.price.toString(),
        stock: data.product.stock.toString(),
        categoryId: data.product.categoryId || "",
        isFavourite: data.product.isFavourite ?? false,
      });

      setPreview(primaryImage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // ---------- IMAGE UPLOAD ----------
  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    const upload = await uploadToCloudinary(file);
    setNewImageUrl(upload.secure_url);
  };

  if (productLoading)
    return <p className="p-6">Loading product...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            name="title"
            className="border p-2 w-full rounded"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block font-medium">Slug</label>
          <input
            name="slug"
            className="border p-2 w-full rounded"
            value={formik.values.slug}
            onChange={formik.handleChange}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price (INR)</label>
          <input
            name="price"
            type="number"
            className="border p-2 w-full rounded"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block font-medium">Stock</label>
          <input
            name="stock"
            type="number"
            className="border p-2 w-full rounded"
            value={formik.values.stock}
            onChange={formik.handleChange}
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium">
            Primary Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="border p-2 w-full rounded"
          />

          {preview && (
            <Image
              src={preview}
              alt="Preview"
              width={140}
              height={140}
              className="mt-3 rounded-xl border object-cover"
            />
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            rows={4}
            className="border p-2 w-full rounded"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Category</label>
          <select
            name="categoryId"
            className="border p-2 w-full rounded"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Favourite */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isFavourite"
            name="isFavourite"
            checked={formik.values.isFavourite}
            onChange={formik.handleChange}
          />
          <label htmlFor="isFavourite" className="font-medium">
            Mark as Favourite ⭐
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={updating}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {updating ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}
