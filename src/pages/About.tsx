import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import { team } from "../data";
import OptimizedImage from "../components/OptimizedImage";
import LazyMotion from "../components/LazyMotion";
import { getOptimizedImage } from "../lib/utils";

export function About() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="w-full flex-grow bg-[#050505] text-white">

        {/* ================= SEO ================= */}

        <Helmet>

          <title>
            About Aurix | Premium Gold Jewellery Brand
          </title>

          <meta
            name="description"
            content="Learn about Aurix, a premium gold jewellery brand focused on timeless designs, quality craftsmanship, trust and modern elegance."
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/about"
          />

          <meta
            name="robots"
            content="index, follow"
          />

          {/* Open Graph */}

          <meta
            property="og:title"
            content="About Aurix | Premium Gold Jewellery Brand"
          />

          <meta
            property="og:description"
            content="Discover the story, mission and values behind Aurix premium gold jewellery."
          />

          <meta
            property="og:url"
            content="https://aurix-gold.vercel.app/about"
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
            content="About Aurix | Premium Gold Jewellery"
          />

          <meta
            name="twitter:description"
            content="Learn more about Aurix and our approach to premium gold jewellery."
          />

          {/* ================= BREADCRUMB SCHEMA ================= */}

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
                  name: "About",
                  item: "https://aurix-gold.vercel.app/about",
                },
              ],
            })}
          </script>

          {/* ================= ORGANIZATION SCHEMA ================= */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aurix",
              url: "https://aurix-gold.vercel.app/",
              description:
                "Premium gold jewellery brand offering handcrafted accessories with modern elegance.",
              foundingDate: "2023",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IN",
                },
              },
            })}
          </script>

        </Helmet>


        {/* ================= PAGE HEADER ================= */}

        <section className="border-b border-white/10">

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">

            <LazyMotion
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
                  The Aurix Story
                </span>

                <div className="h-px w-10 bg-[#D4AF37]" />

              </div>


              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-light text-white mb-7">
                About Aurix
              </h1>


              <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Discover the story behind Aurix and our passion for
                creating premium gold jewellery that combines
                timeless craftsmanship with modern elegance.
              </p>

            </LazyMotion>

          </div>

        </section>


        {/* ================= OUR STORY ================= */}

        <main>

          <section className="py-24 lg:py-32">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-white/70 font-light leading-relaxed space-y-16 text-sm md:text-base">


                {/* INTRO */}

                <p className="text-lg md:text-2xl text-white font-serif leading-relaxed text-center italic max-w-2xl mx-auto border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 md:p-10">

                  "Aurix is an ethical gold jewellery brand dedicated
                  to creating timeless jewellery that combines
                  artisanal craftsmanship with modern elegance."

                </p>


                {/* STORY */}

                <div className="text-center max-w-2xl mx-auto pt-4">

                  <h2 className="font-serif text-3xl md:text-4xl text-white italic mb-7">
                    Our Story
                  </h2>

                  <p className="mb-6">

                    Founded in 2023, Aurix has grown into a destination
                    for customers seeking high-quality gold jewellery
                    and elegant accessories.

                  </p>

                  <p>

                    Every piece is carefully designed with a strong
                    focus on craftsmanship, quality and timeless style.
                    Our approach combines traditional jewellery
                    inspiration with modern design.

                  </p>

                </div>


                {/* ================= MISSION / VISION ================= */}

                <section
                  aria-labelledby="mission-vision-heading"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-[#111] p-8 md:p-12 border border-white/10"
                >

                  <h2
                    id="mission-vision-heading"
                    className="sr-only"
                  >
                    Aurix Mission and Vision
                  </h2>


                  <div>

                    <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4">
                      Our Mission
                    </div>

                    <h3 className="font-serif text-2xl text-white italic mb-4">
                      Crafted With Purpose
                    </h3>

                    <p className="text-sm text-white/65 leading-relaxed">
                      To provide beautifully crafted gold jewellery
                      that inspires confidence, elegance and
                      individuality while delivering a trusted
                      customer experience.
                    </p>

                  </div>


                  <div>

                    <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4">
                      Our Vision
                    </div>

                    <h3 className="font-serif text-2xl text-white italic mb-4">
                      Timeless Modern Luxury
                    </h3>

                    <p className="text-sm text-white/65 leading-relaxed">
                      To become a recognized jewellery brand known
                      for quality, innovation, modern gold designs
                      and customer satisfaction.
                    </p>

                  </div>

                </section>


                {/* ================= CORE VALUES ================= */}

                <section
                  aria-labelledby="values-heading"
                  className="pt-12 border-t border-white/10"
                >

                  <div className="text-center mb-14">

                    <h2
                      id="values-heading"
                      className="font-serif text-3xl md:text-4xl text-white mb-4 italic"
                    >
                      Our Core Values
                    </h2>

                    <div className="w-8 h-px bg-[#D4AF37] mx-auto" />

                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

                    {[
                      {
                        title: "Quality Gold",
                        desc:
                          "We focus on premium materials, careful detailing and expert jewellery craftsmanship.",
                      },
                      {
                        title: "Trust",
                        desc:
                          "Transparency and customer satisfaction are at the heart of the Aurix experience.",
                      },
                      {
                        title: "Innovation",
                        desc:
                          "We continuously explore fresh and modern gold jewellery designs.",
                      },
                      {
                        title: "Sustainability",
                        desc:
                          "We aim to encourage responsible sourcing and thoughtful business practices.",
                      },
                    ].map((value, idx) => (

                      <article
                        key={value.title}
                        className="border border-white/10 p-7 md:p-8 hover:bg-white/5 transition-colors bg-[#111]"
                      >

                        <div className="text-[#D4AF37] font-mono text-[10px] mb-4">
                          0{idx + 1}
                        </div>

                        <h3 className="font-serif text-lg text-white mb-3">
                          {value.title}
                        </h3>

                        <p className="text-xs text-white/65 leading-relaxed">
                          {value.desc}
                        </p>

                      </article>

                    ))}

                  </div>

                </section>


                {/* ================= TEAM ================= */}

                <section
                  aria-labelledby="team-heading"
                  className="pt-20 border-t border-white/10"
                >

                  <div className="text-center mb-14">

                    <h2
                      id="team-heading"
                      className="font-serif text-3xl md:text-4xl text-white mb-4 italic"
                    >
                      Meet Our Artisan Team
                    </h2>

                    <p className="text-white/50 text-sm max-w-xl mx-auto">
                      The people behind Aurix who bring creativity,
                      craftsmanship and attention to detail to every
                      jewellery design.
                    </p>

                    <div className="w-8 h-px bg-[#D4AF37] mx-auto mt-6" />

                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

                    {team.map((member) => (

                      <article
                        key={member.name}
                        className="text-center flex flex-col items-center"
                      >

                        <div className="w-32 h-32 bg-[#111] rounded-full mb-6 overflow-hidden border border-[#D4AF37]/20 p-2">

                          <OptimizedImage
                            src={getOptimizedImage(member.image)}
                            alt={`${member.name} - Aurix jewellery artisan`}
                            width={128}
                            height={128}
                            sizes="128px"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-full"
                          />

                        </div>


                        <h3 className="font-serif text-base text-white mb-2">
                          {member.name}
                        </h3>


                        <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">
                          {member.role}
                        </p>

                      </article>

                    ))}

                  </div>

                </section>

              </div>

            </div>

          </section>


          {/* ================= CTA ================= */}

          <section className="border-t border-white/10 bg-[#0a0a0a]">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

              <div className="w-10 h-10 border border-[#D4AF37]/40 rotate-45 mx-auto mb-10 flex items-center justify-center">

                <div className="w-6 h-6 border border-[#D4AF37]/30" />

              </div>


              <p className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] mb-5">
                Discover Aurix
              </p>


              <h2 className="font-serif text-4xl md:text-5xl text-white italic font-light mb-6">
                Explore Our Gold Jewellery
              </h2>


              <p className="text-white/55 text-sm max-w-xl mx-auto leading-relaxed mb-9">
                Discover elegant gold necklaces, rings, earrings and
                other jewellery designed for timeless style.
              </p>


              <a
                href="/products"
                className="inline-block bg-[#D4AF37] text-black px-9 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors"
              >
                View Gold Collection
              </a>

            </div>

          </section>

        </main>

      </div>
    </Suspense>
  );
}