import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Diamond,
  Star,
  ShieldCheck,
  Gem,
  Truck,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useCart } from "../contexts/CartContext";

import {
  classicNecklace,
  diamondRing,
  pearlEarrings,
  modernBracelet,
  signaturePendant,
  imperialDiamondChoker,
  sovereignSignetRing,
  pearlDropEarrings,
} from "../assets/images";

/* =========================================================
   FEATURED PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    image: classicNecklace,
    name: "Classic 22K Gold Necklace",
    category: "Necklaces",
    purity: "22K Gold",
    weight: "8.00g",
    price: "₹1,49,999",
  },
  {
    id: 2,
    image: diamondRing,
    name: "Diamond Gold Ring",
    category: "Rings",
    purity: "22K Gold",
    weight: "4.20g",
    price: "₹89,999",
  },
  {
    id: 3,
    image: pearlDropEarrings,
    name: "Pearl Drop Gold Earrings",
    category: "Earrings",
    purity: "22K Gold",
    weight: "5.20g",
    price: "₹1,29,999",
  },
  {
    id: 4,
    image: modernBracelet,
    name: "Modern Gold Bracelet",
    category: "Bracelets",
    purity: "22K Gold",
    weight: "7.50g",
    price: "₹1,19,999",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    title: "Necklaces",
    subtitle: "Statement pieces",
    image: imperialDiamondChoker,
  },
  {
    title: "Rings",
    subtitle: "Made to be remembered",
    image: sovereignSignetRing,
  },
  {
    title: "Earrings",
    subtitle: "Elegant everyday gold",
    image: pearlEarrings,
  },
  {
    title: "Bracelets",
    subtitle: "Modern gold signatures",
    image: modernBracelet,
  },
];

/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackImage =
  "/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp";

/* =========================================================
   SAFE IMAGE
========================================================= */

