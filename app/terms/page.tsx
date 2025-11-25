"use client";

export default function TermsPage() {
  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20 text-[#4A3728]">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center">Terms & Conditions</h1>

        <PolicyCard title="1. General Information">
          <p>By using our website, you agree to these terms.</p>
        </PolicyCard>

        <PolicyCard title="2. Products & Services">
          <p>Handcrafted items may slightly vary from images shown.</p>
        </PolicyCard>

        <PolicyCard title="3. Custom Orders">
          <p>Custom products cannot be cancelled or returned unless defective.</p>
        </PolicyCard>

        <PolicyCard title="4. Pricing">
          <p>All prices include applicable taxes. Payments are online only.</p>
        </PolicyCard>

        <PolicyCard title="5. Shipping">
          <p>Please refer to our Shipping Policy.</p>
        </PolicyCard>

        <PolicyCard title="6. User Responsibilities">
          <p>Provide accurate information and avoid misuse of our website.</p>
        </PolicyCard>

      </section>

    </main>
  );
}

function PolicyCard({ title, children }: any) {
  return (
    <div className="bg-[#FFF9F1] border border-[#EBD8C7] rounded-xl p-6 shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-[#6B5847]">{children}</div>
    </div>
  );
}
