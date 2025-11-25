"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Plus,
  Folder,
  Menu,
  Layers
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },

    { name: "Products", href: "/admin/products", icon: <Package size={20} /> },
    { name: "Create Product", href: "/admin/products/create", icon: <Plus size={20} /> },

    { name: "Categories", href: "/admin/categories", icon: <Folder size={20} /> },
    { name: "Create Category", href: "/admin/categories/create", icon: <Plus size={20} /> },

    { name: "Subcategories", href: "/admin/subcategories", icon: <Layers size={20} /> },
    { name: "Create Subcategory", href: "/admin/subcategories/create", icon: <Plus size={20} /> },
  ];

  return (
    <aside className="w-72 h-screen hidden md:flex flex-col 
                      bg-[#FFF9F1] border-r border-[#EBD8C7] shadow-sm p-6">

      {/* Header */}
      <div className="mb-8 flex items-center gap-2 text-[#4A3728]">
        <Menu size={26} />
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition
                ${
                  active
                    ? "bg-[#F6D4BD] text-[#4A3728] shadow-sm"
                    : "text-[#6B5847] hover:bg-[#FFF3E5]"
                }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
