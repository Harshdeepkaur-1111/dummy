import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

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
      <div className="w-full min-h-screen bg-[#050505] text-white pb-24">

        {/* ================= SEO ================= */}

        <Helmet>
          <title>
            Gold Jewelry Collection | 22K Gold Necklaces, Rings & Bangles | Aurix
          </title>

          <meta
            name="description"
            content="Explore Aurix's premium 22K gold jewelry collection including necklaces, rings, bangles, earrings and handcrafted gold accessories."
          />

          <meta
            name="keywords"
            content="22k gold jewelry, gold necklace, gold rings, gold bangles, gold earrings, premium gold jewelry, Aurix gold"
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/products"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Gold Jewelry Collection | Aurix"
          />

          <meta
            property="og:description"
            content="Discover premium 22K gold necklaces, rings, bangles and handcrafted jewelry from Aurix."
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

          {/* Twitter */}
          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Gold Jewelry Collection | Aurix"
          />

          <meta
            name="twitter:description"
            content="Explore premium 22K gold jewelry from Aurix."
          />

          {/* Breadcrumb Schema */}

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
                  name: "Gold Jewelry Collection",
                  item: "https://aurix-gold.vercel.app/products",
                },
              ],
            })}
          </script>

          {/* Collection Page Schema */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Gold Jewelry Collection",
              description:
                "Explore Aurix's premium 22K gold jewelry collection including necklaces, rings, bangles and earrings.",
              url: "https://aurix-gold.vercel.app/products",
              isPartOf: {
                "@type": "WebSite",
                name: "Aurix",
                url: "https://aurix-gold.vercel.app/",
              },
            })}
          </script>
        </Helmet>

        {/* ================= PAGE HEADER ================= */}

        <header className="bg-[#111] py-24 px-4 text-center border-b border-white/10 mb-16">

          <LazyMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="max-w-3xl mx-auto">

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-px bg-[#D4AF37]" />

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  Aurix Jewelry
                </span>

                <div className="w-10 h-px bg-[#D4AF37]" />
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 italic">
                Fine Gold Jewelry Collection
              </h1>

              <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-8" />

              <p className="text-white/65 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Explore Aurix's premium 22K gold jewelry collection.
                Discover handcrafted gold necklaces, rings, bangles,
                earrings and timeless accessories designed for everyday
                elegance and special occasions.
              </p>

            </div>
          </LazyMotion>

        </header>

        {/* ================= PRODUCTS ================= */}

        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: (idx % 3) * 0.08,
                    ease: "easeOut",
                  }}
                  className="group flex flex-col bg-[#050505] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500"
                >

                  {/* PRODUCT IMAGE */}

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">

                    <OptimizedImage
                      src={getOptimizedImage(product.image)}
                      alt={`${product.name} - Aurix Gold Jewelry`}
                      width={600}
                      height={800}
                      priority={idx < 2}
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Image overlay */}

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Product number */}

                    <div className="absolute top-5 left-5">
                      <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] bg-black/60 px-3 py-2">
                        0{idx + 1}
                      </span>
                    </div>

                  </div>

                  {/* PRODUCT CONTENT */}

                  <div className="flex flex-col flex-grow p-7 text-center relative">

                    {/* Gold line */}

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#D4AF37]" />

                    {/* Product name */}

                    <h2 className="font-serif text-xl sm:text-2xl text-white mb-3 italic">
                      {product.name}
                    </h2>

                    {/* Material / Weight */}

                    <div className="flex items-center justify-center gap-3 text-[9px] text-[#D4AF37] uppercase tracking-[0.25em] mb-5">

                      <span>
                        {product.material}
                      </span>

                      <span
                        className="w-1 h-1 rounded-full bg-[#D4AF37]/40"
                        aria-hidden="true"
                      />

                      <span>
                        {product.weight}
                      </span>

                    </div>

                    {/* Description */}

                    <p className="text-white/60 font-light text-xs leading-[1.8] mb-7 line-clamp-3">
                      {product.desc}
                    </p>

                    {/* Price */}

                    <div className="mb-7">
                      <span className="text-white font-mono text-lg tracking-widest">
                        {product.price}
                      </span>
                    </div>

                    {/* Buttons */}

                    <div className="flex flex-col gap-3 mt-auto">

                      {/* BUY NOW */}

                      <button
                        type="button"
                        onClick={(e) =>
                          handleBuyNow(product, e)
                        }
                        className="w-full bg-[#D4AF37] text-black py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-colors duration-300"
                        aria-label={`Buy ${product.name} now`}
                      >
                        Buy Now
                      </button>

                      {/* ADD TO CART */}

                      <button
                        type="button"
                        onClick={(e) =>
                          handleAddToCart(product, e)
                        }
                        className="w-full border border-white/20 text-white/70 py-4 font-medium uppercase tracking-[0.2em] text-[10px] hover:text-white hover:border-[#D4AF37] transition-colors duration-300"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        Add to Cart
                      </button>

                    </div>

                  </div>

                </LazyMotion>

              ))}

            </div>

          </div>
        </main>

      </div>
    </Suspense>
  );
}