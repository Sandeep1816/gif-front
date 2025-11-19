"use client";

import { use } from "react";
import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/generated/graphql";
import Image from "next/image";
import BuyNowModal from "@/components/BuyNowModal";
import { useState } from "react";

interface Props {
  params: Promise<{
    categorySlug: string;
    subSlug: string;
    productSlug: string;
  }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { categorySlug, subSlug, productSlug } = use(params);

  const { data: cats } = useGetCategoriesQuery();
  const { data: subs } = useGetSubCategoriesQuery();
  const { data: prods } = useGetProductsQuery();

  const [open, setOpen] = useState(false);

  if (!cats || !subs || !prods) return <p>Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  if (!category) return <p>Invalid category</p>;

  const subcategory = subs.subcategories.find(
    (s) => s.slug === subSlug && s.categoryId === category.id
  );
  if (!subcategory) return <p>Invalid subcategory</p>;

  const product = prods.products.find(
    (p) =>
      p.slug === productSlug &&
      p.subCategoryId === subcategory.id &&
      p.categoryId === category.id
  );

  if (!product) return <p>Product not found</p>;

  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full h-96">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-4xl font-bold text-blue-700 mb-6">
            ₹{product.price}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg text-lg"
          >
            Buy Now
          </button>
        </div>
      </div>

      {open && (
        <BuyNowModal product={product} onClose={() => setOpen(false)} />
      )}
    </main>
  );
}
