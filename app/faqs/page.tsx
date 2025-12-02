"use client";

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
      a: "Yes, once your order is shipped, tracking details will be shared via email/WhatsApp.",
    },
  ];

  return (
    <main className="bg-[#FFF9F5] min-h-screen py-12 px-6 md:px-20 text-[#3A2F2F]">
      <section className="max-w-4xl mx-auto space-y-10">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#8A1538]">
          Frequently Asked Questions
        </h1>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="
                bg-[#F7DDE2] p-6 rounded-xl border border-[#E8C7C7] shadow-sm
                hover:shadow-md transition
              "
            >
              <h3 className="font-semibold text-lg text-[#8A1538]">
                {faq.q}
              </h3>
              <p className="mt-2 text-[#3A2F2F]/80 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
