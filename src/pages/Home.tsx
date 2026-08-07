import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Star,
  Diamond,
  ShoppingBag,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useCart } from "../contexts/CartContext";
import OptimizedImage from "../components/OptimizedImage";
import LazyMotion from "../components/LazyMotion";

import { categories, features, reviews } from "../data";
import { getOptimizedImage } from "../lib/utils";

// Gold necklace image
const necklaceImage =
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85";

// CTA image
const ctaImage =
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80";

export function Home() {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  const product = {
    id: 999,
    name: "Aurix Classic Gold Necklace",
    price: "₹149,999",
  };

  const handleBuyNow = () => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="w-full flex-grow flex flex-col bg-[#050505]">

        {/* ================= SEO ================= */}
        <Helmet>
          <title>Aurix - Premium Gold Jewelry & Accessories</title>

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/"
          />

          <meta
            name="description"
            content="Shop Aurix's premium gold jewelry collection online. Discover elegant 22k gold necklaces, rings, earrings and bracelets."
          />

          <meta
            property="og:title"
            content="Aurix - Premium Gold Jewelry"
          />

          <meta
            property="og:description"
            content="Discover premium 22k gold jewelry from Aurix."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content="https://aurix-gold.vercel.app/"
          />

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          {/* Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aurix",
              url: "https://aurix-gold.vercel.app/",
              description:
                "Premium gold jewelry and luxury accessories online",
            })}
          </script>
        </Helmet>

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <main className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] border-b border-white/10">

          {/* ================= LEFT SIDE ================= */}

          <section className="w-full md:w-1/2 min-h-[650px] md:min-h-0 p-8 sm:p-12 lg:p-16 flex items-center relative bg-[#050505]">

            {/* Soft background glow */}
            <div
              className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[60px] pointer-events-none"
              aria-hidden="true"
            />

            <LazyMotion
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="max-w-xl mx-auto md:mx-0 relative z-10"
            >

              {/* Small heading */}
              <div className="mb-7 flex items-center gap-4">

                <div className="h-px w-14 bg-[#D4AF37]" />

                <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  Est. 2023 | Crafted in India
                </span>

              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.05] mb-7 text-white">

                <span className="italic font-light">
                  Premium
                </span>{" "}

                Gold

                <br />

                <span className="relative inline-block mt-2">
                  Collections.

                  <span
                    className="absolute -bottom-2 left-0 w-3/4 h-px bg-[#D4AF37]"
                    aria-hidden="true"
                  />
                </span>

              </h1>

              {/* Description */}
              <p className="text-white/65 text-base md:text-lg max-w-md leading-relaxed mb-10 font-light">
                Discover pieces that blend luxury and modern design.
                Explore elegant 22k gold necklaces, rings, earrings
                and premium gold accessories crafted for timeless style.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/products"
                  className="group relative bg-[#D4AF37] text-black px-9 py-4 text-[10px] uppercase tracking-[0.2em] font-medium overflow-hidden text-center"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    Shop Collection
                  </span>

                  <span
                    className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/about"
                  className="group border border-white/20 px-9 py-4 text-[10px] uppercase tracking-[0.2em] text-white hover:border-[#D4AF37] transition-colors text-center"
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors">
                    The Aurix Story
                  </span>
                </Link>

              </div>

            </LazyMotion>

          </section>


          {/* ================= RIGHT SIDE ================= */}

          <section className="w-full md:w-1/2 relative bg-[#090909] flex items-center justify-center p-6 sm:p-8 lg:p-12 border-t md:border-t-0 md:border-l border-white/10 overflow-hidden">

            {/* Gold radial glow */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.35) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <LazyMotion
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative z-10 w-full max-w-lg border border-white/10 bg-[#080808] flex flex-col items-center justify-center gap-6 py-10 px-5"
            >

              {/* Corner details */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full border border-[#D4AF37]/60" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-[#D4AF37]/60" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-[#D4AF37]/60" />
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full border border-[#D4AF37]/60" />


              {/* Product heading */}
              <div className="text-center">

                <div className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
                  Featured Artifact
                </div>

                <div className="text-2xl sm:text-3xl font-serif italic text-white mb-2">
                  Classic 22k Gold
                </div>

                <div className="text-white/50 font-mono text-[10px] tracking-widest">
                  REF: 098-XN-22K
                </div>

              </div>


              {/* ================= NECKLACE IMAGE ================= */}

              <div className="relative my-3">

                <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-white/10 p-2 bg-[#111111]">

                  <div className="w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/20 bg-black">

                    <img
                      src={necklaceImage}
                      alt="Classic 22k gold necklace"
                      width={900}
                      height={900}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

                {/* Outer ring */}
                <div
                  className="absolute -inset-3 rounded-full border border-[#D4AF37]/15 pointer-events-none"
                  aria-hidden="true"
                />

              </div>


              {/* Product details */}
              <div className="flex flex-col items-center gap-6 w-full">

                <div className="flex items-center gap-10 justify-center">

                  <div className="text-center">
                    <div className="text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1">
                      Purity
                    </div>

                    <div className="text-sm text-white font-light">
                      22 Karat
                    </div>
                  </div>

                  <div className="h-8 w-px bg-white/10" />

                  <div className="text-center">
                    <div className="text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1">
                      Weight
                    </div>

                    <div className="text-sm text-white font-light">
                      8.00g
                    </div>
                  </div>

                </div>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[420px]">

                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-4 border border-white/15 text-[9px] uppercase tracking-[0.2em] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                    aria-label="Add Aurix Classic Gold Necklace to Cart"
                  >
                    Add to Cart

                    <ShoppingBag className="w-3 h-3" />
                  </button>


                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="flex-1 flex items-center justify-center px-5 py-4 bg-[#D4AF37] text-black text-[9px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-all"
                    aria-label="Buy Aurix Classic Gold Necklace Now"
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            </LazyMotion>

          </section>

        </main>


        {/* =====================================================
            MARQUEE
        ===================================================== */}

        <div className="w-full bg-[#D4AF37] py-3 overflow-hidden flex whitespace-nowrap items-center border-y border-[#c4a132]">

          <LazyMotion
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium text-black gap-12"
          >
            {Array(4)
              .fill(
                "100% CERTIFIED 22K GOLD · FREE GLOBAL SHIPPING · LIFETIME WARRANTY · SECURE PACKAGING · "
              )
              .join("")}
          </LazyMotion>

        </div>


        {/* =====================================================
            FEATURED COLLECTIONS
        ===================================================== */}

        <section className="py-24 lg:py-32 bg-[#050505] border-b border-white/5 relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">

              <div className="max-w-xl">

                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic font-light">
                  Featured Gold Collections
                </h2>

                <p className="text-white/60 font-light text-sm leading-relaxed">
                  Explore our signature lines. Discover elegant gold
                  jewelry designed to combine modern luxury with
                  timeless craftsmanship.
                </p>

              </div>

              <Link
                to="/products"
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors"
              >
                View All Collections

                <span className="w-8 h-px bg-[#D4AF37] group-hover:bg-white group-hover:w-12 transition-all" />
              </Link>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

              {categories.map((category, idx) => (

                <div
                  key={idx}
                  onClick={() => navigate("/products")}
                  className={`group cursor-pointer ${
                    idx === 0
                      ? "md:col-span-12 lg:col-span-7"
                      : idx === 1
                      ? "md:col-span-6 lg:col-span-5"
                      : idx === 2
                      ? "md:col-span-6 lg:col-span-4"
                      : "md:col-span-6 lg:col-span-8"
                  }`}
                >

                  <div className="relative overflow-hidden mb-6 bg-[#0a0a0a] border border-white/5 h-[380px] sm:h-[480px]">

                    <OptimizedImage
                      src={getOptimizedImage(category.image)}
                      alt={category.title}
                      width={600}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />


                    <div className="absolute bottom-0 left-0 p-7 w-full">

                      <div className="text-[#D4AF37] mb-3 uppercase tracking-widest font-mono text-[9px]">
                        0{idx + 1} / Collection
                      </div>

                      <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 italic">
                        {category.title}
                      </h3>

                      <p className="text-white/70 font-light text-xs leading-relaxed max-w-sm">
                        {category.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY CHOOSE AURIX
        ===================================================== */}

        <section className="py-24 lg:py-32 bg-[#0a0a0a] border-b border-white/5">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-20">

              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic font-light">
                The Aurix Gold Standard
              </h2>

              <div className="w-12 h-px bg-[#D4AF37] mx-auto" />

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              {features.map((feature, idx) => (

                <div
                  key={idx}
                  className="relative group text-center md:text-left flex flex-col items-center md:items-start p-6 border border-transparent hover:border-white/5 transition-colors"
                >

                  <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] mb-7 border-b border-[#D4AF37]/30">

                    <feature.icon className="w-6 h-6 stroke-[1.5]" />

                  </div>

                  <h3 className="font-serif text-xl text-white mb-4 italic">
                    {feature.title}
                  </h3>

                  <p className="text-white/60 font-light text-xs leading-relaxed max-w-[250px]">
                    {feature.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            REVIEWS
        ===================================================== */}

        <section className="py-24 lg:py-32 bg-[#050505] border-b border-white/5">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-16">

              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic font-light">
                Gold Client Testimonials
              </h2>

              <div className="w-12 h-px bg-[#D4AF37]" />

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {reviews.map((review, idx) => (

                <div
                  key={idx}
                  className="bg-[#0a0a0a] p-8 lg:p-10 border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
                >

                  <div className="flex text-[#D4AF37] mb-7">

                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-current mx-0.5"
                      />
                    ))}

                  </div>

                  <p className="text-sm font-serif italic text-white/65 mb-8 leading-[1.9]">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4">

                    <div className="w-8 h-px bg-[#D4AF37]/50" />

                    <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      {review.name}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="py-24 lg:py-32 bg-cover bg-center relative text-center px-4"
          style={{
            backgroundImage: `url(${ctaImage})`,
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#050505]/90" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">

            <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center mb-10">

              <div className="w-8 h-8 border border-[#D4AF37]/30 flex items-center justify-center">

                <Diamond className="w-4 h-4 text-[#D4AF37] -rotate-45" />

              </div>

            </div>


            <p className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">
              Join the Legacy
            </p>


            <h2 className="font-serif text-5xl md:text-6xl text-white mb-7 italic font-light">
              Experience Aurix Gold
            </h2>


            <p className="text-white/65 font-light text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Discover a world of unrivaled craftsmanship.
              Browse our latest 22k gold collections and find
              the perfect signature piece designed for you.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/products"
                className="bg-[#D4AF37] text-black px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors text-center"
              >
                Shop the Collection
              </Link>


              <Link
                to="/contact"
                className="border border-white/20 px-10 py-5 text-[10px] uppercase tracking-[0.2em] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-center"
              >
                Request Custom Design
              </Link>

            </div>

          </div>

        </section>

      </div>
    </Suspense>
  );
}