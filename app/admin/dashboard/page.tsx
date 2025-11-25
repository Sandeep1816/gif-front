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
    <div className="space-y-10 p-6 bg-[#FFFBF2] min-h-screen">

      <h1 className="text-3xl font-bold text-[#4A3728]">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Card title="Total Products" count={totalProducts} color="#8B6F47" />
        <Card title="Total Categories" count={totalCategories} color="#4A3728" />
        <Card title="Total Subcategories" count={totalSubCategories} color="#8B7A6A" />

      </div>

      {/* Recent Categories */}
      {/* <Section title="Recent Categories">
        {categories.length === 0 ? (
          <Empty />
        ) : (
          <Table>
            <thead>
              <tr className="border-b border-[#EBD8C7] text-[#6B5847]">
                <th className="p-3">Name</th>
                <th className="p-3">Slug</th>
              </tr>
            </thead>

            <tbody>
              {categories.slice(0, 5).map((c) => (
                <tr key={c.id} className="border-b border-[#EBD8C7] hover:bg-[#FFF3E5] transition">
                  <td className="p-3 font-medium text-[#4A3728]">{c.name}</td>
                  <td className="p-3 text-[#8B7A6A]">{c.slug}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Section> */}

      {/* Recent Products */}
      {/* <Section title="Recent Products">
        {products.length === 0 ? (
          <Empty />
        ) : (
          <Table>
            <thead>
              <tr className="border-b border-[#EBD8C7] text-[#6B5847]">
                <th className="p-3">Image</th>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.slice(0, 5).map((p) => (
                <tr key={p.id} className="border-b border-[#EBD8C7] hover:bg-[#FFF3E5] transition">

                  <td className="p-3">
                    <Image
                      src={p.imageUrl || "/placeholder.png"}
                      width={60}
                      height={60}
                      alt={p.title}
                      className="rounded border border-[#F5DCC7]"
                    />
                  </td>

                  <td className="p-3">
                    <p className="font-semibold text-[#4A3728]">{p.title}</p>
                    <p className="text-sm text-[#8B7A6A]">{p.slug}</p>
                  </td>

                  <td className="p-3 font-medium text-[#8B6F47]">
                    ₹{p.price}
                  </td>

                  <td className="p-3 text-right flex items-center justify-end gap-4">
                    <Link href={`/admin/products/${p.id}/edit`} className="text-[#4A3728] hover:text-[#8B6F47]">
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
          </Table>
        )}
      </Section> */}

      {/* Subcategories */}
      {/* <Section title="Recent Subcategories">
        {subcategories.length === 0 ? (
          <Empty />
        ) : (
          <Table>
            <thead>
              <tr className="border-b border-[#EBD8C7] text-[#6B5847]">
                <th className="p-3">Name</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {subcategories.slice(0, 5).map((s) => (
                <tr key={s.id} className="border-b border-[#EBD8C7] hover:bg-[#FFF3E5] transition">

                  <td className="p-3 text-[#4A3728]">{s.name}</td>
                  <td className="p-3 text-[#8B7A6A]">{s.slug}</td>
                  <td className="p-3 text-sm text-[#8B7A6A]">{s.categoryId}</td>

                  <td className="p-3 flex items-center justify-end gap-4">
                    <Link href={`/admin/subcategories/${s.id}`} className="text-[#4A3728] hover:text-[#8B6F47]">
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
          </Table>
        )}
      </Section> */}

    </div>
  );
}

/* -------------------- COMPONENTS -------------------- */

function Card({ title, count, color }: any) {
  return (
    <div className="bg-[#FFF9F1] p-6 rounded-xl shadow border border-[#EBD8C7]">
      <h2 className="text-lg font-semibold text-[#6B5847]">{title}</h2>
      <p className="text-4xl font-bold mt-3" style={{ color }}>{count}</p>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div className="bg-[#FFF9F1] p-6 rounded-xl shadow border border-[#EBD8C7]">
      <h2 className="text-xl font-bold text-[#4A3728] mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Table({ children }: any) {
  return <table className="w-full border-collapse text-left">{children}</table>;
}

function Empty() {
  return <p className="text-[#8B7A6A]">No data found.</p>;
}
