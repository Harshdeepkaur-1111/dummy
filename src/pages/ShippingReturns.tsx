import React from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl, getSiteUrl } from "../lib/seo";

export function ShippingReturns() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = getCanonicalUrl("/shipping-returns");

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
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Shipping & Returns Policy | Aurix - 22K Gold Jewellery India</title>
        <meta
          name="description"
          content="Explore Aurix's shipping and return policies featuring 100% insured delivery across India, 14-day return privilege and lifetime 22K gold buyback guarantee."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
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

      <main className="max-w-5xl mx-auto py-24">
        <h1 className="font-serif text-4xl text-white mb-8">Shipping & Returns</h1>
        <p className="text-white/70 leading-relaxed mb-6">
          We deliver premium gold jewelry securely and offer a transparent returns process.
        </p>
        <section className="space-y-6 text-white/70">
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Shipping</h2>
            <p>Orders are processed within 2 business days and shipped via a trusted courier.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Returns</h2>
            <p>If you are not satisfied with your purchase, contact customer support within 7 days.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Support</h2>
            <p>For all shipping and return inquiries, please use the contact form or call our support line.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
