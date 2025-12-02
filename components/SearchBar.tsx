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
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    }, 200);

    return () => clearTimeout(delay);
  }, [query, products]);

  return (
    <div className="relative w-full">
      {/* Input */}
      <input
        type="text"
        placeholder="Search for gifts"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        className="
          w-full px-4 py-2 bg-white border border-[#E8C7C7] rounded-xl
          focus:outline-none focus:ring-2 focus:ring-[#D4A5A5]
          text-[#3A2F2F] placeholder:text-[#8A1538]/40
        "
      />

      <Search className="absolute right-3 top-2.5 w-5 h-5 text-[#8A1538]/60" />

      {/* Dropdown Results */}
      {showDropdown && results.length > 0 && (
        <div
          className="
            absolute top-full left-0 right-0 mt-2 bg-white border border-[#E8C7C7]
            rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto
          "
        >
          {results.map((p) => (
            <a
              key={p.id}
              href={`/category/${p.categorySlug}/${p.subCategorySlug}/${p.slug}`}
              className="
                block px-4 py-2 hover:bg-[#F7DDE2] text-[#3A2F2F]
                border-b border-[#E8C7C7] last:border-none transition
              "
              onClick={() => setShowDropdown(false)}
            >
              {p.title}
            </a>
          ))}
        </div>
      )}

      {/* No Results */}
      {showDropdown && query !== "" && results.length === 0 && (
        <div
          className="
            absolute top-full left-0 right-0 mt-2 bg-white border border-[#E8C7C7]
            rounded-xl shadow-lg z-50 p-4 text-center text-[#8A1538]/70
          "
        >
          No matches found
        </div>
      )}
    </div>
  );
}
