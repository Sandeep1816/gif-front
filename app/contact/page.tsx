"use client";

export default function ContactPage() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen py-12 px-6 md:px-20">
      <section className="max-w-4xl mx-auto space-y-10 text-[#3A2F2F]">
        
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center text-[#8A1538]">
          Contact Us
        </h1>

        <p className="text-center text-lg text-[#3A2F2F]/80">
          We’re here to assist you with product inquiries, custom orders, bulk gifting, and support.
        </p>

        {/* CONTACT FORM CARD */}
        <div className="bg-[#F7DDE2] p-8 rounded-xl border border-[#E8C7C7] shadow-sm">
          <form className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#8A1538]">
                Full Name
              </label>
              <input
                type="text"
                className="
                  w-full px-4 py-3 bg-white border border-[#E8C7C7] rounded-lg 
                  focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none 
                  text-[#3A2F2F]
                "
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#8A1538]">
                Email Address
              </label>
              <input
                type="email"
                className="
                  w-full px-4 py-3 bg-white border border-[#E8C7C7] rounded-lg 
                  focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none 
                  text-[#3A2F2F]
                "
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#8A1538]">
                Message
              </label>
              <textarea
                rows={5}
                className="
                  w-full px-4 py-3 bg-white border border-[#E8C7C7] rounded-lg 
                  focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none 
                  text-[#3A2F2F] resize-none
                "
                placeholder="Share your message or inquiry"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full bg-[#8A1538] text-white font-semibold py-3 rounded-lg 
                hover:bg-[#72102D] transition shadow-md
              "
            >
              Submit
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="text-center text-[#3A2F2F]/80">
          Email: <span className="font-medium text-[#8A1538]">giftsdestiny51@gmail.com</span>
        </div>

      </section>
    </main>
  );
}
