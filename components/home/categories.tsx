"use client";

import { useRouter } from "next/navigation";
import {
  Heart,
  Shirt,
  Users,
  Pencil,
  Cake,
  Key,
  PartyPopper,
} from "lucide-react";

import { useGetCategoriesQuery } from "@/generated/graphql";

const iconMap: Record<string, any> = {
  "for-her": Heart,
  "for-him": Shirt,
  stationary: Pencil,
  "birthday-gifts": Cake,
  "key-chains": Key,
  categories: PartyPopper,
};

export default function Categories() {
  const router = useRouter();
  const { data, loading } = useGetCategoriesQuery();

  if (loading)
    return (
      <section className="bg-[#FBFAFF] py-4">
        <p className="text-center text-[#6B6280]">
          Loading categories...
        </p>
      </section>
    );

  const categories = data?.categories ?? [];

  return (
    <section className="bg-[#FBFAFF] py-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5">
        {categories.map((cat) => {
          const Icon = iconMap[cat.slug] || Users;

          return (
            <button
              key={cat.id}
              onClick={() => router.push(`/category/${cat.slug}`)}
              className="
                group flex flex-col items-center gap-3 p-4 rounded-2xl
                bg-white border border-[#E3DBFF]
                hover:border-[#C9B0FF] hover:bg-[#EFEAFF]
                shadow-sm hover:shadow-lg
                transition-all duration-300
                active:scale-95
              "
            >
              {/* Icon */}
              <div
                className="
                  flex items-center justify-center
                  w-12 h-12 rounded-full
                  bg-[#EFEAFF] group-hover:bg-[#C9B0FF]/40
                  transition
                "
              >
                <Icon
                  className="
                    w-6 h-6 text-[#2E2545]
                    group-hover:text-[#A88BFF]
                    group-hover:scale-110
                    transition-all
                  "
                />
              </div>

              {/* Text */}
              <span className="text-xs md:text-sm text-center font-semibold text-[#2E2545] leading-tight">
                {cat.name || "Category"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
