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

  // Debounce search
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
    }, 200); // 200ms debounce

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
        className="w-full px-4 py-1.5 bg-[#FFF9F1] border border-[#EBD8C7] 
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F6D4BD]
                   text-[#4A3728] placeholder:text-[#8B7A6A]"
      />

      <Search className="absolute right-3 top-2 w-4 h-4 text-[#8B7A6A]" />

      {/* Results Dropdown */}
      {showDropdown && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#EBD8C7] 
                        rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
          {results.map((p) => (
            <a
              key={p.id}
              href={`/category/${p.categorySlug}/${p.subCategorySlug}/${p.slug}`}
              className="block px-4 py-2 hover:bg-[#FFF3E5] text-[#4A3728] border-b border-[#F5DCC7]"
              onClick={() => setShowDropdown(false)}
            >
              {p.title}
            </a>
          ))}
        </div>
      )}

      {/* No results */}
      {showDropdown && query !== "" && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#EBD8C7] 
                        rounded-xl shadow-lg z-50 p-4 text-center text-[#8B7A6A]">
          No matches found
        </div>
      )}
    </div>
  );
}
