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
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {category.name} → {subcategory.name}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <a
              key={p.id}
              href={`/category/${category.slug}/${subcategory.slug}/${p.slug}`}
              className="bg-white p-4 rounded-xl shadow block"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.imageUrl || "/placeholder.png"}
                  alt={p.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-lg font-bold mt-3">{p.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
