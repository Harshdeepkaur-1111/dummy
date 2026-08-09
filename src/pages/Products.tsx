import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import LazyMotion from "../components/LazyMotion";
import OptimizedImage from "../components/OptimizedImage";

import { products } from "../data";
import { getOptimizedImage } from "../lib/utils";
import { useCart } from "../contexts/CartContext";

const SITE_URL = "https://aurix-gold.vercel.app";

export function Products() {
  const { addToCart, setIsCartOpen } = useCart();

  const handleBuyNow = (
    product: any,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });

    setIsCartOpen(true);
  };

  const handleAddToCart = (
    product: any,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gold Jewellery Collection",
        item: `${SITE_URL}/products`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Aurix Gold Jewellery Collection",
    description:
      "Premium 22K gold jewellery collection including necklaces, rings, earrings and bangles.",
    url: `${SITE_URL}/products`,
    isPartOf: {
      "@type": "WebSite",
      name: "Aurix",
      url: SITE_URL,
    },
  };

  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center bg-[#050505] text-white">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
            Loading Collection...
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-[#050505] text-white">
        {/* =====================================================
            SEO
        ====================================================== */}

        <Helmet>
          <title>
            22K Gold Jewellery Collection | Necklaces, Rings & Earrings | Aurix
          </title>

          <meta
            name="description"
            content="Explore Aurix's premium 22K gold jewellery collection. Discover elegant necklaces, rings, earrings, bangles and timeless gold jewellery designed for modern luxury."
          />

          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />

          <link
            rel="canonical"
            href={`${SITE_URL}/products`}
          />

          <meta
            property="og:title"
            content="22K Gold Jewellery Collection | Aurix"
          />

          <meta
            property="og:description"
            content="Discover premium 22K gold necklaces, rings, earrings and bangles from Aurix."
          />

          <meta property="og:type" content="website" />

          <meta
            property="og:url"
            content={`${SITE_URL}/products`}
          />

          <meta
            property="og:site_name"
            content="Aurix"
          />

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="22K Gold Jewellery Collection | Aurix"
          />

          <meta
            name="twitter:description"
            content="Explore premium 22K gold jewellery from Aurix."
          />

          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(collectionSchema)}
          </script>
        </Helmet>

        {/* =====================================================
            HERO
        ====================================================== */}

        <header className="relative overflow-hidden border-b border-white/10 bg-[#050505]">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl"
          />

          {/* IMPORTANT:
              Same container width + padding used throughout page
          */}
          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <LazyMotion
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-7 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />

                <span className="flex items-center gap-2 whitespace-nowrap text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  <Sparkles className="h-3 w-3 shrink-0" />
                  Aurix Collection
                </span>

                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              <h1 className="font-serif text-5xl font-light italic leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Fine Gold
                <span className="block text-[#D4AF37]">
                  Jewellery
                </span>
              </h1>

              <div className="mx-auto my-8 h-px w-12 bg-[#D4AF37]" />

              <p className="mx-auto max-w-2xl text-sm font-light leading-7 text-white/60 md:text-base">
                Discover Aurix's curated collection of premium 22K gold
                jewellery — thoughtfully designed for timeless elegance,
                everyday luxury and unforgettable occasions.
              </p>
            </LazyMotion>
          </div>
        </header>

        {/* =====================================================
            TRUST BAR
        ====================================================== */}

        <section
          aria-label="Aurix jewellery benefits"
          className="border-b border-white/10 bg-[#080808]"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                "22K Gold",
                "Crafted With Care",
                "Secure Packaging",
                "Lifetime Support",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`px-4 py-5 text-center ${
                    index !== 0
                      ? "border-l border-white/10"
                      : ""
                  }`}
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCTS
        ====================================================== */}

        <main id="main-content">
          <section className="bg-[#050505] py-16 sm:py-20 md:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

              {/* Section heading */}
              <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                    The Collection
                  </p>

                  <h2 className="max-w-3xl font-serif text-3xl font-light italic leading-tight md:text-5xl">
                    Discover Your Signature Piece
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-white/45 md:pb-1">
                  Explore our selection of timeless gold jewellery,
                  created to complement your personal style.
                </p>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                {products.map((product, idx) => (
                  <LazyMotion
                    key={product.id}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.55,
                      delay: (idx % 3) * 0.08,
                      ease: "easeOut",
                    }}
                    className="h-full"
                  >
                    <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:border-[#D4AF37]/35">

                      {/* Image */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#080808]">
                        <OptimizedImage
                          src={getOptimizedImage(product.image)}
                          alt={`${product.name} - Aurix 22K Gold Jewellery`}
                          width={600}
                          height={750}
                          priority={idx < 2}
                          loading={idx < 2 ? "eager" : "lazy"}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent"
                        />

                        <div className="absolute left-4 top-4">
                          <span className="inline-flex h-8 min-w-9 items-center justify-center border border-white/10 bg-black/60 px-2 font-mono text-[9px] tracking-widest text-[#D4AF37] backdrop-blur-sm">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="absolute right-4 top-4">
                          <span className="bg-[#947100] px-3 py-2 text-[8px] font-bold uppercase tracking-widest text-black">
                            22K GOLD
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-6 md:p-7">

                        <div className="mb-4 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#D4AF37]">
                          <span>{product.material}</span>

                          <span
                            aria-hidden="true"
                            className="h-1 w-1 shrink-0 rounded-full bg-[#D4AF37]/50"
                          />

                          <span>{product.weight}</span>
                        </div>

                        <h2 className="mb-3 font-serif text-xl italic leading-tight text-white transition-colors duration-300 group-hover:text-[#D4AF37] md:text-2xl">
                          {product.name}
                        </h2>

                        <p className="mb-6 line-clamp-3 text-xs leading-7 text-white/50">
                          {product.desc}
                        </p>

                        {/* Price */}
                        <div className="mb-6 flex items-center justify-between">
                          <div>
                            <span className="mb-1 block text-[8px] uppercase tracking-[0.2em] text-white/35">
                              Price
                            </span>

                            <span className="font-mono text-lg tracking-wider text-white">
                              {product.price}
                            </span>
                          </div>

                          <div
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30"
                          >
                            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-auto space-y-2.5">
                          <button
                            type="button"
                            onClick={(e) =>
                              handleBuyNow(product, e)
                            }
                            className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#947100] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-white"
                            aria-label={`Buy ${product.name} now`}
                          >
                            Buy Now
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) =>
                              handleAddToCart(product, e)
                            }
                            className="flex min-h-12 w-full items-center justify-center gap-2 border border-white/15 px-5 py-3.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                            aria-label={`Add ${product.name} to cart`}
                          >
                            <ShoppingBag className="h-3.5 w-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </article>
                  </LazyMotion>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              CTA
          ====================================================== */}

          <section className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl"
            />

            <div className="relative mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
              <div className="mx-auto mb-8 flex h-12 w-12 rotate-45 items-center justify-center border border-[#D4AF37]/40">
                <div className="h-7 w-7 border border-[#D4AF37]/30" />
              </div>

              <p className="mb-5 text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                Aurix Fine Jewellery
              </p>

              <h2 className="mb-6 font-serif text-4xl font-light italic leading-tight text-white md:text-6xl">
                Jewellery That
                <span className="block text-[#D4AF37]">
                  Tells Your Story
                </span>
              </h2>

              <p className="mx-auto max-w-xl text-sm leading-7 text-white/50">
                From everyday elegance to unforgettable celebrations,
                discover jewellery designed to become part of your story.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Suspense>
  );
}