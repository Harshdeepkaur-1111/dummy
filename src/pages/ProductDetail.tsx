import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Truck, RefreshCw, Award, ArrowLeft, ShoppingBag, Check, Star } from "lucide-react";
import { products } from "../data";
import { useCart } from "../contexts/CartContext";
import { CANONICAL_SITE_URL, useCanonical } from "../lib/seo";

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  const currentSlug = slug || "gold-ring";
  const canonicalUrl = useCanonical(`/product/${currentSlug}`);

  // Find product matching slug or fallback gracefully
  const product = useMemo(() => {
    if (!slug) return products[0];
    const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Direct matches or slug aliases
    if (normalized.includes("ring")) {
      return products.find(p => p.name.toLowerCase().includes("ring")) || products[1];
    }
    if (normalized.includes("necklace") || normalized.includes("choker")) {
      return products.find(p => p.name.toLowerCase().includes("necklace") || p.name.toLowerCase().includes("choker")) || products[0];
    }
    if (normalized.includes("earring")) {
      return products.find(p => p.name.toLowerCase().includes("earring")) || products[2];
    }
    if (normalized.includes("bangle") || normalized.includes("bracelet")) {
      return products.find(p => p.name.toLowerCase().includes("bangle") || p.name.toLowerCase().includes("bracelet")) || products[3];
    }
    
    return products.find(p => {
      const pSlug = p.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      return pSlug === normalized || pSlug.includes(normalized) || normalized.includes(pSlug);
    }) || products[0];
  }, [slug]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });
    navigate("/checkout");
  };

  const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10) || 24999;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${product.name} - 22K Gold Certified BIS 916`,
    image: [product.image],
    description: `${product.desc} Certified 22K gold BIS 916 hallmarked jewellery with 100% insured delivery across India.`,
    sku: `AURIX-${product.id}`,
    mpn: `AURIX-916-${product.id}`,
    brand: {
      "@type": "Brand",
      name: "Aurix"
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: numericPrice,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Aurix Luxury Jewellery"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${CANONICAL_SITE_URL}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${CANONICAL_SITE_URL}/products`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: canonicalUrl
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20">
      <Helmet>
        <title>{`${product.name} | Certified 22K BIS 916 Gold Jewellery | Aurix`}</title>
        <meta
          name="description"
          content={`Buy ${product.name} crafted in pure ${product.material} (${product.weight}). Certified BIS 916 hallmark, 100% insured delivery across India & lifetime buyback guarantee.`}
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} | Certified 22K Gold Jewellery | Aurix`} />
        <meta property="og:description" content={`Buy ${product.name} in pure ${product.material} with certified BIS 916 hallmark, lifetime buyback & insured delivery across India.`} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={product.image} />
        <meta property="og:site_name" content="Aurix" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Certified 22K Gold Jewellery | Aurix`} />
        <meta name="twitter:description" content={`Buy ${product.name} in pure ${product.material} with certified BIS 916 hallmark, lifetime buyback & insured delivery across India.`} />
        <meta name="twitter:image" content={product.image} />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-8">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#D4AF37] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#D4AF37]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 group shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/30 text-[11px] font-medium text-[#D4AF37] tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                BIS 916 Hallmarked
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-white/5 text-center">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] mx-auto mb-1.5" />
                <span className="text-[11px] font-medium text-neutral-300 block">100% Certified</span>
                <span className="text-[9px] text-neutral-500">BIS 916 Gold</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-white/5 text-center">
                <Truck className="w-5 h-5 text-[#D4AF37] mx-auto mb-1.5" />
                <span className="text-[11px] font-medium text-neutral-300 block">Insured Transit</span>
                <span className="text-[9px] text-neutral-500">Doorstep Delivery</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-white/5 text-center">
                <RefreshCw className="w-5 h-5 text-[#D4AF37] mx-auto mb-1.5" />
                <span className="text-[11px] font-medium text-neutral-300 block">Lifetime Buyback</span>
                <span className="text-[9px] text-neutral-500">Guaranteed Value</span>
              </div>
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="space-y-6">
            <div>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium">Aurix Heritage 22K</span>
              <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mt-2 mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs text-neutral-400">5.0 (Certified Boutique Review)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-2 border-[#D4AF37]">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-serif text-[#D4AF37] font-semibold">{product.price}</span>
                <span className="text-xs text-neutral-400">Inclusive of all taxes & BIS Hallmarking charges</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Zero hidden charges. EMI available starting at ₹{Math.round(numericPrice / 6).toLocaleString("en-IN")}/month.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="border-t border-b border-white/10 py-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-neutral-500 text-xs block">Purity & Metal</span>
                <span className="text-white font-medium">{product.material}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-xs block">Net Gold Weight</span>
                <span className="text-white font-medium">{product.weight}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-xs block">Hallmark License</span>
                <span className="text-white font-medium">BIS 916 Certified</span>
              </div>
              <div>
                <span className="text-neutral-500 text-xs block">Shipping</span>
                <span className="text-white font-medium">100% Insured Priority</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-2 font-medium">Product Overview</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {product.desc} Every detail is meticulously shaped by master karigars to celebrate authentic Indian goldsmithing heritage with contemporary grace.
              </p>
            </div>

            {/* Purchase CTA buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                id="btn-add-to-cart-detail"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                id="btn-buy-now-detail"
                onClick={handleBuyNow}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#D4AF37] text-black hover:bg-[#c49f2e] transition-colors font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                Buy Now with Insured Delivery
              </button>
            </div>

            {/* Assurance List */}
            <div className="pt-4 space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Tamper-evident luxury presentation box included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Official BIS HUID authentication certificate with QR code</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Dedicated support via phone & WhatsApp (+91 9034196429)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All 22K Gold Jewellery
          </Link>
        </div>
      </div>
    </div>
  );
}
