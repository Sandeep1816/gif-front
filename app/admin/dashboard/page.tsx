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
