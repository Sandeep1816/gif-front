'use client'

import { Heart, ShoppingCart, User, Menu, X, MapPin } from 'lucide-react'
import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FBFAFF] border-b border-[#E3DBFF] shadow-sm">

      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 
                      bg-[#EFEAFF] text-sm border-b border-[#E3DBFF]">
        <div className="flex items-center gap-2 text-[#2E2545]">
          <MapPin className="w-4 h-4 text-[#A88BFF]" />
          <span>Where to deliver?</span>
        </div>

        <div className="flex gap-6 text-[#2E2545]">
          <a className="hover:text-[#A88BFF] transition">Help & FAQ</a>
          <a className="hover:text-[#A88BFF] transition">Contact Us</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-[#2E2545]">
            Gifts <span className="text-[#A88BFF]">Destiny</span>
          </h1>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 text-[#2E2545]">
            {[Heart, ShoppingCart, User].map((Icon, i) => (
              <button
                key={i}
                className="hidden md:flex items-center gap-1 hover:text-[#A88BFF] transition text-sm"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}

            <button
              className="md:hidden text-[#A88BFF]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#E3DBFF] space-y-2">
            {['Wishlist', 'Cart', 'Account'].map(item => (
              <button
                key={item}
                className="w-full px-4 py-2 rounded-lg hover:bg-[#EFEAFF] 
                           text-left text-[#2E2545]"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
