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
    <main className="min-h-screen bg-[#FFFBF2] py-10">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* LEFT - PRODUCT IMAGE */}
          <div className="bg-[#FFF3E5] border border-[#F5DCC7] rounded-2xl p-4 shadow-sm">
            <div className="relative w-full h-96 rounded-xl overflow-hidden bg-[#F8EBDD]">
              <Image
                src={product.imageUrl || "/placeholder.png"}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">
              {product.title}
            </h1>

            <p className="text-[#8B7A6A] mb-6 leading-relaxed">
              {product.description}
            </p>

            <p className="text-4xl font-bold text-[#8B6F47] mb-8">
              ₹{product.price}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-[#F6D4BD] hover:bg-[#E8C5AC] text-[#4A3728] font-semibold 
                         px-6 py-3 rounded-lg text-lg transition shadow-sm w-fit"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {open && <BuyNowModal product={product} onClose={() => setOpen(false)} />}
    </main>
  );
}
