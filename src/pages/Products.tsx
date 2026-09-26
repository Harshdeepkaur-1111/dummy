import React, { Suspense, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Eye,
  SlidersHorizontal,
  Check,
  Award,
  Truck,
  RotateCcw,
} from "lucide-react";

import LazyMotion from "../components/LazyMotion";
import OptimizedImage from "../components/OptimizedImage";
import { QuickViewModal, QuickViewProduct } from "../components/QuickViewModal";

import { products, categories } from "../data";
import { getOptimizedImage } from "../lib/utils";
import { useCart } from "../contexts/CartContext";
import { getSiteUrl, useCanonical } from "../lib/seo";

export function Products() {
  const { addToCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const siteUrl = getSiteUrl();
  const canonicalUrl = useCanonical("/products");

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  const categoryFilters = [
    { label: "All Pieces", value: "All" },
    { label: "Necklaces & Chokers", value: "Necklace" },
    { label: "Royal Rings", value: "Ring" },
    { label: "Earrings", value: "Earring" },
    { label: "Bangles & Bracelets", value: "Bangle" },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => {
      const name = p.name.toLowerCase();
      const desc = p.desc.toLowerCase();
      const val = selectedCategory.toLowerCase();
      if (val === "bangle") {
        return (
          name.includes("bangle") ||
          name.includes("bracelet") ||
          desc.includes("bangle") ||
          desc.includes("bracelet")
        );
      }
      return name.includes(val) || desc.includes(val);
    });
  }, [selectedCategory]);

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
    navigate("/checkout");
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
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
      setIsCartOpen(true);
    }, 500);
  };

  const getProductSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "22K Gold Jewellery Collection",
        item: canonicalUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Aurix 22K Gold Jewellery Collection",
    description:
      "Explore Aurix's certified 22K BIS 916 hallmarked gold jewellery collection. Handcrafted royal necklaces, rings, earrings and bangles with insured delivery across India.",
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Aurix",
      url: siteUrl,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((item, index) => {
      const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 24999;
      const slug = getProductSlug(item.name);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.name,
          image: item.image.startsWith("http") ? item.image : `${siteUrl}${item.image}`,
          description: item.desc,
          sku: `AURIX-${item.id}`,
          offers: {
            "@type": "Offer",
            url: `${siteUrl}/product/${slug}`,
            priceCurrency: "INR",
            price: numericPrice,
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "Aurix",
            },
          },
        },
      };
    }),
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
        {/* ================= SEO ================= */}
        <Helmet>
          <title>
            22K Gold Jewellery Collection | Certified BIS 916 Pure Gold | Aurix
          </title>
          <meta
            name="description"
            content="Explore Aurix's certified 22K BIS 916 gold jewellery collection. Shop handcrafted royal necklaces, bridal chokers, rings and bangles with insured delivery across India."
          />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />

          <meta
            property="og:title"
            content="22K Gold Jewellery Collection | Certified BIS 916 Pure Gold | Aurix"
          />
          <meta
            property="og:description"
            content="Explore Aurix's certified 22K BIS 916 gold jewellery collection. Handcrafted royal necklaces, bridal chokers, rings and bangles with insured delivery across India."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:site_name" content="Aurix" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="22K Gold Jewellery Collection | Certified BIS 916 | Aurix"
          />
          <meta
            name="twitter:description"
            content="Explore Aurix's certified 22K BIS 916 gold jewellery collection with 100% insured delivery across India."
          />

          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(collectionSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(itemListSchema)}
          </script>
        </Helmet>

        {/* ================= HERO ================= */}
        <header className="aurix-page-hero bg-[#050505] pt-28 pb-16 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl"
          />

          <div className="aurix-page-hero-inner relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <LazyMotion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-3xl mx-auto"
            >
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-medium">
                  <Sparkles className="h-3 w-3 shrink-0" />
                  Haute Joaillerie · Certified BIS 916
                </span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light italic leading-tight text-white mb-6">
                The 22K Gold
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
                  Master Collection
                </span>
              </h1>

              <div className="mx-auto my-6 h-px w-16 bg-[#D4AF37]/60" />

              <p className="mx-auto max-w-2xl text-sm sm:text-base font-light leading-relaxed text-white/70">
                Explore our full curated anthology of hallmarked 22K solid gold masterpieces.
                Handcrafted by multigenerational goldsmiths, certified with unique 6-digit laser HUID,
                and delivered in tamper-proof armoured transit across India.
              </p>
            </LazyMotion>
          </div>
        </header>

        {/* ================= TRUST BANNER ================= */}
        <section
          aria-label="Aurix Hallmark & Assurance"
          className="border-y border-white/10 bg-[#080808] py-4"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                <span className="font-medium tracking-wider uppercase text-[10px]">100% BIS 916 Hallmarked</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-white/80">
                <Truck className="w-4 h-4 text-[#E5C158]" />
                <span className="font-medium tracking-wider uppercase text-[10px]">Free Insured Transit</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-white/80">
                <RotateCcw className="w-4 h-4 text-[#E5C158]" />
                <span className="font-medium tracking-wider uppercase text-[10px]">14-Day Returns & Buyback</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-white/80">
                <Award className="w-4 h-4 text-[#E5C158]" />
                <span className="font-medium tracking-wider uppercase text-[10px]">Lifetime Purity Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <section className="bg-[#050505] pt-12 pb-6 border-b border-white/5 sticky top-20 z-30 backdrop-blur-md bg-[#050505]/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs text-[#E5C158]">
                <SlidersHorizontal size={14} />
                <span className="uppercase tracking-widest text-[10px] font-semibold">Filter by Category:</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto">
                {categoryFilters.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 text-xs uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
                      selectedCategory === cat.value
                        ? "bg-[#D4AF37] text-neutral-950 font-bold border border-[#D4AF37]"
                        : "bg-[#111111] text-white/70 hover:text-white border border-white/10 hover:border-[#D4AF37]/40"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="text-[11px] text-white/50 tracking-wider font-mono">
                Showing {filteredProducts.length} of {products.length} masterworks
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN PRODUCTS CATALOG ================= */}
        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, idx) => {
              const slug = getProductSlug(product.name);
              const isAdded = addedProductId === product.id;

              return (
                <LazyMotion
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: (idx % 4) * 0.06,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/5">
                    {/* Image Area with Quick Action Overlays */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#0e0e0e]">
                      <Link to={`/product/${slug}`} tabIndex={-1} aria-hidden="true">
                        <OptimizedImage
                          src={getOptimizedImage(product.image)}
                          alt={`${product.name} - Certified 22K Gold Jewellery Aurix`}
                          width={600}
                          height={750}
                          priority={idx < 2}
                          loading={idx < 2 ? "eager" : "lazy"}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </Link>

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-black/20"
                      />

                      {/* Top Badges */}
                      <div className="absolute left-3 top-3">
                        <span className="inline-flex h-7 items-center justify-center border border-white/15 bg-black/70 px-2.5 font-mono text-[9px] tracking-widest text-[#E5C158] backdrop-blur-sm">
                          BIS 916
                        </span>
                      </div>

                      <div className="absolute right-3 top-3">
                        <button
                          type="button"
                          onClick={() =>
                            setQuickViewProduct({
                              id: product.id,
                              name: product.name,
                              category: product.material,
                              purity: "22K (916)",
                              weight: product.weight,
                              price: product.price,
                              image: product.image,
                              desc: product.desc,
                            })
                          }
                          aria-label={`Quick view ${product.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] transition backdrop-blur-sm cursor-pointer"
                        >
                          <Eye size={15} />
                        </button>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-white/70">
                        <span className="bg-black/60 px-2 py-0.5 border border-white/10 backdrop-blur-sm">
                          Weight: {product.weight}
                        </span>
                        <span className="bg-black/60 px-2 py-0.5 border border-white/10 backdrop-blur-sm text-[#E5C158]">
                          {product.material}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2">
                        <Link
                          to={`/product/${slug}`}
                          className="group-hover:text-[#D4AF37] transition-colors"
                        >
                          <h2 className="font-serif text-lg font-normal text-white line-clamp-1">
                            {product.name}
                          </h2>
                        </Link>
                      </div>

                      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-white/60">
                        {product.desc}
                      </p>

                      <div className="mb-5 flex items-baseline justify-between pt-3 border-t border-white/10 mt-auto">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-white/50 block">Price</span>
                          <span className="font-mono text-lg font-medium text-[#E5C158] tabular-nums">
                            {product.price}
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-400">Insured Shipping</span>
                      </div>

                      {/* CTAs */}
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={(e) => handleBuyNow(product, e)}
                          className="flex min-h-[46px] w-full items-center justify-center gap-2 bg-[#D4AF37] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-950 transition-colors duration-200 hover:bg-white cursor-pointer"
                          aria-label={`Buy ${product.name} now`}
                        >
                          <span>Buy Now</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => handleAddToCart(product, e)}
                          className="flex min-h-[44px] w-full items-center justify-center gap-2 border border-white/20 bg-transparent px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer"
                          aria-label={`Add ${product.name} to bag`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Added to Bag</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="h-3.5 w-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                </LazyMotion>
              );
            })}
          </div>
        </main>

        {/* ================= EDITORIAL CTA ================= */}
        <section className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-20 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl"
          />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-medium block mb-3">
              Bespoke Goldsmithing
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light italic text-white mb-6">
              Seeking a Custom 22K Commission?
            </h2>
            <p className="text-sm leading-relaxed text-white/70 max-w-xl mx-auto mb-8 font-light">
              Our master artisans in Delhi and Jaipur craft custom bridal sets, heirloom necklaces, and royal signet rings tailored to your exact purity specifications and design references.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-[#D4AF37] text-black px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition"
              >
                Inquire For Custom Jewellery
              </Link>
              <a
                href="tel:+919034196429"
                className="border border-[#D4AF37] text-[#E5C158] px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37] hover:text-black transition"
              >
                Call: +91 9034196429
              </a>
            </div>
          </div>
        </section>

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      </div>
    </Suspense>
  );
}
export default Products;
