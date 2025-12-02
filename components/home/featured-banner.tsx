"use client";

import { useRouter } from "next/navigation";
import Categories from "./categories";

export default function FeaturedBanner() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-[#F7DDE2] via-[#FFF3F7] to-[#FFF9F5]">
      <div className="container mx-auto px-4 lg:px-24 py-12 md:py-16 lg:py-20 min-h-[90vh] flex flex-col">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center flex-grow">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 pr-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8A1538] leading-tight">
              Find the Perfect Gift for Every Moment
            </h1>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap mt-2">
              <button
                onClick={() => router.push("/shop/occasions")}
                className="bg-[#8A1538] hover:bg-[#72102D] text-white font-semibold py-3 px-6 rounded-md transition duration-200"
              >
                Shop by Occasion
              </button>

              <button
                onClick={() => router.push("/shop/all")}
                className="bg-[#F7DDE2] hover:bg-[#E8C7C7] text-[#8A1538] font-semibold py-3 px-6 rounded-md transition duration-200"
              >
                Shop All Gifts
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm aspect-square">
              <img
                src="/gifimage.png"
                alt="Gift boxes with flowers and ribbons"
                className="w-full h-full object-cover rounded-2xl shadow-md border border-[#E8C7C7]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Categories />
        </div>

      </div>
    </section>
  );
}
