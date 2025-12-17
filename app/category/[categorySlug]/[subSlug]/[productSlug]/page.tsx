"use client";

import { use } from "react";
import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/generated/graphql";
import Image from "next/image";
import BuyNowModal from "@/components/BuyNowModal";
import { useMemo, useState } from "react";

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
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!cats || !subs || !prods)
    return <p className="text-center py-20">Loading...</p>;

  const category = cats.categories.find((c) => c.slug === categorySlug);
  const subcategory = subs.subcategories.find(
    (s) => s.slug === subSlug && s.categoryId === category?.id
  );

  const product = prods.products.find(
    (p) =>
      p.slug === productSlug &&
      p.subCategoryId === subcategory?.id &&
      p.categoryId === category?.id
  );

  if (!product) return <p className="text-center py-20">Product not found</p>;

  const images = useMemo(
    () => [...product.images].sort((a, b) => a.order - b.order),
    [product.images]
  );

  const primaryImage =
    images.find((img) => img.isPrimary)?.url ||
    images[0]?.url ||
    "/placeholder.png";

  const mainImage = activeImage || primaryImage;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FBFAFF] via-[#F4EEFF] to-[#FBFAFF] py-16">

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE SECTION */}
          <div className="bg-white rounded-[32px] p-6 shadow-xl border border-[#E3DBFF]">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-[#EFEAFF]">
              <Image
                src={mainImage}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-5 justify-center">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img.url)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border transition
                      ${
                        mainImage === img.url
                          ? "ring-2 ring-[#A88BFF] border-[#A88BFF]"
                          : "border-[#E3DBFF] hover:border-[#A88BFF]"
                      }`}
                  >
                    <Image
                      src={img.url}
                      alt={`Thumb ${i}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT DETAILS SECTION */}
          <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#E3DBFF]">

            <h1 className="text-4xl font-extrabold text-[#2E2545] mb-3">
              {product.title}
            </h1>

            <p className="text-[#6B6280] leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl font-bold text-[#A88BFF]">
                ₹{product.price}
              </span>
              <span className="text-sm text-[#6B6280]">(Inclusive of taxes)</span>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="
                bg-gradient-to-r from-[#C9B0FF] to-[#A88BFF]
                hover:from-[#B79BFF] hover:to-[#9576FF]
                text-[#2E2545] font-bold
                px-10 py-4 rounded-2xl text-lg
                shadow-lg transition
              "
            >
              Buy Now
            </button>

            {/* Extra info */}
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-[#6B6280]">
              <div className="bg-[#F4EEFF] p-4 rounded-xl">
                🚚 Free Shipping
              </div>
              <div className="bg-[#F4EEFF] p-4 rounded-xl">
                ⭐ Premium Quality
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <BuyNowModal product={product} onClose={() => setOpen(false)} />
      )}
    </main>
  );
}
