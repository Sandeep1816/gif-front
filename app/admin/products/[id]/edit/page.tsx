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
import { X } from "lucide-react";

/* ---------------- TYPES ---------------- */

type ImageItem = {
  id?: string;
  url: string;
  isPrimary: boolean;
};

type EditProductForm = {
  title: string;
  slug: string;
  description: string;
  price: string;
  stock: string;
  categoryId: string;
  isFavourite: boolean;
};

/* ---------------- COMPONENT ---------------- */

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data: categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData?.categories ?? [];

  const { data, loading } = useGetProductQuery({
    variables: { id: id as string },
  });

  const [updateProduct, { loading: updating }] =
    useUpdateProductMutation();

  const [images, setImages] = useState<ImageItem[]>([]);

  /* ---------------- FORMIK ---------------- */

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
              images: images.map((img, index) => ({
                url: img.url,
                isPrimary: img.isPrimary,
                order: index + 1,
              })),
            },
          },
        });

        alert("Product updated successfully!");
        router.push("/admin/products");
      } catch (err: any) {
        alert(err.message);
      }
    },
  });

  /* ---------------- LOAD PRODUCT ---------------- */

  useEffect(() => {
    if (!data?.product) return;

    formik.setValues({
      title: data.product.title,
      slug: data.product.slug,
      description: data.product.description || "",
      price: data.product.price.toString(),
      stock: data.product.stock.toString(),
      categoryId: data.product.categoryId || "",
      isFavourite: data.product.isFavourite,
    });

    setImages(
      data.product.images.map((img) => ({
        id: img.id,
        url: img.url,
        isPrimary: img.isPrimary,
      }))
    );
  }, [data]);

  /* ---------------- IMAGE HANDLERS ---------------- */

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files) return;

    const uploaded: ImageItem[] = [];

    for (let i = 0; i < files.length; i++) {
      const res = await uploadToCloudinary(files[i]);
      uploaded.push({
        url: res.secure_url,
        isPrimary: images.length === 0 && i === 0,
      });
    }

    setImages([...images, ...uploaded]);
  };

  const makePrimary = (index: number) => {
    setImages(
      images.map((img, i) => ({
        ...img,
        isPrimary: i === index,
      }))
    );
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    if (!updated.some((img) => img.isPrimary) && updated.length > 0) {
      updated[0].isPrimary = true;
    }
    setImages(updated);
  };

  if (loading) return <p className="p-6">Loading product...</p>;

  const primaryImage =
    images.find((i) => i.isPrimary)?.url || "/placeholder.png";

  /* ---------------- UI ---------------- */

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-6">

        {/* PRIMARY IMAGE */}
        <div>
          <label className="font-medium block mb-2">Primary Image</label>
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border bg-gray-100">
            <Image src={primaryImage} alt="Primary" fill className="object-cover" />
          </div>
        </div>

        {/* GALLERY IMAGES */}
        <div>
          <label className="font-medium block mb-2">Gallery Images</label>

          <div className="flex gap-3 flex-wrap">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative w-24 h-24 rounded-xl overflow-hidden border ${
                  img.isPrimary ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <Image src={img.url} fill alt="" className="object-cover" />

                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-white rounded-full p-1"
                >
                  <X size={14} />
                </button>

                {!img.isPrimary && (
                  <button
                    type="button"
                    onClick={() => makePrimary(i)}
                    className="absolute bottom-1 left-1 text-xs bg-blue-600 text-white px-1 rounded"
                  >
                    Primary
                  </button>
                )}
              </div>
            ))}
          </div>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="mt-3"
          />
        </div>

        {/* TITLE */}
        <input
          name="title"
          placeholder="Title"
          className="border p-2 w-full rounded"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        {/* SLUG */}
        <input
          name="slug"
          placeholder="Slug"
          className="border p-2 w-full rounded"
          value={formik.values.slug}
          onChange={formik.handleChange}
        />

        {/* PRICE & STOCK */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            className="border p-2 rounded"
            value={formik.values.stock}
            onChange={formik.handleChange}
          />
        </div>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          rows={4}
          placeholder="Description"
          className="border p-2 w-full rounded"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        {/* CATEGORY */}
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

        {/* FAVOURITE */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFavourite"
            checked={formik.values.isFavourite}
            onChange={formik.handleChange}
          />
          <span>Mark as Favourite ⭐</span>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={updating}
          className="bg-blue-600 text-white py-2 rounded w-full"
        >
          {updating ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}
