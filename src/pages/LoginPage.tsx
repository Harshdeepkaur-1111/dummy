import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { useCanonical } from "../lib/seo";

export function LoginPage() {
  const canonicalUrl = useCanonical("/login");
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileOrEmail) return;
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 flex items-center justify-center">
      <Helmet>
        <title>Client Login & VIP Member Access | Aurix 22K Gold Jewellery</title>
        <meta
          name="description"
          content="Sign in to your Aurix account to track gold orders, manage customized jewellery requests, view purity certificates and access VIP member benefits."
        />
        <meta name="robots" content="noindex, follow" />

        <meta property="og:title" content="Client Login | Aurix 22K Gold" />
        <meta property="og:description" content="Sign in to your Aurix account to track orders and view certificates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="w-full max-w-md px-4">
        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium">Aurix Privilege Club</span>
            <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mt-1">
              Client Portal Sign In
            </h1>
            <p className="text-xs text-neutral-400 mt-2">
              Access your BIS certificates, track active orders & unlock private preview collections.
            </p>
          </div>

          {isLoggedIn ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
              <h2 className="text-xl font-serif text-white">Welcome Back</h2>
              <p className="text-xs text-neutral-300">
                You are securely logged into your Aurix VIP client profile.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-widest rounded-xl hover:bg-[#c49f2e] transition-colors"
              >
                Browse Jewellery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : !isOtpSent ? (
            <form onSubmit={handleRequestOtp} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                  Mobile Number or Email
                </label>
                <input
                  type="text"
                  required
                  value={mobileOrEmail}
                  onChange={(e) => setMobileOrEmail(e.target.value)}
                  placeholder="+91 98765 43210 or client@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-600 focus:border-[#D4AF37] outline-none text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                id="btn-request-otp"
                className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] text-black hover:bg-[#c49f2e] transition-colors font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                Get Login OTP <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-4 text-center">
                <span className="text-[11px] text-neutral-500">
                  New client? Your account is automatically created on your first order.
                </span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                  Enter 4-Digit OTP sent to {mobileOrEmail}
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="• • • •"
                  className="w-full px-4 py-3 text-center tracking-widest text-lg rounded-xl bg-black border border-white/10 text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <button
                type="submit"
                id="btn-verify-otp"
                className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] text-black hover:bg-[#c49f2e] transition-colors font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <Lock className="w-4 h-4" /> Verify & Access Account
              </button>

              <button
                type="button"
                onClick={() => setIsOtpSent(false)}
                className="w-full text-center text-xs text-neutral-400 hover:text-white pt-2"
              >
                Change mobile / email
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>256-Bit Encrypted Secure Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
