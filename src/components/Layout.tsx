import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X, Diamond, ShoppingBag, Trash2, Sparkles, Phone, ShieldCheck, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { VipConsultationModal } from "./VipConsultationModal";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const location = useLocation();
  const { cart, cartCount, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const cartDrawerRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    setCheckoutSuccess(false);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [location.pathname]);

  useEffect(() => {
    if (isCartOpen) {
      cartDrawerRef.current?.focus();
    }
  }, [isCartOpen]);

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0;
    return total + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    clearCart();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 3000);
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Top Bullion & Trust Ribbon (Trending Gold Hallmark & Rate Bar) */}
      <div className="bg-[#0e0e0e] border-b border-white/10 text-[11px] py-2 px-4 text-white/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap py-0.5">
            <span className="inline-flex items-center gap-1.5 text-[#E5C158] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE BULLION:</span>
            </span>
            <span className="text-white font-mono font-medium">22K Gold ₹6,890/g</span>
            <span className="text-white/30">|</span>
            <span className="text-white/80 font-mono">24K Gold ₹7,515/g</span>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/70">
              <ShieldCheck size={13} className="text-[#E5C158]" /> 100% BIS 916 Hallmarked & Insured
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={() => setIsVipModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[#E5C158] hover:text-white transition font-medium cursor-pointer"
            >
              <Calendar size={13} />
              <span>Book VIP Stylist</span>
            </button>
            <span className="text-white/30">|</span>
            <a
              href="tel:+919034196429"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#E5C158] transition"
            >
              <Phone size={12} className="text-[#E5C158]" />
              <span className="font-mono">+91 9034196429</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 sm:h-22">
            
            {/* Zone 1: Single text element wordmark */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] transition-transform group-hover:rotate-45 duration-300" strokeWidth={1.5} />
              <span className="text-xl sm:text-2xl tracking-[0.25em] font-serif uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
                AURIX GOLD
              </span>
            </Link>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={location.pathname === link.path ? "page" : undefined}
                  className={cn(
                    "relative text-[11px] uppercase tracking-[0.2em] font-medium transition-colors py-1 group",
                    location.pathname === link.path ? "text-[#D4AF37]" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D4AF37] transform origin-left transition-transform duration-300",
                      location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                type="button"
                onClick={() => setIsVipModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] uppercase tracking-widest font-medium text-[#E5C158] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-black transition duration-200"
              >
                <Sparkles size={12} />
                <span>VIP Concierge</span>
              </button>

              <Link
                to="/login"
                className="hidden md:inline-block text-[11px] uppercase tracking-widest text-white/80 hover:text-[#D4AF37] transition-colors"
              >
                Client Login
              </Link>

              {/* Shopping Bag Button */}
              <button
                type="button"
                className="min-h-[48px] px-3 py-2 flex items-center gap-2 cursor-pointer group rounded hover:bg-white/5 transition"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                aria-label="Open cart"
                aria-expanded={isCartOpen}
                aria-controls="cart-drawer"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-neutral-950 font-mono text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-[11px] uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
                  Bag ({cartCount})
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="lg:hidden min-w-[48px] min-h-[48px] flex items-center justify-center rounded border border-white/20 hover:bg-white/10 focus:outline-none transition"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-[#0d0d0d] border-b border-white/15 z-40 absolute w-full" aria-hidden={!isMobileMenuOpen}>
            <div className="px-6 py-5 space-y-2 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-3 py-3 text-xs uppercase tracking-widest font-medium transition-colors rounded",
                    location.pathname === link.path
                      ? "text-[#D4AF37] bg-white/10"
                      : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsVipModalOpen(true);
                  }}
                  className="w-full text-left px-3 py-3 text-xs uppercase tracking-widest font-medium text-[#E5C158] flex items-center gap-2 hover:bg-white/5 rounded"
                >
                  <Sparkles size={14} /> Book VIP Stylist Session
                </button>
                <Link
                  to="/login"
                  className="block px-3 py-3 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white"
                >
                  Client Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
            aria-hidden="true"
          />
          <div
            id="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            tabIndex={-1}
            ref={cartDrawerRef}
            onKeyDown={(event) => event.key === "Escape" && setIsCartOpen(false)}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0a0a0a] border-l border-white/15 shadow-2xl z-50 flex flex-col transform transition-transform duration-300"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                <h2 id="cart-title" className="font-serif text-2xl text-white italic">
                  Your Collection ({cartCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} className="text-white/70 hover:text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {checkoutSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-6 bg-[#D4AF37]/10">
                    <Diamond className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-2xl text-white italic mb-2">Order Confirmed</h3>
                  <p className="text-white/80 text-sm font-light max-w-xs leading-relaxed">
                    Thank you for your order. Your 22K hallmarked pieces are being safely prepared in our vault.
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center text-white/70 mt-16 animate-in fade-in">
                  <ShoppingBag className="w-14 h-14 mx-auto mb-4 text-[#D4AF37] opacity-30" />
                  <p className="uppercase tracking-widest text-xs text-white/80 mb-2">Your collection is empty</p>
                  <p className="text-xs text-white/50 max-w-xs mx-auto mb-6">
                    Explore our certified 22K gold necklaces, rings, and handcrafted bangles.
                  </p>
                  <Link
                    to="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center justify-center min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-white transition"
                  >
                    Browse Collections
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center bg-[#111111] p-4 border border-white/10 group hover:border-[#D4AF37]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-white">{item.name}</h3>
                        <div className="text-xs text-[#E5C158] font-mono tracking-wider">
                          {item.price} &times; {item.quantity}
                        </div>
                        <span className="text-[10px] text-white/50 block">BIS 916 Hallmarked · 100% Insured</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/40 hover:text-red-400 transition-colors p-2.5 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!checkoutSuccess && cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#080808]">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/70 block">Estimated Total</span>
                    <span className="text-[10px] text-emerald-400">Includes Free Insured Transit</span>
                  </div>
                  <span className="text-[#E5C158] font-mono font-bold tracking-wider text-xl">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/checkout"
                    className="w-full text-center bg-[#D4AF37] text-neutral-950 min-h-[48px] py-3.5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300 flex items-center justify-center"
                    onClick={() => setIsCartOpen(false)}
                    aria-label="Proceed to Checkout"
                  >
                    Proceed to Secure Checkout
                  </Link>
                  <Link
                    to="/cart"
                    className="w-full text-center border border-white/20 text-white min-h-[44px] py-2.5 font-medium uppercase tracking-[0.2em] text-[10px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 flex items-center justify-center"
                    onClick={() => setIsCartOpen(false)}
                  >
                    View Bag Details
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* VIP Modal */}
      <VipConsultationModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-[#040404] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 border-b border-white/10 pb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-5">
                <Diamond className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                <span className="text-xl tracking-[0.25em] font-serif uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
                  AURIX GOLD
                </span>
              </Link>
              <p className="text-white/80 text-xs font-light leading-relaxed max-w-xs mb-4">
                India's premier certified 22K BIS 916 hallmarked luxury gold jewellery atelier. Marrying ancient heritage goldsmithing with sleek modern silhouettes.
              </p>
              <div className="text-xs text-[#E5C158] flex items-center gap-1.5 font-medium">
                <ShieldCheck size={14} /> 100% Certified HUID Laser Hallmarking
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold mb-5">
                22K Collection
              </h2>
              <ul className="space-y-3">
                <li><Link to="/products" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">All 22K Masterpieces</Link></li>
                <li><Link to="/products" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">Bridal & High Jewellery</Link></li>
                <li><Link to="/product/gold-ring" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">22K Gold Rings</Link></li>
                <li><Link to="/product/classic-gold-necklace" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">Gold Necklaces & Chokers</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold mb-5">
                Customer Care & Concierge
              </h2>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">Contact Support</Link></li>
                <li>
                  <a href="tel:+919034196429" className="text-[#E5C158] hover:text-white text-xs transition-colors font-medium">
                    Phone: +91 9034196429
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsVipModalOpen(true)}
                    className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors text-left"
                  >
                    Book Virtual Stylist Appointment
                  </button>
                </li>
                <li><Link to="/shipping-returns" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">Insured Shipping & Returns</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-[#D4AF37] text-xs transition-colors">Our Goldsmith Heritage</Link></li>
              </ul>
            </div>

            <div className="col-span-1 flex flex-col">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold mb-5">
                The Aurix Gazette
              </h2>
              <p className="text-white/80 text-xs font-light leading-relaxed mb-4">
                Receive private invitations to preview limited edition 22K gold launches and daily bullion rate updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 border-b border-white/20 pb-2 group focus-within:border-[#D4AF37] transition-colors" aria-label="Newsletter subscription form">
                <label htmlFor="newsletter-email-layout" className="sr-only">Email address</label>
                <input
                  id="newsletter-email-layout"
                  name="newsletter-email-layout"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="bg-transparent w-full text-sm text-white placeholder-white/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-xs uppercase tracking-widest text-[#E5C158] hover:text-white transition-colors font-bold text-left min-h-[36px]"
                >
                  {newsletterSubmitted ? "Subscribed to Gazette" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/70 gap-6">
            <div>© 2026 Aurix Gold & Jewellery Ltd. All Rights Reserved.</div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Instagram page">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Facebook page">Facebook</a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Pinterest page">Pinterest</a>
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
