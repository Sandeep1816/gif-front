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

  if (!cats || !subs || !prods) return <p>Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  if (!category) return <p>Invalid category URL</p>;

  const categorySubcategories = subs.subcategories.filter(
    (s) => s.categoryId === category.id
  );

  const filteredProducts = prods.products.filter(
    (p) => p.categoryId === category.id
  );

  return (
    <main className="min-h-screen bg-[#FFE5F0] py-10">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-6">
         {"Gifts"} {category.name}
        </h1>

        {/* SEARCH BAR */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search gifts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white py-3 pl-4 pr-10 rounded-xl shadow-sm 
                       border border-[#F5DCE5] text-gray-800"
          />
          <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" />
        </div>

        {/* BUDGET BANNER */}
        <div className="bg-[#F8D7E8] p-6 rounded-2xl flex justify-between items-center mb-10">
          <div>
            <h2 className="text-xl font-bold text-[#4A3728]">Budget friendly gifts</h2>
            <p className="text-sm text-[#6B5568]">
              Make her smile without breaking the bank
            </p>
          </div>
          <div className="text-5xl">🎁</div>
        </div>

        {/* SUBCATEGORIES */}
        {categorySubcategories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-10">
            {categorySubcategories.map((sub) => (
              <a
                key={sub.id}
                href={`/category/${category.slug}/${sub.slug}`}
                className="p-4 bg-white rounded-xl shadow border border-[#F5DCE5]
                           text-center hover:shadow-md transition"
              >
                <p className="font-semibold text-[#4A3728]">{sub.name}</p>
              </a>
            ))}
          </div>
        )}

        {/* PRODUCT LIST */}
        {filteredProducts.length === 0 ? (
          <p className="text-[#8B7A6A]">No products available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow p-4 border border-[#F5DCE5] 
                           hover:shadow-lg transition flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 w-full rounded-xl overflow-hidden bg-[#F7E6DE]">
                  <Image
                    src={p.imageUrl || "/placeholder.png"}
                    fill
                    alt={p.title}
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-[#1A1A1A] mt-4">{p.title}</h2>

                {/* Price */}
                <p className="text-[#1A1A1A] font-semibold text-lg mt-1">
                  ₹{p.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="mt-3 bg-[#FFC9D6] hover:bg-[#F4B4C1] text-black py-2 
                             rounded-xl font-semibold transition"
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
        <BuyNowModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}
