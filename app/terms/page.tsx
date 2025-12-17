"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-14 px-6 md:px-20 text-[#2E2545]">
      <section className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-center">
          Terms & <span className="text-[#A88BFF]">Conditions</span>
        </h1>

        <PolicyCard title="General">
          By using our website, you agree to all terms stated below.
        </PolicyCard>

        <PolicyCard title="Products">
          Handcrafted items may slightly vary from images shown online.
        </PolicyCard>

        <PolicyCard title="Custom Orders">
          Custom orders cannot be cancelled or refunded unless damaged.
        </PolicyCard>

        <PolicyCard title="Payments">
          All prices include applicable taxes. Payments are accepted online only.
        </PolicyCard>

        <PolicyCard title="User Responsibility">
          Users must provide accurate information and avoid misuse of the platform.
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
