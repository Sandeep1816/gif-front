'use client'

import { Gift, Clock, Heart, Users, Home, Zap } from 'lucide-react'

const celebrations = [
  { icon: Gift, label: 'Birthday Gifts' },
  { icon: Clock, label: '30 Mins Gifts' },
  { icon: Heart, label: 'Anniversary Gifts' },
  { icon: Users, label: 'Wedding Gifts' },
  { icon: Home, label: 'House Warming' },
  { icon: Zap, label: 'Balloon Decor' },
]

export default function CelebrationSection() {
  return (
    <section className="bg-[#FFF9F5] py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#8A1538] mb-12">
          Surprises for Every Celebration
        </h2>

        {/* Celebration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {celebrations.map((item, idx) => {
            const Icon = item.icon
            return (
              <button
                key={idx}
                className="
                  group flex flex-col items-center gap-4 p-6 rounded-2xl
                  bg-white border border-[#E8C7C7]
                  hover:bg-[#F7DDE2] hover:border-[#D4A5A5]
                  transition-all duration-300 shadow-sm hover:shadow-md
                "
              >
                {/* Icon Wrapper */}
                <div
                  className="
                    w-20 h-20 md:w-24 md:h-24 rounded-full 
                    bg-gradient-to-br from-[#FCE3EC] to-[#F7DDE2]
                    flex items-center justify-center
                    shadow-inner
                    group-hover:scale-110 transition-transform duration-300
                  "
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#8A1538]" />
                </div>

                {/* Label */}
                <span className="text-sm md:text-base font-semibold text-center text-[#3A2F2F]">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
