import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Diamond,
  Instagram,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useCart } from "../contexts/CartContext";

import {
  classicNecklace,
  diamondRing,
  pearlEarrings,
  modernBracelet,
  signaturePendant,
  heritageBangle,
  imperialDiamondChoker,
  sovereignSignetRing,
} from "../assets/images";

/* =========================================================
   PRODUCTS
========================================================= */

const heroProducts = [
  {
    id: 999,
    image: classicNecklace,
    name: "The Classic Necklace",
    shortName: "Classic 22K Necklace",
    ref: "AX-001",
    purity: "22K Gold",
    weight: "8.00g",
    price: "₹149,999",
    alt: "Aurix classic 22 karat gold necklace",
  },
  {
    id: 1000,
    image: diamondRing,
    name: "The Diamond Signet",
    shortName: "Diamond Gold Ring",
    ref: "AX-002",
    purity: "22K Gold",
    weight: "4.20g",
    price: "₹89,999",
    alt: "Aurix diamond gold ring",
  },
  {
    id: 1001,
    image: modernBracelet,
    name: "The Modern Cuff",
    shortName: "Modern Gold Bracelet",
    ref: "AX-003",
    purity: "22K Gold",
    weight: "7.50g",
    price: "₹119,999",
    alt: "Aurix modern 22 karat gold bracelet",
  },
];

const collections = [
  {
    image: classicNecklace,
    number: "01",
    title: "Necklaces",
    description:
      "Statement pieces designed to become the centre of every occasion.",
  },
  {
    image: diamondRing,
    number: "02",
    title: "Rings",
    description:
      "Refined gold silhouettes made for everyday elegance and celebration.",
  },
  {
    image: pearlEarrings,
    number: "03",
    title: "Earrings",
    description:
      "Delicate details with a distinctly luxurious Aurix character.",
  },
  {
    image: modernBracelet,
    number: "04",
    title: "Bracelets",
    description:
      "Modern gold forms crafted to sit effortlessly on the wrist.",
  },
];

const luxuryPieces = [
  {
    image: signaturePendant,
    title: "Signature Pendant",
    price: "₹99,999",
  },
  {
    image: heritageBangle,
    title: "Heritage Bangle",
    price: "₹129,999",
  },
  {
    image: imperialDiamondChoker,
    title: "Imperial Choker",
    price: "₹249,999",
  },
  {
    image: sovereignSignetRing,
    title: "Sovereign Signet",
    price: "₹89,999",
  },
];

