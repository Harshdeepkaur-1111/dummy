
import { Link, useNavigate } from "react-router-dom";
import { Star, ShieldCheck, Diamond, Truck, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Helmet } from "react-helmet-async";
import { classicNecklace } from "../assets/images";
import { categories, features, reviews } from "../data";
import { motion } from "motion/react";

export function Home() {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  const handleBuyNow = (product: any) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="w-full flex-grow flex flex-col">
      <Helmet>
        <title>Aurix - Gold Accessories - Premium Gold Collection</title>
        <link rel="canonical" href="https://aurix1121gold.netlify.app/" />
        <meta name="description" content="Shop Aurix's exclusive gold jewelry collection online. Discover stylish necklaces, rings, earrings, bracelets, and premium gold accessories for every occasion." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Aurix-Gold Collection",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvq90qggZGHhL8faO_ObbXO7joy1P0kuVSoXNAZxl7A&s=10",
              "description": "Discover Aurix's premium gold jewelry collection featuring elegant necklaces, rings, earrings, bracelets, and pendants. Crafted with quality and timeless style, our gold accessories are perfect for every occasion.",
              "brand": {
                "@type": "Brand",
                "name": "Aurix"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "0",
                "ratingCount": "1",
                "reviewCount": "1"
              },
              "review": {
                "@type": "Review",
                "name": "Priya Sharma",
                "reviewBody": "Beautiful gold jewelry with excellent quality. The necklace I ordered looks stunning and arrived on time.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "0"
                },
                "datePublished": "2026-06-17",
                "author": {"@type": "Person", "name": ""}
              }
            }
          `}
        </script>
      </Helmet>
      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden border-b border-white/10">
        {/* Hero Text Side */}
        <section className="w-full md:w-1/2 p-8 sm:p-16 flex flex-col justify-center relative z-10 bg-[#050505]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl mx-auto md:mx-0 relative z-10"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              <span className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37]">Est. 2023 | Crafted in India</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] mb-8 text-white">
              <span className="italic font-light">Premium</span> Gold<br className="hidden lg:block"/> 
              <span className="relative inline-block mt-2">Collections.<div className="absolute -bottom-2 left-0 w-3/4 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div></span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-12 font-light">
              Discover pieces that blend luxury and modern design. Whether you want to buy pure gold jewelry online or find minimalist 22k gold necklaces, Aurix elevates every style with our premium gold accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/products"
                className="group relative bg-[#D4AF37] text-black px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-medium overflow-hidden text-center"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">Shop Collection</span>
                <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="absolute inset-0 border border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link 
                to="/about"
                className="group border border-white/20 px-10 py-5 text-[10px] uppercase tracking-[0.2em] text-white hover:border-[#D4AF37]/50 transition-colors text-center relative overflow-hidden"
              >
                <span className="relative z-10 transition-colors group-hover:text-[#D4AF37]">The Aurix Story</span>
                <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Hero Image/Feature Side */}
        <section className="w-full md:w-1/2 relative bg-[#0a0a0a] flex items-center justify-center p-8 lg:p-12 border-t md:border-t-0 md:border-l border-white/10 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_60%)] pointer-events-none"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-full h-full border border-white/5 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-8 py-16 px-4 max-w-md mx-auto"
          >
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full border border-[#D4AF37]/50"></div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-[#D4AF37]/50"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-[#D4AF37]/50"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full border border-[#D4AF37]/50"></div>

            <div className="text-center">
              <div className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4">Featured Artifact</div>
              <div className="text-3xl font-serif italic text-white mb-2">Classic 22k Gold</div>
              <div className="text-white/70 font-mono text-xs tracking-widest">REF: 098-XN-22K</div>
            </div>
            
            {/* Elegant Image Container */}
            <div className="group relative my-6">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/5 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/20 relative">
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvq90qggZGHhL8faO_ObbXO7joy1P0kuVSoXNAZxl7A&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvq90qggZGHhL8faO_ObbXO7joy1P0kuVSoXNAZxl7A&s=10"} alt="minimalist 22k gold necklaces" width="800" height="800" fetchPriority="high" className="w-full h-full object-cover mix-blend-screen opacity-90 group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/10 animate-[spin_10s_linear_infinite] pointer-events-none"></div>
            </div>

            <div className="flex flex-col items-center gap-8 w-full mt-2">
              <div className="flex items-center gap-12 w-full justify-center">
                <div className="text-center">
                  <div className="text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1">Purity</div>
                  <div className="text-sm text-white font-light">22 Karat</div>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div className="text-center">
                  <div className="text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1">Weight</div>
                  <div className="text-sm text-white font-light">8.00g</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[400px]">
                <button 
                  onClick={() => addToCart({ id: 999, name: "Aurix Classic Gold Necklace", price: "₹149,999" })}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 group"
                  aria-label="Add Aurix Classic Gold Necklace to Cart"
                >
                  <span>Add to Cart</span>
                  <ShoppingBag className="w-3 h-3 group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => handleBuyNow({ id: 999, name: "Aurix Classic Gold Necklace", price: "₹149,999" })}
                  className="flex-1 flex items-center justify-center px-6 py-4 bg-[#D4AF37] text-black text-[9px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-all duration-300"
                  aria-label="Buy Aurix Classic Gold Necklace Now"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Luxury Marquee Bar */}
      <div className="w-full bg-[#D4AF37] py-3 overflow-hidden flex whitespace-nowrap items-center border-y border-[#c4a132]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium text-black gap-12"
        >
          {Array(8).fill("100% CERTIFIED 22K GOLD · FREE GLOBAL SHIPPING · LIFETIME WARRANTY · SECURE PACKAGING · ").join('')}
        </motion.div>
      </div>

      {/* Featured Categories */}
      <section className="py-32 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic font-light">Featured Gold Collections</h2>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                Explore our signature lines. Each piece is meticulously forged by master artisans using ethically sourced 22k gold, reflecting the pinnacle of modern luxury and heritage.
              </p>
            </div>
            <Link to="/products" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors">
              <span>View All Collections</span>
              <div className="w-8 h-[1px] bg-[#D4AF37] group-hover:bg-white group-hover:w-12 transition-all"></div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {categories.map((category, idx) => (
              <div 
                key={idx}
                
                
                
                
                onClick={() => navigate("/products")}
                className={`group cursor-pointer ${
                  idx === 0 ? "md:col-span-12 lg:col-span-7" : 
                  idx === 1 ? "md:col-span-6 lg:col-span-5" : 
                  idx === 2 ? "md:col-span-6 lg:col-span-4" : 
                  "md:col-span-6 lg:col-span-8"
                }`}
              >
                <div className="relative overflow-hidden mb-6 bg-[#0a0a0a] border border-white/5 h-[400px] sm:h-[500px]">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    width="600"
                    height="800"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                    <div className="text-[#D4AF37] mb-3 uppercase tracking-widest font-mono text-[9px]">0{idx + 1} / Collection</div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 italic">{category.title}</h3>
                    <p className="text-white/70 font-light text-xs leading-relaxed max-w-sm opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/5 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent to-[#D4AF37]/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic font-light">The Aurix Gold Standard</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {features.map((feature, idx) => (
              <div key={idx} className="relative group text-center md:text-left flex flex-col items-center md:items-start p-6 border border-transparent hover:border-white/5 transition-colors duration-500 hover:bg-white/[0.02]">
                <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] mb-8 border-b border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors pb-2">
                  <feature.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-4 italic">{feature.title}</h3>
                <p className="text-white/70 font-light text-xs leading-relaxed max-w-[250px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-[#050505] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-lg">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic font-light">Gold Client Testimonials</h2>
              <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 -left-12 -right-12 h-px bg-white/5 hidden md:block"></div>
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-10 lg:p-12 border border-white/5 relative group hover:border-[#D4AF37]/30 transition-colors duration-500">
                <div className="absolute top-0 right-10 w-px h-10 bg-[#D4AF37]/50"></div>
                <div className="flex text-[#D4AF37] mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current mx-0.5" />)}
                </div>
                <p className="text-sm font-serif italic text-white/70 mb-10 leading-[2] group-hover:text-white transition-colors">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#D4AF37]/30 group-hover:w-12 transition-all"></div>
                  <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans">{review.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cover bg-center bg-fixed relative text-center px-4" style={{ backgroundImage: `url(${classicNecklace})` }}>
        <div className="absolute inset-0 bg-[#050505]/95"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 border border-[#D4AF37]/30 rotate-45 flex items-center justify-center mb-12">
            <div className="w-8 h-8 border border-[#D4AF37]/20 flex items-center justify-center">
              <Diamond className="w-4 h-4 text-[#D4AF37] -rotate-45" />
            </div>
          </div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Join the Legacy</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 italic font-light">Experience Aurix Gold</h2>
          <p className="text-white/70 font-light text-base mb-12 max-w-xl mx-auto leading-relaxed">
            Discover a world of unrivaled craftsmanship. Browse our latest 22k gold collections and find the perfect signature piece designed exclusively for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/products"
              className="group relative bg-[#D4AF37] text-black px-12 py-5 text-[10px] uppercase tracking-[0.2em] font-medium overflow-hidden text-center"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Shop the Collection</span>
              <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <div className="absolute inset-0 border border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            <Link 
              to="/contact"
              className="group border border-white/20 px-12 py-5 text-[10px] uppercase tracking-[0.2em] text-white hover:border-[#D4AF37]/50 transition-colors text-center relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#D4AF37]">Request Custom Design</span>
              <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
