"use client";

export default function ContactPage() {
  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20">
      <section className="max-w-4xl mx-auto space-y-10 text-[#4A3728]">
        
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>

        <p className="text-center text-lg text-[#6B5847]">
          We are here to assist you with product inquiries, custom orders, bulk gifting and support.
        </p>

        <div className="bg-[#FFF3E5] p-8 rounded-xl border border-[#F5DCC7] shadow-sm">
          <form className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg focus:ring-[#F6D4BD]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg focus:ring-[#F6D4BD]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg focus:ring-[#F6D4BD]"
                placeholder="Share your message or inquiry"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A3728] text-white font-semibold py-3 rounded-lg hover:bg-[#6B4E3A] transition"
            >
              Submit
            </button>

          </form>
        </div>

        <div className="text-center text-[#6B5847]">
          Email: <span className="font-medium">giftsdestiny51@gmail.com</span>
        </div>

      </section>
    </main>
  );
}
