'use client'

import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FBFAFF] border-t border-[#E3DBFF]">
      <div className="container mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#2E2545]">
              Gifts <span className="text-[#A88BFF]">Destiny</span>
            </h2>
            <p className="text-sm text-[#6B6280] mt-3 leading-relaxed">
              Thoughtful, handcrafted & customizable gifts for every occasion.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[#2E2545] mb-4">Company</h3>
            <ul className="space-y-2 text-[#6B6280]">
              <li><Link href="/about" className="hover:text-[#A88BFF]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#A88BFF]">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-[#A88BFF]">FAQs</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-[#2E2545] mb-4">Policies</h3>
            <ul className="space-y-2 text-[#6B6280]">
              <li><Link href="/refund-policy" className="hover:text-[#A88BFF]">Refund Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#A88BFF]">Shipping Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#A88BFF]">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#2E2545] mb-4">Get in Touch</h3>

            <div className="space-y-3 text-[#6B6280] text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A88BFF]" />
                giftsdestiny51@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A88BFF]" />
                +91 8660391647
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white 
                             border border-[#E3DBFF]
                             flex items-center justify-center
                             text-[#A88BFF] hover:bg-[#EFEAFF] transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#E3DBFF] text-center text-sm text-[#6B6280]">
          © {new Date().getFullYear()} GiftsDestiny.com — All rights reserved.
        </div>

      </div>
    </footer>
  )
}
