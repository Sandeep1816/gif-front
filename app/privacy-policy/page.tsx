"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FFFBF2] min-h-screen py-12 px-6 md:px-20 text-[#4A3728]">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>

        <PolicyBlock title="1. Information We Collect">
          <p>We may collect personal details like name, email, address, order info, etc.</p>
          <p>We do NOT store payment information. All payments are handled by secure gateways.</p>
        </PolicyBlock>

        <PolicyBlock title="2. How We Use Your Information">
          <ul className="list-disc list-inside">
            <li>Process and deliver orders</li>
            <li>Send updates</li>
            <li>Improve user experience</li>
            <li>Prevent fraud</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="3. Data Protection">
          <p>We use secure servers, encrypted connections, and verified payment partners.</p>
        </PolicyBlock>

        <PolicyBlock title="4. Cookies">
          <p>We use cookies to improve browsing and performance.</p>
        </PolicyBlock>

        <PolicyBlock title="5. Data Retention">
          <p>Your data is retained as long as needed for service or legal obligations.</p>
        </PolicyBlock>

        <PolicyBlock title="6. Your Rights">
          <ul className="list-disc list-inside">
            <li>Request your data</li>
            <li>Request corrections</li>
            <li>Request deletion</li>
            <li>Opt-out anytime</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Contact">
          <p>Email: giftsdestiny51@gmail.com</p>
        </PolicyBlock>

      </section>
    </main>
  );
}

function PolicyBlock({ title, children }: any) {
  return (
    <div className="bg-[#FFF3E5] border border-[#F5DCC7] rounded-xl p-6 shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-[#6B5847] space-y-2">{children}</div>
    </div>
  );
}
