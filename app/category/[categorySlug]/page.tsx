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
    <main className="min-h-screen bg-[#FFF9F5] py-10">
      <div className="container mx-auto px-4">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-[#8A1538] mb-6">
          Gifts {category.name}
        </h1>

        {/* SEARCH BAR */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search gifts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full bg-white py-3 pl-4 pr-10 rounded-xl shadow-sm 
              border border-[#E8C7C7] text-[#3A2F2F] placeholder-[#8A1538]/40
              focus:outline-none focus:ring-2 focus:ring-[#D4A5A5]
            "
          />
          <Search className="absolute right-3 top-3.5 w-5 h-5 text-[#8A1538]/70" />
        </div>

        {/* BUDGET FRIENDLY BANNER */}
        <div className="
          bg-[#F7DDE2] p-6 rounded-2xl flex justify-between items-center mb-10 
          border border-[#E8C7C7] shadow-sm
        ">
          <div>
            <h2 className="text-xl font-bold text-[#8A1538]">
              Budget-friendly gifts
            </h2>
            <p className="text-sm text-[#3A2F2F]/70">
              Choose thoughtful gifts without overspending
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
                className="
                  p-4 bg-white rounded-xl shadow border border-[#E8C7C7]
                  text-center hover:shadow-md hover:bg-[#FFF3F7] 
                  hover:border-[#D4A5A5] transition
                "
              >
                <p className="font-semibold text-[#8A1538]">{sub.name}</p>
              </a>
            ))}
          </div>
        )}

        {/* PRODUCT LIST */}
        {filteredProducts.length === 0 ? (
          <p className="text-[#8A1538]/70">No products available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="
                  bg-white rounded-2xl shadow p-4 border border-[#E8C7C7] 
                  hover:shadow-lg transition flex flex-col
                "
              >
                {/* Image */}
                <div className="
                  relative h-40 w-full rounded-xl overflow-hidden bg-[#F7DDE2]
                  border border-[#E8C7C7]
                ">
                  <Image
                    src={p.imageUrl || "/placeholder.png"}
                    fill
                    alt={p.title}
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-[#8A1538] mt-4">
                  {p.title}
                </h2>

                {/* Price */}
                <p className="text-[#3A2F2F] font-semibold text-lg mt-1">
                  ₹{p.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="
                    mt-3 bg-[#8A1538] hover:bg-[#72102D] text-white py-2 
                    rounded-xl font-semibold transition shadow-sm
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
        <BuyNowModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}
