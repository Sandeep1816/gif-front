"use client";

import { use } from "react";
import {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetProductsQuery,
} from "@/generated/graphql";
import Image from "next/image";
import BuyNowModal from "@/components/BuyNowModal";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

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

  if (!cats || !subs || !prods)
    return <p className="text-center py-20">Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  if (!category)
    return <p className="text-center py-20">Invalid category</p>;

  const categorySubcategories = subs.subcategories.filter(
    (s) => s.categoryId === category.id
  );

  // 🔗 Attach slugs to products
  const mappedProducts = useMemo(() => {
    return prods.products
      .filter(
        (p) =>
          p.categoryId === category.id &&
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((p) => {
        const subcategory = subs.subcategories.find(
          (s) => s.id === p.subCategoryId
        );

        return {
          ...p,
          categorySlug: category.slug,
          subCategorySlug: subcategory?.slug,
        };
      });
  }, [prods.products, subs.subcategories, category, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FBFAFF] py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E2545] mb-8">
          Gifts for <span className="text-[#A88BFF]">{category.name}</span>
        </h1>

        {/* SEARCH */}
        <div className="relative mb-10 max-w-xl">
          <input
            type="text"
            placeholder="Search gifts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full py-3 pl-4 pr-10 rounded-2xl
              bg-white border border-[#E3DBFF]
              text-[#2E2545]
              focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
            "
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A88BFF]" />
        </div>

        {/* SUBCATEGORIES */}
        {categorySubcategories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
            {categorySubcategories.map((sub) => (
              <Link
                key={sub.id}
                href={`/category/${category.slug}/${sub.slug}`}
                className="
                  p-4 rounded-2xl bg-white border border-[#E3DBFF]
                  text-center font-semibold text-[#2E2545]
                  hover:bg-[#EFEAFF] transition
                "
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}

        {/* PRODUCTS */}
        {mappedProducts.length === 0 ? (
          <p className="text-[#6B6280]">No products available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mappedProducts.map((p) => {
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
                  {/* CLICKABLE AREA */}
                  <Link
                    href={`/category/${p.categorySlug}/${p.subCategorySlug}/${p.slug}`}
                    className="group"
                  >
                    <div className="relative h-44 rounded-2xl overflow-hidden bg-[#EFEAFF]">
                      <Image
                        src={mainImage}
                        fill
                        alt={p.title}
                        className="object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <h2 className="text-lg font-bold text-[#2E2545] mt-4">
                      {p.title}
                    </h2>

                    <p className="text-[#A88BFF] font-bold text-lg mt-1">
                      ₹{p.price}
                    </p>
                  </Link>

                  {/* BUY NOW */}
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

      {/* MODAL */}
      {selectedProduct && (
        <BuyNowModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
