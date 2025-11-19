"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/generated/graphql";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";

export default function CreateProductPage() {
  const router = useRouter();

  const { data: categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData?.categories ?? [];

  const { data: subsData } = useGetSubCategoriesQuery();
  const subcategories = subsData?.subcategories ?? [];

  const [preview, setPreview] = useState<string | null>(null);
  const [createProduct, { loading }] = useCreateProductMutation();

  // ---------- FORM FIRST ----------
  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      imageUrl: "",
      price: "",
      stock: "",
      categoryId: "",
      subCategoryId: "",
      isFavourite: false,
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      slug: Yup.string().required("Slug is required"),
      price: Yup.number().min(1).required("Price is required"),
      stock: Yup.number().min(0).required("Stock is required"),
      categoryId: Yup.string().required("Category is required"),
      subCategoryId: Yup.string().required("Subcategory is required"),
      imageUrl: Yup.string().required("Image is required"),
    }),

    onSubmit: async (values) => {
      try {
        await createProduct({
          variables: {
            data: {
              title: values.title,
              slug: values.slug,
              description: values.description,
              imageUrl: values.imageUrl,
              price: Number(values.price),
              stock: Number(values.stock),
              categoryId: values.categoryId,
              subCategoryId: values.subCategoryId,
              isFavourite: values.isFavourite,
            },
          },
        });

        alert("Product created successfully!");
        router.push("/admin/products");
      } catch (err: any) {
        alert(err.message);
      }
    },
  });

  // ---------- NOW USE FORMIK SAFELY ----------
  const filteredSubcategories = useMemo(() => {
    if (!formik.values.categoryId) return [];
    return subcategories.filter(
      (sub) => sub.categoryId === formik.values.categoryId
    );
  }, [subcategories, formik.values.categoryId]);

  // ---------- IMAGE UPLOAD ----------
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const upload = await uploadToCloudinary(file);
    formik.setFieldValue("imageUrl", upload.secure_url);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>

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

        {/* Image Upload */}
        <div>
          <label className="block font-medium">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="border p-2 w-full rounded"
          />
          {preview && (
            <img
              src={preview}
              className="mt-3 w-32 h-32 rounded object-cover border"
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
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldValue("subCategoryId", ""); // reset subcategory
            }}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <label className="block font-medium">Subcategory</label>
          <select
            name="subCategoryId"
            className="border p-2 w-full rounded"
            value={formik.values.subCategoryId}
            onChange={formik.handleChange}
            disabled={!formik.values.categoryId}
          >
            <option value="">Select Subcategory</option>

            {filteredSubcategories.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
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
            className="w-5 h-5"
          />
          <label htmlFor="isFavourite" className="font-medium">
            Mark as Favourite ⭐
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
