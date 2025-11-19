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

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { categorySlug } = use(params);

  const { data: cats } = useGetCategoriesQuery();
  const { data: subs } = useGetSubCategoriesQuery();
  const { data: prods } = useGetProductsQuery();

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

        {/* SUBCATEGORIES */}
        {categorySubcategories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
            {categorySubcategories.map((sub) => (
              <a
                key={sub.id}
                href={`/category/${category.slug}/${sub.slug}`}
                className="p-4 bg-white shadow rounded-xl border hover:bg-gray-50 text-center"
              >
                <p className="font-semibold">{sub.name}</p>
              </a>
            ))}
          </div>
        )}

        {/* PRODUCTS LIST */}
        {filteredProducts.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-xl shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={p.imageUrl || "/placeholder.png"}
                    alt={p.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <h2 className="text-lg font-bold mt-3">{p.title}</h2>
                <p className="text-blue-600 font-bold mt-2 text-lg">
                  ₹{p.price}
                </p>

                {/* ⭐ OPEN MODAL INSTEAD OF PAGE */}
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="mt-4 block bg-blue-600 text-white py-2 rounded text-center w-full"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ⭐ BUY NOW MODAL */}
      {selectedProduct && (
        <BuyNowModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
