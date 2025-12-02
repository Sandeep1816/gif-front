'use client'

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FFF9F5] border-t border-[#E8C7C7]">
      <div className="container mx-auto px-4 py-12 md:py-16">

        {/* Social section */}
        <div className="text-center mb-12">
          <h3 className="text-lg md:text-xl font-bold text-[#8A1538] mb-6">
            Follow us on:
          </h3>

          <div className="flex justify-center gap-4 flex-wrap">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1AntbBQ1Mf/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white border border-[#E8C7C7] 
                         shadow-md hover:shadow-lg transition flex items-center 
                         justify-center text-[#8A1538]"
            >
              <Facebook className="w-6 h-6" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/giftsdestiny_?igsh=MTI0NWw1ZDlxN2ZucQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white border border-[#E8C7C7] 
                         shadow-md hover:shadow-lg transition flex items-center 
                         justify-center text-[#8A1538]"
            >
              <Instagram className="w-6 h-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:giftsdestiny51@gmail.com"
              className="w-12 h-12 rounded-full bg-white border border-[#E8C7C7] 
                         shadow-md hover:shadow-lg transition flex items-center 
                         justify-center text-[#8A1538]"
            >
              <Mail className="w-6 h-6" />
            </a>

          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#E8C7C7] pt-8 text-center">
          <h2 className="text-3xl font-bold text-[#8A1538] mb-4">Gifts Destiny</h2>
          <p className="text-sm text-[#3A2F2F] mb-2">
            Copyright © 2025 GiftsDestiny.com. All rights reserved.
          </p>

          <p className="text-xs text-[#3A2F2F]">
            Orders are currently placed through our website form.
          </p>
        </div>

      </div>
    </footer>
  )
}
