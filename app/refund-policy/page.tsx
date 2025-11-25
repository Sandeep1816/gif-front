"use client";

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20 text-[#4A3728]">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center">Refund Policy</h1>

        <RefundBlock title="1. Eligibility">
          <p>Refunds accepted for damaged, defective, or incorrect products.</p>
          <p>Must contact within 7 days of delivery.</p>
        </RefundBlock>

        <RefundBlock title="2. Non-Refundable Items">
          <ul className="list-disc list-inside">
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
          <p>Email: giftsdestiny51@gmail.com</p>
        </RefundBlock>

      </section>

    </main>
  );
}

function RefundBlock({ title, children }: any) {
  return (
    <div className="bg-[#FFF3E5] border border-[#F5DCC7] p-6 rounded-xl shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-[#6B5847]">{children}</div>
    </div>
  );
}
