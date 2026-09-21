import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Lock } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useCanonical } from "../lib/seo";

export function CartPage() {
  const canonicalUrl = useCanonical("/cart");
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const parsePrice = (p: string) => parseInt(p.replace(/[^0-9]/g, ""), 10) || 0;

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20">
      <Helmet>
        <title>Shopping Cart | Aurix - Certified 22K Gold Jewellery India</title>
        <meta
          name="description"
          content="Review your chosen handcrafted 22K gold necklaces, bangles, rings and earrings with 100% insured doorstep shipping and transparent billing."
        />
        <meta name="robots" content="noindex, follow" />

        <meta property="og:title" content="Shopping Cart | Aurix Jewellery" />
        <meta property="og:description" content="Review your chosen handcrafted 22K gold jewellery items at Aurix." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium">Boutique Bag</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mt-1">
            Your Shopping Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-12 text-center max-w-lg mx-auto">
            <ShoppingBag className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h2 className="text-xl font-serif text-white mb-2">Your cart is currently empty</h2>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Explore our certified 22K BIS 916 gold jewellery collection to discover timeless necklaces, rings and bangles.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-widest rounded-xl hover:bg-[#c49f2e] transition-colors"
            >
              Explore Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-900/50 border border-white/10 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">22K Certified Gold</span>
                    <h3 className="text-base font-serif text-white truncate">{item.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-xs text-neutral-400">
                      <span>Qty: {item.quantity}</span>
                      <span className="text-[#D4AF37] font-serif font-medium">{item.price} each</span>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-4">
                    <div className="text-sm font-serif text-white font-medium">
                      ₹{(parsePrice(item.price) * item.quantity).toLocaleString("en-IN")}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={clearCart}
                  className="text-xs text-neutral-500 hover:text-neutral-300 underline underline-offset-4"
                >
                  Clear all items
                </button>
                <Link
                  to="/products"
                  className="text-xs text-[#D4AF37] hover:underline underline-offset-4"
                >
                  + Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 space-y-5">
              <h2 className="text-lg font-serif text-white">Order Summary</h2>

              <div className="space-y-3 text-xs text-neutral-300 border-b border-white/10 pb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items)</span>
                  <span className="text-white font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Doorstep Shipping</span>
                  <span className="text-[#D4AF37] font-medium">FREE (100% Insured)</span>
                </div>
                <div className="flex justify-between">
                  <span>BIS Hallmarking & GST</span>
                  <span className="text-white font-medium">Included</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <span className="text-sm font-medium text-white">Total Amount</span>
                <span className="text-2xl font-serif text-[#D4AF37] font-semibold">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                id="btn-proceed-checkout"
                onClick={() => navigate("/checkout")}
                className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] text-black hover:bg-[#c49f2e] transition-colors font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 space-y-2 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>BIS 916 Hallmark certificate included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Tamper-proof armed delivery across India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Encrypted 256-bit safe checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
