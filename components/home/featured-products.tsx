"use client";

import Image from "next/image";
import { useGetProductsQuery } from "@/generated/graphql";
import BuyNowModal from "@/components/BuyNowModal";
import { useState } from "react";

export default function FeaturedProducts() {
  const { data, loading, error } = useGetProductsQuery();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  if (loading) return <p className="p-6">Loading featured products...</p>;
  if (error) return <p className="p-6 text-red-500">Failed to load products</p>;

  const featuredProducts =
    data?.products?.filter((p) => p.isFavourite === true) ?? [];

  return (
    <section className="bg-[#FFF9F5] py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#8A1538] mb-10">
          Trending Gifts
        </h2>

        {featuredProducts.length === 0 && (
          <p className="text-center text-gray-500">
            No featured products found.
          </p>
        )}

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden bg-[#F7DDE2] 
                         border border-[#E8C7C7] shadow-sm 
                         hover:shadow-lg transition flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-56 bg-[#FCEFF2]">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-[#8A1538] text-sm mb-2 leading-tight">
                  {product.title}
                </h3>

                <p className="text-base font-semibold text-[#3A2F2F] mb-4">
                  ₹{product.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-[#8A1538] hover:bg-[#72102D] 
                             text-white font-medium 
                             py-2 rounded-md text-sm shadow-md 
                             transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <BuyNowModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
