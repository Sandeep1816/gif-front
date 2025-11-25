"use client";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20 text-[#4A3728]">
      
      <section className="max-w-4xl mx-auto space-y-10">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#4A3728] mb-6">
          About Gifts Destiny
        </h1>

        {/* About Section */}
        <div className="bg-[#FFF3E5] border border-[#F5DCC7] rounded-xl p-6 md:p-8 shadow-sm">
          <p className="text-lg leading-relaxed text-[#5A4736]">
            Gifts Destiny is a creative gifting brand founded by a group of friends who
            believed that every gift should feel personal, meaningful, and beautifully
            crafted. What began as a small idea between friends has now grown into a trusted
            destination for handcrafted gifts, customizable products, and professional product
            outsourcing services.
          </p>
        </div>

        {/* Our Story */}
        <div className="space-y-4 bg-[#FFF9F1] border border-[#EBD8C7] rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-[#5A4736] leading-relaxed">
            Gifts Destiny started with a shared passion for creating unique and memorable
            gifts. As friends, we understood the joy of surprising loved ones, and we wanted
            to bring that same joy to everyone. With creativity, teamwork, and quality at the
            heart of our brand, we set out to redefine gifting in the most thoughtful way
            possible.
          </p>
        </div>

        {/* What We Do */}
        <div className="space-y-4 bg-[#FFF3E5] border border-[#F5DCC7] rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <p className="text-[#5A4736] leading-relaxed">
            At Gifts Destiny, we deliver premium handcrafted and customizable gifts that turn
            every moment into a lasting memory — whether birthdays, anniversaries, festivals,
            weddings or corporate events.
          </p>
          <p className="text-[#5A4736] leading-relaxed">
            We also provide product sourcing and outsourcing solutions for businesses looking
            to create custom hampers, bulk orders, or branded merchandise. Our strong vendor
            network ensures quality and timely delivery.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4 bg-[#FFF9F1] border border-[#EBD8C7] rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Why Choose Gifts Destiny</h2>

          <ul className="space-y-2 list-disc list-inside text-[#5A4736]">
            <li>Handcrafted products made with care</li>
            <li>Customizable gifts tailored to your message and style</li>
            <li>Reliable outsourcing and sourcing services for businesses</li>
            <li>Creative packaging that elevates the gifting experience</li>
            <li>A passionate team of friends delivering joy with every order</li>
          </ul>
        </div>

        {/* Mission */}
        <div className="space-y-4 bg-[#FFF3E5] border border-[#F5DCC7] rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-[#5A4736]">
            To make gifting effortless, thoughtful and unforgettable, with handcrafted
            creations that bring people closer.
          </p>
        </div>

        {/* Promise */}
        <div className="space-y-4 bg-[#FFF9F1] border border-[#EBD8C7] rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Our Promise</h2>
          <p className="text-[#5A4736]">
            At Gifts Destiny, every gift tells a story. We are committed to offering
            high-quality products, heartfelt designs, and a smooth gifting experience from
            start to finish.
          </p>
        </div>

      </section>
    </main>
  );
}
