import React, { Suspense, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

import LazyMotion from "../components/LazyMotion";
import { articles } from "../data";
import OptimizedImage from "../components/OptimizedImage";
import { getOptimizedImage } from "../lib/utils";

export function Blog() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="w-full flex-grow bg-[#050505] text-white">

        {/* =====================================================
            SEO
        ===================================================== */}

        <Helmet>

          <title>
            Aurix Blog | Gold Jewellery Trends, Tips & Expert Advice
          </title>

          <meta
            name="description"
            content="Explore the Aurix jewellery blog for gold jewellery trends, 22k gold care tips, styling ideas, buying guides and expert advice."
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/blog"
          />

          <meta
            name="robots"
            content="index, follow"
          />

          {/* Open Graph */}

          <meta
            property="og:title"
            content="Aurix Blog | Gold Jewellery Trends & Tips"
          />

          <meta
            property="og:description"
            content="Discover gold jewellery trends, styling tips, 22k gold care guides and expert jewellery advice from Aurix."
          />

          <meta
            property="og:url"
            content="https://aurix-gold.vercel.app/blog"
          />

          <meta
            property="og:type"
            content="website"
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
            content="Aurix Blog | Gold Jewellery Trends & Tips"
          />

          <meta
            name="twitter:description"
            content="Read Aurix guides about gold jewellery styling, 22k gold care and timeless jewellery trends."
          />

          {/* =====================================================
              BREADCRUMB SCHEMA
          ===================================================== */}

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
                  name: "Blog",
                  item: "https://aurix-gold.vercel.app/blog",
                },
              ],
            })}
          </script>

          {/* =====================================================
              BLOG SCHEMA
          ===================================================== */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Aurix Blog",
              description:
                "Gold jewellery trends, tips, styling guides and expert advice.",
              url: "https://aurix-gold.vercel.app/blog",
              publisher: {
                "@type": "Organization",
                name: "Aurix",
                url: "https://aurix-gold.vercel.app/",
              },
            })}
          </script>

        </Helmet>


        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="border-b border-white/10">

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">

            <LazyMotion
              tag="div"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-center"
            >

              <div className="flex items-center justify-center gap-4 mb-7">

                <div className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  Aurix Journal
                </span>

                <div className="h-px w-10 bg-[#D4AF37]" />

              </div>


              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-light text-white mb-7">
                Gold Jewellery Journal
              </h1>


              <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Discover gold jewellery trends, styling guides,
                22k gold care tips and expert advice to help you
                choose and care for timeless jewellery.
              </p>

            </LazyMotion>

          </div>

        </section>


        {/* =====================================================
            BLOG ARTICLES
        ===================================================== */}

        <main>

          <section className="py-24 lg:py-32">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="space-y-16">

                {articles.map((article, idx) => (

                  <LazyMotion
                    tag="article"
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="border-b border-white/10 pb-16 last:border-0 last:pb-0"
                  >

                    <div className="md:grid md:grid-cols-5 md:gap-12 items-center">


                      {/* =================================================
                          ARTICLE IMAGE
                      ================================================= */}

                      <div className="md:col-span-2 mb-8 md:mb-0">

                        <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-black">

                          <OptimizedImage
                            src={getOptimizedImage(article.image)}
                            alt={`${article.title} - Aurix Gold Jewellery`}
                            width={800}
                            height={600}
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
                          />

                        </div>

                      </div>


                      {/* =================================================
                          ARTICLE CONTENT
                      ================================================= */}

                      <div className="md:col-span-3">

                        <span className="text-[#D4AF37] text-[10px] font-medium tracking-[0.2em] uppercase mb-4 block">
                          {article.date}
                        </span>


                        <h2
                          className="font-serif text-2xl md:text-3xl text-white mb-4 hover:text-[#D4AF37] transition-colors cursor-pointer italic"
                          onClick={() =>
                            setExpandedArticle(
                              expandedArticle === article.id
                                ? null
                                : article.id
                            )
                          }
                        >
                          {article.title}
                        </h2>


                        <p className="text-white/70 font-light leading-relaxed mb-8 text-sm">
                          {article.excerpt}
                        </p>


                        {/* =================================================
                            EXPANDED ARTICLE
                        ================================================= */}

                        {expandedArticle === article.id ? (

                          <div className="bg-[#111] border border-white/10 p-6 mb-8 relative">

                            <button
                              type="button"
                              onClick={() =>
                                setExpandedArticle(null)
                              }
                              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                              aria-label={`Close ${article.title}`}
                            >
                              <X className="w-4 h-4" />
                            </button>


                            <h3 className="text-[#D4AF37] font-serif italic mb-3 pr-6">
                              {article.title}
                            </h3>


                            <div className="space-y-4 text-white/70 text-sm font-light leading-relaxed">

                              <p>
                                {article.excerpt}
                              </p>

                              <p>
                                Discover more gold jewellery insights,
                                styling ideas and care tips from the
                                Aurix Journal.
                              </p>

                              <p>
                                Explore the Aurix collection to find
                                elegant and timeless jewellery pieces
                                designed for modern style.
                              </p>

                            </div>

                          </div>

                        ) : (

                          <button
                            type="button"
                            onClick={() =>
                              setExpandedArticle(article.id)
                            }
                            className="flex items-center text-white/80 hover:text-[#D4AF37] transition-colors text-[10px] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37]"
                            aria-label={`Read full article: ${article.title}`}
                          >

                            Read Full Article

                            <ArrowRight
                              className="ml-2 w-3 h-3"
                            />

                          </button>

                        )}

                      </div>

                    </div>

                  </LazyMotion>

                ))}

              </div>

            </div>

          </section>


          {/* =====================================================
              BLOG CTA
          ===================================================== */}

          <section className="border-t border-white/10 bg-[#0a0a0a]">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

              <div className="w-10 h-10 border border-[#D4AF37]/40 rotate-45 mx-auto mb-10 flex items-center justify-center">

                <div className="w-6 h-6 border border-[#D4AF37]/30" />

              </div>


              <p className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] mb-5">
                Discover Aurix
              </p>


              <h2 className="font-serif text-4xl md:text-5xl text-white italic font-light mb-6">
                Find Your Perfect Gold Piece
              </h2>


              <p className="text-white/55 text-sm max-w-xl mx-auto leading-relaxed mb-9">
                Explore our collection of elegant gold jewellery
                inspired by timeless design and modern luxury.
              </p>


              <a
                href="/products"
                className="inline-block bg-[#D4AF37] text-black px-9 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors"
              >
                Explore Collection
              </a>

            </div>

          </section>

        </main>

      </div>
    </Suspense>
  );
}