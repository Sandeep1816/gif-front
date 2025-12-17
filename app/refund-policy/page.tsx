"use client";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-center">
          Refund <span className="text-[#A88BFF]">Policy</span>
        </h1>

        <PolicyCard title="Eligibility">
          Refunds are accepted only for damaged, defective, or incorrect products.
          Requests must be raised within 7 days of delivery.
        </PolicyCard>

        <PolicyCard title="Non-Refundable Items">
          Personalized gifts, digital products, and gift cards are non-refundable.
        </PolicyCard>

        <PolicyCard title="Refund Process">
          Approved refunds are processed within 7–10 business days to the original
          payment method.
        </PolicyCard>

        <PolicyCard title="Contact">
          Email us at <span className="text-[#A88BFF] font-medium">giftsdestiny51@gmail.com</span>
        </PolicyCard>

      </section>
    </main>
  );
}

function PolicyCard({ title, children }: any) {
  return (
    <div className="bg-[#EFEAFF] border border-[#E3DBFF] rounded-3xl p-6 shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-[#6B6280]">{children}</p>
    </div>
  );
}
