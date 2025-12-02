"use client";

import { use } from "react";
import {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetProductsQuery,
} from "@/generated/graphql";
import Image from "next/image";
import { useState } from "react";
import BuyNowModal from "@/components/BuyNowModal";

interface Props {
  params: Promise<{ categorySlug: string; subSlug: string }>;
}

export default function SubCategoryPage({ params }: Props) {
  const { categorySlug, subSlug } = use(params);

  const { data: cats } = useGetCategoriesQuery();
  const { data: subs } = useGetSubCategoriesQuery();
  const { data: prods } = useGetProductsQuery();

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  if (!cats || !subs || !prods) return <p>Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  if (!category) return <p>Invalid category</p>;

  const subcategory = subs.subcategories.find(
    (s) => s.slug === subSlug && s.categoryId === category.id
  );
  if (!subcategory) return <p>Invalid subcategory</p>;

  const filteredProducts = prods.products.filter(
    (p) => p.subCategoryId === subcategory.id
  );

  return (
    <main className="min-h-screen bg-[#FFF9F5] py-10">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#8A1538]">
          {category.name} → {subcategory.name}
        </h1>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="
                bg-white border border-[#E8C7C7] p-4 rounded-2xl 
                shadow-sm hover:shadow-lg transition flex flex-col
              "
            >
              {/* Image */}
              <div
                className="
                  relative h-48 w-full rounded-xl overflow-hidden 
                  bg-[#F7DDE2] border border-[#E8C7C7]
                "
              >
                <Image
                  src={p.imageUrl || "/placeholder.png"}
                  alt={p.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold text-[#8A1538] mt-4">
                {p.title}
              </h2>

              {/* Price */}
              {p.price && (
                <p className="text-[#3A2F2F] font-semibold mt-1">
                  ₹{p.price}
                </p>
              )}

              {/* Buy Now Button */}
              <button
                onClick={() => setSelectedProduct(p)}
                className="
                  mt-4 bg-[#8A1538] hover:bg-[#72102D] 
                  text-white font-semibold py-2 rounded-lg transition shadow-sm
                "
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <BuyNowModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
