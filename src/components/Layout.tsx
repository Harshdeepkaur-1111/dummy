import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X, Diamond, ShoppingBag, Trash2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart, cartCount, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const cartDrawerRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
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
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
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

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-2xl sm:text-3xl tracking-[0.3em] font-serif uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">AURIX</span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Primary navigation" className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={location.pathname === link.path ? "page" : undefined}
                  className={cn(
                    "relative text-[11px] uppercase tracking-[0.2em] font-medium transition-colors group",
                    location.pathname === link.path ? "text-[#D4AF37]" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-full h-[1px] bg-[#D4AF37] transform origin-left transition-transform duration-300",
                    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setIsCartOpen(true)}
                aria-label="Open cart"
                aria-expanded={isCartOpen}
                aria-controls="cart-drawer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
                <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">Cart ({cartCount})</span>
              </button>
            </div>

            {/* Mobile Menu & Cart Buttons */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                type="button"
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setIsCartOpen(true)}
                aria-label="Open cart"
                aria-expanded={isCartOpen}
                aria-controls="cart-drawer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
                <span className="text-[11px] text-[#D4AF37] group-hover:text-white transition-colors">({cartCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white/5 focus:outline-none"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-[#111] border-b border-white/10 z-40 absolute w-full" aria-hidden={!isMobileMenuOpen}>
            <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-3 py-3 text-[11px] uppercase tracking-widest font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-[#D4AF37] bg-white/5"
                      : "text-white/70 hover:text-[#D4AF37] hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
            aria-hidden="true"
          ></div>
          <div id="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" tabIndex={-1} ref={cartDrawerRef} onKeyDown={(event) => event.key === 'Escape' && setIsCartOpen(false)} className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#111] border-l border-white/10 shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 id="cart-title" className="font-serif text-2xl text-white italic">Your Cart</h2>
              <button 
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} className="text-white/70 hover:text-white" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {checkoutSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-6 bg-[#D4AF37]/5">
                    <Diamond className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-2xl text-white italic mb-2">Purchase Successful</h3>
                  <p className="text-white/70 text-sm font-light">Thank you for your order. Your luxury pieces will be prepared shortly.</p>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center text-white/70 mt-12 animate-in fade-in">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-6 opacity-20" />
                  <p className="uppercase tracking-widest text-[11px]">Your collection is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-[#050505] p-4 border border-white/5 group hover:border-[#D4AF37]/30 transition-colors">
                      <div>
                        <h3 className="text-sm text-white mb-2">{item.name}</h3>
                        <div className="text-xs text-[#D4AF37] font-mono tracking-widest">{item.price} &times; {item.quantity}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/20 hover:text-red-400 transition-colors bg-white/5 p-2 rounded-full opacity-0 group-hover:opacity-100"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!checkoutSuccess && cart.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-[#050505]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-white/70">Subtotal</span>
                  <span className="text-[#D4AF37] font-mono tracking-widest text-lg">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <button 
                  className="w-full bg-[#947100] text-black py-5 font-medium uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-colors duration-300"
                  onClick={handleCheckout}
                  aria-label="Proceed to Checkout"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 border-b border-white/5 pb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <Diamond className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                <span className="text-xl tracking-[0.3em] font-serif uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">AURIX</span>
              </Link>
              <p className="text-white/70 text-xs font-light leading-relaxed max-w-xs">
                Crafting timeless elegance since 2023. We specialize in pure 22K gold jewelry that marries traditional artistry with modern sophistication.
              </p>
            </div>
            
            <div className="col-span-1">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Collections</h2>
              <ul className="space-y-4">
                <li><Link to="/products" className="text-white/70 hover:text-white text-xs transition-colors">Bridal Collection</Link></li>
                <li><Link to="/products" className="text-white/70 hover:text-white text-xs transition-colors">Everyday Essentials</Link></li>
                <li><Link to="/products" className="text-white/70 hover:text-white text-xs transition-colors">Men's Gold Rings</Link></li>
                <li><Link to="/products" className="text-white/70 hover:text-white text-xs transition-colors">Limited Editions</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Customer Care</h2>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-white/70 hover:text-white text-xs transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-white text-xs transition-colors">Our Story</Link></li>
                <li><Link to="/blog" className="text-white/70 hover:text-white text-xs transition-colors">Jewelry Care Guide</Link></li>
                <li><Link to="/shipping-returns" className="text-white/70 hover:text-white text-xs transition-colors">Shipping & Returns</Link></li>
              </ul>
            </div>

            <div className="col-span-1 flex flex-col">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Newsletter</h2>
              <p className="text-white/70 text-xs font-light leading-relaxed mb-4">
                Subscribe to receive updates on new collections and exclusive access to limited pieces.
              </p>
              <form className="flex flex-col gap-3 border-b border-white/20 pb-2 group focus-within:border-[#D4AF37] transition-colors" aria-label="Newsletter subscription form">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input 
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent w-full text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
                />
                <button type="submit" className="text-[10px] uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors focus:ring-2 focus:ring-[#D4AF37] focus:outline-none">Submit</button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/70 gap-6">
            <div>© 2026 Aurix Jewelry. All Rights Reserved.</div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Instagram page">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Facebook page">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Twitter page">Twitter</a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Visit our Pinterest page">Pinterest</a>
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy</Link>
              <span>|</span>
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
