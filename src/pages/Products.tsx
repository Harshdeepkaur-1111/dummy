import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

import LazyMotion from "../components/LazyMotion";
import OptimizedImage from "../components/OptimizedImage";

import { products } from "../data";
import { getOptimizedImage } from "../lib/utils";
import { useCart } from "../contexts/CartContext";

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

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
          <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em]">
            Loading Collection...
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-[#050505] text-white">

        {/* =====================================================
            SEO
        ===================================================== */}

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
            content="index, follow"
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/products"
          />

          <meta
            property="og:title"
            content="22K Gold Jewellery Collection | Aurix"
          />

          <meta
            property="og:description"
            content="Discover premium 22K gold necklaces, rings, earrings and bangles from Aurix."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content="https://aurix-gold.vercel.app/products"
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

          {/* Breadcrumb */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aurix-gold.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Gold Jewellery Collection",
                  item: "https://aurix-gold.vercel.app/products",
                },
              ],
            })}
          </script>

          {/* Collection */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Aurix Gold Jewellery Collection",
              description:
                "Premium 22K gold jewellery collection including necklaces, rings, earrings and bangles.",
              url: "https://aurix-gold.vercel.app/products",
              isPartOf: {
                "@type": "WebSite",
                name: "Aurix",
                url: "https://aurix-gold.vercel.app/",
              },
            })}
          </script>
        </Helmet>

        {/* =====================================================
            HERO
        ===================================================== */}

        <header className="relative overflow-hidden border-b border-white/10">

          {/* Background glow */}

          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">

            <LazyMotion
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="text-center"
            >

              {/* Label */}

              <div className="flex items-center justify-center gap-4 mb-8">

                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />

                <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  <Sparkles className="w-3 h-3" />
                  Aurix Collection
                </span>

                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />

              </div>

              {/* Heading */}

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic leading-[0.95] text-white">
                Fine Gold
                <span className="block aurix-gold-text">
                  Jewellery
                </span>
              </h1>

              <div className="aurix-divider mt-8 mb-8" />

              <p className="max-w-2xl mx-auto text-sm md:text-base text-white/60 font-light leading-relaxed">
                Discover Aurix's curated collection of premium 22K gold
                jewellery — thoughtfully designed for timeless elegance,
                everyday luxury and unforgettable occasions.
              </p>

            </LazyMotion>

          </div>
        </header>


        {/* =====================================================
            TRUST BAR
        ===================================================== */}

        <section
          aria-label="Aurix jewellery benefits"
          className="border-b border-white/10 bg-[#080808]"
        >

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-2 md:grid-cols-4">

              {[
                "22K Gold",
                "Crafted With Care",
                "Secure Packaging",
                "Lifetime Support",
              ].map((item, index) => (

                <div
                  key={item}
                  className={`py-5 px-4 text-center ${
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
        ===================================================== */}

        <main id="main-content">

          <section className="py-20 md:py-28">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Section heading */}

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

                <div>

                  <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] mb-4">
                    The Collection
                  </p>

                  <h2 className="font-serif text-3xl md:text-5xl italic font-light">
                    Discover Your Signature Piece
                  </h2>

                </div>

                <p className="max-w-md text-sm text-white/45 leading-relaxed">
                  Explore our selection of timeless gold jewellery,
                  created to complement your personal style.
                </p>

              </div>


              {/* Product Grid */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

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
                    className="group"
                  >

                    <article className="h-full flex flex-col bg-[#0b0b0b] border border-white/10 hover:border-[#D4AF37]/35 transition-all duration-500">

                      {/* IMAGE */}

                      <div className="relative aspect-[4/5] overflow-hidden bg-[#080808]">

                        <OptimizedImage
                          src={getOptimizedImage(product.image)}
                          alt={`${product.name} - Aurix 22K Gold Jewellery`}
                          width={600}
                          height={750}
                          priority={idx < 2}
                          loading={idx < 2 ? "eager" : "lazy"}
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 50vw,
                            33vw
                          "
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        {/* Image gradient */}

                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent pointer-events-none"
                        />

                        {/* Product number */}

                        <div className="absolute top-4 left-4">

                          <span className="inline-flex items-center justify-center min-w-9 h-8 px-2 bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] font-mono tracking-widest text-[#D4AF37]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>

                        </div>

                        {/* Gold badge */}

                        <div className="absolute top-4 right-4">

                          <span className="bg-[#D4AF37] text-black px-3 py-2 text-[8px] uppercase tracking-widest font-bold">
                            22K GOLD
                          </span>

                        </div>

                      </div>


                      {/* CONTENT */}

                      <div className="flex flex-col flex-grow p-6 md:p-7">

                        <div className="flex items-center justify-between gap-4 mb-4">

                          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#D4AF37]">

                            <span>
                              {product.material}
                            </span>

                            <span
                              aria-hidden="true"
                              className="w-1 h-1 rounded-full bg-[#D4AF37]/50"
                            />

                            <span>
                              {product.weight}
                            </span>

                          </div>

                        </div>


                        <h2 className="font-serif text-xl md:text-2xl italic text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                          {product.name}
                        </h2>


                        <p className="text-xs text-white/50 leading-[1.8] line-clamp-3 mb-6">
                          {product.desc}
                        </p>


                        {/* Price */}

                        <div className="flex items-center justify-between mb-6">

                          <div>

                            <span className="block text-[8px] uppercase tracking-[0.2em] text-white/35 mb-1">
                              Price
                            </span>

                            <span className="text-lg font-mono tracking-wider text-white">
                              {product.price}
                            </span>

                          </div>

                          <div
                            aria-hidden="true"
                            className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center"
                          >
                            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                          </div>

                        </div>


                        {/* Buttons */}

                        <div className="mt-auto space-y-2.5">

                          <button
                            type="button"
                            onClick={(e) =>
                              handleBuyNow(product, e)
                            }
                            className="w-full min-h-12 bg-[#D4AF37] text-black px-5 py-3.5 font-bold uppercase tracking-[0.18em] text-[9px] hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                            aria-label={`Buy ${product.name} now`}
                          >
                            Buy Now
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>


                          <button
                            type="button"
                            onClick={(e) =>
                              handleAddToCart(product, e)
                            }
                            className="w-full min-h-12 border border-white/15 text-white/70 px-5 py-3.5 font-medium uppercase tracking-[0.18em] text-[9px] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300 flex items-center justify-center gap-2"
                            aria-label={`Add ${product.name} to cart`}
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
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
              LUXURY CTA
          ===================================================== */}

          <section className="relative overflow-hidden border-t border-white/10 bg-[#080808]">

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"
            />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">

              <div className="w-12 h-12 mx-auto mb-8 rotate-45 border border-[#D4AF37]/40 flex items-center justify-center">

                <div className="w-7 h-7 border border-[#D4AF37]/30" />

              </div>

              <p className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] mb-5">
                Aurix Fine Jewellery
              </p>

              <h2 className="font-serif text-4xl md:text-6xl italic font-light text-white mb-6">
                Jewellery That
                <span className="block aurix-gold-text">
                  Tells Your Story
                </span>
              </h2>

              <p className="max-w-xl mx-auto text-sm text-white/50 leading-relaxed">
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