"use client";

import { Menu } from "lucide-react";

export default function AdminNavbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header
      className="bg-[#FFF9F1] border-b border-[#EBD8C7] shadow-sm 
                 px-6 py-4 flex items-center justify-between"
    >
      {/* Mobile Menu Button */}
      <button className="md:hidden text-[#4A3728]" onClick={onMenuClick}>
        <Menu size={28} />
      </button>

      {/* Title */}
      <h1 className="text-xl font-semibold text-[#4A3728]">
        Admin Dashboard
      </h1>

      {/* Right Profile Section */}
      <div className="flex items-center gap-3">
        <span className="text-[#6B5847]">Vaishnavi</span>
        <div className="w-10 h-10 rounded-full bg-[#EBD8C7] border border-[#D5C2B4]" />
      </div>
    </header>
  );
}
