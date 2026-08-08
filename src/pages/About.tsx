import React, { Suspense } from "react";
import {
  ArrowRight,
  Gem,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { team } from "../data";
import OptimizedImage from "../components/OptimizedImage";
import LazyMotion from "../components/LazyMotion";
import { getOptimizedImage } from "../lib/utils";

const SITE_URL = "https://aurix-gold.vercel.app";

const values = [
  {
    icon: Gem,
    title: "Craftsmanship",
    text: "Thoughtful detailing, refined finishes and designs made to feel timeless.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Clear communication and a customer-first approach at every step.",
  },
  {
    icon: Sparkles,
    title: "Modern Luxury",
    text: "Classic gold jewellery interpreted through clean, contemporary design.",
  },
  {
    icon: HeartHandshake,
    title: "Purpose",
    text: "Building a jewellery experience around quality, care and lasting relationships.",
  },
];

export function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aurix",
    url: SITE_URL,
    description:
      "Aurix is a premium gold jewellery brand focused on timeless design, craftsmanship and modern elegance.",
    foundingDate: "2023",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
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
        name: "About Aurix",
        item: `${SITE_URL}/about`,
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
          <title>About Aurix | Premium Gold Jewellery Brand</title>

          <meta
            name="description"
            content="Discover the story, values and vision behind Aurix, a premium gold jewellery brand creating timeless designs with modern elegance."
          />

          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />

          <link rel="canonical" href={`${SITE_URL}/about`} />

          <meta
            property="og:title"
            content="About Aurix | Premium Gold Jewellery"
          />

          <meta
            property="og:description"
            content="Discover the story and values behind Aurix premium gold jewellery."
          />

          <meta property="og:type" content="website" />

          <meta property="og:url" content={`${SITE_URL}/about`} />

          <meta property="og:site_name" content="Aurix" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:title"
            content="About Aurix | Premium Gold Jewellery"
          />

          <meta
            name="twitter:description"
            content="Learn more about Aurix and our approach to premium gold jewellery."
          />

          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </Helmet>

        {/* ================= HERO ================= */}

        <header className="relative overflow-hidden border-b border-white/10 bg-[#0b0b0b]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(212,175,55,.15),transparent_48%)]"
          />

          <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:py-28">
            <LazyMotion
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37]">
                  The Aurix Story
                </span>

                <span className="h-px w-10 bg-[#D4AF37]" />
              </div>

              <h1 className="font-serif text-5xl font-light italic sm:text-6xl lg:text-7xl">
                About Aurix
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Jewellery is more than an accessory. It is a reflection of
                identity, memories and moments. Aurix brings timeless gold
                design into a modern world.
              </p>
            </LazyMotion>
          </div>
        </header>

        <main>
          {/* ================= INTRO ================= */}

          <section className="px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] p-8 text-center sm:p-12">
                <p className="font-serif text-2xl italic leading-relaxed text-white sm:text-3xl">
                  “Timeless gold. Modern expression. Jewellery made to stay
                  with you.”
                </p>
              </div>
            </div>
          </section>

          {/* ================= STORY ================= */}

          <section
            aria-labelledby="story-heading"
            className="border-y border-white/10 bg-[#080808]"
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-24">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  Since 2023
                </p>

                <h2
                  id="story-heading"
                  className="mt-4 font-serif text-4xl italic sm:text-5xl"
                >
                  Our Story
                </h2>

                <div className="mt-5 h-px w-12 bg-[#D4AF37]" />
              </div>

              <div className="space-y-6 text-sm leading-7 text-white/55">
                <p>
                  Founded in 2023, Aurix was created with a simple idea:
                  premium gold jewellery should feel elegant, meaningful and
                  timeless.
                </p>

                <p>
                  We combine inspiration from traditional jewellery
                  craftsmanship with clean, contemporary aesthetics. Every
                  piece is designed to complement both special occasions and
                  everyday moments.
                </p>

                <p>
                  Our goal is to build a jewellery experience where design,
                  quality and trust come together.
                </p>
              </div>
            </div>
          </section>

          {/* ================= MISSION ================= */}

          <section className="px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  What Drives Us
                </p>

                <h2 className="mt-4 font-serif text-4xl italic sm:text-5xl">
                  Mission & Vision
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <article className="border border-white/10 bg-[#0a0a0a] p-8 sm:p-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    Our Mission
                  </span>

                  <h3 className="mt-4 font-serif text-3xl italic">
                    Crafted With Purpose
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/50">
                    To create beautifully designed gold jewellery that
                    inspires confidence, individuality and elegance while
                    providing a trusted customer experience.
                  </p>
                </article>

                <article className="border border-white/10 bg-[#0a0a0a] p-8 sm:p-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    Our Vision
                  </span>

                  <h3 className="mt-4 font-serif text-3xl italic">
                    Timeless Modern Luxury
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/50">
                    To build Aurix into a recognised jewellery brand known for
                    quality, innovation, elegant designs and customer
                    satisfaction.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ================= VALUES ================= */}

          <section
            aria-labelledby="values-heading"
            className="border-y border-white/10 bg-[#080808]"
          >
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  The Aurix Standard
                </p>

                <h2
                  id="values-heading"
                  className="mt-4 font-serif text-4xl italic sm:text-5xl"
                >
                  Our Core Values
                </h2>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <article
                      key={value.title}
                      className="group border border-white/10 bg-[#0a0a0a] p-7 transition duration-500 hover:border-[#D4AF37]/35"
                    >
                      <div className="flex items-center justify-between">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6 text-[#D4AF37]"
                        />

                        <span className="font-mono text-[9px] text-white/25">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-8 font-serif text-xl italic">
                        {value.title}
                      </h3>

                      <p className="mt-4 text-xs leading-6 text-white/45">
                        {value.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================= TEAM ================= */}

          {team?.length > 0 && (
            <section
              aria-labelledby="team-heading"
              className="px-4 py-16 sm:px-6 lg:py-24"
            >
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                    Behind Aurix
                  </p>

                  <h2
                    id="team-heading"
                    className="mt-4 font-serif text-4xl italic sm:text-5xl"
                  >
                    Meet Our Team
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
                    The people bringing creativity, craftsmanship and
                    attention to detail to Aurix.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
                  {team.map((member: any) => (
                    <article key={member.name} className="text-center">
                      <div className="mx-auto aspect-square max-w-[170px] overflow-hidden rounded-full border border-[#D4AF37]/20 bg-[#111] p-2">
                        <OptimizedImage
                          src={getOptimizedImage(member.image)}
                          alt={`${member.name} - Aurix jewellery team`}
                          width={170}
                          height={170}
                          loading="lazy"
                          sizes="170px"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>

                      <h3 className="mt-5 font-serif text-lg">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">
                        {member.role}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ================= CTA ================= */}

          <section className="border-t border-white/10 bg-[#0a0a0a]">
            <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
              <Sparkles
                aria-hidden="true"
                className="mx-auto h-7 w-7 text-[#D4AF37]"
              />

              <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Discover Aurix
              </p>

              <h2 className="mt-4 font-serif text-4xl italic sm:text-5xl">
                Find Your Gold Piece
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">
                Explore elegant jewellery designed for timeless style.
              </p>

              <a
                href="/products"
                className="mt-8 inline-flex items-center gap-3 bg-[#D4AF37] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
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