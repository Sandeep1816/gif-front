"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-center">
          About <span className="text-[#A88BFF]">Gifts Destiny</span>
        </h1>

        <div className="bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-6 shadow-sm">
          <p className="leading-relaxed text-[#6B6280]">
            Gifts Destiny is a creative gifting brand founded by friends who believe
            every gift should feel personal, meaningful, and beautifully crafted.
          </p>
        </div>

        <div className="bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2E2545] mb-2">
            Our Mission
          </h2>
          <p className="text-[#6B6280]">
            To make gifting effortless, thoughtful and unforgettable.
          </p>
        </div>

      </section>
    </main>
  );
}
