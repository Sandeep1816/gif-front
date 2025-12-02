"use client";

export default function AboutPage() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen py-12 px-6 md:px-20 text-[#3A2F2F]">
      
      <section className="max-w-4xl mx-auto space-y-10">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#8A1538] mb-6">
          About Gifts Destiny
        </h1>

        {/* About Section */}
        <div className="bg-[#F7DDE2] border border-[#E8C7C7] rounded-xl p-6 md:p-8 shadow-sm">
          <p className="text-lg leading-relaxed text-[#3A2F2F]">
            Gifts Destiny is a creative gifting brand founded by a group of friends who
            believed that every gift should feel personal, meaningful, and beautifully
            crafted. What began as a small idea between friends has now grown into a trusted
            destination for handcrafted gifts, customizable products, and professional product
            outsourcing services.
          </p>
        </div>

        {/* Our Story */}
        <div className="space-y-4 bg-[#FFF3F7] border border-[#E8C7C7] rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#8A1538]">Our Story</h2>
          <p className="leading-relaxed text-[#3A2F2F]">
            Gifts Destiny started with a shared passion for creating unique and memorable
            gifts. As friends, we understood the joy of surprising loved ones, and we wanted
            to bring that same joy to everyone. With creativity, teamwork, and quality at the
            heart of our brand, we set out to redefine gifting in the most thoughtful way
            possible.
          </p>
        </div>

        {/* What We Do */}
        <div className="space-y-4 bg-[#F7DDE2] border border-[#E8C7C7] rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#8A1538]">What We Do</h2>
          <p className="leading-relaxed text-[#3A2F2F]">
            At Gifts Destiny, we deliver premium handcrafted and customizable gifts that turn
            every moment into a lasting memory — whether birthdays, anniversaries, festivals,
            weddings or corporate events.
          </p>
          <p className="leading-relaxed text-[#3A2F2F]">
            We also provide product sourcing and outsourcing solutions for businesses looking
            to create custom hampers, bulk orders, or branded merchandise. Our strong vendor
            network ensures quality and timely delivery.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4 bg-[#FFF3F7] border border-[#E8C7C7] rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#8A1538]">Why Choose Gifts Destiny</h2>

          <ul className="space-y-2 list-disc list-inside text-[#3A2F2F]">
            <li>Handcrafted products made with care</li>
            <li>Customizable gifts tailored to your message and style</li>
            <li>Reliable outsourcing and sourcing services for businesses</li>
            <li>Creative packaging that elevates the gifting experience</li>
            <li>A passionate team of friends delivering joy with every order</li>
          </ul>
        </div>

        {/* Mission */}
        <div className="space-y-4 bg-[#F7DDE2] border border-[#E8C7C7] rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#8A1538]">Our Mission</h2>
          <p className="text-[#3A2F2F]">
            To make gifting effortless, thoughtful and unforgettable, with handcrafted
            creations that bring people closer.
          </p>
        </div>

        {/* Promise */}
        <div className="space-y-4 bg-[#FFF3F7] border border-[#E8C7C7] rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#8A1538]">Our Promise</h2>
          <p className="text-[#3A2F2F]">
            At Gifts Destiny, every gift tells a story. We are committed to offering
            high-quality products, heartfelt designs, and a smooth gifting experience from
            start to finish.
          </p>
        </div>

      </section>
    </main>
  );
}
