import React from "react";
import { Helmet } from "react-helmet-async";

export function Terms() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms of Service | Aurix</title>
        <meta
          name="description"
          content="Learn Aurix's terms of service for purchasing gold jewelry and using our website."
        />
        <link rel="canonical" href="https://aurix-gold.vercel.app/terms" />
      </Helmet>

      <main className="max-w-5xl mx-auto py-24">
        <h1 className="font-serif text-4xl text-white mb-8">Terms of Service</h1>
        <p className="text-white/70 leading-relaxed mb-6">
          These terms govern your use of the Aurix website and your purchase of jewelry products.
        </p>
        <section className="space-y-6 text-white/70">
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Acceptance of Terms</h2>
            <p>By using our site or placing an order, you agree to these terms and our privacy practices.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Ordering</h2>
            <p>All orders are subject to product availability and confirmation of payment.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white mb-3">Returns and Refunds</h2>
            <p>Returns are handled in accordance with our shipping and returns policy.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
