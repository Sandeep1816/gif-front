// "use client";

// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   Shirt,
//   Users,
//   Pencil,
//   Cake,
//   Key,
//   PartyPopper,
// } from "lucide-react";

// const categories = [
//   { icon: Heart, label: "For Her", slug: "for-her" },
//   { icon: Shirt, label: "For Him", slug: "for-him" },
//   // { icon: Users, label: "Anivesary", slug: "aniversary" },
//   { icon: Pencil, label: "Stationary", slug: "stationary" },
//   { icon: Cake, label: "Birthday Gifts", slug: "birthday-gifts" },
//   { icon: Key, label: "Key Chains", slug: "key-chains" },
//   { icon: PartyPopper, label: "Categories", slug: "categories" },
// ];

// export default function Categories() {
//   const router = useRouter();

//   return (
//     <section className="bg-orange-50/50 py-4">
//       <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
//         {categories.map((category, idx) => {
//           const Icon = category.icon;
//           return (
//             <button
//               key={idx}
//               onClick={() => router.push(`/category/${category.slug}`)}
//               className="flex flex-col items-center gap-2.5 p-4 rounded-lg 
//                          border border-orange-200 hover:border-orange-300 
//                          hover:bg-white transition-all duration-200 group"
//             >
//               <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700 
//                               group-hover:scale-110 transition-transform duration-200" />

//               <span className="text-xs md:text-sm text-center font-medium text-gray-700 leading-snug">
//                 {category.label}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </section>
//   );
// }  


//based on cat from backend it will display
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
  "stationary": Pencil,
  "birthday-gifts": Cake,
  "key-chains": Key,
  "categories": PartyPopper,
};

export default function Categories() {
  const router = useRouter();
  const { data, loading } = useGetCategoriesQuery();

  if (loading)
    return (
      <section className="bg-orange-50/50 py-4">
        <p className="text-center text-gray-500">Loading categories...</p>
      </section>
    );

  const categories = data?.categories ?? [];

  return (
    <section className="bg-orange-50/50 py-4">
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {categories.map((cat) => {
          // match icon → fallback to Users
          const Icon = iconMap[cat.slug] || Users;

          return (
            <button
              key={cat.id}
              onClick={() => router.push(`/category/${cat.slug}`)}
              className="flex flex-col items-center gap-2.5 p-4 rounded-lg 
                         border border-orange-200 hover:border-orange-300 
                         hover:bg-white transition-all duration-200 group"
            >
              <Icon
                className="w-6 h-6 md:w-7 md:h-7 text-gray-700 
                           group-hover:scale-110 transition-transform duration-200"
              />

              <span className="text-xs md:text-sm text-center font-medium text-gray-700 leading-snug">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
