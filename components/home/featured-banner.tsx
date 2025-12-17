"use client";

import { useRouter } from "next/navigation";
import Categories from "./categories";

export default function FeaturedBanner() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-[#EFEAFF] via-[#FBFAFF] to-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-24 py-16 min-h-[90vh] flex flex-col">

        <div className="grid md:grid-cols-2 gap-12 items-center flex-grow">

          {/* Left */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2E2545] leading-tight">
              Make Every Moment <br />
              <span className="text-[#A88BFF]">Truly Special</span>
            </h1>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button
                onClick={() => router.push("/category/categories")}
                className="bg-[#C9B0FF] hover:bg-[#A88BFF] 
                           text-[#2E2545] font-semibold 
                           px-8 py-3 rounded-xl shadow-md transition"
              >
                Shop by Occasion
              </button>

              <button
                onClick={() => router.push("/category/others")}
                className="border border-[#C9B0FF] text-[#2E2545] 
                           hover:bg-[#EFEAFF] 
                           px-8 py-3 rounded-xl transition"
              >
                Shop All Gifts
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/gifimage.png"
              className="rounded-3xl shadow-xl border border-[#E3DBFF]"
              alt="Gifts"
            />
          </div>
        </div>

        <div className="mt-12">
          <Categories />
        </div>
      </div>
    </section>
  );
}
