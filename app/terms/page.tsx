"use client";

export default function TermsPage() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen py-12 px-6 md:px-20">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center text-[#8A1538]">
          Terms & Conditions
        </h1>

        <PolicyCard title="1. General Information">
          <p>By using our website, you agree to these terms.</p>
        </PolicyCard>

        <PolicyCard title="2. Products & Services">
          <p>Handcrafted items may slightly vary from the product images.</p>
        </PolicyCard>

        <PolicyCard title="3. Custom Orders">
          <p>Custom items cannot be cancelled or returned unless damaged or defective.</p>
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
    <div className="bg-[#F7DDE2] border border-[#E8C7C7] rounded-xl p-6 shadow-sm space-y-2">
      <h2 className="text-xl font-semibold text-[#8A1538]">{title}</h2>
      <div className="text-[#3A2F2F]">{children}</div>
    </div>
  );
}
