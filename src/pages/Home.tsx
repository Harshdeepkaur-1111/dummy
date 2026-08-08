import { useEffect, useState } from "react";
import {
  ArrowRight,
  Diamond,
  Instagram,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useCart } from "../contexts/CartContext";
import OptimizedImage from "../components/OptimizedImage";
import { categories, features, reviews } from "../data";
import { getOptimizedImage } from "../lib/utils";

const SITE_URL = "https://aurix-gold.vercel.app";
const SITE_NAME = "Aurix";

const heroProducts = [
  {
    src: "/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp",
    alt: "Classic 22K gold necklace by Aurix",
    name: "Classic 22K Gold Necklace",
    ref: "098-XN-22K",
    purity: "22K Gold",
    weight: "8.00g",
    price: "₹149,999",
  },
  {
    src: "/images/diamond_gold_ring_1781762677970-C24oRI-9.webp",
    alt: "Diamond gold ring by Aurix",
    name: "Diamond Gold Ring",
    ref: "098-RG-22K",
    purity: "22K Gold",
    weight: "4.20g",
    price: "₹89,999",
  },
  {
    src: "/images/modern_gold_bracelet_1781762704753-DMbwxbLT.webp",
    alt: "Modern 22K gold bracelet by Aurix",
    name: "Modern Gold Bracelet",
    ref: "098-BR-22K",
    purity: "22K Gold",
    weight: "7.50g",
    price: "₹119,999",
  },
] as const;

const ctaImage =
  "/images/signature_gold_pendant_1781762720597-Bwiy23va.webp";

