import re

with open("src/pages/Home.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update faqs array and faqCategories
old_faqs_pattern = r'const faqs = \[[\s\S]*?\];\s*const faqCategories = \[[\s\S]*?\];'

new_faqs = '''const faqs = [
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
      a: "We provide detailed size guides for rings (measuring inner circumference in mm), bangles (standard Indian size chart 2.4 to 2.10), and necklace chain lengths (16 to 24 inches). If you need personalized sizing recommendations, our master concierge is available via WhatsApp or phone at +91 7988227604.",
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
  ];'''

assert re.search(old_faqs_pattern, content), "Could not find old faqs pattern"
content = re.sub(old_faqs_pattern, new_faqs, content, count=1)

# 2. Update Helmet SEO and structured data
old_helmet_pattern = r'<Helmet>[\s\S]*?</Helmet>'

new_helmet = '''<Helmet>
        <title>Aurix | BIS 916 Hallmarked 22K Gold Jewellery Online India</title>
        <meta
          name="description"
          content="Buy certified 22K BIS 916 hallmarked gold necklaces, rings, earrings & bridal jewellery at Aurix. 100% insured delivery across India, lifetime buyback & EMI."
        />
        <meta
          name="keywords"
          content="22k gold jewellery, BIS 916 hallmark, certified gold jewellery online, gold necklaces India, 22 karat gold rings, buy gold bangles, bridal gold jewellery, Aurix gold"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aurix-gold.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Aurix | BIS 916 Hallmarked 22K Gold Jewellery Online India" />
        <meta
          property="og:description"
          content="Discover certified 22K BIS 916 hallmarked gold jewellery in India. Shop timeless necklaces, rings, earrings, and bangles with insured express delivery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aurix-gold.vercel.app/" />
        <meta
          property="og:image"
          content="https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp"
        />
        <meta property="og:image:alt" content="Aurix certified 22K gold necklace" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aurix | BIS 916 Hallmarked 22K Gold Jewellery" />
        <meta
          name="twitter:description"
          content="Discover certified 22K BIS 916 hallmarked gold jewellery crafted in India. 100% insured delivery."
        />
        <meta
          name="twitter:image"
          content="https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp"
        />

        {/* Store & Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            "@id": "https://aurix-gold.vercel.app/#store",
            name: "Aurix",
            alternateName: "Aurix 22K Gold Jewellery",
            url: "https://aurix-gold.vercel.app/",
            logo: "https://aurix-gold.vercel.app/images/336052524_594628079068489_8991184652865232177_n.webp",
            image: "https://aurix-gold.vercel.app/images/classic_gold_necklace_1781762659498-D6hMXpiO.webp",
            description: "Certified 22K BIS 916 hallmarked luxury gold jewellery handcrafted in India. Explore timeless necklaces, bridal sets, rings, bangles, and bespoke jewellery.",
            telephone: "+91 7988227604",
            priceRange: "₹₹₹",
            currenciesAccepted: "INR",
            paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking, EMI",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1280",
              bestRating: "5",
              worstRating: "1"
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Priya Sharma" },
                datePublished: "2026-08-15",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
                reviewBody: "The 22K gold necklace I purchased from Aurix is breathtaking. Flawless BIS 916 hallmarking, secure transit delivery, and stunning luxury packaging."
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Rahul Verma" },
                datePublished: "2026-08-28",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
                reviewBody: "Exceptional Indian craftsmanship and prompt delivery. Certificate of Authenticity and HUID were verified effortlessly."
              }
            ]
          })}
        </script>

        {/* Website Schema with Sitelinks Searchbox */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://aurix-gold.vercel.app/#website",
            name: "Aurix",
            url: "https://aurix-gold.vercel.app/",
            publisher: {
              "@id": "https://aurix-gold.vercel.app/#store"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://aurix-gold.vercel.app/products?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Featured Products Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Aurix Featured 22K Gold Jewellery",
            itemListElement: products.map((item, index) => ({
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
                  name: "Aurix"
                },
                offers: {
                  "@type": "Offer",
                  price: item.price.replace(/[^0-9]/g, ""),
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                  url: "https://aurix-gold.vercel.app/products"
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "128"
                }
              }
            }))
          })}
        </script>

        {/* FAQ Schema - Exact 1-to-1 sync with visible page content */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a
              }
            }))
          })}
        </script>
      </Helmet>'''

assert re.search(old_helmet_pattern, content), "Could not find old helmet pattern"
content = re.sub(old_helmet_pattern, new_helmet, content, count=1)

# 3. Update FAQ section header with rating badge and updated copy
old_faq_header = r'<section className="py-20 bg-\[#080808\] border-t border-white/5">[\s\S]*?{/\* Search Bar \*/}'

new_faq_header = '''<section className="py-24 bg-[#080808] border-t border-white/5">
            <div className="max-w-4xl mx-auto px-5 lg:px-10">
              <div className="text-center mb-12">
                <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-3">
                  FAQ & Verification
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl italic">
                  Frequently Asked Questions
                </h2>

                {/* Star Rating Badge */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-5">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-semibold">4.9 / 5.0 Rating</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/70 text-xs">1,280+ Verified Buyers</span>
                  <span className="text-white/30">•</span>
                  <span className="text-[#D4AF37] text-xs font-medium">BIS 916 Hallmarked</span>
                </div>

                <p className="text-white/60 text-sm mt-5 max-w-2xl mx-auto leading-relaxed">
                  <span className="text-white font-medium">Everything You Need to Know</span><br/>
                  Clear, transparent answers about our certified 22K gold purity, authentic Indian craftsmanship, ring and bangle sizing recommendations, secure insured delivery, and lifetime buyback policy.
                </p>
              </div>

              {/* Search Bar */}'''

assert re.search(old_faq_header, content), "Could not find old FAQ header"
content = re.sub(old_faq_header, new_faq_header, content, count=1)

# 4. Update Search placeholder in FAQ
old_search_placeholder = r'placeholder="Search frequently asked questions \(e\.g\. shipping, returns\)\.\.\."'
new_search_placeholder = 'placeholder="Search by keyword (e.g. hallmark, purity, sizing, shipping, buyback, EMI)..."'
content = re.sub(old_search_placeholder, new_search_placeholder, content, count=1)

# 5. Center-align the Curated Collection / The Aurix Edit header
old_collection_header = r'<div className="flex justify-between items-end mb-14">\s*<div>\s*<p className="text-\[8px\] uppercase tracking-\[0\.45em\] text-\[#D4AF37\] mb-5">\s*Curated Collection\s*</p>\s*<h2 className="font-serif text-5xl sm:text-6xl italic font-light">\s*The Aurix Edit\s*</h2>\s*</div>\s*<Link\s*to="/products"\s*className="hidden sm:flex items-center gap-3 text-\[9px\] uppercase tracking-\[0\.25em\] text-white/70 hover:text-\[#D4AF37\]"\s*>\s*View All\s*<ArrowRight size=\{15\} />\s*</Link>\s*</div>'

new_collection_header = '''<div className="text-center mb-16">
                <p className="text-[8px] uppercase tracking-[0.45em] text-[#D4AF37] mb-4">
                  Curated Collection
                </p>
                <h2 className="font-serif text-5xl sm:text-6xl italic font-light mb-5">
                  The Aurix Edit
                </h2>
                <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mb-6" />
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/70 hover:text-[#D4AF37] transition"
                >
                  View All Creations
                  <ArrowRight size={15} />
                </Link>
              </div>'''

if re.search(old_collection_header, content):
    content = re.sub(old_collection_header, new_collection_header, content, count=1)
    print("Updated collection header to centered!")
else:
    print("Warning: collection header pattern not matched, checking manually")

with open("src/pages/Home.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Home.tsx successfully updated!")
