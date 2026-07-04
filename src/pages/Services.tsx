import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { products } from "../data";
import { useCart } from "../contexts/CartContext";

export function Services() {
  const { addToCart, setIsCartOpen } = useCart();
  
  const handleBuyNow = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen pb-24">
      <Helmet>
        <title>Aurix Gold Jewelry Services - Premium Collection</title>
        <link rel="canonical" href="/services" />
        <meta name="description" content="Discover Aurix's premium gold jewelry services featuring elegant necklaces, rings, earrings, bracelets, and handcrafted pendants. Shop timeless designs online." />
        <meta name="keywords" content="gold jewelry, necklaces, rings, earrings, bracelets, gold accessories, jewelry services" />
        <meta property="og:title" content="Aurix Gold Jewelry Services - Premium Collection" />
        <meta property="og:description" content="Discover Aurix's premium gold jewelry services featuring elegant necklaces, rings, earrings, bracelets, and handcrafted pendants." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-[#111] py-24 px-4 text-center mb-16 border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4">Our Services</div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">Premium Gold Jewelry Services</h1>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto"></div>
          <p className="mt-8 text-white/70 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Explore our premium jewelry services and collections. We offer handcrafted gold pieces designed to elevate your everyday and special moments. Each design is a testament to Aurix's unparalleled craftsmanship and quality.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-[#050505] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden border-b border-white/5 bg-[#0a0a0a]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  width="600"
                  height="800"
                  loading={idx < 4 ? "eager" : "lazy"}
                  fetchPriority={idx < 4 ? "high" : "auto"}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>

              <div className="flex flex-col flex-grow p-8 text-center relative z-10 bg-[#050505]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#D4AF37]"></div>
                
                <h2 className="font-serif text-xl sm:text-2xl text-white mb-3 italic">{product.name}</h2>
                
                <div className="text-[9px] text-[#D4AF37] uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-3">
                  <span>{product.material}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/30"></span>
                  <span>{product.weight}</span>
                </div>
                
                <p className="text-white/70 font-light text-xs line-clamp-2 mb-8 leading-[1.8] flex-grow">
                  {product.desc}
                </p>
                
                <div className="mb-6">
                  <span className="text-white font-mono text-lg tracking-widest">{product.price}</span>
                </div>

                <button
                  onClick={(e) => handleBuyNow(product, e)}
                  className="w-full border border-[#D4AF37]/50 text-white bg-transparent hover:bg-[#D4AF37]/10 py-3 font-light text-xs uppercase tracking-[0.3em] transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