export function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  const { addToCart, setIsCartOpen } = useCart();

  const currentProduct = heroProducts[heroIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex(
        (current) => (current + 1) % heroProducts.length
      );
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const addCurrentProduct = () => {
    addToCart({
      id: heroIndex + 999,
      name: currentProduct.name,
      price: currentProduct.price,
    });

    setIsCartOpen(true);
  };

  return (
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
          content="Discover Aurix premium 22K gold jewellery crafted in India. Explore necklaces, rings, bracelets and signature pieces designed for timeless luxury."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href={`${SITE_URL}/`}
        />

        <meta
          property="og:title"
          content="Aurix | Premium 22K Gold Jewellery"
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
          content={`${SITE_URL}/`}
        />

        <meta
          property="og:site_name"
          content={SITE_NAME}
        />

        <meta
          property="og:image"
          content={`${SITE_URL}${heroProducts[0].src}`}
        />

        <meta
          property="og:image:alt"
          content={heroProducts[0].alt}
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
          content={`${SITE_URL}${heroProducts[0].src}`}
        />

        {/* Organization */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            description:
              "Premium 22K gold jewellery crafted in India by Aurix.",
          })}
        </script>

        {/* Website */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            description:
              "Premium 22K gold jewellery and luxury accessories from Aurix.",
          })}
        </script>

        {/* Product */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: currentProduct.name,
            image: [`${SITE_URL}${currentProduct.src}`],
            description: `Premium ${currentProduct.purity} jewellery from Aurix.`,
            brand: {
              "@type": "Brand",
              name: SITE_NAME,
            },
            sku: currentProduct.ref,
            material: "Gold",
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/products`,
              priceCurrency: "INR",
              price: currentProduct.price.replace(/[₹,]/g, ""),
              availability:
                "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="relative min-h-screen flex items-center border-b border-white/[0.06]"
          aria-labelledby="hero-title"
        >
          <div
            className="absolute inset-0 luxury-grid opacity-40"
            aria-hidden="true"
          />

          <div
            className="absolute -top-32 right-[-8rem] w-[38rem] h-[38rem] rounded-full bg-[#D4AF37]/[0.08] blur-[120px]"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-0 left-[-12rem] w-[28rem] h-[28rem] rounded-full bg-[#D4AF37]/[0.035] blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 py-28 lg:py-32">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">

              {/* LEFT */}

              <div className="animate-fade-up">

                <div className="eyebrow mb-8">
                  <span className="w-12 h-px bg-[#D4AF37]" />
                  Est. 2023 · Crafted in India
                </div>

                <h1
                  id="hero-title"
                  className="font-serif text-[4rem] sm:text-[5.5rem] lg:text-[7rem] leading-[0.86] tracking-[-0.055em] font-light"
                >
                  <span className="italic">
                    The Art
                  </span>

                  <br />

                  of Pure

                  <br />

                  <span className="text-[#D4AF37] italic">
                    Gold.
                  </span>
                </h1>

                <div className="w-24 h-px bg-[#D4AF37] my-8" />

                <p className="max-w-xl text-sm sm:text-base text-white/55 leading-[1.9]">
                  Exceptional 22K gold jewellery for people
                  who value craftsmanship, proportion and
                  pieces that feel unmistakably their own.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-9">

                  <Link
                    to="/products"
                    className="luxury-button bg-[#D4AF37] text-black hover:bg-white"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/about"
                    className="luxury-button border border-white/15 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Discover Aurix
                  </Link>

                </div>

                <div className="grid grid-cols-3 max-w-xl mt-12 pt-7 border-t border-white/[0.08]">

                  {[
                    ["22K", "Gold Purity"],
                    ["2023", "Established"],
                    ["India", "Crafted"],
                  ].map(([value, label], index) => (

                    <div
                      key={label}
                      className={`pr-5 ${
                        index > 0
                          ? "border-l border-white/10 pl-5"
                          : ""
                      }`}
                    >
                      <div className="font-serif text-xl sm:text-2xl">
                        {value}
                      </div>

                      <div className="text-[8px] uppercase tracking-[0.24em] text-white/35 mt-1">
                        {label}
                      </div>
                    </div>

                  ))}

                </div>

              </div>

              {/* RIGHT PRODUCT */}

              <div className="relative animate-fade-in">

                <div
                  className="absolute inset-4 border border-[#D4AF37]/15 translate-x-2 translate-y-2"
                  aria-hidden="true"
                />

                <div className="relative min-h-[550px] sm:min-h-[650px] bg-[#090909] border border-white/[0.08] overflow-hidden">

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

                  <div className="absolute top-6 left-6 text-[8px] font-mono tracking-[0.3em] text-white/25">
                    {String(heroIndex + 1).padStart(2, "0")} / 03
                  </div>

                  <div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]">
                    Signature Selection
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div
                      className="w-[22rem] h-[22rem] rounded-full bg-[#D4AF37]/[0.07] blur-[75px]"
                      aria-hidden="true"
                    />

                  </div>

                  <div className="relative h-[480px] sm:h-[535px] mt-8">

                    {heroProducts.map(
                      (product, index) => (

                        <OptimizedImage
                          key={product.src}
                          src={product.src}
                          alt={product.alt}
                          width={900}
                          height={900}
                          priority={index === 0}
                          sizes="(max-width: 1024px) 90vw, 48vw"
                          className={`absolute inset-0 w-full h-full object-contain p-10 transition-all duration-700 ${
                            index === heroIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-[0.96] pointer-events-none"
                          }`}
                        />

                      )
                    )}

                  </div>

                  {/* PRODUCT INFO */}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pt-28 px-7 pb-7">

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                      <div>

                        <div className="text-[8px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
                          {currentProduct.ref}
                        </div>

                        <h2 className="font-serif text-2xl sm:text-3xl italic">
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

                      <div className="sm:text-right">

                        <div className="text-[8px] uppercase tracking-[0.25em] text-white/40 mb-1">
                          Price
                        </div>

                        <div className="font-serif text-xl text-[#D4AF37]">
                          {currentProduct.price}
                        </div>

                      </div>

                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">

                      <button
                        type="button"
                        onClick={addCurrentProduct}
                        className="flex-1 min-w-[180px] bg-[#D4AF37] text-black py-3.5 px-5 text-[8px] uppercase tracking-[0.25em] font-medium hover:bg-white transition-colors flex items-center justify-center gap-3"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Bag
                      </button>

                      <Link
                        to="/products"
                        className="border border-white/15 px-5 py-3.5 text-[8px] uppercase tracking-[0.25em] text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                      >
                        View Piece
                      </Link>

                    </div>

                    <div className="flex gap-2 mt-6">

                      {heroProducts.map(
                        (product, index) => (

                          <button
                            key={product.src}
                            type="button"
                            onClick={() =>
                              setHeroIndex(index)
                            }
                            aria-label={`Show ${product.name}`}
                            aria-current={
                              index === heroIndex
                            }
                            className={`h-px transition-all duration-500 ${
                              index === heroIndex
                                ? "w-12 bg-[#D4AF37]"
                                : "w-5 bg-white/20"
                            }`}
                          />

                        )
                      )}

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

        <div className="gold-strip">
          <div className="gold-strip-track">
            22K GOLD · PREMIUM CRAFTSMANSHIP · SECURE DELIVERY ·
            TIMELESS DESIGN · CRAFTED IN INDIA · AUTHENTIC AURIX ·
            22K GOLD · PREMIUM CRAFTSMANSHIP · SECURE DELIVERY ·
            TIMELESS DESIGN · CRAFTED IN INDIA · AUTHENTIC AURIX ·
          </div>
        </div>

        {/* =====================================================
            AURIX EDIT
        ===================================================== */}

        <section className="section-luxury bg-[#050505]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="section-heading">

              <div>

                <div className="eyebrow mb-5">
                  <span className="w-8 h-px bg-[#D4AF37]" />
                  The Collection
                </div>

                <h2 className="display-title">
                  The Aurix Edit
                </h2>

              </div>

              <Link
                to="/products"
                className="text-link"
              >
                View All Pieces
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {heroProducts.map((item, index) => (

                <Link
                  key={item.src}
                  to="/products"
                  className="group"
                >

                  <article className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b] border border-white/[0.07]">

                    <OptimizedImage
                      src={item.src}
                      alt={item.alt}
                      width={900}
                      height={1100}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

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

                  </article>

                </Link>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            COLLECTIONS
        ===================================================== */}

        <section className="section-luxury bg-[#090909] border-y border-white/[0.06]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="max-w-2xl mb-16">

              <div className="text-[8px] uppercase tracking-[0.45em] text-[#D4AF37] mb-5">
                Explore Aurix
              </div>

              <h2 className="display-title">
                Collections made
                <br />
                <span>to be remembered.</span>
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              {categories.map((category, index) => (

                <Link
                  key={index}
                  to="/products"
                  className={`group ${
                    index === 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >

                  <article
                    className={`relative overflow-hidden bg-[#050505] border border-white/[0.07] ${
                      index === 0
                        ? "h-[500px]"
                        : "h-[400px]"
                    }`}
                  >

                    <OptimizedImage
                      src={getOptimizedImage(category.image)}
                      alt={`${category.title} gold jewellery collection`}
                      width={1000}
                      height={800}
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

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

                  </article>

                </Link>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            AURIX STORY
        ===================================================== */}

        <section className="section-luxury bg-[#050505]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

              <div className="relative">

                <div
                  className="absolute -top-5 -left-5 w-24 h-24 border-l border-t border-[#D4AF37]/40"
                  aria-hidden="true"
                />

                <div
                  className="absolute -bottom-5 -right-5 w-24 h-24 border-r border-b border-[#D4AF37]/40"
                  aria-hidden="true"
                />

                <div className="aspect-[4/5] bg-[#0b0b0b] overflow-hidden">

                  <OptimizedImage
                    src={ctaImage}
                    alt="Aurix gold jewellery craftsmanship"
                    width={1200}
                    height={1500}
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
                  for unforgettable occasions, our jewellery is
                  made to become part of your story.
                </p>

                <Link
                  to="/about"
                  className="text-link mt-9"
                >
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            STANDARD
        ===================================================== */}

        <section className="section-luxury bg-[#0a0a0a] border-y border-white/[0.06]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="text-center mb-20">

              <div className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-5">
                Why Aurix
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl italic font-light">
                The Aurix Standard
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {features.map((feature, index) => {

                const FeatureIcon = feature.icon;

                return (
                  <article
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

                  </article>
                );

              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            REVIEWS
        ===================================================== */}

        <section className="section-luxury bg-[#050505]">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="mb-16">

              <div className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-5">
                Client Stories
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl italic font-light">
                Words from those
                <br />
                who wear Aurix.
              </h2>

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

        {/* =====================================================
            SOCIAL GALLERY
        ===================================================== */}

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
                  key={`${image}-${index}`}
                  className="aspect-square overflow-hidden bg-[#050505]"
                >

                  <OptimizedImage
                    src={image}
                    alt={`Aurix gold jewellery ${index + 1}`}
                    width={700}
                    height={700}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="relative py-32 sm:py-40 overflow-hidden">

          <OptimizedImage
            src={ctaImage}
            alt=""
            width={1600}
            height={900}
            sizes="100vw"
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
                className="luxury-button bg-[#D4AF37] text-black hover:bg-white"
              >
                Shop Gold Collection
              </Link>

              <Link
                to="/contact"
                className="luxury-button border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Custom Design
              </Link>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Home;