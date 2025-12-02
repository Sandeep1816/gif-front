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
      <section className="bg-[#FFF9F5] py-4">
        <p className="text-center text-[#8A1538]/70">Loading categories...</p>
      </section>
    );

  const categories = data?.categories ?? [];

  return (
    <section className="bg-[#FFF9F5] py-4">
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {categories.map((cat) => {
          const Icon = iconMap[cat.slug] || Users;

          return (
            <button
              key={cat.id}
              onClick={() => router.push(`/category/${cat.slug}`)}
              className="
                flex flex-col items-center gap-2.5 p-4 rounded-xl
                border border-[#E8C7C7] bg-white
                hover:bg-[#F7DDE2] hover:border-[#D4A5A5]
                transition-all duration-300 group shadow-sm hover:shadow-md
              "
            >
              <Icon
                className="
                  w-6 h-6 md:w-7 md:h-7 text-[#8A1538]
                  group-hover:scale-110 transition-transform duration-200
                "
              />

              <span className="text-xs md:text-sm text-center font-medium text-[#3A2F2F] leading-snug">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
