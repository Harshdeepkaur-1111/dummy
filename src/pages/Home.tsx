import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Diamond,
  Instagram,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useCart } from "../contexts/CartContext";
import OptimizedImage from "../components/OptimizedImage";
import LazyMotion from "../components/LazyMotion";

import { categories, features, reviews } from "../data";
import { getOptimizedImage } from "../lib/utils";

/* =========================================================
   HERO PRODUCTS
========================================================= */

const heroProducts = [
  {
    src: "/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp",
    alt: "Classic 22K gold necklace from Aurix",
    name: "Classic 22K Gold Necklace",
    ref: "098-XN-22K",
    purity: "22 Karat",
    weight: "8.00g",
    price: "₹149,999",
  },
  {
    src: "/images/diamond_gold_ring_1781762677970-C24oRI-9.webp",
    alt: "Diamond gold ring from Aurix",
    name: "Diamond Gold Ring",
    ref: "098-RG-22K",
    purity: "22 Karat",
    weight: "4.20g",
    price: "₹89,999",
  },
  {
    src: "/images/modern_gold_bracelet_1781762704753-DMbwxbLT.webp",
    alt: "Modern gold bracelet from Aurix",
    name: "Modern Gold Bracelet",
    ref: "098-BR-22K",
    purity: "22 Karat",
    weight: "7.50g",
    price: "₹119,999",
  },
];

const ctaImage =
  "/images/signature_gold_pendant_1781762720597-Bwiy23va.webp";

/* =========================================================
   HOME
========================================================= */

