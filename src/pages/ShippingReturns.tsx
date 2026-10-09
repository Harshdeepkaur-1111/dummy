import React from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl, getSiteUrl, useCanonical } from "../lib/seo";

export function ShippingReturns() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = useCanonical("/shipping-returns");

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
        name: "Shipping & Returns",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Shipping & Returns Policy | Aurix - 22K Gold Jewellery India</title>
        <meta
          name="description"
          content="Explore Aurix's shipping and return policies featuring 100% insured delivery across India, 14-day return privilege and lifetime 22K gold buyback guarantee."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Shipping & Returns Policy | Aurix" />
        <meta
          property="og:description"
          content="Explore Aurix's shipping and return policies featuring 100% insured delivery across India, 14-day return privilege and lifetime 22K gold buyback guarantee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Aurix" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Shipping & Returns Policy | Aurix" />
        <meta
          name="twitter:description"
          content="Explore Aurix's shipping and return policies featuring 100% insured delivery across India, 14-day return privilege and lifetime 22K gold buyback guarantee."
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto py-16 sm:py-24">
        <div className="border-b border-white/10 pb-8 mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] mb-3">Delivery & Guarantees</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-light italic mb-4">Shipping & Returns</h1>
          <p className="text-white/60 text-sm">
            Last Updated: October 9, 2026 · Compliant with insured transit standards and customer protection guidelines.
          </p>
        </div>

        <div className="space-y-10 text-white/80 text-sm leading-relaxed">
          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">1. 100% Free Insured Transit Across India</h2>
            <p className="mb-3">
              Aurix provides 100% complimentary, insured doorstep delivery on every order without minimum spend limitations across all serviceable postal PIN codes in India.
            </p>
            <p>
              High-value gold shipments are transported in collaboration with specialized precious cargo logistics handlers, including <strong className="text-white">Sequel Secure</strong> and <strong className="text-white">Blue Dart Apex</strong>. Every shipment is covered by comprehensive, door-to-door transit insurance underwritten by leading institutional underwriters. In the improbable event of transit delay, loss, or damage, Aurix assumes full financial liability and guarantees a replacement or 100% reimbursement.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">2. Dispatch & Delivery Timelines</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4 text-xs">
              <div className="p-4 border border-white/10 bg-black/40">
                <p className="text-[#D4AF37] font-semibold text-sm mb-1">Tier 1 Metro Cities</p>
                <p className="text-white font-medium mb-1">2 to 4 Business Days</p>
                <p className="text-white/60">Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune & Ahmedabad.</p>
              </div>
              <div className="p-4 border border-white/10 bg-black/40">
                <p className="text-[#D4AF37] font-semibold text-sm mb-1">Rest of India & Remote PINs</p>
                <p className="text-white font-medium mb-1">4 to 7 Business Days</p>
                <p className="text-white/60">Dispatched via insured priority air freight with continuous GPS tracking telemetry.</p>
              </div>
            </div>
            <p className="text-white/70">
              Orders placed before 2:00 PM IST on business days are processed same-day. Custom bridal commissions and personalized ring resizing require an additional 3–5 working days for master goldsmith finishing and Bureau of Indian Standards (BIS) hallmark certification.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">3. Armed Handover & Mandatory Secret OTP</h2>
            <p className="mb-3">
              To guarantee that heirloom gold jewellery reaches the rightful owner, Aurix operates a zero-compromise security protocol:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong className="text-white">Tamper-Evident Poly-Pouch:</strong> Each piece is placed inside an Aurix velvet presentation box, vacuum-sealed inside a tamper-evident holographic security pouch. If the exterior seal appears fractured or torn upon delivery, refuse handover immediately.</li>
              <li><strong className="text-white">Mandatory Secret OTP:</strong> The delivery courier will request a confidential 4-digit One-Time Password sent via SMS directly to the buyer's verified mobile number at the moment of delivery. Handover cannot be completed without this OTP.</li>
            </ul>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">4. 14-Day Hassle-Free Return Policy</h2>
            <p className="mb-3">
              We want you to love your 22K gold piece. If for any reason you are not completely enchanted, you may initiate a return within <strong className="text-white">14 calendar days</strong> of receiving your delivery.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70 mb-4">
              <li>The item must be in pristine, unworn, original condition without scratches or resizing.</li>
              <li>The intact security tag, original certificate of authenticity, BIS hallmark report, and invoice must accompany the package.</li>
              <li>Aurix arranges an armed courier pickup from your doorstep with fully insured return shipping.</li>
            </ul>
            <p className="text-white/70">
              Upon inspection and purity verification by our quality assayers (typically within 48 hours of receipt), a 100% full refund is credited to your original payment method.
            </p>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">5. Lifetime Exchange & Buyback Guarantee</h2>
            <p className="mb-3">
              Gold is an enduring store of wealth. Aurix offers a transparent Lifetime Exchange and Buyback policy on all 22K and 18K jewellery:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong className="text-white">Lifetime Exchange (100% Gold Value):</strong> Exchange your piece toward any new Aurix creation at 100% of the prevailing 22K benchmark rate based on the certified net gold weight.</li>
              <li><strong className="text-white">Lifetime Buyback (97% Gold Value):</strong> Receive immediate direct bank transfer at 97% of the prevailing gold benchmark bullion rate, reflecting zero administrative deduction.</li>
            </ul>
          </section>

          <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] mb-4">6. Need Help with an Order?</h2>
            <p className="mb-2">Our customer concierge team is at your disposal Monday through Saturday, 10:00 AM to 7:00 PM IST.</p>
            <p className="text-white/70">Phone: <span className="text-[#D4AF37] font-semibold">+91 9034196429</span></p>
            <p className="text-white/70">Email: <span className="text-[#D4AF37]">tejinders791@gmail.com</span></p>
            <p className="text-white/70">Boutique: Yamunanagar, Haryana, India - 135001</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ShippingReturns;
