"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Gifts Destiny?",
      a: "Gifts Destiny is an online gifting brand offering handcrafted and customizable products for all occasions.",
    },
    {
      q: "Do you offer customization?",
      a: "Yes, many of our gifts can be personalized with names, messages, photos or branding.",
    },
    {
      q: "Do you take bulk or corporate orders?",
      a: "Yes, we offer bulk, event-based and corporate gifting solutions with customization.",
    },
    {
      q: "How long does delivery take?",
      a: "Delivery takes 4–8 working days depending on location. Custom orders may take longer.",
    },
    {
      q: "Can I track my order?",
      a: "Yes, once your order is shipped, tracking details will be shared via email or WhatsApp.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
          <span className="block mt-2 text-[#A88BFF] text-lg font-medium">
            We’re here to help 💜
          </span>
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="
                  bg-[#EFEAFF] rounded-3xl border border-[#E3DBFF]
                  overflow-hidden transition shadow-sm
                "
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="
                    w-full flex justify-between items-center
                    px-6 py-5 text-left
                    hover:bg-[#E6DEFF] transition
                  "
                >
                  <h3 className="font-semibold text-lg text-[#2E2545]">
                    {faq.q}
                  </h3>

                  <ChevronDown
                    className={`
                      w-5 h-5 text-[#A88BFF] transition-transform
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-5 text-[#6B6280] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-14 text-center bg-[#EFEAFF] border border-[#E3DBFF]
                        rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2E2545]">
            Still have questions?
          </h2>
          <p className="text-[#6B6280] mt-2">
            Our team is happy to help you anytime
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="tel:+918660391647"
              className="
                px-6 py-3 rounded-2xl font-semibold
                bg-[#A88BFF] text-white
                hover:bg-[#9175FF] transition shadow-md
              "
            >
              Call Us
            </a>

            <a
              href="https://wa.me/918660391647"
              target="_blank"
              className="
                px-6 py-3 rounded-2xl font-semibold
                bg-white text-[#2E2545]
                border border-[#E3DBFF]
                hover:bg-[#E6DEFF] transition shadow-md
              "
            >
              WhatsApp
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
