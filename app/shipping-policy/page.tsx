"use client";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-center">
          Shipping <span className="text-[#A88BFF]">Policy</span>
        </h1>

        <PolicyCard title="Processing Time">
          Orders are processed within 1–3 business days. Custom orders may take longer.
        </PolicyCard>

        <PolicyCard title="Delivery Time">
          Delivery typically takes 4–8 working days depending on your location.
        </PolicyCard>

        <PolicyCard title="Shipping Charges">
          Shipping fees are calculated at checkout based on address and package weight.
        </PolicyCard>

        <PolicyCard title="Delays">
          Delays may occur due to weather, festivals, courier issues, or incorrect addresses.
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
