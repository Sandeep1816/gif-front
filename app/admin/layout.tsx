"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/AdminNavbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#FFFBF2]">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-72 
                    bg-[#FFF9F1] border-r border-[#EBD8C7] shadow-lg
                    transition-transform md:hidden 
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <AdminSidebar />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col min-h-screen border-l md:border-none border-[#EBD8C7]">

        {/* Navbar */}
        <AdminNavbar onMenuClick={() => setOpen(true)} />

        {/* Content */}
        <main className="p-6 flex-1 bg-[#FFFBF2] text-[#4A3728]">
          {children}
        </main>

      </div>
    </div>
  );
}
