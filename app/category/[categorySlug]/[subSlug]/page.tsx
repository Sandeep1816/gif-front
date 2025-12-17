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

  if (!cats || !subs || !prods)
    return <p className="text-center py-20">Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  if (!category)
    return <p className="text-center py-20">Invalid category</p>;

  const subcategory = subs.subcategories.find(
    (s) => s.slug === subSlug && s.categoryId === category.id
  );
  if (!subcategory)
    return <p className="text-center py-20">Invalid subcategory</p>;

  const filteredProducts = prods.products.filter(
    (p) => p.subCategoryId === subcategory.id
  );

  return (
    <main className="min-h-screen bg-[#FBFAFF] py-12">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-[#2E2545]">
          {category.name}
          <span className="text-[#6B6280] mx-2">›</span>
          <span className="text-[#A88BFF]">{subcategory.name}</span>
        </h1>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <p className="text-[#6B6280]">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((p) => {
              const mainImage =
                p.images.find((img) => img.isPrimary)?.url ||
                p.images[0]?.url ||
                "/placeholder.png";

              return (
                <div
                  key={p.id}
                  className="
                    bg-white rounded-3xl border border-[#E3DBFF]
                    shadow-sm hover:shadow-xl transition
                    p-4 flex flex-col
                  "
                >
                  {/* Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-[#EFEAFF]">
                    <Image
                      src={mainImage}
                      alt={p.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#2E2545] mt-4">
                    {p.title}
                  </h2>

                  {/* Price */}
                  <p className="text-[#A88BFF] font-bold mt-1">
                    ₹{p.price}
                  </p>

                  {/* Buy Now */}
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
              );
            })}
          </div>
        )}
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
