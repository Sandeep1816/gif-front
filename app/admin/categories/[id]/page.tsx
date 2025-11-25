"use client";

import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  useGetCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "@/generated/graphql";

export default function EditCategoryPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data } = useGetCategoryQuery({
    variables: { id: id as string },
  });

  const category = data?.category;

  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const formik = useFormik({
    initialValues: {
      name: category?.name || "",
      slug: category?.slug || "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      name: Yup.string().required(),
      slug: Yup.string().required(),
    }),

    onSubmit: async (values) => {
      try {
        await updateCategory({
          variables: {
            id: id as string,
            data: values,
          },
        });

        alert("Category updated!");
        router.push("/admin/categories");
      } catch (err: any) {
        alert(err.message);
      }
    },
  });

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    try {
      await deleteCategory({ variables: { id: id as string } });
      alert("Category deleted");
      router.push("/admin/categories");
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (!category) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-[#FFF9F1] border border-[#EBD8C7] rounded-xl shadow">

      <h1 className="text-2xl font-bold mb-6 text-[#4A3728]">Edit Category</h1>

      {/* FORM */}
      <form className="space-y-4" onSubmit={formik.handleSubmit}>

        <div>
          <label className="font-medium text-[#4A3728]">Name</label>
          <input
            name="name"
            className="border border-[#EBD8C7] bg-[#FFFBF2] p-2 w-full rounded mt-1"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label className="font-medium text-[#4A3728]">Slug</label>
          <input
            name="slug"
            className="border border-[#EBD8C7] bg-[#FFFBF2] p-2 w-full rounded mt-1"
            value={formik.values.slug}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex items-center gap-4 pt-4">

          <button
            type="submit"
            className="bg-[#4A3728] text-white px-4 py-2 rounded hover:bg-[#6B5847]"
          >
            Update
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </form>
    </div>
  );
}
