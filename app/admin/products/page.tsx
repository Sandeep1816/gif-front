"use client";

import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";

import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@/generated/graphql";

export default function ProductList() {
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const products = data?.products ?? [];

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    try {
      await deleteProduct({ variables: { id } });
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
        <h1 className="text-2xl font-bold text-[#4A3728]">Products</h1>

        <Link
          href="/admin/products/create"
          className="px-4 py-2 bg-[#4A3728] text-white rounded-lg flex items-center gap-2 hover:bg-[#6B5847]"
        >
          <Plus size={18} /> Create Product
        </Link>
      </div>

      {/* Table */}
      <div className="bg-[#FFF9F1] shadow p-5 rounded-lg border border-[#EBD8C7]">
        {products.length === 0 ? (
          <p className="text-[#8B7A6A]">No products found.</p>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EBD8C7] text-[#6B5847]">
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Price</th>
                <th className="p-3">Slug</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-[#EBD8C7] hover:bg-[#FFF3E5]">

                  {/* Image */}
                  <td className="p-3">
                    <Image
                      src={p.imageUrl || "/placeholder.png"}
                      width={60}
                      height={60}
                      alt={p.title}
                      className="rounded border border-[#F5DCC7]"
                    />
                  </td>

                  {/* Title */}
                  <td className="p-3 text-[#4A3728]">{p.title}</td>

                  {/* Price */}
                  <td className="p-3 text-[#8B6F47] font-semibold">
                    ₹{p.price}
                  </td>

                  {/* Slug */}
                  <td className="p-3 text-[#8B7A6A]">{p.slug}</td>

                  {/* Actions */}
                  <td className="p-3 flex items-center justify-end gap-4">

                    <Link
                      href={`/admin/products/${p.id}/edit`}
                      className="text-[#4A3728] hover:text-[#8B6F47]"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => handleDelete(p.id)}
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
