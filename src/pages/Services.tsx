import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import LazyMotion from "../components/LazyMotion";
import { products } from "../data";
import OptimizedImage from "../components/OptimizedImage";
import { getOptimizedImage } from "../lib/utils";
import { useCart } from "../contexts/CartContext";

export function Services() {
  const { addToCart, setIsCartOpen } = useCart();

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
      <div className="w-full min-h-screen bg-[#050505] text-white pb-24">

        {/* ================= SEO ================= */}
        <Helmet>
          <title>
            Gold Jewelry Services | Aurix Premium Gold Jewelry
          </title>

          <meta
            name="description"
            content="Explore Aurix gold jewelry services, handcrafted 22k gold jewelry, custom designs, premium collections and elegant jewelry crafted for every occasion."
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/services"
          />

          <meta
            name="robots"
            content="index, follow"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Gold Jewelry Services | Aurix"
          />

          <meta
            property="og:description"
            content="Discover premium 22k gold jewelry, handcrafted designs and personalized jewelry services from Aurix."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content="https://aurix-gold.vercel.app/services"
          />

          {/* Twitter */}
          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Gold Jewelry Services | Aurix"
          />

          <meta
            name="twitter:description"
            content="Explore premium gold jewelry services and handcrafted 22k gold collections from Aurix."
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
                  name: "Services",
                  item: "https://aurix-gold.vercel.app/services",
                },
              ],
            })}
          </script>

          {/* Services Page Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Aurix Gold Jewelry Services",
              url: "https://aurix-gold.vercel.app/services",
              description:
                "Premium gold jewelry services and handcrafted 22k gold jewelry collections from Aurix.",
              publisher: {
                "@type": "Organization",
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
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
              Our Services
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">
              Premium Gold Jewelry Services
            </h1>

            <div className="w-16 h-px bg-[#D4AF37] mx-auto" />

            <p className="mt-8 text-white/70 font-light max-w-2xl mx-auto text-sm leading-relaxed">
              Discover premium gold jewelry services from Aurix.
              Explore handcrafted 22k gold jewelry, elegant designs,
              personalized selections and timeless pieces created for
              everyday luxury and special occasions.
            </p>
          </LazyMotion>
        </header>

        {/* ================= SERVICES INTRO ================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-[#111] border border-white/10 p-8 text-center">
              <div className="text-[#D4AF37] text-2xl mb-4">
                01
              </div>

              <h2 className="font-serif text-xl text-white mb-3">
                Premium Gold Jewelry
              </h2>

              <p className="text-white/60 text-sm leading-relaxed">
                Discover elegant gold necklaces, rings, bangles and
                other jewelry designed with timeless style.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 p-8 text-center">
              <div className="text-[#D4AF37] text-2xl mb-4">
                02
              </div>

              <h2 className="font-serif text-xl text-white mb-3">
                Handcrafted Designs
              </h2>

              <p className="text-white/60 text-sm leading-relaxed">
                Explore carefully designed jewelry that combines
                traditional craftsmanship with modern elegance.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 p-8 text-center">
              <div className="text-[#D4AF37] text-2xl mb-4">
                03
              </div>

              <h2 className="font-serif text-xl text-white mb-3">
                Personalized Selection
              </h2>

              <p className="text-white/60 text-sm leading-relaxed">
                Find jewelry pieces suited to your personal style,
                special occasions and everyday luxury.
              </p>
            </div>

          </div>
        </section>

        {/* ================= COLLECTION ================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
              Aurix Collection
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-white italic mb-5">
              Explore Our Gold Jewelry
            </h2>

            <div className="w-12 h-px bg-[#D4AF37] mx-auto" />

            <p className="mt-6 max-w-2xl mx-auto text-white/60 text-sm leading-relaxed">
              Browse our collection of premium gold jewelry and
              discover elegant pieces crafted for timeless beauty.
            </p>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {products.map((product, idx) => (
              <LazyMotion
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.7,
                  delay: (idx % 3) * 0.1,
                  ease: "easeOut",
                }}
                className="group flex flex-col bg-[#050505] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500"
              >

                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden border-b border-white/5 bg-[#0a0a0a]">

                  <OptimizedImage
                    src={getOptimizedImage(product.image)}
                    alt={`${product.name} - Aurix Gold Jewelry`}
                    width={600}
                    height={800}
                    priority={idx < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />

                </div>

                {/* Product Content */}
                <div className="flex flex-col flex-grow p-7 text-center relative">

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#D4AF37]" />

                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 italic">
                    {product.name}
                  </h3>

                  <div className="text-[9px] text-[#D4AF37] uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-3">
                    <span>{product.material}</span>

                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />

                    <span>{product.weight}</span>
                  </div>

                  <p className="text-white/60 font-light text-xs leading-[1.8] mb-7 line-clamp-3">
                    {product.desc}
                  </p>

                  <div className="mb-6">
                    <span className="text-white font-mono text-lg tracking-widest">
                      {product.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full bg-[#D4AF37] text-black py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-colors duration-300"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>

                </div>
              </LazyMotion>
            ))}

          </div>
        </main>

        {/* ================= BOTTOM CTA ================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">

          <div className="bg-[#111] border border-white/10 p-10 md:p-16 text-center">

            <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-5">
              Aurix
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-white italic mb-5">
              Discover Timeless Gold
            </h2>

            <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
              Explore the Aurix collection and find premium gold
              jewelry designed to become part of your story.
            </p>

          </div>

        </section>

      </div>
    </Suspense>
  );
}