import React from "react";
import { Helmet } from "react-helmet-async";

export function ShippingReturns() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pb-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Shipping & Returns | Aurix</title>
        <meta
          name="description"
          content="Learn Aurix shipping and returns policies for premium gold jewelry purchases."
        />
        <link rel="canonical" href="https://aurix-gold.vercel.app/shipping-returns" />
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
