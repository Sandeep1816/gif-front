


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery
} from "@/generated/graphql";

export default function FeaturedProducts() {
  const { data: productsData } = useGetProductsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: subcategoriesData } = useGetSubCategoriesQuery();

  const products = productsData?.products || [];
  const categories = categoriesData?.categories || [];
  const subcategories = subcategoriesData?.subcategories || [];

  // ⭐ JOIN categorySlug + subCategorySlug into product
  const mappedProducts = products.map((p) => {
    const category = categories.find((c) => c.id === p.categoryId);
    const subcategory = subcategories.find((s) => s.id === p.subCategoryId);

    return {
      ...p,
      categorySlug: category?.slug,
      subCategorySlug: subcategory?.slug,
    };
  });

  const featuredProducts = mappedProducts.filter((p) => p.isFavourite === true);

  return (
  <section className="bg-[#FBFAFF] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-[#2E2545] mb-10">
      Trending Gifts
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {featuredProducts.map(product => (
        <Link
          key={product.id}
          href={`/category/${product.categorySlug}/${product.subCategorySlug}/${product.slug}`}
        >
          <div className="group bg-white rounded-3xl border border-[#E3DBFF] 
                          overflow-hidden shadow-sm hover:shadow-xl transition">

            <div className="relative h-56 bg-[#EFEAFF]">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-[#2E2545] text-sm">
                {product.title}
              </h3>

              <p className="text-[#A88BFF] font-bold mt-2">
                ₹{product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

  );
}
