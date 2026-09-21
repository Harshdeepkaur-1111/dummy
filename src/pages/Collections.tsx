import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, Award } from "lucide-react";
import { categories, products } from "../data";
import { CANONICAL_SITE_URL, useCanonical } from "../lib/seo";

export function Collections() {
  const canonicalUrl = useCanonical("/collections");

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Aurix 22K Gold Jewellery Collections",
    url: canonicalUrl,
    description: "Curated 22K BIS 916 hallmarked gold collections including necklaces, bridal sets, rings and bangles.",
    publisher: {
      "@type": "Organization",
      name: "Aurix"
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20">
      <Helmet>
        <title>22K Gold Collections | Handcrafted Bridal & Daily Jewellery | Aurix</title>
        <meta
          name="description"
          content="Browse exquisite 22K gold collections by Aurix. From royal bridal choker sets to everyday rings and pendants with certified BIS 916 purity."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="22K Gold Collections | Handcrafted Jewellery | Aurix" />
        <meta property="og:description" content="Browse exquisite 22K gold collections by Aurix. Handcrafted bridal sets, necklaces, bangles and rings with BIS 916 hallmark." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Aurix" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="22K Gold Collections | Aurix" />
        <meta name="twitter:description" content="Browse exquisite 22K gold collections by Aurix with certified BIS 916 purity." />

        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium">Curated Masterpieces</span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mt-2 mb-4">
            The Aurix 22K Collections
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Every collection tells a chapter of authentic Indian heritage, forged in certified 22K BIS 916 gold with modern precision and lifelong purity.
          </p>
        </div>

        {/* Categories / Series */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to="/products"
              className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-end p-8 bg-neutral-900 shadow-xl"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Certified BIS 916</span>
                </div>
                <h2 className="text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">
                  {cat.title}
                </h2>
                <p className="text-xs text-neutral-300 max-w-md line-clamp-2">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] pt-2">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Collection Pieces */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif text-white">Signature Collection Pieces</h2>
              <p className="text-xs text-neutral-400 mt-1">Handcrafted in limited editions with hallmarked guarantee</p>
            </div>
            <Link to="/products" className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="group bg-neutral-900/50 rounded-xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all p-4 flex flex-col justify-between"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-[#D4AF37] tracking-wider uppercase">{item.material}</span>
                  <h3 className="text-sm font-serif text-white group-hover:text-[#D4AF37] transition-colors mt-0.5 truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                    <span className="text-sm font-serif text-[#D4AF37]">{item.price}</span>
                    <span className="text-[11px] text-neutral-400">{item.weight}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
