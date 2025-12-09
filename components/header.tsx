'use client'

import { Search, MapPin, Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F5] border-b border-[#E8C7C7] shadow-sm">

      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 
                      bg-[#F7DDE2] text-sm border-b border-[#E8C7C7]">
        <div className="flex items-center gap-2 text-[#3A2F2F]">
          <MapPin className="w-4 h-4 text-[#8A1538]" />
          <span>Where to deliver?</span>
        </div>

        <div className="flex gap-6 text-[#3A2F2F]">
          <a href="#" className="hover:text-[#8A1538] transition">Help & FAQ</a>
          <a href="#" className="hover:text-[#8A1538] transition">Contact Us</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 md:px-6 py-2">
        <div className="flex items-center justify-between gap-4 mb-2">

          {/* Logo */}
          {/* <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Gifts Destiny Logo"
              width={95}
              height={26}
              className="object-contain"
            />
          </div> */}

          <div className="flex items-center">
  <span className="text-2xl md:text-3xl font-bold tracking-wide text-[#8A1538]">
    Gifts <span className="text-[#8A1538]">Destiny</span>
  </span>
</div>


          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1 text-[#8A1538] hover:text-[#3A2F2F] transition text-sm">
              <Heart className="w-4 h-4" />
              Wishlist
            </button>

            <button className="hidden md:flex items-center gap-1 text-[#8A1538] hover:text-[#3A2F2F] transition text-sm">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </button>

            <button className="hidden md:flex items-center gap-1 text-[#8A1538] hover:text-[#3A2F2F] transition text-sm">
              <User className="w-4 h-4" />
              Account
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[#8A1538]"
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
          <div className="md:hidden mt-3 pb-3 space-y-2 border-t border-[#E8C7C7] pt-3">
            <button className="w-full text-left px-4 py-2 hover:bg-[#F7DDE2] rounded text-[#8A1538] transition">
              Wishlist
            </button>

            <button className="w-full text-left px-4 py-2 hover:bg-[#F7DDE2] rounded text-[#8A1538] transition">
              Cart
            </button>

            <button className="w-full text-left px-4 py-2 hover:bg-[#F7DDE2] rounded text-[#8A1538] transition">
              Account
            </button>
          </div>
        )}

      </div>
    </header>
  )
}
