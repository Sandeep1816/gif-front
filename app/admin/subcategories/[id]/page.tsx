"use client";

import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  useGetSubCategoryQuery,
  useUpdateSubCategoryMutation,
  useGetCategoriesQuery,
} from "@/generated/graphql";

export default function EditSubCategory() {
  const { id } = useParams();
  const router = useRouter();

  const { data } = useGetSubCategoryQuery({ variables: { id: id as string } });
  const sub = data?.subcategory;

  const { data: catData } = useGetCategoriesQuery();
  const categories = catData?.categories ?? [];

  const [updateSubCategory] = useUpdateSubCategoryMutation();

  const formik = useFormik({
    initialValues: {
      name: sub?.name || "",
      slug: sub?.slug || "",
      categoryId: sub?.categoryId || "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      name: Yup.string().required(),
      slug: Yup.string().required(),
      categoryId: Yup.string().required(),
    }),

    onSubmit: async (values) => {
      await updateSubCategory({
        variables: {
          id: id as string,
          data: values,
        },
      });

      alert("Updated!");
      router.push("/admin/subcategories");
    },
  });

  if (!sub) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded bg-white shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Subcategory</h1>

      <form className="space-y-4" onSubmit={formik.handleSubmit}>

        <div>
          <label className="font-medium">Name</label>
          <input
            name="name"
            className="border p-2 w-full rounded"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label className="font-medium">Slug</label>
          <input
            name="slug"
            className="border p-2 w-full rounded"
            value={formik.values.slug}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label className="font-medium">Category</label>
          <select
            name="categoryId"
            className="border p-2 w-full rounded"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
          Update
        </button>

      </form>
    </div>
  );
}
