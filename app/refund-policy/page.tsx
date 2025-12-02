"use client";

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen py-12 px-6 md:px-20 text-[#3A2F2F]">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center text-[#8A1538]">
          Refund Policy
        </h1>

        <RefundBlock title="1. Eligibility">
          <p>Refunds accepted for damaged, defective, or incorrect products.</p>
          <p>Must contact within 7 days of delivery.</p>
        </RefundBlock>

        <RefundBlock title="2. Non-Refundable Items">
          <ul className="list-disc list-inside space-y-1">
            <li>Personalized items</li>
            <li>Digital products</li>
            <li>Gift cards</li>
          </ul>
        </RefundBlock>

        <RefundBlock title="3. Return Conditions">
          <p>Product must be unused and returned in original packaging.</p>
        </RefundBlock>

        <RefundBlock title="4. Refund Processing">
          <p>Refund will be processed within 7–10 business days.</p>
        </RefundBlock>

        <RefundBlock title="Contact Us">
          <p>Email: <span className="text-[#8A1538] font-medium">giftsdestiny51@gmail.com</span></p>
        </RefundBlock>

      </section>

    </main>
  );
}

function RefundBlock({ title, children }: any) {
  return (
    <div className="bg-[#F7DDE2] border border-[#E8C7C7] p-6 rounded-xl shadow-sm space-y-2">
      <h2 className="text-xl font-semibold text-[#8A1538]">{title}</h2>
      <div className="text-[#3A2F2F]">{children}</div>
    </div>
  );
}