function SafeImage({
  src,
  alt,
  className = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        const img = event.currentTarget;

        if (!img.dataset.fallback) {
          img.dataset.fallback = "true";
          img.src = fallbackImage;
        }
      }}
      {...props}
    />
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);

  const { setIsCartOpen, addToCart } = useCart();

  /* =======================================================
     AUTO PRODUCT SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((previous) => {
        return (previous + 1) % products.length;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const product = products[activeProduct];

  /* =======================================================
     ADD FEATURED PRODUCT TO CART
  ======================================================= */

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
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
          Aurix | Premium 22K Gold Jewellery Crafted in India
        </title>

        <meta
          name="description"
          content="Discover Aurix premium 22K gold jewellery crafted in India. Shop timeless necklaces, rings, earrings and bracelets designed for modern luxury."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://aurix-gold.vercel.app/"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Aurix | Premium 22K Gold Jewellery"
        />

        <meta
          property="og:description"
          content="Timeless 22K gold jewellery crafted in India."
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
          property="og:image"
          content="https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp"
        />

        <meta
          property="og:image:alt"
          content="Aurix premium 22K gold necklace"
        />

        {/* Twitter */}

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
          content="Discover timeless 22K gold jewellery crafted in India by Aurix."
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
            "@id": "https://aurix-gold.vercel.app/#organization",
            name: "Aurix",
            url: "https://aurix-gold.vercel.app/",
            description:
              "Premium 22K gold jewellery crafted in India.",
          })}
        </script>

        {/* Website Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://aurix-gold.vercel.app/#website",
            name: "Aurix",
            url: "https://aurix-gold.vercel.app/",
            publisher: {
              "@id":
                "https://aurix-gold.vercel.app/#organization",
            },
          })}
        </script>

        {/* Featured Products Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Aurix Featured Gold Jewellery",
            itemListElement: products.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              url: "https://aurix-gold.vercel.app/products",
            })),
          })}
        </script>
      </Helmet>

      {/* =====================================================
          PAGE WRAPPER

          Navbar and Footer are handled by Layout.tsx.
      ===================================================== */}

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

        {/* ===================================================
            HERO
        =================================================== */}

        <div className="pt-0">

          <section className="relative min-h-[calc(100vh-96px)] flex items-center">

            {/* Background Glow */}

            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />

              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[130px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full px-5 lg:px-10 py-16 lg:py-20">

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* =================================================
                    HERO LEFT
                ================================================= */}

                <div className="relative z-10">

                  <div className="flex items-center gap-4 mb-7">

                    <span className="w-12 h-px bg-[#D4AF37]" />

                    <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                      Est. 2023 · Crafted in India
                    </span>

                  </div>

                  <h1 className="font-serif text-[58px] sm:text-[75px] lg:text-[90px] leading-[0.9] font-light">

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

                  <div className="w-24 h-px bg-[#D4AF37] my-8" />

                  <p className="max-w-xl text-white/55 text-sm sm:text-base leading-8">
                    Discover timeless 22K gold jewellery where
                    traditional Indian craftsmanship meets
                    contemporary luxury.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-9">

                    <Link
                      to="/products"
                      className="bg-[#D4AF37] text-black px-9 py-4 text-[9px] uppercase tracking-[0.25em] font-semibold text-center hover:bg-white transition"
                    >
                      Explore Collection
                    </Link>

                    <Link
                      to="/about"
                      className="border border-white/20 px-9 py-4 text-[9px] uppercase tracking-[0.25em] text-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                    >
                      Discover Aurix
                    </Link>

                  </div>

                  <div className="flex gap-10 mt-12 pt-7 border-t border-white/10 max-w-xl">

                    <div>
                      <strong className="font-serif text-2xl">
                        22K
                      </strong>

                      <p className="text-[8px] uppercase tracking-[0.25em] text-white/40 mt-1">
                        Gold Purity
                      </p>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div>
                      <strong className="font-serif text-2xl">
                        2023
                      </strong>

                      <p className="text-[8px] uppercase tracking-[0.25em] text-white/40 mt-1">
                        Established
                      </p>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div>
                      <strong className="font-serif text-2xl">
                        India
                      </strong>

                      <p className="text-[8px] uppercase tracking-[0.25em] text-white/40 mt-1">
                        Crafted
                      </p>
                    </div>

                  </div>

                </div>

                {/* =================================================
                    HERO RIGHT / FEATURED PRODUCT
                ================================================= */}

                <div className="relative">

                  <div
                    className="absolute inset-5 border border-[#D4AF37]/20"
                    aria-hidden="true"
                  />

                  <div className="relative bg-[#0b0b0b] border border-white/10 min-h-[580px] flex items-center justify-center overflow-hidden">

                    {/* Product Counter */}

                    <div className="absolute top-6 left-6 text-[9px] tracking-[0.3em] text-white/30">
                      {String(activeProduct + 1).padStart(2, "0")} /{" "}
                      {String(products.length).padStart(2, "0")}
                    </div>

                    <div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      Featured Piece
                    </div>

                    {/* Gold Glow */}

                    <div
                      className="absolute w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[90px]"
                      aria-hidden="true"
                    />

                    {/* Product Image */}

                    <div className="relative w-[85%] h-[450px] flex items-center justify-center">

                      {products.map((item, index) => (
                        <SafeImage
                          key={item.id}
                          src={item.image}
                          alt={item.name}
                          width={900}
                          height={900}
                          className={`absolute w-full h-full object-contain transition-all duration-1000 ${
                            index === activeProduct
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-90"
                          }`}
                        />
                      ))}

                    </div>

                    {/* Product Information */}

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent p-7 pt-24">

                      <div className="flex justify-between items-end gap-5">

                        <div>

                          <p className="text-[8px] uppercase tracking-[0.35em] text-[#D4AF37] mb-2">
                            {product.category}
                          </p>

                          <h2 className="font-serif text-2xl sm:text-3xl italic">
                            {product.name}
                          </h2>

                          <div className="flex gap-5 mt-3 text-[8px] uppercase tracking-[0.2em] text-white/40">
                            <span>
                              {product.purity}
                            </span>

                            <span>
                              {product.weight}
                            </span>
                          </div>

                        </div>

                        <div className="text-right">

                          <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                            Price
                          </p>

                          <p className="font-serif text-xl text-[#D4AF37]">
                            {product.price}
                          </p>

                        </div>

                      </div>

                      {/* Slider Controls */}

                      <div className="flex gap-2 mt-5">

                        {products.map((item, index) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() =>
                              setActiveProduct(index)
                            }
                            aria-label={`Show ${item.name}`}
                            aria-pressed={
                              index === activeProduct
                            }
                            className={`h-1 transition-all ${
                              index === activeProduct
                                ? "w-12 bg-[#D4AF37]"
                                : "w-5 bg-white/20"
                            }`}
                          />
                        ))}

                      </div>

                      {/* Add To Cart */}

                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="mt-5 w-full border border-[#D4AF37]/40 text-[#D4AF37] py-3 text-[9px] uppercase tracking-[0.25em] hover:bg-[#D4AF37] hover:text-black transition"
                      >
                        Add to Cart
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* ===================================================
              GOLD STRIP
          =================================================== */}

          <section className="bg-[#D4AF37] text-black py-4 overflow-hidden">

            <div className="flex justify-center flex-wrap gap-x-10 gap-y-2 px-5 text-[9px] uppercase tracking-[0.3em] font-semibold">

              <span>22K Gold</span>
              <span>•</span>
              <span>Premium Craftsmanship</span>
              <span>•</span>
              <span>Secure Delivery</span>
              <span>•</span>
              <span>Crafted in India</span>
              <span>•</span>
              <span>Timeless Design</span>

            </div>

          </section>

          {/* ===================================================
              COLLECTION
          =================================================== */}

          <section className="py-28 bg-[#050505]">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

              <div className="flex justify-between items-end mb-14">

                <div>

                  <p className="text-[8px] uppercase tracking-[0.45em] text-[#D4AF37] mb-5">
                    Curated Collection
                  </p>

                  <h2 className="font-serif text-5xl sm:text-6xl italic font-light">
                    The Aurix Edit
                  </h2>

                </div>

                <Link
                  to="/products"
                  className="hidden sm:flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/50 hover:text-[#D4AF37]"
                >
                  View All
                  <ArrowRight size={15} />
                </Link>

              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {products.map((item) => (

                  <Link
                    key={item.id}
                    to="/products"
                    className="group"
                  >

                    <div className="relative aspect-[4/5] bg-[#0b0b0b] border border-white/10 overflow-hidden">

                      <SafeImage
                        src={item.image}
                        alt={`${item.name} - Aurix 22K gold jewellery`}
                        width={900}
                        height={1100}
                        loading="lazy"
                        className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-6 left-6 right-6">

                        <p className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">
                          {item.purity}
                        </p>

                        <h3 className="font-serif text-2xl italic">
                          {item.name}
                        </h3>

                        <div className="flex justify-between items-center mt-4">

                          <span className="text-sm text-[#D4AF37]">
                            {item.price}
                          </span>

                          <span className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37]">
                            <ArrowRight size={14} />
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
              WHY AURIX
          =================================================== */}

          <section className="py-28 bg-[#0a0a0a] border-y border-white/10">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

              <div className="text-center mb-16">

                <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-5">
                  The Aurix Standard
                </p>

                <h2 className="font-serif text-5xl sm:text-6xl italic">
                  Crafted beyond ordinary.
                </h2>

              </div>

              <div className="grid md:grid-cols-4">

                {[
                  {
                    icon: Gem,
                    title: "22K Gold",
                    text: "Premium gold crafted for lasting beauty.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trusted Quality",
                    text: "Every piece is created with attention to detail.",
                  },
                  {
                    icon: Sparkles,
                    title: "Timeless Design",
                    text: "Elegant designs made to stay beautiful for years.",
                  },
                  {
                    icon: Truck,
                    title: "Secure Delivery",
                    text: "Carefully packed and securely delivered.",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="p-8 lg:p-10 border border-white/10"
                    >

                      <Icon
                        size={25}
                        className="text-[#D4AF37] mb-8"
                        aria-hidden="true"
                      />

                      <h3 className="font-serif text-2xl italic mb-4">
                        {item.title}
                      </h3>

                      <p className="text-white/45 text-xs leading-7">
                        {item.text}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </section>

          {/* ===================================================
              STORY
          =================================================== */}

          <section className="py-28 bg-[#050505]">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

              <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div className="relative">

                  <div
                    className="absolute -top-5 -left-5 w-20 h-20 border-l border-t border-[#D4AF37]/40"
                    aria-hidden="true"
                  />

                  <div className="aspect-[4/5] bg-[#0b0b0b] overflow-hidden">

                    <SafeImage
                      src={signaturePendant}
                      alt="Aurix signature gold pendant"
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />

                  </div>

                </div>

                <div>

                  <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-7">
                    The Aurix Story
                  </p>

                  <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-none">

                    Born in India.
                    <br />

                    <span className="italic text-[#D4AF37]">
                      Made to last.
                    </span>

                  </h2>

                  <div className="w-16 h-px bg-[#D4AF37] my-8" />

                  <p className="text-white/50 text-sm leading-8 max-w-lg">
                    Aurix brings together the richness of Indian
                    craftsmanship and the simplicity of modern
                    luxury.
                  </p>

                  <p className="text-white/50 text-sm leading-8 max-w-lg mt-5">
                    Every piece is designed with an appreciation
                    for detail, proportion and timeless beauty.
                  </p>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-4 mt-8 text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]"
                  >
                    Discover Our Story
                    <ArrowRight size={15} />
                  </Link>

                </div>

              </div>

            </div>

          </section>

          {/* ===================================================
              CATEGORIES
          =================================================== */}

          <section className="py-28 bg-[#090909] border-y border-white/10">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

              <div className="text-center mb-14">

                <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-5">
                  Explore Aurix
                </p>

                <h2 className="font-serif text-5xl sm:text-6xl italic">
                  Find your signature.
                </h2>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {categories.map((category) => (

                  <Link
                    to="/products"
                    key={category.title}
                    className="group"
                  >

                    <div className="relative h-[400px] overflow-hidden bg-[#050505]">

                      <SafeImage
                        src={category.image}
                        alt={`${category.title} gold jewellery`}
                        width={1000}
                        height={700}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                      <div className="absolute bottom-7 left-7">

                        <p className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                          Aurix Collection
                        </p>

                        <h3 className="font-serif text-4xl italic">
                          {category.title}
                        </h3>

                        <p className="text-white/50 text-xs mt-2">
                          {category.subtitle}
                        </p>

                      </div>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </section>

          {/* ===================================================
              CLIENT STORIES
          =================================================== */}

          <section className="py-28 bg-[#050505]">

            <div className="max-w-5xl mx-auto px-5 text-center">

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-7">
                Client Stories
              </p>

              <div
                className="flex justify-center mb-7"
                aria-label="Aurix client experience"
              >

                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    className="text-[#D4AF37] fill-current mx-1"
                    aria-hidden="true"
                  />
                ))}

              </div>

              <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight text-white/80">
                “Jewellery should not simply be worn.
                It should become part of your story.”
              </blockquote>

              <p className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] mt-8">
                The Aurix Client Experience
              </p>

            </div>

          </section>

          {/* ===================================================
              FINAL CTA
          =================================================== */}

          <section className="relative py-36 overflow-hidden">

            <SafeImage
              src={imperialDiamondChoker}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-black/85"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

              <div className="w-14 h-14 mx-auto border border-[#D4AF37]/50 rotate-45 flex items-center justify-center mb-10">

                <Diamond
                  size={22}
                  className="text-[#D4AF37] -rotate-45"
                  aria-hidden="true"
                />

              </div>

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">
                Your Signature Awaits
              </p>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl italic">

                Find the piece
                <br />

                <span className="text-[#D4AF37]">
                  that becomes yours.
                </span>

              </h2>

              <p className="max-w-xl mx-auto text-white/50 text-sm leading-7 mt-7">
                Explore our collection of timeless 22K gold
                jewellery crafted for moments that matter.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                <Link
                  to="/products"
                  className="bg-[#D4AF37] text-black px-10 py-5 text-[9px] uppercase tracking-[0.25em] font-semibold hover:bg-white transition"
                >
                  Shop Gold Collection
                </Link>

                <Link
                  to="/contact"
                  className="border border-white/20 px-10 py-5 text-[9px] uppercase tracking-[0.25em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                >
                  Custom Design
                </Link>

              </div>

            </div>

          </section>

        </div>

      </div>
    </>
  );
}