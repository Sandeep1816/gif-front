"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-center">
          Contact <span className="text-[#A88BFF]">Us</span>
        </h1>

        <p className="text-center text-[#6B6280]">
          Have questions, custom requests, or bulk orders? We’d love to hear from you.
        </p>

        <div className="bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-8 shadow-sm">
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-[#E3DBFF] focus:ring-2 focus:ring-[#A88BFF] outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-[#E3DBFF] focus:ring-2 focus:ring-[#A88BFF] outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[#E3DBFF] focus:ring-2 focus:ring-[#A88BFF] outline-none resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button className="w-full bg-[#A88BFF] text-[#2E2545] font-semibold py-3 rounded-xl hover:opacity-90 transition">
              Send Message
            </button>

          </form>
        </div>

        <p className="text-center text-[#6B6280]">
          Email us at <span className="font-medium text-[#A88BFF]">giftsdestiny51@gmail.com</span>
        </p>

      </section>
    </main>
  );
}
