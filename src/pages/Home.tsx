import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Diamond,
  Instagram,
  ShoppingBag,
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
  heritageBangle,
  imperialDiamondChoker,
  sovereignSignetRing,
  pearlDropEarrings,
} from "../assets/images";

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
    image: heritageBangle,
  },
];

const fallbackImage =
  "/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp";

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
      onError={(e) => {
        const img = e.currentTarget;

        if (!img.dataset.fallback) {
          img.dataset.fallback = "true";
          img.src = fallbackImage;
        }
      }}
      {...props}
    />
  );
}

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);

  const { setIsCartOpen, addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const product = products[activeProduct];

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
      <Helmet>
        <title>
          Aurix | Premium 22K Gold Jewellery Crafted in India
        </title>

        <meta
          name="description"
          content="Discover Aurix premium 22K gold jewellery crafted in India. Shop timeless necklaces, rings, earrings and bracelets designed for modern luxury."
        />

        <meta name="robots" content="index, follow" />

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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aurix",
            url: "https://aurix-gold.vercel.app/",
            description:
              "Premium 22K gold jewellery crafted in India.",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Aurix",
            url: "https://aurix-gold.vercel.app/",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">

            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="Aurix Home"
            >
              <span className="w-9 h-9 border border-[#D4AF37] rotate-45 flex items-center justify-center">
                <span className="w-3 h-3 border border-[#D4AF37]" />
              </span>

              <span className="font-serif text-2xl tracking-[0.3em] text-[#D4AF37]">
                AURIX
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              <Link to="/" className="luxury-nav">
                Home
              </Link>

              <Link to="/products" className="luxury-nav">
                Products
              </Link>

              <Link to="/about" className="luxury-nav">
                About
              </Link>

              <Link to="/blog" className="luxury-nav">
                Journal
              </Link>

              <Link to="/contact" className="luxury-nav">
                Contact
              </Link>
            </nav>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />

              <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em]">
                Cart
              </span>
            </button>
          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <main className="pt-20">

          <section className="relative min-h-[calc(100vh-80px)] flex items-center">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">

              <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />

              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[130px]" />

            </div>

            <div className="max-w-7xl mx-auto w-full px-5 lg:px-10 py-16 lg:py-20">

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT */}

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

                {/* RIGHT PRODUCT */}

                <div className="relative">

                  <div className="absolute inset-5 border border-[#D4AF37]/20" />

                  <div className="relative bg-[#0b0b0b] border border-white/10 min-h-[580px] flex items-center justify-center overflow-hidden">

                    <div className="absolute top-6 left-6 text-[9px] tracking-[0.3em] text-white/30">
                      0{activeProduct + 1} / 03
                    </div>

                    <div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      Featured Piece
                    </div>

                    {/* GOLD GLOW */}

                    <div className="absolute w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[90px]" />

                    {/* IMAGE */}

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

                    {/* PRODUCT INFO */}

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
                            <span>{product.purity}</span>
                            <span>{product.weight}</span>
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

                      <div className="flex gap-2 mt-5">

                        {products.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveProduct(index)}
                            aria-label={`Show product ${index + 1}`}
                            className={`h-1 transition-all ${
                              index === activeProduct
                                ? "w-12 bg-[#D4AF37]"
                                : "w-5 bg-white/20"
                            }`}
                          />
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* =====================================================
              GOLD STRIP
          ===================================================== */}

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

          {/* =====================================================
              COLLECTION
          ===================================================== */}

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
                        alt={item.name}
                        width={900}
                        height={1100}
                        loading="lazy"
                        className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

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

          {/* =====================================================
              WHY AURIX
          ===================================================== */}

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

          {/* =====================================================
              STORY
          ===================================================== */}

          <section className="py-28 bg-[#050505]">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

              <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div className="relative">

                  <div className="absolute -top-5 -left-5 w-20 h-20 border-l border-t border-[#D4AF37]/40" />

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

          {/* =====================================================
              CATEGORIES
          ===================================================== */}

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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

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

          {/* =====================================================
              TESTIMONIAL
          ===================================================== */}

          <section className="py-28 bg-[#050505]">

            <div className="max-w-5xl mx-auto px-5 text-center">

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-7">
                Client Stories
              </p>

              <div className="flex justify-center mb-7">

                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    className="text-[#D4AF37] fill-current mx-1"
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

          {/* =====================================================
              FINAL CTA
          ===================================================== */}

          <section className="relative py-36 overflow-hidden">

            <SafeImage
              src={imperialDiamondChoker}
              alt="Aurix luxury gold necklace background"
              width={1600}
              height={900}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />

            <div className="absolute inset-0 bg-black/85" />

            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

              <div className="w-14 h-14 mx-auto border border-[#D4AF37]/50 rotate-45 flex items-center justify-center mb-10">

                <Diamond
                  size={22}
                  className="text-[#D4AF37] -rotate-45"
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

        </main>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="bg-[#030303] border-t border-white/10">

          <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

            <div className="grid md:grid-cols-4 gap-12">

              <div className="md:col-span-2">

                <div className="flex items-center gap-3">

                  <span className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center">
                    <span className="w-3 h-3 border border-[#D4AF37]" />
                  </span>

                  <span className="font-serif text-2xl tracking-[0.3em] text-[#D4AF37]">
                    AURIX
                  </span>

                </div>

                <p className="max-w-sm text-white/35 text-xs leading-7 mt-6">
                  Premium 22K gold jewellery crafted in India
                  for timeless elegance.
                </p>

                <a
                  href="#"
                  aria-label="Aurix Instagram"
                  className="inline-flex mt-6 w-9 h-9 border border-white/10 items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <Instagram size={15} />
                </a>

              </div>

              <div>

                <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
                  Shop
                </h3>

                <div className="flex flex-col gap-4 text-xs text-white/40">

                  <Link to="/products">Necklaces</Link>
                  <Link to="/products">Rings</Link>
                  <Link to="/products">Earrings</Link>
                  <Link to="/products">Bracelets</Link>

                </div>

              </div>

              <div>

                <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
                  Company
                </h3>

                <div className="flex flex-col gap-4 text-xs text-white/40">

                  <Link to="/about">Our Story</Link>
                  <Link to="/blog">Journal</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/contact">Custom Design</Link>

                </div>

              </div>

            </div>

            <div className="border-t border-white/10 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-4">

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
    </>
  );
}