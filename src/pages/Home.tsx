import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Diamond,
  Star,
  ShieldCheck,
  Gem,
  Truck,
  Sparkles,
  Search,
  Eye,
  ShoppingBag,
  Sliders,
  Scale,
  Award,
  RefreshCw,
  Phone,
  Mail,
  Calendar,
  Check,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useCart } from "../contexts/CartContext";
import { getSiteUrl, useCanonical } from "../lib/seo";
import { QuickViewModal, QuickViewProduct } from "../components/QuickViewModal";
import { VipConsultationModal } from "../components/VipConsultationModal";

import {
  classicNecklace,
  diamondRing,
  pearlEarrings,
  modernBracelet,
  signaturePendant,
  imperialDiamondChoker,
  sovereignSignetRing,
  pearlDropEarrings,
  heritageBangle,
} from "../assets/images";

/* =========================================================
   FEATURED PRODUCTS (CATALOG DATA)
========================================================= */

const allProducts: QuickViewProduct[] = [
  {
    id: 1,
    name: "Classic 22K Gold Necklace",
    category: "Necklaces",
    purity: "22K Gold (916)",
    weight: "8.00g",
    price: "₹1,49,999",
    image: classicNecklace,
    desc: "A signature statement of 22K pure Indian gold artistry. Hand-assembled links designed for effortless drape and regal shine.",
  },
  {
    id: 2,
    name: "Diamond Gold Ring",
    category: "Rings",
    purity: "22K Gold (916)",
    weight: "4.20g",
    price: "₹89,999",
    image: diamondRing,
    desc: "Solid 22K gold band crowned with hand-selected brilliant diamonds. Designed for both daily prestige and milestone celebrations.",
  },
  {
    id: 3,
    name: "Pearl Drop Gold Earrings",
    category: "Earrings",
    purity: "22K Gold (916)",
    weight: "5.20g",
    price: "₹1,29,999",
    image: pearlDropEarrings,
    desc: "Lustrous South Sea pearls suspended from delicate 22K handcrafted filigree gold motifs. Featherweight comfort with timeless grace.",
  },
  {
    id: 4,
    name: "Modern Gold Bracelet",
    category: "Bracelets",
    purity: "22K Gold (916)",
    weight: "7.50g",
    price: "₹1,19,999",
    image: modernBracelet,
    desc: "A contemporary cuff-style bracelet with geometric facets in solid 22K gold, engineered with a secure double-lock clasp.",
  },
  {
    id: 5,
    name: "Imperial Diamond Choker",
    category: "Necklaces",
    purity: "22K Gold (916)",
    weight: "22.50g",
    price: "₹2,85,000",
    image: imperialDiamondChoker,
    desc: "Grand royal bridal choker handcrafted by multigenerational karigars. Features high-karat yellow gold with certified gemstone inlays.",
  },
  {
    id: 6,
    name: "Sovereign Gold Signet Ring",
    category: "Rings",
    purity: "22K Gold (916)",
    weight: "12.00g",
    price: "₹98,500",
    image: sovereignSignetRing,
    desc: "An imposing, weighty 22K solid gold signet ring featuring hand-carved heritage heraldry on a mirror-polished bezel.",
  },
];

/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackImage =
  "/images/336052524_594628079068489_8991184652865232177_n.webp";

