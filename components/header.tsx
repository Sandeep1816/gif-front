'use client'

import { Search, MapPin, Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FFFBF2] border-b border-[#F5DCC7] shadow-sm">

      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 
                      bg-[#FFF3E5] text-sm border-b border-[#F5DCC7]">
        <div className="flex items-center gap-2 text-[#8B7A6A]">
          <MapPin className="w-4 h-4 text-[#4A3728]" />
          <span>Where to deliver?</span>
        </div>

        <div className="flex gap-6 text-[#8B7A6A]">
          <a href="#" className="hover:text-[#4A3728] transition">Help & FAQ</a>
          <a href="#" className="hover:text-[#4A3728] transition">Contact Us</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 md:px-6 py-2">
        <div className="flex items-center justify-between gap-4 mb-2">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Gifts Destiny Logo"
              width={95}
              height={26}
              className="object-contain"
            />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1 text-[#4A3728] hover:text-[#8B6F47] transition text-sm">
              <Heart className="w-4 h-4" />
              Wishlist
            </button>

            <button className="hidden md:flex items-center gap-1 text-[#4A3728] hover:text-[#8B6F47] transition text-sm">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </button>

            <button className="hidden md:flex items-center gap-1 text-[#4A3728] hover:text-[#8B6F47] transition text-sm">
              <User className="w-4 h-4" />
              Account
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[#4A3728]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-2">
          <SearchBar />
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2 border-t border-[#F5DCC7] pt-3">
            <button className="w-full text-left px-4 py-2 hover:bg-[#FFF3E5] rounded text-[#4A3728] transition">
              Wishlist
            </button>

            <button className="w-full text-left px-4 py-2 hover:bg-[#FFF3E5] rounded text-[#4A3728] transition">
              Cart
            </button>

            <button className="w-full text-left px-4 py-2 hover:bg-[#FFF3E5] rounded text-[#4A3728] transition">
              Account
            </button>
          </div>
        )}

      </div>
    </header>
  )
}
