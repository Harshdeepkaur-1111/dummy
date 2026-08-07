import React from "react";
import { Helmet } from "react-helmet-async";

export function Privacy() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | Aurix</title>
        <meta
          name="description"
          content="Read Aurix's privacy policy for information about data collection and user privacy."
        />
        <link rel="canonical" href="https://aurix-gold.vercel.app/privacy" />
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
