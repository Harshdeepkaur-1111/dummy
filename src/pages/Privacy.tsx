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
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pb-24 px-4 sm:px-6 lg:px-8">
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

      <main className="max-w-5xl mx-auto py-24">
        <h1 className="font-serif text-4xl text-white mb-8">Privacy Policy</h1>
        <p className="text-white/70 leading-relaxed mb-6">
          Aurix respects your privacy and is committed to protecting your personal data.
          This policy explains how we collect, use, and safeguard your information.
        </p>
        <section className="space-y-6 text-white/70">
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Information We Collect</h2>
            <p>We collect only the information necessary to process orders and respond to enquiries.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">How We Use Your Data</h2>
            <p>We use your information to fulfill orders, provide customer support, and improve our service.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
