"use client";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Gifts Destiny?",
      a: "Gifts Destiny is an online gifting brand offering handcrafted and customizable products for all occasions."
    },
    {
      q: "Do you offer customization?",
      a: "Yes, many of our gifts can be personalized with names, messages, photos or branding."
    },
    {
      q: "Do you take bulk or corporate orders?",
      a: "Yes, we offer bulk, event-based and corporate gifting solutions with customization."
    },
    {
      q: "How long does delivery take?",
      a: "Delivery takes 4–8 working days depending on location. Custom orders may take longer."
    },
    {
      q: "Can I track my order?",
      a: "Yes, once your order is shipped, tracking details will be shared via email/WhatsApp."
    }
  ];

  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20 text-[#4A3728]">
      <section className="max-w-4xl mx-auto space-y-10">
        
        <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#FFF3E5] p-6 rounded-lg border border-[#F5DCC7] shadow-sm"
            >
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="mt-2 text-[#6B5847]">{faq.a}</p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
