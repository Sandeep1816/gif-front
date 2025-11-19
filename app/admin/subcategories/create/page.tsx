"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
  useCreateSubCategoryMutation,
  useGetCategoriesQuery,
} from "@/generated/graphql";
import { useRouter } from "next/navigation";

export default function CreateSubCategory() {
  const router = useRouter();
  const [createSubCategory] = useCreateSubCategoryMutation();

  const { data } = useGetCategoriesQuery();
  const categories = data?.categories ?? [];

  const formik = useFormik({
    initialValues: {
      name: "",
      slug: "",
      categoryId: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      slug: Yup.string().required("Slug is required"),
      categoryId: Yup.string().required("Category is required"),
    }),

    onSubmit: async (values) => {
      await createSubCategory({
        variables: { data: values },
      });

      alert("Subcategory Created!");
      router.push("/admin/subcategories");
    },
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Create Subcategory</h1>

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
          Create
        </button>

      </form>
    </div>
  );
}
