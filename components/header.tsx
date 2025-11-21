'use client'

import { Search, MapPin, Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FFFBF2] border-b border-[#F5DCC7] shadow-sm">
      
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#FFF3E5] text-sm border-b border-[#F5DCC7]">
        <div className="flex items-center gap-2 text-[#8B7A6A]">
          <MapPin className="w-4 h-4 text-[#4A3728]" />
          <span>Where to deliver?</span>
        </div>
        <div className="flex gap-6 text-[#8B7A6A]">
          <a href="#" className="hover:text-[#4A3728]">Help & FAQ</a>
          <a href="#" className="hover:text-[#4A3728]">Contact Us</a>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-[#4A3728]">Gifts Destiny</div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for gifts"
                className="w-full px-4 py-2 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F6D4BD]"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-[#8B7A6A]" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-1 text-[#4A3728] hover:text-[#8B6F47] transition">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Wishlist</span>
            </button>
            <button className="hidden md:flex items-center gap-1 text-[#4A3728] hover:text-[#8B6F47] transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Cart</span>
            </button>
            <button className="hidden md:flex items-center gap-1 text-[#4A3728] hover:text-[#8B6F47] transition">
              <User className="w-5 h-5" />
              <span className="text-sm">Account</span>
            </button>

            {/* Mobile menu toggle */}
            <button className="md:hidden text-[#4A3728]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for gifts"
              className="w-full px-4 py-2 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg focus:ring-[#F6D4BD]"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-[#8B7A6A]" />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-[#F5DCC7] pt-4">
            <button className="w-full text-left px-4 py-2 hover:bg-[#FFF3E5] rounded">Wishlist</button>
            <button className="w-full text-left px-4 py-2 hover:bg-[#FFF3E5] rounded">Cart</button>
            <button className="w-full text-left px-4 py-2 hover:bg-[#FFF3E5] rounded">Account</button>
          </div>
        )}
      </div>
    </header>
  )
}
