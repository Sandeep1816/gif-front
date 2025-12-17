"use client";

import { use } from "react";
import {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetProductsQuery,
} from "@/generated/graphql";
import Image from "next/image";
import BuyNowModal from "@/components/BuyNowModal";
import { useState } from "react";
import { Search } from "lucide-react";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { categorySlug } = use(params);

  const { data: cats } = useGetCategoriesQuery();
  const { data: subs } = useGetSubCategoriesQuery();
  const { data: prods } = useGetProductsQuery();

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (!cats || !subs || !prods) return <p className="text-center py-20">Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  if (!category) return <p className="text-center py-20">Invalid category</p>;

  const categorySubcategories = subs.subcategories.filter(
    (s) => s.categoryId === category.id
  );

  const filteredProducts = prods.products.filter(
    (p) =>
      p.categoryId === category.id &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#FBFAFF] py-12">
      <div className="container mx-auto px-4">

        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E2545] mb-8">
          Gifts for <span className="text-[#A88BFF]">{category.name}</span>
        </h1>

        {/* SEARCH BAR */}
        <div className="relative mb-10 max-w-xl">
          <input
            type="text"
            placeholder="Search gifts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full py-3 pl-4 pr-10 rounded-2xl
              bg-white border border-[#E3DBFF]
              text-[#2E2545] placeholder:text-[#6B6280]
              focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
              transition
            "
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A88BFF]" />
        </div>

        {/* BANNER */}
        <div
          className="
            bg-gradient-to-r from-[#EFEAFF] to-[#FBFAFF]
            p-6 rounded-3xl flex items-center justify-between
            border border-[#E3DBFF] shadow-sm mb-12
          "
        >
          <div>
            <h2 className="text-xl font-bold text-[#2E2545]">
              Budget-friendly gifts 🎁
            </h2>
            <p className="text-sm text-[#6B6280]">
              Thoughtful gifts that don’t hurt your wallet
            </p>
          </div>
          <span className="text-5xl hidden sm:block">💜</span>
        </div>

        {/* SUBCATEGORIES */}
        {categorySubcategories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
            {categorySubcategories.map((sub) => (
              <a
                key={sub.id}
                href={`/category/${category.slug}/${sub.slug}`}
                className="
                  p-4 rounded-2xl bg-white
                  border border-[#E3DBFF]
                  text-center font-semibold text-[#2E2545]
                  hover:bg-[#EFEAFF] hover:border-[#C9B0FF]
                  shadow-sm hover:shadow-md transition
                "
              >
                {sub.name}
              </a>
            ))}
          </div>
        )}

        {/* PRODUCTS */}
        {filteredProducts.length === 0 ? (
          <p className="text-[#6B6280]">No products available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="
                  bg-white rounded-3xl border border-[#E3DBFF]
                  shadow-sm hover:shadow-xl transition
                  p-4 flex flex-col
                "
              >
                {/* Image */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-[#EFEAFF]">
                  <Image
                    src={p.imageUrl || "/placeholder.png"}
                    fill
                    alt={p.title}
                    className="object-cover hover:scale-105 transition"
                  />
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-[#2E2545] mt-4">
                  {p.title}
                </h2>

                {/* Price */}
                <p className="text-[#A88BFF] font-bold text-lg mt-1">
                  ₹{p.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="
                    mt-4 py-2.5 rounded-2xl font-semibold
                    bg-[#C9B0FF] hover:bg-[#A88BFF]
                    text-[#2E2545] transition shadow-md
                  "
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <BuyNowModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
