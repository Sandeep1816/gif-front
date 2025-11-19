"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Pencil } from "lucide-react";

import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useDeleteProductMutation,
  useDeleteSubCategoryMutation,
} from "@/generated/graphql";

export default function AdminDashboard() {
  const { data: productsData } = useGetProductsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: subcategoriesData } = useGetSubCategoriesQuery();

  const [deleteProduct] = useDeleteProductMutation();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  const products = productsData?.products ?? [];
  const categories = categoriesData?.categories ?? [];
  const subcategories = subcategoriesData?.subcategories ?? [];

  const totalProducts = products.length;
  const totalCategories = categories.length;
  const totalSubCategories = subcategories.length;

  /* DELETE PRODUCT */
  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteProduct({ variables: { id } });
      alert("Product deleted");
      window.location.reload();
    } catch (err: any) {
      alert(err.message);
    }
  };

  /* DELETE SUBCATEGORY */
  const handleDeleteSubcategory = async (id: string) => {
    if (!confirm("Delete this subcategory?")) return;

    try {
      await deleteSubCategory({ variables: { id } });
      alert("Subcategory deleted");
      window.location.reload();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Products */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-600">Total Products</h2>
          <p className="text-4xl font-bold mt-3 text-blue-600">{totalProducts}</p>
        </div>

        {/* Categories */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-600">Total Categories</h2>
          <p className="text-4xl font-bold mt-3 text-green-600">{totalCategories}</p>
        </div>

        {/* Subcategories */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-600">Total Subcategories</h2>
          <p className="text-4xl font-bold mt-3 text-purple-600">{totalSubCategories}</p>
        </div>
      </div>

      {/* Recent Products Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Recent Products</h2>

        {totalProducts === 0 ? (
          <p className="text-gray-500">No products available.</p>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">Image</th>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.slice(0, 5).map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                  
                  {/* Image */}
                  <td className="p-3">
                    <Image
                      src={p.imageUrl || "/placeholder.png"}
                      alt={p.title}
                      width={60}
                      height={60}
                      className="rounded object-cover border"
                    />
                  </td>

                  {/* Title + Slug */}
                  <td className="p-3">
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm text-gray-500">{p.slug}</p>
                  </td>

                  {/* Price */}
                  <td className="p-3 font-medium text-blue-700">
                    ₹{(p.price).toLocaleString("en-IN")}
                  </td>

                  {/* Actions */}
                  <td className="p-3 text-right flex items-center gap-4 justify-end">
                    <Link
                      href={`/admin/products/${p.id}/edit`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => handleDeleteProduct(p.id)}
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

      {/* Recent Subcategories Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Recent Subcategories</h2>

        {totalSubCategories === 0 ? (
          <p className="text-gray-500">No subcategories available.</p>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">Subcategory</th>
                <th className="p-3">Slug</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {subcategories.slice(0, 5).map((s) => (
                <tr key={s.id} className="border-b hover:bg-gray-50 transition">

                  <td className="p-3 font-medium">{s.name}</td>
                  <td className="p-3 text-gray-600">{s.slug}</td>

                  <td className="p-3 text-right flex items-center gap-4 justify-end">
                    <Link
                      href={`/admin/subcategories/${s.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => handleDeleteSubcategory(s.id)}
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
