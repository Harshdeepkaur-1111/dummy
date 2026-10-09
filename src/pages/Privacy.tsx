import React from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl, getSiteUrl, useCanonical } from "../lib/seo";

export function Privacy() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = useCanonical("/privacy");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | Aurix - 22K Gold Jewellery India</title>
        <meta
          name="description"
          content="Read the Aurix privacy policy to learn how we protect your personal data, secure online transactions, and maintain confidentiality for luxury jewellery orders."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Aurix" />
        <meta
          property="og:description"
          content="Read the Aurix privacy policy to learn how we protect your personal data, secure online transactions, and maintain confidentiality for luxury jewellery orders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Aurix" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Aurix" />
        <meta
          name="twitter:description"
          content="Read the Aurix privacy policy to learn how we protect your personal data, secure online transactions, and maintain confidentiality for luxury jewellery orders."
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto py-16 sm:py-24">
        <div className="border-b border-white/10 pb-8 mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] mb-3">Data Confidentiality</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-light italic mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">
            Last Updated: October 9, 2026 · Compliant with the Digital Personal Data Protection Act, 2023 (India).
          </p>
        </div>

        <div className="space-y-10 text-white/80 text-sm leading-relaxed">
          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">1. Commitment to Privacy</h2>
            <p className="mb-3">
              Aurix (<span className="text-[#D4AF37]">aurix-gold.vercel.app</span>) is deeply committed to upholding the confidentiality, trust, and security of our clients. When you purchase heirloom 22K gold jewellery or explore our bespoke catalogue, we safeguard your personal and transactional information with institutional-grade protocols.
            </p>
            <p>
              This Privacy Policy describes what information we collect, the lawful basis for processing, how your data is protected, and your rights as a data principal under Indian law.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">2. Information We Collect</h2>
            <p className="mb-3">
              We collect only information essential to authenticating orders, maintaining BIS hallmarking compliance, and ensuring armed delivery:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong className="text-white">Contact & Identity Details:</strong> Full legal name, billing and physical delivery addresses, verified phone number (for delivery OTP), and email address.</li>
              <li><strong className="text-white">Regulatory KYC Information:</strong> Valid Permanent Account Number (PAN) or official government identity documentation exclusively when mandated by the Government of India for single bullion or jewellery transactions exceeding ₹2,00,000.</li>
              <li><strong className="text-white">Transactional Data:</strong> Purchase history, hallmarked HUID certificates associated with your purchases, payment confirmation references, and customer support correspondence.</li>
              <li><strong className="text-white">Technical Metadata:</strong> IP address, device telemetry, browser type, and anonymous interaction metrics utilized solely for fraud mitigation and site performance.</li>
            </ul>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">3. Lawful Processing & Use of Data</h2>
            <p className="mb-3">We strictly process customer data for legitimate commercial and regulatory objectives:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Fulfilling, packaging, and dispatching fine jewellery orders with armed courier logistics.</li>
              <li>Generating Bureau of Indian Standards (BIS) authenticity certificates and registering warranty buyback records.</li>
              <li>Issuing mandatory transit insurance coverage with Sequel Secure and Blue Dart Apex.</li>
              <li>Preventing unauthorized payment attempts, identity fraud, and chargeback anomalies.</li>
              <li>Providing VIP master concierge support and order tracking notifications via SMS and email.</li>
            </ul>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">4. 256-Bit Cryptographic Security</h2>
            <p className="mb-3">
              All communications between your device and Aurix servers are encrypted using Transport Layer Security (TLS 1.3) with 256-bit encryption. Payment processing is completely tokenized and handled directly through RBI-licensed, PCI-DSS Level 1 compliant gateways. Aurix never captures, handles, or stores sensitive credit card numbers or banking passwords.
            </p>
            <p>
              Internal access to customer records is restricted by multi-factor authentication and role-based permissions strictly limited to authorized logistics officers.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">5. Third-Party Sharing Restrictions</h2>
            <p className="mb-3">
              We never sell, rent, trade, or monetize customer data to third-party advertisers or data brokers. Information is shared strictly on a confidential need-to-know basis with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Specialized armed courier partners (Sequel Secure and Blue Dart) strictly for physical delivery and OTP validation.</li>
              <li>Underwriting insurance partners for 100% transit insurance policy issuance.</li>
              <li>Law enforcement or statutory tax authorities solely when legally mandated under the Bureau of Indian Standards Act or Code of Criminal Procedure.</li>
            </ul>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">6. Your Rights & Grievance Officer</h2>
            <p className="mb-3">
              Under the Digital Personal Data Protection Act, 2023, you retain the right to access, rectify, or request the deletion of your personal information (subject to statutory tax retention periods for gold invoices).
            </p>
            <p>
              To exercise your privacy rights or contact our designated Grievance Officer:
            </p>
            <div className="mt-4 p-4 border border-white/10 bg-black/40">
              <p className="text-white font-medium">Grievance & Privacy Officer: Tejinder Singh</p>
              <p className="text-white/70">Email: <span className="text-[#D4AF37]">tejinders791@gmail.com</span></p>
              <p className="text-white/70">Telephone: <span className="text-[#D4AF37]">+91 9034196429</span></p>
              <p className="text-white/70">Location: Yamunanagar, Haryana, India - 135001</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