export function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  const { addToCart, setIsCartOpen } = useCart();

  const currentProduct = heroProducts[heroIndex];

  /* =======================================================
     HERO SLIDER
  ======================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroProducts.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  /* =======================================================
     CART
  ======================================================= */

  const addCurrentProduct = () => {
    addToCart({
      id: heroIndex + 999,
      name: currentProduct.name,
      price: currentProduct.price,
    });
  };

  const buyCurrentProduct = () => {
    addCurrentProduct();
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
      <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

        {/* =====================================================
            SEO
        ===================================================== */}

        <Helmet>
          <title>
            Aurix | Premium 22K Gold Jewellery Crafted in India
          </title>

          <meta
            name="description"
            content="Discover Aurix premium 22K gold jewellery crafted in India. Explore elegant gold necklaces, rings, earrings and bracelets designed for timeless luxury."
          />

          <meta
            name="robots"
            content="index, follow"
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/"
          />

          <meta
            property="og:title"
            content="Aurix | Premium 22K Gold Jewellery"
          />

          <meta
            property="og:description"
            content="Discover timeless 22K gold jewellery crafted in India by Aurix."
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
            property="og:site_name"
            content="Aurix"
          />

          <meta
            property="og:image"
            content="https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp"
          />

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Aurix | Premium 22K Gold Jewellery"
          />

          <meta
            name="twitter:description"
            content="Explore elegant 22K gold jewellery crafted in India by Aurix."
          />

          <meta
            name="twitter:image"
            content="https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp"
          />

          {/* Organization Schema */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aurix",
              url: "https://aurix-gold.vercel.app/",
              logo: "https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp",
              description:
                "Premium 22K gold jewellery brand crafted in India.",
            })}
          </script>

          {/* Website Schema */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aurix",
              url: "https://aurix-gold.vercel.app/",
              description:
                "Premium 22K gold jewellery and luxury accessories from Aurix.",
            })}
          </script>

          {/* Product Schema */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: currentProduct.name,
              image: [
                `https://aurix-gold.vercel.app${currentProduct.src}`,
              ],
              description: `Premium ${currentProduct.purity} gold jewellery from Aurix.`,
              brand: {
                "@type": "Brand",
                name: "Aurix",
              },
              offers: {
                "@type": "Offer",
                url: "https://aurix-gold.vercel.app/products",
                priceCurrency: "INR",
                price: currentProduct.price.replace(/[₹,]/g, ""),
                availability:
                  "https://schema.org/InStock",
              },
            })}
          </script>
        </Helmet>

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[76px] flex items-center justify-between">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Aurix Home"
            >
              <span className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center">
                <span className="w-3 h-3 border border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors" />
              </span>

              <span className="font-serif text-xl sm:text-2xl tracking-[0.28em] text-[#D4AF37]">
                AURIX
              </span>
            </Link>

            {/* Navigation */}

            <nav className="hidden md:flex items-center gap-9">

              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["About", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="relative text-[10px] uppercase tracking-[0.22em] text-white/60 hover:text-[#D4AF37] transition-colors"
                >
                  {label}
                </Link>
              ))}

            </nav>

            {/* Cart */}

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="w-4 h-4" />

              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em]">
                Cart
              </span>
            </button>

          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <main className="pt-[76px]">

          <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden">

            {/* Background glow */}

            <div
              className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.06] blur-[130px]"
              aria-hidden="true"
            />

            <div
              className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/[0.025] blur-[100px]"
              aria-hidden="true"
            />

            {/* Hero content */}

            <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 py-16 lg:py-20">

              <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                {/* LEFT */}

                <LazyMotion
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="relative z-10"
                >

                  <div className="flex items-center gap-4 mb-8">

                    <div className="w-12 h-px bg-[#D4AF37]" />

                    <span className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37]">
                      Est. 2023 · Crafted in India
                    </span>

                  </div>

                  <h1 className="font-serif text-[58px] sm:text-[76px] lg:text-[92px] leading-[0.9] tracking-[-0.04em] font-light">

                    <span className="italic">
                      The Art
                    </span>

                    <br />

                    <span>
                      of Pure
                    </span>

                    <br />

                    <span className="text-[#D4AF37] italic">
                      Gold.
                    </span>

                  </h1>

                  <div className="w-28 h-px bg-[#D4AF37] mt-9 mb-7" />

                  <p className="max-w-lg text-white/55 text-sm sm:text-base leading-[1.9] font-light">
                    Discover timeless 22K gold jewellery where
                    traditional Indian craftsmanship meets
                    modern elegance.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-10">

                    <Link
                      to="/products"
                      className="group bg-[#D4AF37] text-black px-8 py-4 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.25em] font-medium hover:bg-white transition-colors"
                    >
                      Explore Collection

                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/about"
                      className="border border-white/15 px-8 py-4 text-[9px] uppercase tracking-[0.25em] text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-center"
                    >
                      Discover Aurix
                    </Link>

                  </div>

                  {/* Small stats */}

                  <div className="flex gap-10 mt-14 pt-7 border-t border-white/[0.08] max-w-lg">

                    <div>
                      <div className="font-serif text-xl text-white">
                        22K
                      </div>

                      <div className="text-[8px] uppercase tracking-[0.25em] text-white/40 mt-1">
                        Gold Purity
                      </div>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div>
                      <div className="font-serif text-xl text-white">
                        2023
                      </div>

                      <div className="text-[8px] uppercase tracking-[0.25em] text-white/40 mt-1">
                        Established
                      </div>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div>
                      <div className="font-serif text-xl text-white">
                        India
                      </div>

                      <div className="text-[8px] uppercase tracking-[0.25em] text-white/40 mt-1">
                        Crafted
                      </div>
                    </div>

                  </div>

                </LazyMotion>

                {/* RIGHT PRODUCT */}

                <LazyMotion
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="relative"
                >

                  {/* Product background */}

                  <div className="absolute inset-5 border border-[#D4AF37]/10 pointer-events-none" />

                  <div className="relative min-h-[580px] sm:min-h-[650px] flex items-center justify-center bg-[#090909] border border-white/[0.08] overflow-hidden">

                    {/* Editorial number */}

                    <div className="absolute top-7 left-7 text-[9px] font-mono tracking-[0.3em] text-white/25">
                      01 / 03
                    </div>

                    {/* Featured label */}

                    <div className="absolute top-7 right-7 text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]">
                      Featured Piece
                    </div>

                    {/* Glow */}

                    <div
                      className="absolute w-[420px] h-[420px] rounded-full bg-[#D4AF37]/[0.08] blur-[80px]"
                      aria-hidden="true"
                    />

                    {/* Image */}

                    <div className="relative w-[78%] h-[430px] sm:h-[500px] flex items-center justify-center">

                      {heroProducts.map((image, index) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          width="900"
                          height="900"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${
                            index === heroIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                        />
                      ))}

                    </div>

                    {/* Product bottom info */}

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pt-24 px-7 pb-7">

                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                        <div>

                          <div className="text-[8px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
                            {currentProduct.ref}
                          </div>

                          <h2 className="font-serif text-2xl sm:text-3xl italic text-white">
                            {currentProduct.name}
                          </h2>

                          <div className="flex gap-6 mt-4">

                            <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                              {currentProduct.purity}
                            </span>

                            <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                              {currentProduct.weight}
                            </span>

                          </div>

                        </div>

                        <div className="text-right">

                          <div className="text-[8px] uppercase tracking-[0.25em] text-white/40 mb-1">
                            Starting From
                          </div>

                          <div className="font-serif text-xl text-[#D4AF37]">
                            {currentProduct.price}
                          </div>

                        </div>

                      </div>

                      <div className="flex gap-2 mt-6">

                        {heroProducts.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setHeroIndex(index)}
                            aria-label={`Show product ${index + 1}`}
                            className={`h-px transition-all duration-500 ${
                              index === heroIndex
                                ? "w-12 bg-[#D4AF37]"
                                : "w-5 bg-white/20"
                            }`}
                          />
                        ))}

                      </div>

                    </div>

                  </div>

                </LazyMotion>

              </div>

            </div>
          </section>

          {/* ===================================================
              ANNOUNCEMENT
          =================================================== */}

          <div className="border-y border-[#D4AF37]/20 bg-[#D4AF37] text-black overflow-hidden">

            <div className="py-3 flex whitespace-nowrap">

              <div className="flex shrink-0 animate-[marquee_25s_linear_infinite]">

                {Array(5)
                  .fill(
                    "22K GOLD · PREMIUM CRAFTSMANSHIP · SECURE DELIVERY · TIMELESS DESIGN · CRAFTED IN INDIA · "
                  )
                  .join("")}

              </div>

            </div>

          </div>

          {/* ===================================================
              THE AURIX EDIT
          =================================================== */}

          <section className="py-24 sm:py-28 lg:py-36 bg-[#050505]">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

                <div>

                  <div className="flex items-center gap-3 mb-5">

                    <span className="w-8 h-px bg-[#D4AF37]" />

                    <span className="text-[8px] uppercase tracking-[0.45em] text-[#D4AF37]">
                      The Collection
                    </span>

                  </div>

                  <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light italic">
                    The Aurix Edit
                  </h2>

                </div>

                <Link
                  to="/products"
                  className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-white/60 hover:text-[#D4AF37] transition-colors"
                >
                  View All Pieces

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                {heroProducts.map((item, index) => (

                  <Link
                    to="/products"
                    key={item.src}
                    className="group"
                  >

                    <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b] border border-white/[0.07]">

                      <img
                        src={item.src}
                        alt={item.alt}
                        width="900"
                        height="1100"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                      <div className="absolute top-5 left-5 text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                        0{index + 1}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">

                        <div className="text-[8px] uppercase tracking-[0.3em] text-white/40 mb-2">
                          22K Gold
                        </div>

                        <h3 className="font-serif text-2xl italic">
                          {item.name}
                        </h3>

                        <div className="flex justify-between items-center mt-4">

                          <span className="text-sm text-[#D4AF37]">
                            {item.price}
                          </span>

                          <span className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                ))}

              </div>

            </div>
          </section>

          {/* ===================================================
              COLLECTIONS
          =================================================== */}

          <section className="py-24 sm:py-28 lg:py-36 bg-[#090909] border-y border-white/[0.06]">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="max-w-2xl mb-16">

                <div className="text-[8px] uppercase tracking-[0.45em] text-[#D4AF37] mb-5">
                  Explore Aurix
                </div>

                <h2 className="font-serif text-5xl sm:text-6xl font-light italic">
                  Collections made
                  <br />
                  <span className="text-[#D4AF37]">
                    to be remembered.
                  </span>
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                {categories.map((category, index) => (

                  <Link
                    key={index}
                    to="/products"
                    className={`group ${
                      index === 0 ? "md:col-span-2" : ""
                    }`}
                  >

                    <div
                      className={`relative overflow-hidden bg-[#050505] border border-white/[0.07] ${
                        index === 0
                          ? "h-[520px]"
                          : "h-[420px]"
                      }`}
                    >

                      <OptimizedImage
                        src={getOptimizedImage(category.image)}
                        alt={`${category.title} gold jewellery collection`}
                        width={1000}
                        height={800}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      <div className="absolute top-6 left-6">

                        <span className="text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]">
                          0{index + 1} / Collection
                        </span>

                      </div>

                      <div className="absolute bottom-7 left-7 right-7">

                        <h3 className="font-serif text-3xl sm:text-4xl italic mb-3">
                          {category.title}
                        </h3>

                        <p className="max-w-lg text-white/60 text-xs leading-relaxed">
                          {category.description}
                        </p>

                        <div className="mt-6 flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                          Explore Collection
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                        </div>

                      </div>

                    </div>

                  </Link>

                ))}

              </div>

            </div>
          </section>

          {/* ===================================================
              AURIX STORY
          =================================================== */}

          <section className="py-24 sm:py-28 lg:py-36 bg-[#050505]">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                <div className="relative">

                  <div className="absolute -top-5 -left-5 w-24 h-24 border-l border-t border-[#D4AF37]/40" />

                  <div className="absolute -bottom-5 -right-5 w-24 h-24 border-r border-b border-[#D4AF37]/40" />

                  <div className="aspect-[4/5] bg-[#0b0b0b] overflow-hidden">

                    <img
                      src={ctaImage}
                      alt="Aurix gold jewellery craftsmanship"
                      width="1200"
                      height="1500"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                    />

                  </div>

                </div>

                <div>

                  <div className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-7">
                    The Aurix Story
                  </div>

                  <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95]">

                    Born in India.
                    <br />

                    <span className="italic text-[#D4AF37]">
                      Made to last.
                    </span>

                  </h2>

                  <div className="w-16 h-px bg-[#D4AF37] my-8" />

                  <p className="text-white/55 text-sm leading-[2] max-w-lg">
                    Aurix brings together the richness of Indian
                    craftsmanship and the simplicity of modern
                    luxury. Every piece is designed with an
                    appreciation for detail, proportion and
                    timeless beauty.
                  </p>

                  <p className="text-white/55 text-sm leading-[2] max-w-lg mt-5">
                    From everyday signatures to pieces created
                    for unforgettable occasions, our jewellery
                    is made to become part of your story.
                  </p>

                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-4 mt-9 text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]"
                  >
                    Read Our Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>

                </div>

              </div>

            </div>
          </section>

          {/* ===================================================
              GOLD STANDARD
          =================================================== */}

          <section className="py-24 sm:py-28 lg:py-36 bg-[#0a0a0a] border-y border-white/[0.06]">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="text-center mb-20">

                <div className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-5">
                  Why Aurix
                </div>

                <h2 className="font-serif text-5xl sm:text-6xl italic font-light">
                  The Aurix Standard
                </h2>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">

                {features.map((feature, index) => {

                  const FeatureIcon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="group p-8 lg:p-10 border border-white/[0.06] hover:border-[#D4AF37]/30 transition-colors"
                    >

                      <div className="flex justify-between items-start mb-10">

                        <span className="font-serif text-4xl text-white/[0.08] group-hover:text-[#D4AF37]/30 transition-colors">
                          0{index + 1}
                        </span>

                        <FeatureIcon
                          className="w-5 h-5 text-[#D4AF37] stroke-[1.2]"
                          aria-hidden="true"
                        />

                      </div>

                      <h3 className="font-serif text-2xl italic mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-white/45 text-xs leading-[1.9]">
                        {feature.desc}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>
          </section>

          {/* ===================================================
              TESTIMONIALS
          =================================================== */}

          <section className="py-24 sm:py-28 lg:py-36 bg-[#050505]">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

                <div>

                  <div className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-5">
                    Client Stories
                  </div>

                  <h2 className="font-serif text-5xl sm:text-6xl italic font-light">
                    Words from those
                    <br />
                    who wear Aurix.
                  </h2>

                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {reviews.map((review, index) => (

                  <article
                    key={index}
                    className="relative p-8 sm:p-10 bg-[#090909] border border-white/[0.07] hover:border-[#D4AF37]/25 transition-colors"
                  >

                    <div className="absolute top-6 right-7 font-serif text-5xl text-[#D4AF37]/10">
                      “
                    </div>

                    <div className="flex mb-7">

                      {Array.from({
                        length: review.rating || 5,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-[#D4AF37] fill-current mr-1"
                          aria-hidden="true"
                        />
                      ))}

                    </div>

                    <p className="font-serif italic text-white/65 text-sm leading-[1.9] min-h-[120px]">
                      “{review.text}”
                    </p>

                    <div className="flex items-center gap-3 mt-8">

                      <span className="w-8 h-px bg-[#D4AF37]" />

                      <span className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                        {review.name}
                      </span>

                    </div>

                  </article>

                ))}

              </div>

            </div>
          </section>

          {/* ===================================================
              INSTAGRAM STYLE GALLERY
          =================================================== */}

          <section className="py-24 bg-[#090909] border-y border-white/[0.06]">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="text-center mb-12">

                <Instagram className="w-5 h-5 text-[#D4AF37] mx-auto mb-5" />

                <div className="text-[8px] uppercase tracking-[0.45em] text-white/40">
                  Follow the Aurix World
                </div>

                <h2 className="font-serif text-4xl sm:text-5xl italic mt-4">
                  @aurixgold
                </h2>

              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

                {[
                  heroProducts[0].src,
                  heroProducts[1].src,
                  ctaImage,
                  heroProducts[2].src,
                ].map((image, index) => (

                  <div
                    key={image}
                    className="aspect-square overflow-hidden bg-[#050505]"
                  >

                    <img
                      src={image}
                      alt={`Aurix gold jewellery ${index + 1}`}
                      width="700"
                      height="700"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />

                  </div>

                ))}

              </div>

            </div>
          </section>

          {/* ===================================================
              FINAL CTA
          =================================================== */}

          <section className="relative py-32 sm:py-40 overflow-hidden">

            <img
              src={ctaImage}
              alt=""
              width="1600"
              height="900"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-[#050505]/90"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

              <div className="w-12 h-12 mx-auto border border-[#D4AF37]/40 rotate-45 flex items-center justify-center mb-10">

                <Diamond
                  className="w-5 h-5 text-[#D4AF37] -rotate-45"
                  aria-hidden="true"
                />

              </div>

              <div className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">
                Your Signature Awaits
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl italic font-light">
                Find the piece
                <br />
                <span className="text-[#D4AF37]">
                  that becomes yours.
                </span>
              </h2>

              <p className="max-w-xl mx-auto text-white/50 text-sm leading-[1.9] mt-7">
                Explore our collection of timeless 22K gold
                jewellery crafted for moments that matter.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                <Link
                  to="/products"
                  className="bg-[#D4AF37] text-black px-10 py-5 text-[9px] uppercase tracking-[0.25em] font-medium hover:bg-white transition-colors"
                >
                  Shop Gold Collection
                </Link>

                <Link
                  to="/contact"
                  className="border border-white/20 px-10 py-5 text-[9px] uppercase tracking-[0.25em] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  Custom Design
                </Link>

              </div>

            </div>

          </section>

        </main>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="bg-[#030303] border-t border-white/[0.08]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

              {/* Brand */}

              <div className="lg:col-span-2">

                <Link
                  to="/"
                  className="inline-flex items-center gap-3"
                >

                  <span className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center">

                    <span className="w-3 h-3 border border-[#D4AF37]" />

                  </span>

                  <span className="font-serif text-2xl tracking-[0.3em] text-[#D4AF37]">
                    AURIX
                  </span>

                </Link>

                <p className="max-w-sm text-white/35 text-xs leading-[2] mt-7">
                  The art of pure gold. Premium 22K jewellery
                  crafted in India for timeless elegance.
                </p>

                <div className="flex gap-4 mt-7">

                  <a
                    href="#"
                    aria-label="Aurix Instagram"
                    className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                </div>

              </div>

              {/* Shop */}

              <div>

                <h3 className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] mb-6">
                  Shop
                </h3>

                <div className="flex flex-col gap-4">

                  <Link
                    to="/products"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Necklaces
                  </Link>

                  <Link
                    to="/products"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Rings
                  </Link>

                  <Link
                    to="/products"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Earrings
                  </Link>

                  <Link
                    to="/products"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Bracelets
                  </Link>

                </div>

              </div>

              {/* Company */}

              <div>

                <h3 className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] mb-6">
                  Aurix
                </h3>

                <div className="flex flex-col gap-4">

                  <Link
                    to="/about"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>

                  <Link
                    to="/blog"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Journal
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    Custom Design
                  </Link>

                </div>

              </div>

            </div>

            <div className="border-t border-white/[0.07] mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-4">

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                © {new Date().getFullYear()} Aurix. All rights reserved.
              </p>

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Crafted in India
              </p>

            </div>

          </div>
        </footer>

      </div>
    </Suspense>
  );
}