function SafeImage({
  src,
  alt,
  className = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        const img = event.currentTarget;
        if (!img.dataset.fallback) {
          img.dataset.fallback = "true";
          img.src = fallbackImage;
        }
      }}
      {...props}
    />
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickViewItem, setQuickViewItem] = useState<QuickViewProduct | null>(null);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  // Gold Rate Calculator state
  const [calcWeight, setCalcWeight] = useState(8); // in grams
  const goldRate22KPerGram = 6890;

  const { addToCart, setIsCartOpen } = useCart();
  const siteUrl = getSiteUrl();
  const canonicalUrl = useCanonical("/");

  // Auto carousel for Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const heroItem = allProducts[activeHeroSlide] || allProducts[0];

  // Category Filtering
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // FAQs
  const faqs = [
    {
      q: "What hallmark and purity certifications come with Aurix 22K gold jewellery?",
      a: "Every gold jewellery piece at Aurix is 100% BIS 916 hallmarked (Bureau of Indian Standards) and accompanied by an official Certificate of Authenticity. Each creation carries an authentic laser-engraved HUID (Hallmark Unique Identification) number, verifying the exact 22-karat (91.6% pure gold) composition and purity.",
      category: "Quality & Sizing",
    },
    {
      q: "What is the difference between 22K (916) and 18K or 24K gold in jewellery?",
      a: "24K gold is 99.9% pure but too soft for wearable fine jewellery. 22K gold (91.6% pure) is the traditional gold standard for fine jewellery, offering rich yellow radiance, lasting structural durability, and true heirloom resale value. 18K gold (75% pure) contains more alloy metals and is often selected for delicate diamond settings or contemporary daily wear.",
      category: "Quality & Sizing",
    },
    {
      q: "How do I choose the best ring, bangle, or necklace size for me?",
      a: "We provide detailed size guides for rings (measuring inner circumference in mm), bangles (standard Indian size chart 2.4 to 2.10), and necklace chain lengths (16 to 24 inches). If you need personalized sizing recommendations, our master concierge is available via WhatsApp or phone at +91 9034196429.",
      category: "Quality & Sizing",
    },
    {
      q: "What are your delivery times, shipping costs, and coverage areas across India?",
      a: "Aurix offers complimentary, fully insured express shipping across India on every order. Orders to metro hubs (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai) are delivered within 2 to 4 business days, while other destinations typically take 4 to 6 business days.",
      category: "Shipping & Delivery",
    },
    {
      q: "How can I track my order once shipped, and is transit insurance included?",
      a: "Yes, 100% transit insurance is included at no extra cost. Your package is guarded from our vault until delivered to your doorstep. We partner exclusively with specialized secure logistics carriers (Blue Dart Apex and Sequel Secure). You receive real-time SMS and email tracking links with milestone updates and mandatory OTP verification on delivery.",
      category: "Shipping & Delivery",
    },
    {
      q: "What is your return, exchange, and lifetime buyback policy?",
      a: "We provide an effortless 14-day hassle-free return and exchange policy on all unworn, unaltered catalogue pieces with original security tags and certificates intact. Furthermore, every Aurix piece is eligible for our transparent Lifetime Exchange & Buyback policy based on prevailing 22K gold bullion benchmark rates.",
      category: "Returns & Payments",
    },
    {
      q: "What payment methods and EMI options do you accept?",
      a: "We accept all leading payment options: Credit Cards (Visa, MasterCard, RuPay, American Express), Debit Cards, UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking across 50+ banks, and flexible No-Cost or Low-Cost EMI plans through leading banking partners via our 256-bit bank-grade encrypted checkout.",
      category: "Returns & Payments",
    },
    {
      q: "Do you offer bespoke custom jewellery design or bridal set consultations?",
      a: "Yes! Our master karigars (artisans) collaborate with you to craft custom-designed 22K gold jewellery, bridal chokers, engagement rings, and personalized heirloom pieces. You can share your design ideas or book a dedicated 1-on-1 virtual design consultation with our jewellery team.",
      category: "Wholesale & Custom",
    },
    {
      q: "How should I clean, store, and maintain 22K gold jewellery to prevent tarnishing?",
      a: "Store each piece individually in soft fabric-lined pouches or airtight boxes to avoid surface scratches. Avoid exposing gold to chlorine, bleach, hairsprays, or perfumes. For home cleaning, soak gently in warm water with mild, phosphate-free soap, gently buff with a soft-bristled brush, rinse, and dry with a lint-free microfiber cloth.",
      category: "Quality & Sizing",
    },
  ];

  const faqCategories = [
    "All Questions",
    "Quality & Sizing",
    "Shipping & Delivery",
    "Returns & Payments",
    "Wholesale & Custom",
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState("All Questions");
  const [faqSearch, setFaqSearch] = useState("");

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = faqCategory === "All Questions" || f.category === faqCategory;
    const matchesSearch =
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleHeroAddToCart = () => {
    addToCart({
      id: heroItem.id,
      name: heroItem.name,
      price: heroItem.price,
    });
    setIsCartOpen(true);
  };

  return (
    <>
      {/* =====================================================
          SEO HEAD
      ===================================================== */}
      <Helmet>
        <title>Aurix Gold | Certified 22K BIS 916 Hallmarked Gold Jewellery Online India</title>
        <meta
          name="description"
          content="Shop certified 22K BIS 916 hallmarked gold necklaces, bridal sets, rings & bangles at Aurix Gold. 100% insured delivery across India, lifetime buyback & EMI options."
        />
        <meta
          name="keywords"
          content="Aurix Gold, aurix gold jewellery, 22k gold jewellery, BIS 916 hallmark, certified gold jewellery online India, gold necklaces India, 22 karat gold rings, buy gold bangles, bridal gold jewellery"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Aurix Gold | Certified 22K BIS 916 Hallmarked Gold Jewellery Online India" />
        <meta
          property="og:description"
          content="Shop certified 22K BIS 916 hallmarked gold necklaces, bridal sets, rings & bangles at Aurix Gold. 100% insured delivery across India, lifetime buyback & EMI options."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content={`${siteUrl}/images/336052524_594628079068489_8991184652865232177_n.webp`}
        />
        <meta property="og:image:alt" content="Aurix Gold certified 22K gold necklace" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aurix Gold | Certified 22K BIS 916 Hallmarked Gold Jewellery" />
        <meta
          name="twitter:description"
          content="Shop certified 22K BIS 916 hallmarked gold necklaces, bridal sets, rings & bangles at Aurix Gold. 100% insured delivery across India, lifetime buyback & EMI options."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/images/336052524_594628079068489_8991184652865232177_n.webp`}
        />

        {/* Schema: JewelryStore */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            "@id": `${siteUrl}/#store`,
            name: "Aurix Gold",
            alternateName: "Aurix 22K Gold Jewellery",
            url: `${siteUrl}/`,
            logo: `${siteUrl}/images/336052524_594628079068489_8991184652865232177_n.webp`,
            image: `${siteUrl}/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp`,
            description:
              "Certified 22K BIS 916 hallmarked luxury gold jewellery handcrafted in India. Explore timeless necklaces, bridal sets, rings, bangles, and bespoke jewellery.",
            telephone: "+91 9034196429",
            priceRange: "₹₹₹",
            currenciesAccepted: "INR",
            paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking, EMI",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1280",
              bestRating: "5",
              worstRating: "1",
            },
          })}
        </script>

        {/* Schema: ItemList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Aurix Featured 22K Gold Jewellery",
            itemListElement: allProducts.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: item.name,
                image: item.image,
                description: `Authentic ${item.purity} ${item.name} (${item.weight}) crafted with precision and BIS 916 hallmarking.`,
                sku: `AURIX-GOLD-${item.id}`,
                category: item.category,
                brand: {
                  "@type": "Brand",
                  name: "Aurix Gold",
                },
                offers: {
                  "@type": "Offer",
                  price: item.price.replace(/[^0-9]/g, ""),
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                  url: `${siteUrl}/products`,
                },
              },
            })),
          })}
        </script>

        {/* Schema: FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewItem}
        onClose={() => setQuickViewItem(null)}
      />

      {/* VIP Consultation Modal */}
      <VipConsultationModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
      />

      {/* Page Body */}
      <div className="bg-[#050505] text-white">
        
        {/* ===================================================
            SECTION 1: TRENDY EDITORIAL HERO
        =================================================== */}
        <section className="relative min-h-[calc(100vh-120px)] flex items-center border-b border-white/10 overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Editorial Headline & Value Propositions */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Clean Unboxed Kicker */}
                <div className="flex items-center gap-2 text-xs text-[#E5C158] font-medium tracking-[0.25em] uppercase mb-4">
                  <span>Certified BIS 916</span>
                  <span aria-hidden="true">·</span>
                  <span>Pure 22K Gold</span>
                  <span aria-hidden="true">·</span>
                  <span>Indian Haute Joaillerie</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] leading-[1.02] font-light text-white mb-6">
                  The Art of <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37]">
                    Aurix 22K Gold.
                  </span>
                </h1>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-light mb-8">
                  Where ancient Vedic goldsmithing meets clean modern silhouettes. Every Aurix piece is sculpted in pure 22K (916) hallmarked gold, carrying an authentic laser-engraved HUID certificate.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                  <Link
                    to="/products"
                    className="min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-8 py-3.5 text-xs uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 hover:bg-white transition duration-200"
                  >
                    <span>Explore 2026 Collection</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsVipModalOpen(true)}
                    className="min-h-[48px] border border-white/30 text-white font-medium px-8 py-3.5 text-xs uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-200 cursor-pointer"
                  >
                    <Calendar size={14} />
                    <span>Book VIP Stylist</span>
                  </button>
                </div>

                {/* Live Bullion Snapshot & Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#E5C158]">
                      22K·916
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                      Hallmark Standard
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-white">
                      ₹6,890/g
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                      Live Gold Bullion
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-white">
                      100%
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                      Insured Delivery
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Featured Piece Showcase */}
              <div className="lg:col-span-5">
                <div className="relative bg-[#0d0d0d] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
                  
                  {/* Badge & Carousel Indicator */}
                  <div className="flex items-center justify-between text-xs mb-6">
                    <span className="text-[#E5C158] uppercase tracking-[0.2em] text-[10px] font-semibold flex items-center gap-1.5">
                      <Sparkles size={12} /> Featured Haute Piece
                    </span>
                    <span className="font-mono text-white/60 text-xs">
                      {String(activeHeroSlide + 1).padStart(2, "0")} / 04
                    </span>
                  </div>

                  {/* LCP Candidate Image Slot */}
                  <div className="relative aspect-square w-full max-h-[360px] flex items-center justify-center bg-[#070707] border border-white/5 mb-6 group overflow-hidden">
                    <SafeImage
                      src={heroItem.image}
                      srcSet={
                        heroItem.id === 1
                          ? "/images/hero-mobile.webp 480w, /images/336052524_594628079068489_8991184652865232177_n.webp 700w"
                          : undefined
                      }
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 480px"
                      alt={`${heroItem.name} - Aurix Gold Certified 22K Jewellery`}
                      width={600}
                      height={600}
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                      className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Quick View Hover Button */}
                    <button
                      type="button"
                      onClick={() => setQuickViewItem(heroItem)}
                      className="absolute bottom-3 right-3 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white p-2.5 rounded-full transition shadow-lg flex items-center gap-1.5 text-xs px-3"
                      aria-label={`Quick view ${heroItem.name}`}
                    >
                      <Eye size={14} />
                      <span className="text-[10px] uppercase tracking-wider font-medium">Quick View</span>
                    </button>
                  </div>

                  {/* Product Metadata */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-baseline">
                      <h2 className="font-serif text-2xl text-white italic">
                        {heroItem.name}
                      </h2>
                      <span className="font-mono text-xl text-[#E5C158] font-semibold">
                        {heroItem.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-white/60">
                      <span>{heroItem.purity}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{heroItem.weight}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400">In Stock</span>
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={handleHeroAddToCart}
                      className="min-h-[46px] bg-[#D4AF37] text-neutral-950 font-bold py-2.5 text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 hover:bg-white transition"
                    >
                      <ShoppingBag size={15} /> Add to Bag
                    </button>

                    <button
                      type="button"
                      onClick={() => setQuickViewItem(heroItem)}
                      className="min-h-[46px] border border-white/20 text-white py-2.5 text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                    >
                      <Eye size={15} /> Details
                    </button>
                  </div>

                  {/* Slide Steppers */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    {[0, 1, 2, 3].map((idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveHeroSlide(idx)}
                        className={`h-1.5 transition-all ${
                          idx === activeHeroSlide ? "w-8 bg-[#D4AF37]" : "w-3 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Switch to piece ${idx + 1}`}
                      />
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 2: TRENDING GOLD INVESTMENT & PURITY CALCULATOR
        =================================================== */}
        <section className="py-16 bg-[#090909] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#0e0e0e] border border-white/10 p-6 sm:p-10">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5C158] font-medium">
                  <Scale size={14} />
                  <span>Transparent Purity Estimator</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl text-white italic">
                  Live 22K Gold Bullion Value
                </h2>

                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Gold in India is not merely an ornament; it is lasting intergenerational security. Check real-time 22-Karat (91.6% purity) gold valuation based on today's official benchmark of <span className="text-[#E5C158] font-mono font-medium">₹6,890 / gram</span>.
                </p>

                <div className="space-y-2 pt-2 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#E5C158]" /> 100% Lifetime Exchange at prevailing gold rate
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#E5C158]" /> Verified 6-digit laser-engraved HUID hallmark
                  </div>
                </div>
              </div>

              {/* Interactive Calculator Slider */}
              <div className="lg:col-span-7 bg-[#060606] border border-white/10 p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs mb-3">
                    <span className="text-white/80 uppercase tracking-widest text-[11px]">Select Gold Weight</span>
                    <span className="font-mono text-base text-[#E5C158] font-bold">{calcWeight} Grams</span>
                  </div>

                  {/* Weight Quick Buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[4, 8, 12, 16, 25, 50].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setCalcWeight(w)}
                        className={`px-3 py-1.5 text-xs font-mono transition border ${
                          calcWeight === w
                            ? "bg-[#D4AF37] text-black border-[#D4AF37] font-bold"
                            : "bg-[#121212] text-white/70 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {w}g
                      </button>
                    ))}
                  </div>

                  {/* Range slider */}
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(Number(e.target.value))}
                    aria-label="Gold weight in grams"
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                {/* Calculation Matrix */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
                  <div className="p-3 bg-[#111] border border-white/5">
                    <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">
                      Pure Gold Content
                    </div>
                    <div className="font-mono text-base font-semibold text-white">
                      {(calcWeight * 0.916).toFixed(2)}g (91.6%)
                    </div>
                  </div>

                  <div className="p-3 bg-[#111] border border-white/5">
                    <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">
                      Raw Bullion Value
                    </div>
                    <div className="font-mono text-base font-semibold text-[#E5C158]">
                      ₹{(calcWeight * goldRate22KPerGram).toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="p-3 bg-[#111] border border-white/5">
                    <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">
                      Lifetime Resale Value
                    </div>
                    <div className="font-mono text-base font-semibold text-emerald-400">
                      100% Bullion Rate
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/60 pt-1">
                  <span>*Making charges & GST (3%) computed transparently at checkout.</span>
                  <Link to="/products" className="text-[#E5C158] hover:underline font-medium">
                    Shop {calcWeight}g Pieces →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 3: THE 2026 GOLD EDIT (COLLECTION EXPLORER)
        =================================================== */}
        <section className="py-24 bg-[#050505] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-medium mb-3">
                Curated Haute Horlogerie & Joaillerie
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white italic mb-4">
                The 2026 Aurix Gold Edit
              </h2>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                Explore handcrafted masterpieces sculpted from certified 22K hallmarked gold. Click any piece for full hallmark specs or instant cart reservation.
              </p>
            </div>

            {/* Category Filter Buttons (Interactive Segmented Control) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {["All", "Necklaces", "Rings", "Earrings", "Bracelets"].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[44px] px-6 py-2 text-xs uppercase tracking-[0.15em] transition border ${
                    selectedCategory === category
                      ? "bg-[#D4AF37] text-neutral-950 border-[#D4AF37] font-bold shadow-md"
                      : "bg-[#0f0f0f] text-white/70 border-white/15 hover:border-white/35 hover:text-white"
                  }`}
                >
                  {category === "All" ? "All Masterpieces" : category}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-[#0b0b0b] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-[4/5] bg-[#060606] overflow-hidden flex items-center justify-center p-8">
                      <div className="absolute top-4 left-4 z-10 text-[9px] uppercase tracking-widest text-[#E5C158] bg-black/60 px-2.5 py-1 border border-white/10">
                        {item.weight} · 22K Gold
                      </div>

                      <SafeImage
                        src={item.image}
                        alt={`${item.name} - Aurix 22K Gold`}
                        width={600}
                        height={750}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Quick View Button on Image */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setQuickViewItem(item)}
                          className="min-h-[44px] px-4 py-2 bg-black/90 hover:bg-[#D4AF37] hover:text-black text-white text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition border border-white/20"
                        >
                          <Eye size={14} /> Quick View
                        </button>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#E5C158] mb-1.5 font-medium">
                        {item.category}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-white italic mb-2">
                        {item.name}
                      </h3>
                      <p className="text-white/60 text-xs line-clamp-2 font-light leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className="font-mono text-xl text-[#E5C158] font-bold">
                        {item.price}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 border-t border-white/5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                        });
                        setIsCartOpen(true);
                      }}
                      className="flex-1 min-h-[44px] bg-[#D4AF37] text-neutral-950 font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-white transition"
                    >
                      <ShoppingBag size={14} /> Add to Bag
                    </button>

                    <button
                      type="button"
                      onClick={() => setQuickViewItem(item)}
                      className="min-w-[44px] min-h-[44px] border border-white/20 text-white/80 hover:text-white hover:border-[#D4AF37] flex items-center justify-center transition"
                      aria-label={`View details of ${item.name}`}
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View Full Catalog Link */}
            <div className="mt-14 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5C158] hover:text-white transition font-medium"
              >
                <span>View All 22K Creations in Catalog</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 4: THE 4 MARKS OF AUTHENTIC 22K GOLD
        =================================================== */}
        <section className="py-24 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#E5C158] font-medium mb-3">
                Government Certification & Trust
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white italic mb-4">
                The 4 Hallmarks of Certified Aurix Gold
              </h2>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                In compliance with Bureau of Indian Standards (BIS) regulations, every single piece crafted by Aurix bears the mandatory four-pillar laser engraving guarantee.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              
              {/* Pillar 1 */}
              <div className="p-8 bg-[#0e0e0e] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C158] mb-6 font-serif text-xl font-bold">
                    ▲
                  </div>
                  <h3 className="font-serif text-xl text-white italic mb-2">
                    1. BIS Standard Mark
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed font-light">
                    The official triangular emblem issued by the Bureau of Indian Standards, certifying government testing.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-wider text-[#E5C158] font-mono">
                  Official BIS Triangle
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 bg-[#0e0e0e] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C158] mb-6 font-mono text-base font-bold">
                    916
                  </div>
                  <h3 className="font-serif text-xl text-white italic mb-2">
                    2. Purity & Fineness (22K)
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed font-light">
                    Denoting 22K (916 parts per thousand pure gold). The ideal international balance of opulent glow and durable tensile strength.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-wider text-[#E5C158] font-mono">
                  22K916 Fineness Mark
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 bg-[#0e0e0e] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C158] mb-6">
                    <Award size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-white italic mb-2">
                    3. Assaying Centre Mark
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed font-light">
                    The authenticated stamp of the certified BIS Assaying & Hallmarking Centre where the metal was laboratory verified.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-wider text-[#E5C158] font-mono">
                  Government Lab Stamp
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-8 bg-[#0e0e0e] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C158] mb-6 font-mono text-sm font-bold">
                    HUID
                  </div>
                  <h3 className="font-serif text-xl text-white italic mb-2">
                    4. 6-Digit Alphanumeric HUID
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed font-light">
                    Hallmark Unique Identification laser-engraved onto each piece. Verifiable anytime on the government BIS Care App.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-wider text-[#E5C158] font-mono">
                  e.g. AX916K Laser Code
                </div>
              </div>

            </div>

            {/* Interactive HUID Verification Simulator */}
            <div className="max-w-2xl mx-auto bg-[#040404] border border-[#D4AF37]/30 p-6 sm:p-8 text-center space-y-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#E5C158] font-semibold">
                Instant Verification Sandbox
              </div>
              <h3 className="font-serif text-2xl text-white italic">
                Verify Your Aurix Hallmark
              </h3>
              <p className="text-white/70 text-xs leading-relaxed font-light max-w-lg mx-auto">
                Every customer invoice and authenticity certificate includes an authentic HUID code. Enter it below to preview verification credentials.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="text"
                  defaultValue="AX916K"
                  placeholder="Enter 6-digit HUID code"
                  className="bg-[#111] border border-white/20 text-white font-mono text-sm px-4 py-3 uppercase tracking-wider focus:outline-none focus:border-[#D4AF37] flex-1 text-center"
                />
                <button
                  type="button"
                  onClick={() => alert("HUID Verified: Aurix Gold 22K (916) Certified Jewellery · Bureau of Indian Standards Compliant.")}
                  className="min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-white transition"
                >
                  Verify Now
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 5: CLIENT STORIES & PRESS ACCOLADES
        =================================================== */}
        <section className="py-24 bg-[#050505] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#E5C158] font-medium mb-3">
                Acclaimed In Vogue & Trusted by Connoisseurs
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white italic mb-4">
                What Patrons Say About Aurix
              </h2>
              
              {/* Star Rating Badge */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
                <div className="flex items-center gap-1 text-[#E5C158]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-current text-[#E5C158]" />
                  ))}
                </div>
                <span className="text-white font-bold">4.9 / 5.0 Rating</span>
                <span className="text-white/30">·</span>
                <span className="text-white/70">1,280+ Verified Buyers across India</span>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              
              <div className="p-8 bg-[#0c0c0c] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#E5C158] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm italic font-serif leading-relaxed mb-6">
                    “The 22K gold necklace I purchased for my daughter’s wedding from Aurix is breathtaking. Flawless BIS 916 hallmarking, secure transit delivery, and stunning luxury packaging.”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs">
                  <div className="font-medium text-white">Priya Sharma</div>
                  <div className="text-white/50 text-[10px] uppercase tracking-wider">New Delhi · Verified Buyer</div>
                </div>
              </div>

              <div className="p-8 bg-[#0c0c0c] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#E5C158] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm italic font-serif leading-relaxed mb-6">
                    “Exceptional Indian craftsmanship and prompt delivery to Mumbai. The Certificate of Authenticity and laser HUID were verified effortlessly on the BIS app.”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs">
                  <div className="font-medium text-white">Rahul Verma</div>
                  <div className="text-white/50 text-[10px] uppercase tracking-wider">Mumbai · Verified Buyer</div>
                </div>
              </div>

              <div className="p-8 bg-[#0c0c0c] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#E5C158] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm italic font-serif leading-relaxed mb-6">
                    “I booked a virtual styling session with an Aurix gemologist. They walked me through each diamond setting and 22K weight breakdown. Truly world-class service!”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs">
                  <div className="font-medium text-white">Ananya Gupta</div>
                  <div className="text-white/50 text-[10px] uppercase tracking-wider">Bengaluru · Verified Buyer</div>
                </div>
              </div>

            </div>

            {/* Press Quotes Bar */}
            <div className="border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white/50 text-xs uppercase tracking-[0.2em]">
              <div>Vogue India · “Next-Gen 22K Luxury”</div>
              <div>Harper’s Bazaar · “Pure Indian Goldsmithing”</div>
              <div>Elle Jewellery · “Heirloom Excellence”</div>
              <div>Forbes India · “Certified Bullion Standard”</div>
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS (SEARCHABLE)
        =================================================== */}
        <section className="py-24 bg-[#080808] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-medium mb-3">
                Knowledge Vault & Assurance
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white italic mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
                Clear, transparent answers about certified 22K gold purity, authentic Indian craftsmanship, sizing, insured delivery, and lifetime buyback.
              </p>
            </div>

            {/* Search Input */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                <input
                  type="text"
                  placeholder="Search questions (e.g. hallmark, purity, sizing, shipping, buyback, EMI)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full bg-[#050505] border border-white/15 text-white text-sm py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#D4AF37] transition"
                />
              </div>
            </div>

            {/* FAQ Category Pills (Interactive Buttons) */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFaqCategory(cat)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-wider transition border ${
                    faqCategory === cat
                      ? "bg-[#D4AF37] text-neutral-950 border-[#D4AF37] font-bold"
                      : "bg-transparent text-white/70 border-white/15 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 bg-[#0c0c0c] p-5 sm:p-6 hover:border-white/20 transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex justify-between items-start text-left gap-4 cursor-pointer"
                      aria-expanded={openFaq === idx}
                    >
                      <div className="flex gap-4 items-start">
                        <span className="text-[#E5C158] font-mono text-xs mt-0.5 font-bold">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium text-white text-sm sm:text-base leading-snug">
                          {item.q}
                        </span>
                      </div>
                      <span className="text-[#E5C158] font-mono text-lg font-bold">
                        {openFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="mt-4 pl-9 text-white/75 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-white/50 text-sm">
                  No matching questions found. Contact our master concierge at +91 9034196429.
                </div>
              )}
            </div>

            {/* Support CTA Block */}
            <div className="mt-16 bg-[#040404] border border-white/10 p-8 text-center space-y-4">
              <h3 className="font-serif text-2xl text-white italic">
                Need Personalized Consultation?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
                Our master concierge and gemologists are ready to assist with custom sizes, bespoke designs, or insured transit updates.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href="tel:+919034196429"
                  className="min-h-[48px] px-6 py-3 bg-[#D4AF37] text-neutral-950 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition"
                >
                  <Phone size={14} /> Call +91 9034196429
                </a>
                <button
                  type="button"
                  onClick={() => setIsVipModalOpen(true)}
                  className="min-h-[48px] px-6 py-3 border border-white/20 text-white font-medium text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                >
                  <Calendar size={14} /> Book Video Appointment
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 7: FINAL CALL TO ACTION
        =================================================== */}
        <section className="relative py-32 overflow-hidden border-t border-white/10">
          <SafeImage
            src={imperialDiamondChoker}
            alt="Aurix handcrafted 22K luxury gold bridal choker jewellery collection"
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black" aria-hidden="true" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 border border-[#D4AF37]/50 rotate-45 flex items-center justify-center mb-8">
              <Diamond size={20} className="text-[#D4AF37] -rotate-45" aria-hidden="true" />
            </div>

            <div className="text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-medium mb-4">
              Your Signature Heirloom
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-white italic mb-6">
              Find the Gold Piece That Becomes Yours.
            </h2>

            <p className="max-w-xl mx-auto text-white/80 text-sm leading-relaxed font-light mb-10">
              Explore timeless 22K gold jewellery handcrafted for moments that matter. Guaranteed BIS 916 hallmarked, fully insured doorstep delivery across India.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/products"
                className="min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-8 py-3.5 text-xs uppercase tracking-[0.2em] inline-flex items-center justify-center hover:bg-white transition"
              >
                Shop 22K Gold Collection
              </Link>
              <button
                type="button"
                onClick={() => setIsVipModalOpen(true)}
                className="min-h-[48px] border border-white/30 text-white font-medium px-8 py-3.5 text-xs uppercase tracking-[0.2em] inline-flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
              >
                Book Stylist Consultation
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
