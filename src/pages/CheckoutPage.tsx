import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Truck, Lock, CheckCircle2, CreditCard, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useCanonical } from "../lib/seo";

export function CheckoutPage() {
  const canonicalUrl = useCanonical("/checkout");
  const { cart, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const parsePrice = (p: string) => parseInt(p.replace(/[^0-9]/g, ""), 10) || 0;
  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0) || 24999;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20">
      <Helmet>
        <title>Secure Checkout | Aurix - Insured 22K Gold Delivery India</title>
        <meta
          name="description"
          content="Complete your purchase of certified 22K BIS 916 gold jewellery. Enjoy 100% insured delivery across India, safe payment options & lifetime buyback."
        />
        <meta name="robots" content="noindex, follow" />

        <meta property="og:title" content="Secure Checkout | Aurix 22K Gold" />
        <meta property="og:description" content="Complete your purchase of certified 22K gold jewellery with insured delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium">Boutique Checkout</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mt-1">
            Secure Order Finalization
          </h1>
        </div>

        {isOrdered ? (
          <div className="bg-neutral-900/60 border border-[#D4AF37]/30 rounded-2xl p-8 sm:p-12 text-center max-w-lg mx-auto shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">Order Confirmed</span>
            <h2 className="text-2xl font-serif text-white mt-1 mb-3">Thank You for Your Trust</h2>
            <p className="text-xs text-neutral-300 leading-relaxed mb-6">
              Your certified 22K gold jewellery order has been placed with Aurix. Our concierge will contact you via WhatsApp and phone (+91 9034196429) with insured transit tracking and hallmark documentation.
            </p>
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/5 text-left text-xs space-y-2 mb-6 text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500">Order Reference:</span>
                <span className="font-mono text-[#D4AF37]">AURIX-916-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Insurance Status:</span>
                <span className="text-emerald-400">100% Fully Insured Transit</span>
              </div>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-widest rounded-xl hover:bg-[#c49f2e] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Boutique
            </Link>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Address */}
              <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-serif text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#D4AF37]" /> Insured Delivery Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Rao"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Mobile Number (for OTP & Transit SMS)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-400 mb-1">Street Address / House / Flat</label>
                    <input
                      type="text"
                      required
                      placeholder="House No., Building, Area"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">City</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai / Delhi / Jaipur"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 110001"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-serif text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#D4AF37]" /> Payment Method
                </h2>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/5 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="accent-[#D4AF37]" />
                    <div className="flex-1">
                      <span className="text-white font-medium block">UPI / Net Banking / Credit Card / Debit Card</span>
                      <span className="text-neutral-400 text-[11px]">Instant verification with BIS 916 certificate dispatch</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-neutral-950/60 cursor-pointer">
                    <input type="radio" name="payment" className="accent-[#D4AF37]" />
                    <div className="flex-1">
                      <span className="text-white font-medium block">No-Cost EMI (3 to 12 Months)</span>
                      <span className="text-neutral-400 text-[11px]">Available across major Indian banks</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 space-y-5 h-fit">
              <h2 className="text-lg font-serif text-white">Summary</h2>

              <div className="space-y-3 text-xs text-neutral-300 border-b border-white/10 pb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Courier</span>
                  <span className="text-[#D4AF37] font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Hallmark Fee</span>
                  <span className="text-white font-medium">Included</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <span className="text-sm font-medium text-white">Payable</span>
                <span className="text-2xl font-serif text-[#D4AF37] font-semibold">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                type="submit"
                id="btn-place-order"
                className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] text-black hover:bg-[#c49f2e] transition-colors font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <Lock className="w-4 h-4" /> Confirm & Pay ₹{subtotal.toLocaleString("en-IN")}
              </button>

              <div className="pt-2 space-y-2 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Insured transit with tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Lifetime 22K gold purity guarantee</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
