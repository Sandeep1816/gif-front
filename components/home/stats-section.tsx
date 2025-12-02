'use client'

export default function StatsSection() {
  const stats = [
    { number: '400+', label: 'Cities having same day delivery' },
    { number: '100+', label: 'Countries being served with happiness' },
    { number: '5 Million+', label: 'Gift boxes delivered across the globe' },
  ]

  return (
    <section className="bg-[#FFF9F5] py-12 md:py-16 border-t border-[#E8C7C7]">
      <div className="container mx-auto px-4">

        <div className="flex items-start gap-6 md:gap-12">
          
          {/* LEFT LABEL (vertical text) */}
          <div className="hidden md:flex flex-col items-center">
            <h3
              className="
                text-3xl font-bold text-[#8A1538]
                writing-vertical 
              "
            >
              Stats
            </h3>
            <div className="w-1 h-20 bg-[#8A1538] rounded mt-4"></div>
          </div>

          {/* RIGHT SIDE STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 flex-1">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                
                {/* Big Numbers */}
                <div className="text-5xl md:text-6xl font-extrabold text-[#8A1538] mb-3">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-lg text-[#3A2F2F]/80 leading-snug">
                  {stat.label}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
