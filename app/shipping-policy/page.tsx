"use client";

export default function ShippingPolicy() {
  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20 text-[#4A3728]">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center">Shipping Policy</h1>

        <div className="space-y-6">

          <PolicyCard title="1. Order Processing Time">
            <p>All non-customized orders are processed within 1–3 business days.</p>
            <p>Customized orders may require additional time based on personalization.</p>
          </PolicyCard>

          <PolicyCard title="2. Delivery Duration">
            <p>Standard delivery takes 4–8 working days depending on location.</p>
          </PolicyCard>

          <PolicyCard title="3. Shipping Charges">
            <p>Calculated during checkout based on delivery location and product weight.</p>
          </PolicyCard>

          <PolicyCard title="4. Delays Beyond Control">
            <ul className="list-disc list-inside space-y-1">
              <li>Weather issues</li>
              <li>Festive seasons</li>
              <li>Courier delays</li>
              <li>Incomplete address</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="5. Incorrect Address">
            <p>If an order returns due to wrong address, re-shipping charges apply.</p>
          </PolicyCard>

          <PolicyCard title="6. Tracking">
            <p>Tracking details are shared once the order is dispatched.</p>
          </PolicyCard>

        </div>

      </section>
    </main>
  );
}

function PolicyCard({ title, children }: any) {
  return (
    <div className="bg-[#FFF3E5] border border-[#F5DCC7] rounded-xl p-6 shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-[#6B5847]">{children}</div>
    </div>
  );
}
