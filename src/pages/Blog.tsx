import React, { Suspense, useState } from "react";
import { ArrowRight, BookOpen, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

import LazyMotion from "../components/LazyMotion";
import { articles } from "../data";
import OptimizedImage from "../components/OptimizedImage";
import { getOptimizedImage } from "../lib/utils";

const SITE_URL = "https://aurix-gold.vercel.app";

export function Blog() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Aurix Journal",
    description:
      "Gold jewellery trends, styling guides, care tips and jewellery advice from Aurix.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Aurix",
      url: SITE_URL,
    },
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
        name: "Aurix Journal",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center bg-[#050505] text-white">
          Loading...
        </div>
      }
    >
      <div className="min-h-screen bg-[#050505] text-white">
        {/* ================= SEO ================= */}

        <Helmet>
          <title>Aurix Journal | Gold Jewellery Trends, Tips & Guides</title>

          <meta
            name="description"
            content="Read the Aurix Journal for gold jewellery trends, 22K gold care tips, styling ideas, buying guides and expert jewellery advice."
          />

          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />

          <link rel="canonical" href={`${SITE_URL}/blog`} />

          <meta
            property="og:title"
            content="Aurix Journal | Gold Jewellery Trends & Tips"
          />

          <meta
            property="og:description"
            content="Discover gold jewellery trends, styling tips and jewellery care guides from Aurix."
          />

          <meta property="og:type" content="website" />

          <meta property="og:url" content={`${SITE_URL}/blog`} />

          <meta property="og:site_name" content="Aurix" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:title"
            content="Aurix Journal | Gold Jewellery Trends & Tips"
          />

          <meta
            name="twitter:description"
            content="Gold jewellery trends, styling ideas and care guides from Aurix."
          />

          <script type="application/ld+json">
            {JSON.stringify(blogSchema)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </Helmet>

        {/* ================= HERO ================= */}

        <header className="relative overflow-hidden border-b border-white/10 bg-[#0b0b0b]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(212,175,55,.14),transparent_48%)]"
          />

          <div className="aurix-page-hero-inner">
            <LazyMotion
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  Aurix Journal
                </span>

                <span className="h-px w-10 bg-[#D4AF37]" />
              </div>

              <h1 className="font-serif text-5xl font-light italic sm:text-6xl lg:text-7xl">
                Gold Jewellery Journal
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Discover jewellery trends, styling inspiration, gold care tips
                and helpful guides for choosing pieces you will love for years.
              </p>
            </LazyMotion>
          </div>
        </header>

        <main>
          {/* ================= ARTICLES ================= */}

          <section className="aurix-page-section">
  <div className="aurix-page-section-inner">

    <div className="space-y-16">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Latest Stories
                  </p>

                  <h2
                    id="journal-heading"
                    className="mt-3 font-serif text-3xl italic sm:text-4xl"
                  >
                    From The Journal
                  </h2>
                </div>

                <BookOpen
                  aria-hidden="true"
                  className="hidden h-6 w-6 text-[#D4AF37] sm:block"
                />
              </div>

              <div className="space-y-8">
                {articles.map((article: any, idx: number) => {
                  const isOpen = expandedArticle === article.id;
                  const articleContentId = `article-${article.id}`;

                  return (
                    <LazyMotion
                      tag="article"
                      key={article.id}
                      initial={{
                        opacity: 0,
                        y: 20,
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
                        duration: 0.5,
                      }}
                      className="group overflow-hidden border border-white/10 bg-[#090909] transition hover:border-[#D4AF37]/25"
                    >
                      <div className="grid md:grid-cols-[.85fr_1.15fr]">
                        {/* IMAGE */}

                        <div className="relative aspect-[4/3] overflow-hidden bg-[#111] md:aspect-auto">
                          <OptimizedImage
                            src={getOptimizedImage(article.image)}
                            alt={`${article.title} - Aurix Gold Jewellery`}
                            width={900}
                            height={675}
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="h-full min-h-[260px] w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]"
                          />

                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                          />

                          <span className="absolute left-5 top-5 border border-white/10 bg-black/60 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur">
                            Journal {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* CONTENT */}

                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                          <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                            {article.date}
                          </span>

                          <h2 className="mt-4 font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
                            {article.title}
                          </h2>

                          <p className="mt-5 text-sm leading-7 text-white/55">
                            {article.excerpt}
                          </p>

                          {isOpen && (
                            <div
                              id={articleContentId}
                              className="relative mt-7 border border-white/10 bg-white/[0.025] p-6"
                            >
                              <button
                                type="button"
                                onClick={() => setExpandedArticle(null)}
                                className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                aria-label={`Close ${article.title}`}
                              >
                                <X className="h-4 w-4" />
                              </button>

                              <div className="space-y-4 pr-5 text-sm leading-7 text-white/65">
                                <p>{article.excerpt}</p>

                                <p>
                                  Gold jewellery becomes more meaningful when
                                  design, wearability and care are considered
                                  together.
                                </p>

                                <p>
                                  Explore the Aurix collection for elegant
                                  jewellery designed around modern luxury and
                                  timeless appeal.
                                </p>
                              </div>
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              setExpandedArticle(
                                isOpen ? null : article.id
                              )
                            }
                            className="mt-7 inline-flex w-fit items-center border-b border-[#D4AF37]/40 pb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/75 transition hover:border-[#D4AF37] hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            aria-expanded={isOpen}
                            aria-controls={articleContentId}
                          >
                            {isOpen ? "Close Article" : "Read Full Article"}

                            <ArrowRight className="ml-2 h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </LazyMotion>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================= CTA ================= */}

          <section className="border-y border-white/10 bg-[#0a0a0a]">
            <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Explore Aurix
              </p>

              <h2 className="mt-4 font-serif text-4xl italic sm:text-5xl">
                Read. Choose. Wear.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
                Turn inspiration into your next gold jewellery piece.
              </p>

              <a
                href="/products"
                className="mt-8 inline-flex items-center gap-3 bg-[#D4AF37] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Explore Collection
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </Suspense>
  );
}