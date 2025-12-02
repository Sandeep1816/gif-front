"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen py-12 px-6 md:px-20 text-[#3A2F2F]">
      
      <section className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center text-[#8A1538]">
          Privacy Policy
        </h1>

        <PolicyBlock title="1. Information We Collect">
          <p>We may collect personal details like name, email, address, order information, etc.</p>
          <p>We do NOT store payment information. All payments are handled by secure gateways.</p>
        </PolicyBlock>

        <PolicyBlock title="2. How We Use Your Information">
          <ul className="list-disc list-inside space-y-1">
            <li>Process and deliver orders</li>
            <li>Send order & service notifications</li>
            <li>Improve user experience</li>
            <li>Prevent fraudulent activities</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="3. Data Protection">
          <p>We use secure servers, encrypted connections, and verified payment partners.</p>
        </PolicyBlock>

        <PolicyBlock title="4. Cookies">
          <p>We use cookies to enhance browsing and website performance.</p>
        </PolicyBlock>

        <PolicyBlock title="5. Data Retention">
          <p>Your data is retained as long as needed for service or legal obligations.</p>
        </PolicyBlock>

        <PolicyBlock title="6. Your Rights">
          <ul className="list-disc list-inside space-y-1">
            <li>Request access to your data</li>
            <li>Request corrections</li>
            <li>Request deletion</li>
            <li>Opt-out anytime</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Contact">
          <p>Email: <span className="text-[#8A1538] font-medium">giftsdestiny51@gmail.com</span></p>
        </PolicyBlock>

      </section>
    </main>
  );
}

function PolicyBlock({ title, children }: any) {
  return (
    <div className="bg-[#F7DDE2] border border-[#E8C7C7] rounded-xl p-6 shadow-sm space-y-2">
      <h2 className="text-xl font-semibold text-[#8A1538]">{title}</h2>
      <div className="text-[#3A2F2F] space-y-2">{children}</div>
    </div>
  );
}
