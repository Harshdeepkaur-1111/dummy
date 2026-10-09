import React from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl, getSiteUrl, useCanonical } from "../lib/seo";

export function Terms() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = useCanonical("/terms");

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
        name: "Terms of Service",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms of Service | Aurix - 22K Gold Jewellery India</title>
        <meta
          name="description"
          content="Read Aurix's terms of service covering certified 22K gold jewellery purchases, transparent pricing, insured courier delivery, warranties and return guidelines."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms of Service | Aurix" />
        <meta
          property="og:description"
          content="Read Aurix's terms of service covering certified 22K gold jewellery purchases, transparent pricing, insured courier delivery, warranties and return guidelines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Aurix" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service | Aurix" />
        <meta
          name="twitter:description"
          content="Read Aurix's terms of service covering certified 22K gold jewellery purchases, transparent pricing, insured courier delivery, warranties and return guidelines."
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto py-16 sm:py-24">
        <div className="border-b border-white/10 pb-8 mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] mb-3">Legal Agreement</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-light italic mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm">
            Last Updated: October 9, 2026 · Governing certified 22K BIS 916 gold jewellery purchases at Aurix.
          </p>
        </div>

        <div className="space-y-10 text-white/80 text-sm leading-relaxed">
          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">1. Agreement to Terms</h2>
            <p className="mb-3">
              By accessing our website (<span className="text-[#D4AF37]">aurix-gold.vercel.app</span>) or purchasing any fine jewellery, bullion, or accessories from Aurix, you agree to be legally bound by these Terms of Service, our Privacy Policy, and our Shipping & Returns Policy.
            </p>
            <p>
              Aurix is a luxury fine jewellery house operating in compliance with the Bureau of Indian Standards (BIS) Act, 2016, and the Consumer Protection (E-Commerce) Rules, 2020.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">2. Purity & BIS 916 Hallmark Guarantee</h2>
            <p className="mb-3">
              Every item sold by Aurix is certified 22K (91.6% pure gold) or certified 18K gold as specified in the product description. Each piece bears a mandatory laser-engraved Bureau of Indian Standards (BIS) hallmark, including the official BIS triangular logo, purity marking (916), and a unique 6-digit alphanumeric Hallmarking Unique Identification (HUID) code.
            </p>
            <p>
              Customers can independently verify the authenticity of any Aurix piece by entering the HUID number on the official BIS Care mobile application.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">3. Pricing, Gold Rate Benchmark & Making Charges</h2>
            <p className="mb-3">
              Gold prices fluctuate daily based on international bullion markets and the Indian Bullion and Jewellers Association (IBJA) prevailing morning/evening benchmark rates. All prices displayed on our website are inclusive of applicable Goods and Services Tax (GST at 3% on gold value) and transparent making charges.
            </p>
            <p>
              Once your order is successfully placed and paid, your purchase price is locked in, protecting you against subsequent market rate increases.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">4. Order Verification & Secure Payment</h2>
            <p className="mb-3">
              To prevent fraudulent transactions in luxury bullion and high-value jewellery, Aurix reserves the right to conduct verification for orders exceeding ₹50,000. In accordance with the Government of India Prevention of Money Laundering Act (PMLA) regulations, providing a valid Permanent Account Number (PAN) is mandatory for single purchases exceeding ₹2,00,000.
            </p>
            <p>
              All online payments are processed through 256-bit encrypted, PCI-DSS Level 1 compliant payment gateways. Aurix never stores your card CVV or net banking credentials.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">5. Insured Courier Transit & Delivery</h2>
            <p className="mb-3">
              Aurix provides 100% complimentary transit insurance on every shipment across India. Parcels are dispatched exclusively through specialized high-value carriers (Sequel Secure and Blue Dart Apex) in tamper-evident, dual-sealed security packaging.
            </p>
            <p>
              Handover requires mandatory verification of a secret One-Time Password (OTP) sent to the buyer's registered mobile number, alongside physical signature. Aurix assumes 100% financial liability until the parcel is successfully verified and signed for.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">6. 14-Day Return Privilege & Lifetime Buyback</h2>
            <p className="mb-3">
              Catalogue jewellery items in original, unworn condition with intact security tags, tamper seals, original invoice, and BIS authenticity certificates may be returned within 14 calendar days of delivery for a 100% full refund. Customized or engraved jewellery is exempt from 14-day return but remains eligible for our Lifetime Exchange program.
            </p>
            <p>
              Every Aurix gold piece comes with a Lifetime Exchange and Buyback guarantee based on the prevailing 22K gold benchmark rate at the time of return, net of making charges and statutory taxes.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">7. Governing Law & Dispute Resolution</h2>
            <p className="mb-3">
              These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Yamunanagar, Haryana, India.
            </p>
            <p>
              For any legal or customer support inquiries, contact our master concierge at <span className="text-[#D4AF37] font-semibold">+91 9034196429</span> or email <span className="text-[#D4AF37]">tejinders791@gmail.com</span>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Terms;
