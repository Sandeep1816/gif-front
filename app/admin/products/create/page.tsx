"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/generated/graphql";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";

type ImageInput = {
  url: string;
  isPrimary?: boolean;
};

export default function CreateProductPage() {
  const router = useRouter();

  const { data: categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData?.categories ?? [];

  const { data: subsData } = useGetSubCategoriesQuery();
  const subcategories = subsData?.subcategories ?? [];

  const [createProduct, { loading }] = useCreateProductMutation();

  /* ===============================
        FORMIK
  ================================ */

  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      images: [] as ImageInput[],
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
      images: Yup.array()
        .min(1, "At least one image is required")
        .required(),
    }),

    onSubmit: async (values) => {
      try {
        await createProduct({
          variables: {
            data: {
              title: values.title,
              slug: values.slug,
              description: values.description,
              price: Number(values.price),
              stock: Number(values.stock),
              categoryId: values.categoryId,
              subCategoryId: values.subCategoryId,
              isFavourite: values.isFavourite,
              images: values.images,
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

  /* ===============================
        FILTER SUBCATEGORIES
  ================================ */

  const filteredSubcategories = useMemo(() => {
    if (!formik.values.categoryId) return [];
    return subcategories.filter(
      (sub) => sub.categoryId === formik.values.categoryId
    );
  }, [subcategories, formik.values.categoryId]);

  /* ===============================
        IMAGE UPLOAD
  ================================ */

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const uploadedImages: ImageInput[] = [];

    for (let i = 0; i < files.length; i++) {
      const upload = await uploadToCloudinary(files[i]);

      uploadedImages.push({
        url: upload.secure_url,
        isPrimary:
          formik.values.images.length === 0 && i === 0, // first ever image
      });
    }

    formik.setFieldValue("images", [
      ...formik.values.images,
      ...uploadedImages,
    ]);
  };

  /* ===============================
        SET PRIMARY IMAGE
  ================================ */

  const setPrimaryImage = (index: number) => {
    const updated = formik.values.images.map((img, i) => ({
      ...img,
      isPrimary: i === index,
    }));

    formik.setFieldValue("images", updated);
  };

  /* ===============================
        REMOVE IMAGE
  ================================ */

  const removeImage = (index: number) => {
    let updated = [...formik.values.images];
    const removed = updated.splice(index, 1);

    // if primary removed → make first image primary
    if (removed[0]?.isPrimary && updated.length > 0) {
      updated[0].isPrimary = true;
    }

    formik.setFieldValue("images", updated);
  };

  /* ===============================
        UI
  ================================ */

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

        {/* Images */}
        <div>
          <label className="block font-medium">Product Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="border p-2 w-full rounded"
          />

          {formik.values.images.length > 0 && (
            <div className="flex gap-3 mt-3 flex-wrap">
              {formik.values.images.map((img, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer"
                  onClick={() => setPrimaryImage(i)}
                >
                  <img
                    src={img.url}
                    className={`w-24 h-24 rounded object-cover border ${
                      img.isPrimary
                        ? "ring-2 ring-blue-600"
                        : "hover:ring-2 hover:ring-gray-400"
                    }`}
                  />

                  {img.isPrimary && (
                    <span className="absolute top-1 left-1 bg-blue-600 text-white text-xs px-1 rounded">
                      Primary
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(i);
                    }}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
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
              formik.setFieldValue("subCategoryId", "");
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
