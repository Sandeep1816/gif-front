"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useGetProductsQuery } from "@/generated/graphql";

export default function SearchBar() {
  const { data } = useGetProductsQuery();
  const products = data?.products ?? [];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setResults(
        products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 200);

    return () => clearTimeout(delay);
  }, [query, products]);

  return (
    <div className="relative w-full">
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for gifts"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          className="
            w-full px-4 py-2.5 pr-10 rounded-2xl
            bg-white border border-[#E3DBFF]
            text-[#2E2545] placeholder:text-[#6B6280]
            focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
            transition
          "
        />

        <Search className="absolute right-3 top-1/2 -translate-y-1/2 
                           w-5 h-5 text-[#A88BFF]" />
      </div>

      {/* Dropdown Results */}
      {showDropdown && results.length > 0 && (
        <div
          className="
            absolute top-full left-0 right-0 mt-2
            bg-white border border-[#E3DBFF]
            rounded-2xl shadow-xl z-50
            max-h-64 overflow-y-auto
          "
        >
          {results.map((p) => (
            <a
              key={p.id}
              href={`/category/${p.categorySlug}/${p.subCategorySlug}/${p.slug}`}
              onClick={() => setShowDropdown(false)}
              className="
                block px-4 py-3 text-sm text-[#2E2545]
                hover:bg-[#EFEAFF] transition
                border-b border-[#E3DBFF] last:border-none
              "
            >
              {p.title}
            </a>
          ))}
        </div>
      )}

      {/* No Results */}
      {showDropdown && query && results.length === 0 && (
        <div
          className="
            absolute top-full left-0 right-0 mt-2
            bg-white border border-[#E3DBFF]
            rounded-2xl shadow-lg z-50
            p-4 text-center text-sm text-[#6B6280]
          "
        >
          No matching gifts found
        </div>
      )}
    </div>
  );
}
