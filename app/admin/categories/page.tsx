"use client";

import Link from "next/link";
import { Pencil, Trash2, Plus } from "lucide-react";

import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} from "@/generated/graphql";

export default function CategoryList() {
  const { data } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const categories = data?.categories ?? [];

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this category?")) return;

    try {
      await deleteCategory({ variables: { id } });
      alert("Deleted");
      window.location.reload();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 space-y-6 bg-[#FFFBF2] min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#4A3728]">Categories</h1>

        <Link
          href="/admin/categories/create"
          className="px-4 py-2 bg-[#4A3728] text-white rounded-lg flex items-center gap-2 hover:bg-[#6B5847]"
        >
          <Plus size={18} /> Create Category
        </Link>
      </div>

      {/* Table */}
      <div className="bg-[#FFF9F1] shadow p-5 rounded-lg border border-[#EBD8C7]">
        {categories.length === 0 ? (
          <p className="text-[#8B7A6A]">No categories found.</p>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EBD8C7] text-[#6B5847]">
                <th className="p-3">Name</th>
                <th className="p-3">Slug</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((c) => (
                <tr key={c.id} className="border-b border-[#EBD8C7] hover:bg-[#FFF3E5]">

                  <td className="p-3 text-[#4A3728]">{c.name}</td>
                  <td className="p-3 text-[#8B7A6A]">{c.slug}</td>

                  <td className="p-3 flex items-center justify-end gap-4">

                    <Link
                      href={`/admin/categories/${c.id}`}
                      className="text-[#4A3728] hover:text-[#8B6F47]"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => handleDelete(c.id)}
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