const reviews = [
  {
    name: "Aarushi",
    text: "The finish, packaging and detailing feel genuinely premium. Aurix has a beautiful luxury identity.",
  },
  {
    name: "Mehak",
    text: "The necklace looked even more beautiful in person. Elegant, minimal and incredibly refined.",
  },
  {
    name: "Riya",
    text: "A stunning piece with a very premium presentation. The craftsmanship is what stood out for me.",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export function Home() {
  const [activeProduct, setActiveProduct] = useState(0);

  const { addToCart, setIsCartOpen } = useCart();

  const currentProduct = heroProducts[activeProduct];

  /* =======================================================
     HERO AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProduct((current) => {
        return (current + 1) % heroProducts.length;
      });
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /* =======================================================
     CART
  ======================================================= */

  const handleAddToCart = () => {
    addToCart({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
    });

    setIsCartOpen(true);
  };

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>
          Aurix | Luxury 22K Gold Jewellery Crafted in India
        </title>

        <meta
          name="description"
          content="Discover Aurix luxury 22K gold jewellery crafted in India. Explore timeless necklaces, rings, earrings and bracelets designed for modern luxury."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://aurix-gold.vercel.app/"
        />

        <meta
          property="og:title"
          content="Aurix | Luxury 22K Gold Jewellery"
        />

        <meta
          property="og:description"
          content="Timeless 22K gold jewellery crafted in India by Aurix."
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
          content={`https://aurix-gold.vercel.app${classicNecklace}`}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Aurix | Luxury 22K Gold Jewellery"
        />

        <meta
          name="twitter:description"
          content="Explore timeless 22K gold jewellery crafted in India by Aurix."
        />

        <meta
          name="twitter:image"
          content={`https://aurix-gold.vercel.app${classicNecklace}`}
        />

        {/* Organization Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aurix",
            url: "https://aurix-gold.vercel.app/",
            logo: `https://aurix-gold.vercel.app${classicNecklace}`,
            description:
              "Luxury 22K gold jewellery crafted in India.",
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
              "Luxury 22K gold jewellery and accessories from Aurix.",
          })}
        </script>

        {/* Product Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: currentProduct.name,
            image: [
              `https://aurix-gold.vercel.app${currentProduct.image}`,
            ],
            description: `${currentProduct.purity} jewellery crafted by Aurix.`,
            brand: {
              "@type": "Brand",
              name: "Aurix",
            },
            offers: {
              "@type": "Offer",
              url: "https://aurix-gold.vercel.app/products",
              priceCurrency: "INR",
              price: currentProduct.price.replace(/[₹,]/g, ""),
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

        {/* ===================================================
            NAVBAR
        =================================================== */}

        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-2xl">

          <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

            <Link
              to="/"
              aria-label="Aurix Home"
              className="group flex items-center gap-3"
            >
              <span className="flex h-9 w-9 rotate-45 items-center justify-center border border-[#D4AF37]/70">
                <span className="h-3 w-3 border border-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37]" />
              </span>

              <span className="font-serif text-xl tracking-[0.3em] text-[#D4AF37] sm:text-2xl">
                AURIX
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
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
                  className="text-[10px] uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-[#D4AF37]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open shopping cart"
              className="group flex items-center gap-2 text-[#D4AF37] transition-colors hover:text-white"
            >
              <ShoppingBag className="h-4 w-4" />

              <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:block">
                Cart
              </span>
            </button>

          </div>
        </header>

        {/* ===================================================
            HERO
        =================================================== */}

        <main className="pt-[78px]">

          <section className="relative min-h-[calc(100vh-78px)] overflow-hidden">

            {/* Ambient lights */}

            <div
              className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[150px]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[130px]"
              aria-hidden="true"
            />

            <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-20">

              {/* LEFT */}

              <div className="relative z-10">

                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D4AF37]" />

                  <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                    Est. 2023 · Crafted in India
                  </span>
                </div>

                <h1 className="font-serif text-[58px] font-light leading-[0.9] tracking-[-0.045em] sm:text-[76px] lg:text-[94px]">
                  <span className="italic">The Art</span>
                  <br />
                  <span>of Pure</span>
                  <br />
                  <span className="italic text-[#D4AF37]">
                    Gold.
                  </span>
                </h1>

                <div className="my-9 h-px w-24 bg-[#D4AF37]" />

                <p className="max-w-xl text-sm font-light leading-[2] text-white/55 sm:text-base">
                  Jewellery for those who appreciate the
                  extraordinary. Discover 22K gold pieces where
                  Indian craftsmanship meets contemporary luxury.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/products"
                    className="group flex items-center justify-center gap-4 bg-[#D4AF37] px-8 py-4 text-[9px] font-medium uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-white"
                  >
                    Explore Collection

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/about"
                    className="flex items-center justify-center border border-white/15 px-8 py-4 text-[9px] uppercase tracking-[0.25em] text-white/70 transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Discover Aurix
                  </Link>

                </div>

                {/* Trust points */}

                <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/[0.08]">

                  <div className="py-6">
                    <p className="font-serif text-2xl text-white">
                      22K
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/35">
                      Gold Purity
                    </p>
                  </div>

                  <div className="border-l border-white/[0.08] py-6 pl-5 sm:pl-7">
                    <p className="font-serif text-2xl text-white">
                      100%
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/35">
                      Premium
                    </p>
                  </div>

                  <div className="border-l border-white/[0.08] py-6 pl-5 sm:pl-7">
                    <p className="font-serif text-2xl text-white">
                      India
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/35">
                      Crafted
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT PRODUCT */}

              <div className="relative">

                <div className="absolute inset-5 border border-[#D4AF37]/10" />

                <div className="relative min-h-[560px] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] sm:min-h-[650px]">

                  {/* Product header */}

                  <div className="absolute left-7 right-7 top-7 z-20 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-white/25">
                      0{activeProduct + 1} / 03
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]">
                      Featured Piece
                    </span>
                  </div>

                  {/* Glow */}

                  <div
                    className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]"
                    aria-hidden="true"
                  />

                  {/* Product images */}

                  <div className="absolute inset-x-8 top-20 bottom-36 flex items-center justify-center">

                    {heroProducts.map((product, index) => (
                      <img
                        key={product.id}
                        src={product.image}
                        alt={product.alt}
                        width={900}
                        height={900}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className={`absolute h-full w-full object-contain p-6 transition-all duration-1000 ${
                          index === activeProduct
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0"
                        }`}
                      />
                    ))}

                  </div>

                  {/* Product info */}

                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent px-7 pb-7 pt-24">

                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                      <div>
                        <p className="mb-2 text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]">
                          {currentProduct.ref}
                        </p>

                        <h2 className="font-serif text-2xl italic sm:text-3xl">
                          {currentProduct.name}
                        </h2>

                        <div className="mt-3 flex gap-5">
                          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                            {currentProduct.purity}
                          </span>

                          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                            {currentProduct.weight}
                          </span>
                        </div>
                      </div>

                      <div className="sm:text-right">
                        <p className="mb-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                          Starting From
                        </p>

                        <p className="font-serif text-2xl text-[#D4AF37]">
                          {currentProduct.price}
                        </p>
                      </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">

                      <div className="flex gap-2">
                        {heroProducts.map((product, index) => (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() => setActiveProduct(index)}
                            aria-label={`Show ${product.name}`}
                            className={`h-px transition-all duration-500 ${
                              index === activeProduct
                                ? "w-12 bg-[#D4AF37]"
                                : "w-5 bg-white/20"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={handleBuyNow}
                        className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] transition-colors hover:text-white"
                      >
                        Add to Cart
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </button>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* =================================================
              GOLD MARQUEE
          ================================================= */}

          <section
            className="overflow-hidden border-y border-[#D4AF37]/20 bg-[#D4AF37] text-black"
            aria-label="Aurix benefits"
          >
            <div className="flex whitespace-nowrap py-3">
              <div className="animate-[marquee_25s_linear_infinite] text-[9px] font-medium uppercase tracking-[0.3em]">
                22K GOLD · PREMIUM CRAFTSMANSHIP · SECURE DELIVERY ·
                TIMELESS DESIGN · CRAFTED IN INDIA · 22K GOLD · PREMIUM
                CRAFTSMANSHIP · SECURE DELIVERY · TIMELESS DESIGN ·
                CRAFTED IN INDIA ·
              </div>
            </div>
          </section>

          {/* =================================================
              AURIX EDIT
          ================================================= */}

          <section className="bg-[#050505] py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D4AF37]" />

                    <span className="text-[8px] uppercase tracking-[0.45em] text-[#D4AF37]">
                      The Collection
                    </span>
                  </div>

                  <h2 className="font-serif text-5xl font-light italic sm:text-6xl lg:text-7xl">
                    The Aurix Edit
                  </h2>
                </div>

                <Link
                  to="/products"
                  className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/50 hover:text-[#D4AF37]"
                >
                  View All Pieces

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>

              </div>

              <div className="grid gap-6 md:grid-cols-3">

                {heroProducts.map((product, index) => (
                  <Link
                    to="/products"
                    key={product.id}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.07] bg-[#0a0a0a]">

                      <img
                        src={product.image}
                        alt={product.alt}
                        width={900}
                        height={1100}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-8 transition-transform duration-1000 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                      <span className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.3em] text-[#D4AF37]">
                        0{index + 1}
                      </span>

                      <div className="absolute bottom-5 left-5 right-5">

                        <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-white/35">
                          {product.purity}
                        </p>

                        <h3 className="font-serif text-2xl italic">
                          {product.shortName}
                        </h3>

                        <div className="mt-4 flex items-center justify-between">

                          <span className="text-sm text-[#D4AF37]">
                            {product.price}
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors group-hover:border-[#D4AF37]">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>

                        </div>
                      </div>

                    </div>
                  </Link>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              COLLECTIONS
          ================================================= */}

          <section className="border-y border-white/[0.06] bg-[#090909] py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="mb-14 max-w-2xl">

                <p className="mb-5 text-[8px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  Explore Aurix
                </p>

                <h2 className="font-serif text-5xl font-light italic sm:text-6xl">
                  Collections made
                  <br />
                  <span className="text-[#D4AF37]">
                    to be remembered.
                  </span>
                </h2>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                {collections.map((collection) => (
                  <Link
                    key={collection.number}
                    to="/products"
                    className="group"
                  >
                    <div className="relative h-[430px] overflow-hidden border border-white/[0.07] bg-[#050505] sm:h-[500px]">

                      <img
                        src={collection.image}
                        alt={`${collection.title} gold jewellery collection`}
                        width={1000}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      <div className="absolute left-6 top-6">
                        <span className="text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]">
                          {collection.number} / Collection
                        </span>
                      </div>

                      <div className="absolute bottom-7 left-7 right-7">

                        <h3 className="mb-3 font-serif text-3xl italic sm:text-4xl">
                          {collection.title}
                        </h3>

                        <p className="max-w-md text-xs leading-[1.9] text-white/55">
                          {collection.description}
                        </p>

                        <div className="mt-5 flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                          Explore Collection
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-2" />
                        </div>

                      </div>

                    </div>
                  </Link>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              BRAND STORY
          ================================================= */}

          <section className="bg-[#050505] py-24 sm:py-32">

            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-10">

              <div className="relative">

                <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[#D4AF37]/40" />

                <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-[#D4AF37]/40" />

                <div className="aspect-[4/5] overflow-hidden bg-[#0b0b0b]">

                  <img
                    src={signaturePendant}
                    alt="Aurix signature gold pendant"
                    width={1200}
                    height={1500}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                  />

                </div>

              </div>

              <div>

                <p className="mb-7 text-[8px] uppercase tracking-[0.5em] text-[#D4AF37]">
                  The Aurix Story
                </p>

                <h2 className="font-serif text-5xl font-light leading-[0.95] sm:text-6xl lg:text-7xl">
                  Born in India.
                  <br />
                  <span className="italic text-[#D4AF37]">
                    Made to last.
                  </span>
                </h2>

                <div className="my-8 h-px w-16 bg-[#D4AF37]" />

                <p className="max-w-lg text-sm leading-[2] text-white/50">
                  Aurix brings together the richness of Indian
                  craftsmanship and the confidence of modern
                  luxury.
                </p>

                <p className="mt-5 max-w-lg text-sm leading-[2] text-white/50">
                  Every piece is created with attention to
                  proportion, detail and timeless beauty — designed
                  to become part of your story.
                </p>

                <Link
                  to="/about"
                  className="group mt-9 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]"
                >
                  Discover Our Story

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>

              </div>

            </div>
          </section>

          {/* =================================================
              LUXURY PIECES
          ================================================= */}

          <section className="border-y border-white/[0.06] bg-[#090909] py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="mb-14 text-center">

                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#D4AF37]" />

                  <Sparkles className="h-4 w-4 text-[#D4AF37]" />

                  <span className="h-px w-8 bg-[#D4AF37]" />
                </div>

                <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37]">
                  Signature Pieces
                </p>

                <h2 className="mt-4 font-serif text-5xl italic sm:text-6xl">
                  Beyond ordinary.
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

                {luxuryPieces.map((piece) => (
                  <Link
                    key={piece.title}
                    to="/products"
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#050505]">

                      <img
                        src={piece.image}
                        alt={`Aurix ${piece.title}`}
                        width={700}
                        height={700}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-5 transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">

                        <p className="font-serif text-lg italic sm:text-xl">
                          {piece.title}
                        </p>

                        <p className="mt-1 text-xs text-[#D4AF37]">
                          {piece.price}
                        </p>

                      </div>

                    </div>
                  </Link>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              AURIX STANDARD
          ================================================= */}

          <section className="bg-[#050505] py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="mb-16 text-center">

                <p className="mb-5 text-[8px] uppercase tracking-[0.5em] text-[#D4AF37]">
                  Why Aurix
                </p>

                <h2 className="font-serif text-5xl italic sm:text-6xl">
                  The Aurix Standard
                </h2>

              </div>

              <div className="grid border border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">

                {[
                  {
                    number: "01",
                    icon: Diamond,
                    title: "22K Gold",
                    text: "Premium gold craftsmanship with a focus on purity and timeless value.",
                  },
                  {
                    number: "02",
                    icon: Sparkles,
                    title: "Fine Detail",
                    text: "Every silhouette is considered for proportion, balance and finish.",
                  },
                  {
                    number: "03",
                    icon: ShoppingBag,
                    title: "Luxury Packaging",
                    text: "A premium unboxing experience designed to match the jewellery.",
                  },
                  {
                    number: "04",
                    icon: Star,
                    title: "Timeless Design",
                    text: "Pieces created to remain elegant beyond changing trends.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="border-b border-white/[0.07] p-8 transition-colors hover:border-[#D4AF37]/30 sm:border-r lg:border-b-0"
                    >

                      <div className="mb-10 flex items-start justify-between">

                        <span className="font-serif text-4xl text-white/[0.08]">
                          {item.number}
                        </span>

                        <Icon
                          className="h-5 w-5 text-[#D4AF37]"
                          strokeWidth={1.2}
                        />

                      </div>

                      <h3 className="font-serif text-2xl italic">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-xs leading-[1.9] text-white/40">
                        {item.text}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>
          </section>

          {/* =================================================
              TESTIMONIALS
          ================================================= */}

          <section className="bg-[#090909] py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="mb-14">

                <p className="mb-5 text-[8px] uppercase tracking-[0.5em] text-[#D4AF37]">
                  Client Stories
                </p>

                <h2 className="font-serif text-5xl italic sm:text-6xl">
                  Words from those
                  <br />
                  who wear Aurix.
                </h2>

              </div>

              <div className="grid gap-5 md:grid-cols-3">

                {reviews.map((review) => (
                  <article
                    key={review.name}
                    className="relative border border-white/[0.07] bg-[#050505] p-8 sm:p-10"
                  >

                    <span className="absolute right-7 top-5 font-serif text-6xl text-[#D4AF37]/10">
                      “
                    </span>

                    <div className="mb-7 flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="mr-1 h-3 w-3 fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>

                    <p className="min-h-[130px] font-serif text-sm italic leading-[1.9] text-white/60">
                      “{review.text}”
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#D4AF37]" />

                      <span className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                        {review.name}
                      </span>
                    </div>

                  </article>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              INSTAGRAM
          ================================================= */}

          <section className="border-y border-white/[0.06] bg-[#050505] py-24">

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="mb-12 text-center">

                <Instagram className="mx-auto mb-5 h-5 w-5 text-[#D4AF37]" />

                <p className="text-[8px] uppercase tracking-[0.45em] text-white/35">
                  Follow the Aurix World
                </p>

                <h2 className="mt-4 font-serif text-4xl italic sm:text-5xl">
                  @aurixgold
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">

                {[
                  classicNecklace,
                  diamondRing,
                  signaturePendant,
                  modernBracelet,
                ].map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="aspect-square overflow-hidden bg-[#0a0a0a]"
                  >
                    <img
                      src={image}
                      alt={`Aurix gold jewellery ${index + 1}`}
                      width={700}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              FINAL CTA
          ================================================= */}

          <section className="relative overflow-hidden py-32 sm:py-40">

            <img
              src={signaturePendant}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-[#050505]/90"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">

              <div className="mx-auto mb-10 flex h-14 w-14 rotate-45 items-center justify-center border border-[#D4AF37]/40">

                <Diamond
                  className="h-5 w-5 -rotate-45 text-[#D4AF37]"
                  strokeWidth={1.2}
                />

              </div>

              <p className="mb-6 text-[8px] uppercase tracking-[0.5em] text-[#D4AF37]">
                Your Signature Awaits
              </p>

              <h2 className="font-serif text-5xl font-light italic sm:text-6xl lg:text-7xl">
                Find the piece
                <br />
                <span className="text-[#D4AF37]">
                  that becomes yours.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-[1.9] text-white/45">
                Explore timeless 22K gold jewellery crafted for
                celebrations, milestones and the moments that
                matter.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/products"
                  className="bg-[#D4AF37] px-10 py-5 text-[9px] font-medium uppercase tracking-[0.25em] text-black transition-colors hover:bg-white"
                >
                  Shop Gold Collection
                </Link>

                <Link
                  to="/contact"
                  className="border border-white/20 px-10 py-5 text-[9px] uppercase tracking-[0.25em] text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  Custom Design
                </Link>

              </div>

            </div>

          </section>

        </main>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="border-t border-white/[0.08] bg-[#030303]">

          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

              <div className="lg:col-span-2">

                <Link
                  to="/"
                  className="inline-flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 rotate-45 items-center justify-center border border-[#D4AF37]">
                    <span className="h-3 w-3 border border-[#D4AF37]" />
                  </span>

                  <span className="font-serif text-2xl tracking-[0.3em] text-[#D4AF37]">
                    AURIX
                  </span>
                </Link>

                <p className="mt-7 max-w-sm text-xs leading-[2] text-white/30">
                  The art of pure gold. Luxury 22K jewellery
                  crafted in India for timeless elegance.
                </p>

                <div className="mt-7 flex gap-3">
                  <a
                    href="#"
                    aria-label="Aurix Instagram"
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>

              </div>

              <div>

                <h3 className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  Shop
                </h3>

                <div className="flex flex-col gap-4">
                  {[
                    "Necklaces",
                    "Rings",
                    "Earrings",
                    "Bracelets",
                  ].map((item) => (
                    <Link
                      key={item}
                      to="/products"
                      className="text-xs text-white/35 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>

              </div>

              <div>

                <h3 className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  Aurix
                </h3>

                <div className="flex flex-col gap-4">

                  <Link
                    to="/about"
                    className="text-xs text-white/35 hover:text-white"
                  >
                    Our Story
                  </Link>

                  <Link
                    to="/blog"
                    className="text-xs text-white/35 hover:text-white"
                  >
                    Journal
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs text-white/35 hover:text-white"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs text-white/35 hover:text-white"
                  >
                    Custom Design
                  </Link>

                </div>

              </div>

            </div>

            <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row">

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                © {new Date().getFullYear()} Aurix. All rights reserved.
              </p>

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                Crafted in India
              </p>

            </div>

          </div>

        </footer>

      </div>
    </>
  );
}

export default Home;