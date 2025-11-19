"use client";

import Link from "next/link";
import { Pencil, Trash2, Plus } from "lucide-react";
import {
  useGetSubCategoriesQuery,
  useDeleteSubCategoryMutation,
} from "@/generated/graphql";

export default function SubCategoryList() {
  const { data } = useGetSubCategoriesQuery();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  const subcategories = data?.subcategories ?? [];

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this subcategory?")) return;

    try {
      await deleteSubCategory({ variables: { id } });
      alert("Deleted");
      window.location.reload();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Subcategories</h1>

        <Link
          href="/admin/subcategories/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
        >
          <Plus size={18} /> Create Subcategory
        </Link>
      </div>

      <div className="bg-white shadow p-5 rounded-lg">
        {subcategories.length === 0 ? (
          <p className="text-gray-500">No subcategories found.</p>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">Name</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {subcategories.map((s) => (
                <tr key={s.id} className="border-b hover:bg-gray-50">

                  <td className="p-3">{s.name}</td>
                  <td className="p-3">{s.slug}</td>
                  <td className="p-3 text-sm text-gray-600">{s.categoryId}</td>

                  <td className="p-3 flex items-center justify-end gap-4">

                    <Link
                      href={`/admin/subcategories/${s.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => handleDelete(s.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
