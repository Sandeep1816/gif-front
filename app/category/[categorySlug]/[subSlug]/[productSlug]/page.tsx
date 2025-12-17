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

  const product = prods.products.find(
    (p) =>
      p.slug === productSlug &&
      p.subCategoryId === subcategory.id &&
      p.categoryId === category.id
  );

  if (!product)
    return <p className="text-center py-20">Product not found</p>;

  /* ✅ MAIN IMAGE */
  const mainImage =
    product.images.find((img) => img.isPrimary)?.url ||
    product.images[0]?.url ||
    "/placeholder.png";

  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT – IMAGE */}
          <div className="bg-white border border-[#E3DBFF] rounded-3xl p-5 shadow-sm">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-[#EFEAFF]">
              <Image
                src={mainImage}
                alt={product.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* RIGHT – DETAILS */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2E2545] mb-4">
              {product.title}
            </h1>

            <p className="text-[#6B6280] mb-6 leading-relaxed max-w-xl">
              {product.description}
            </p>

            <p className="text-4xl font-bold text-[#A88BFF] mb-8">
              ₹{product.price}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="
                bg-[#C9B0FF] hover:bg-[#A88BFF]
                text-[#2E2545] font-semibold
                px-8 py-3 rounded-2xl text-lg
                shadow-md transition w-fit
              "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <BuyNowModal
          product={product}
          onClose={() => setOpen(false)}
        />
      )}
    </main>
  );
}
