"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-5xl mx-auto space-y-14">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center">
          About <span className="text-[#A88BFF]">Gifts Destiny</span>
        </h1>

        {/* ABOUT INTRO */}
        <div className="bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-8 shadow-sm">
          <p className="leading-relaxed text-[#6B6280] text-lg">
            Gifts Destiny is a creative gifting brand founded by friends who believe
            every gift should feel personal, meaningful, and beautifully crafted.
            We focus on premium handcrafted gifts that turn moments into memories.
          </p>
        </div>

        {/* FOUNDER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center
                        bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-8 shadow-sm">

          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 rounded-3xl overflow-hidden 
                            border border-[#E3DBFF] bg-white shadow-sm">
              <Image
                src="/logotwo.jpg"   // 👉 place image in /public/founder.jpg
                alt="Founder of Gifts Destiny"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Founder Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Meet the <span className="text-[#A88BFF]">Founder</span>
            </h2>

            <p className="text-[#6B6280] leading-relaxed mb-4">
              Founded with a passion for thoughtful gifting, Gifts Destiny was born
              from the idea that every gift should tell a story. What started as a
              small vision has grown into a brand trusted for quality, creativity,
              and heartfelt designs.
            </p>

            <p className="font-medium text-[#2E2545]">
              — Founder, Gifts Destiny
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">
            Our <span className="text-[#A88BFF]">Mission</span>
          </h2>
          <p className="text-[#6B6280] leading-relaxed">
            To make gifting effortless, thoughtful, and unforgettable by delivering
            beautifully crafted gifts that bring people closer.
          </p>
        </div>

      </section>
    </main>
  );
}
