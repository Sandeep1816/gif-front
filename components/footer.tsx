'use client'

import { Facebook, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FBFAFF] border-t border-[#E3DBFF]">
      <div className="container mx-auto px-4 py-14 text-center">

        <h3 className="text-xl font-bold text-[#2E2545] mb-6">
          Connect With Us
        </h3>

        <div className="flex justify-center gap-4 mb-10">
          {[Facebook, Instagram, Mail].map((Icon, i) => (
            <a
              key={i}
              className="w-12 h-12 rounded-full bg-white 
                         border border-[#E3DBFF] 
                         flex items-center justify-center
                         text-[#A88BFF] hover:bg-[#EFEAFF] transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-[#2E2545]">
          Gifts <span className="text-[#A88BFF]">Destiny</span>
        </h2>

        <p className="text-sm text-[#6B6280] mt-3">
          © 2025 GiftsDestiny.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
