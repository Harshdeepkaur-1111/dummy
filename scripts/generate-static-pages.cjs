const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://aurix-gold.vercel.app';

// Comprehensive product catalogue
const productsData = [
  {
    id: 1,
    slug: 'classic-gold-necklace',
    name: 'Classic Gold Necklace',
    price: '₹24,999',
    priceNumeric: 24999,
    material: '22K Gold',
    purity: '22K (91.6% Pure Gold)',
    weight: '8.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/336052524_594628079068489_8991184652865232177_n.webp',
    description: 'Heirloom 22K BIS 916 hallmarked pure gold necklace handcrafted by master goldsmiths in India. Featuring intricate filigree detailing, secure lobster clasp, and lustrous traditional yellow gold radiance suitable for weddings and milestone celebrations.',
  },
  {
    id: 2,
    slug: 'aurix-royal-gold-ring',
    name: 'Aurix Royal Gold Ring',
    price: '₹12,499',
    priceNumeric: 12499,
    material: '18K/22K Gold',
    purity: '18K/22K Pure Gold',
    weight: '4.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/LJ-R00631YG_1_0c039dbf-f4b9-4693-98b8-25f1b5e3f4d5.webp',
    description: 'Luxury certified gold ring crafted with an ornate regal crest and micro-polished inner band for supreme comfort. An enduring testament to royal goldsmith traditions with certified hallmark authentication.',
  },
  {
    id: 3,
    slug: 'pearl-drop-gold-earrings',
    name: 'Pearl Drop Gold Earrings',
    price: '₹15,999',
    priceNumeric: 15999,
    material: '22K Gold',
    purity: '22K (91.6% Pure Gold)',
    weight: '5.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/beautiful-pearl-drop-earrings-bling-box-jewellery-34608676405484.webp',
    description: 'Sophisticated 22K pure gold drop earrings featuring genuine cultured freshwater pearls suspended from hand-chiseled gold leaves. Lightweight, secure push-back closures ideal for festive and bridal occasions.',
  },
  {
    id: 4,
    slug: 'modern-gold-charm-bracelet',
    name: 'Modern Gold Charm Bracelet',
    price: '₹18,999',
    priceNumeric: 18999,
    material: '22K Gold',
    purity: '22K (91.6% Pure Gold)',
    weight: '6.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/71FN+9fe2yL._SY395_.webp',
    description: 'Contemporary 22K gold charm bracelet designed for daily grace and versatile layering. Features solid link construction, high-tensile spring lock, and hand-polished talisman charms.',
  },
  {
    id: 5,
    slug: 'signature-gold-pendant',
    name: 'Signature Gold Pendant',
    price: '₹10,999',
    priceNumeric: 10999,
    material: '18K/22K Gold',
    purity: '18K/22K Pure Gold',
    weight: '3.00g',
    hallmark: 'BIS Hallmark Certified',
    image: '/images/il_300x300.6811366752_yuu4.webp',
    description: 'Minimalist solid gold pendant showcasing geometric symmetry and laser-cut openwork. Perfect for daily office styling or gifting with certified purity hallmarking.',
  },
  {
    id: 6,
    slug: 'heritage-gold-bangle',
    name: 'Heritage Gold Bangle',
    price: '₹29,999',
    priceNumeric: 29999,
    material: '22K Gold',
    purity: '22K (91.6% Pure Gold)',
    weight: '10.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/71FN+9fe2yL._SY395_.webp',
    description: 'Traditional solid 22K gold bangle handcrafted with heritage jaali and nakshi filigree carving. Engineered with an invisible safety hinge for a seamless luxury wrist fit.',
  },
  {
    id: 7,
    slug: 'imperial-diamond-gold-choker',
    name: 'Imperial Diamond Gold Choker',
    price: '₹1,85,999',
    priceNumeric: 185999,
    material: '22K Gold',
    purity: '22K (91.6% Pure Gold)',
    weight: '25.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/336052524_594628079068489_8991184652865232177_n.webp',
    description: 'An opulent royal 22K gold choker necklace designed for grand Indian weddings and royal celebrations. Handcrafted with multi-layered gold lace, certified brilliant accents, and museum-grade master goldwork.',
  },
  {
    id: 8,
    slug: 'sovereign-gold-signet-ring',
    name: 'Sovereign Gold Signet Ring',
    price: '₹45,999',
    priceNumeric: 45999,
    material: '22K Solid Gold',
    purity: '22K (91.6% Pure Gold)',
    weight: '14.00g',
    hallmark: 'BIS 916 HUID Hallmarked',
    image: '/images/LJ-R00631YG_1_0c039dbf-f4b9-4693-98b8-25f1b5e3f4d5.webp',
    description: 'Bold 22K solid gold signet ring weighing a substantial 14 grams of certified hallmarked gold. Flat satin-brushed face designed for bespoke monogram engraving with an ultra-durable solid shank.',
  },
];

// Articles data
const articlesData = [
  {
    id: 1,
    title: 'How to Check BIS 916 Hallmark & HUID on Gold Jewellery in India',
    excerpt: 'Learn how to verify certified 22K BIS 916 hallmarked gold in India. Understand the 3 mandatory hallmark signs: the BIS triangular mark, 22K916 purity stamp, and the 6-digit alphanumeric HUID code verifiable on the BIS Care mobile app.',
    date: 'March 15, 2026',
    readTime: '6 min read',
    category: 'Purity & Certification',
    content: 'When investing in 22-karat gold jewellery in India, hallmark verification is your primary guarantee of purity. Mandated by the Bureau of Indian Standards (BIS), authentic hallmarked jewellery features three laser-engraved hallmarks: 1) The official BIS triangular emblem, 2) The purity benchmark (22K916 signifying 91.6% pure gold alloyed with 8.4% copper/silver for strength), and 3) The unique 6-digit alphanumeric HUID (Hallmarking Unique Identification) number. Every Aurix piece is verified at accredited Assaying and Hallmarking Centres (AHC). By entering your piece\'s HUID in the official BIS Care app, you can instantly review the hallmarking centre\'s registration, jeweller\'s identification, article weight, and assay timestamp.',
  },
  {
    id: 2,
    title: '22K vs 24K vs 18K Gold: Which Purity Should You Buy?',
    excerpt: 'Compare 24K pure gold bullion, 22K (BIS 916) fine jewellery gold, and 18K gemstone setting gold. Discover which karat delivers the ideal balance between raw bullion value, heirloom durability, and lustrous yellow gold radiance.',
    date: 'April 10, 2026',
    readTime: '7 min read',
    category: 'Buying Guide',
    content: 'Choosing between 24K, 22K, and 18K gold depends on your intended use. 24K gold is 99.9% pure, but its natural softness makes it prone to bending and scratching, making it ideal for investment coins and bullion bars rather than wearable daily jewellery. 22K gold (91.6% purity or BIS 916) is the gold standard for traditional Indian bridal necklaces, bangles, and heirloom chains because it retains the rich, warm, deep-yellow luster of pure gold while providing the tensile strength needed for intricate filigree and everyday wear. 18K gold (75.0% purity) is harder and commonly favored for modern diamond-studded and gemstone settings. At Aurix, our master artisans craft with certified 22K gold to deliver optimal value and timeless heirloom brilliance.',
  },
  {
    id: 3,
    title: 'Maintaining Heirloom Gold Jewellery: Cleaning & Storage Guide',
    excerpt: 'Professional goldsmith tips for preserving the deep yellow radiance of your 22K gold necklaces and rings. Protect pure gold from scratches, cosmetic chemicals, and environmental tarnishing with safe cleaning techniques.',
    date: 'May 5, 2026',
    readTime: '5 min read',
    category: 'Care & Maintenance',
    content: 'Pure 22K gold does not tarnish or oxidize, but everyday wear can accumulate cosmetic oils, perfumes, dust, and soaps that dull its mirror-like finish. To safely clean your gold jewellery at home, submerge pieces in lukewarm water infused with a few drops of mild ph-neutral soap for 10 minutes. Gently brush filigree crevices with an ultra-soft infant toothbrush, rinse thoroughly under running water, and pat dry with a lint-free microfiber polishing cloth. Always store each necklace, bangle, and pair of earrings in separate plush velvet compartments or anti-tarnish suede pouches to avoid surface scratches from metal-on-metal contact.',
  },
  {
    id: 4,
    title: 'Gold Price Trends in India: Making Charges & Bullion Benchmark Explained',
    excerpt: 'Understand how gold jewellery pricing is calculated in India. Decode the formula: (Net Gold Weight × Daily IBJA 22K Gold Rate) + Transparent Making Charges + 3% GST, ensuring total transparency on every purchase.',
    date: 'June 1, 2026',
    readTime: '8 min read',
    category: 'Market & Valuation',
    content: 'Purchasing fine jewellery should always be accompanied by complete pricing transparency. In India, certified gold jewellery follows a standardized calculation: (Net Certified Gold Weight × Prevailing 22K Bullion Rate) + Making Charges + 3% GST. Making charges reflect the artisan skill, laser precision, and hours invested by master goldsmiths in shaping raw gold into intricate heirloom designs. At Aurix, we publish transparent making charges upfront without hidden handling fees or inflated gross weight calculations, and every invoice itemizes the exact gold weight, hallmarked purity, benchmark bullion rate, and statutory taxes.',
  },
];

// Helper to generate the universal site header
function getSiteHeaderHtml() {
  return `
    <header style="border-bottom:1px solid rgba(255,255,255,0.1);padding:1.5rem 2rem;display:flex;justify-content:space-between;align-items:center;max-width:1280px;margin:0 auto;">
      <a href="/" style="color:#D4AF37;font-size:1.5rem;font-family:'Playfair Display',serif;text-decoration:none;font-weight:700;letter-spacing:0.25em;">AURIX</a>
      <nav aria-label="Main Navigation">
        <a href="/" style="color:#ffffff;margin-right:1.5rem;text-decoration:none;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.15em;">Home</a>
        <a href="/products" style="color:#ffffff;margin-right:1.5rem;text-decoration:none;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.15em;">22K Collection</a>
        <a href="/about" style="color:#ffffff;margin-right:1.5rem;text-decoration:none;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.15em;">Our Story</a>
        <a href="/blog" style="color:#ffffff;margin-right:1.5rem;text-decoration:none;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.15em;">Journal</a>
        <a href="/contact" style="color:#ffffff;text-decoration:none;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.15em;">Contact</a>
      </nav>
    </header>
  `;
}

// Helper to generate the universal site footer
function getSiteFooterHtml() {
  return `
    <footer style="margin-top:5rem;padding:3rem 1.5rem 2rem;border-top:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);font-size:0.85rem;text-align:center;max-width:1280px;margin-left:auto;margin-right:auto;">
      <p style="margin-bottom:0.75rem;">Customer Support: <a href="tel:+919034196429" style="color:#D4AF37;text-decoration:none;font-weight:600;">+91 9034196429</a> · 4.9/5.0 Rating based on 1,280+ Verified Buyers across India</p>
      <p style="margin-bottom:1.5rem;color:rgba(255,255,255,0.45);font-size:0.75rem;">Bureau of Indian Standards (BIS) 916 Hallmarked Jewellery · 100% Insured Delivery via Blue Dart & Sequel · Lifetime Buyback Guarantee</p>
      <p style="margin-top:0.75rem;">
        <a href="/" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">Home</a> |
        <a href="/products" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">22K Collection</a> |
        <a href="/about" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">About Aurix</a> |
        <a href="/blog" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">Journal</a> |
        <a href="/contact" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">Contact</a> |
        <a href="/shipping-returns" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">Shipping & Returns</a> |
        <a href="/privacy" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">Privacy Policy</a> |
        <a href="/terms" style="color:rgba(255,255,255,0.7);margin:0 0.5rem;text-decoration:none;">Terms of Service</a>
      </p>
      <p style="margin-top:1.5rem;color:rgba(255,255,255,0.3);font-size:0.7rem;">© 2026 Aurix Gold. All Rights Reserved. Yamunanagar, Haryana, India - 135001.</p>
    </footer>
  `;
}

// Generate distinct body HTML for each page
function renderPageBody(page) {
  const header = getSiteHeaderHtml();
  const footer = getSiteFooterHtml();

  // 1. PRODUCTS PAGE
  if (page.path === '/products') {
    const productCards = productsData
      .map(
        (p) => `
        <article style="border:1px solid rgba(255,255,255,0.1);padding:1.5rem;background:#0b0b0b;border-radius:4px;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="aspect-ratio:1/1;overflow:hidden;background:#151515;margin-bottom:1.25rem;">
              <img src="${p.image}" alt="${p.name} - Certified 22K Gold Jewellery" width="400" height="400" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />
            </div>
            <div style="display:inline-block;border:1px solid rgba(212,175,55,0.3);padding:0.2rem 0.5rem;font-size:0.65rem;color:#D4AF37;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">${p.hallmark}</div>
            <h2 style="font-size:1.15rem;font-family:'Playfair Display',serif;margin-bottom:0.5rem;color:#ffffff;">
              <a href="/product/${p.slug}" style="color:#ffffff;text-decoration:none;">${p.name}</a>
            </h2>
            <p style="color:#D4AF37;font-size:1.05rem;font-weight:600;margin-bottom:0.5rem;">${p.price} <span style="font-size:0.75rem;color:rgba(255,255,255,0.5);font-weight:400;">(Incl. 3% GST)</span></p>
            <p style="color:rgba(255,255,255,0.6);font-size:0.8rem;line-height:1.6;margin-bottom:1rem;">${p.description}</p>
          </div>
          <div>
            <p style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:1rem;">Purity: <strong style="color:#fff;">${p.purity}</strong> · Weight: <strong style="color:#fff;">${p.weight}</strong></p>
            <a href="/product/${p.slug}" style="display:block;text-align:center;background:#D4AF37;color:#000;padding:0.75rem 1rem;text-decoration:none;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;font-weight:700;">View 22K Details</a>
          </div>
        </article>
      `
      )
      .join('');

    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:1200px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">22K Collection</span>
          </nav>
          <div style="text-align:center;max-width:800px;margin:0 auto 3.5rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.4em;text-transform:uppercase;margin-bottom:0.75rem;">Certified BIS 916 Hallmark</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:1rem;color:#ffffff;">
              22K Gold Jewellery Collection India
            </h1>
            <p style="color:rgba(255,255,255,0.7);line-height:1.8;font-size:0.95rem;">
              Explore our curated catalogue of certified 22K BIS 916 hallmarked pure gold jewellery. Each piece is crafted by master Indian artisans with transparent gold bullion pricing, 100% insured delivery, and lifetime buyback.
            </p>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;">
            ${productCards}
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 2. PRODUCT DETAIL PAGE
  if (page.path.startsWith('/product/')) {
    const slug = page.path.replace('/product/', '');
    const product = productsData.find((p) => p.slug === slug) || productsData[0];

    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:1100px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2.5rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> /
            <a href="/products" style="color:rgba(255,255,255,0.6);text-decoration:none;">22K Collection</a> /
            <span style="color:#D4AF37;">${product.name}</span>
          </nav>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:3.5rem;align-items:start;">
            <div style="background:#0b0b0b;border:1px solid rgba(255,255,255,0.1);padding:1rem;aspect-ratio:1/1;">
              <img src="${product.image}" alt="${product.name} - Certified 22K Gold Jewellery Aurix" width="600" height="600" style="width:100%;height:100%;object-fit:cover;" />
            </div>
            <div>
              <div style="display:inline-block;border:1px solid rgba(212,175,55,0.3);background:rgba(212,175,55,0.08);padding:0.35rem 0.75rem;font-size:0.7rem;color:#D4AF37;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:1rem;">
                ✓ ${product.hallmark}
              </div>
              <h1 style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:400;margin-bottom:0.75rem;color:#ffffff;">
                ${product.name}
              </h1>
              <p style="color:#D4AF37;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;">
                ${product.price} <span style="font-size:0.85rem;color:rgba(255,255,255,0.5);font-weight:400;">(Incl. all taxes & 3% GST)</span>
              </p>
              <div style="border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);padding:1.25rem 0;margin-bottom:1.5rem;">
                <p style="color:rgba(255,255,255,0.8);line-height:1.8;font-size:0.95rem;">${product.description}</p>
              </div>
              <h2 style="font-size:0.9rem;text-transform:uppercase;letter-spacing:0.2em;color:#D4AF37;margin-bottom:1rem;">Certified Product Specifications</h2>
              <table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-bottom:2rem;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem 0;color:rgba(255,255,255,0.5);">Purity Certification</td><td style="padding:0.6rem 0;color:#fff;text-align:right;font-weight:600;">${product.purity}</td></tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem 0;color:rgba(255,255,255,0.5);">Certified Gross Weight</td><td style="padding:0.6rem 0;color:#fff;text-align:right;font-weight:600;">${product.weight}</td></tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem 0;color:rgba(255,255,255,0.5);">Hallmark Standard</td><td style="padding:0.6rem 0;color:#fff;text-align:right;font-weight:600;">Bureau of Indian Standards (BIS) HUID</td></tr>
                <tr style="border-bottom:1px solid rgba(255,255,255,0.06);"><td style="padding:0.6rem 0;color:rgba(255,255,255,0.5);">Transit Insurance</td><td style="padding:0.6rem 0;color:#fff;text-align:right;font-weight:600;">100% Insured Armed Delivery (Blue Dart / Sequel)</td></tr>
                <tr><td style="padding:0.6rem 0;color:rgba(255,255,255,0.5);">Guarantee & Returns</td><td style="padding:0.6rem 0;color:#fff;text-align:right;font-weight:600;">14-Day Return Privilege · Lifetime Buyback</td></tr>
              </table>
              <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;">
                <a href="/cart" style="flex:1;min-width:200px;text-align:center;background:#D4AF37;color:#000;padding:1rem 1.5rem;text-decoration:none;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.2em;font-weight:700;">Purchase Online</a>
                <a href="tel:+919034196429" style="border:1px solid #D4AF37;color:#D4AF37;padding:1rem 1.5rem;text-decoration:none;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.2em;">Call Concierge</a>
              </div>
            </div>
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 3. BLOG PAGE
  if (page.path === '/blog') {
    const articleCards = articlesData
      .map(
        (art) => `
        <article style="border:1px solid rgba(255,255,255,0.1);background:#090909;padding:2rem;margin-bottom:2.5rem;border-radius:4px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">
            <span style="color:#D4AF37;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${art.category}</span>
            <span style="color:rgba(255,255,255,0.5);font-size:0.75rem;">${art.date} · ${art.readTime}</span>
          </div>
          <h2 style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:1rem;color:#ffffff;line-height:1.3;">${art.title}</h2>
          <p style="color:rgba(255,255,255,0.8);font-size:0.95rem;line-height:1.8;margin-bottom:1.5rem;">${art.excerpt}</p>
          <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:1.25rem;">
            <p style="color:rgba(255,255,255,0.65);font-size:0.85rem;line-height:1.8;">${art.content}</p>
          </div>
        </article>
      `
      )
      .join('');

    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">Aurix Journal</span>
          </nav>
          <div style="text-align:center;max-width:760px;margin:0 auto 3.5rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.4em;text-transform:uppercase;margin-bottom:0.75rem;">Purity, Trends & Valuation</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:1rem;color:#ffffff;">
              Aurix Journal — 22K Gold Jewellery Guides
            </h1>
            <p style="color:rgba(255,255,255,0.7);line-height:1.8;font-size:0.95rem;">
              Expert guides on Bureau of Indian Standards (BIS 916) hallmarking, live bullion valuation, jewelry maintenance, and wedding bridal styling from the master goldsmiths at Aurix.
            </p>
          </div>
          <div>${articleCards}</div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 4. ABOUT PAGE
  if (page.path === '/about') {
    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">About Aurix</span>
          </nav>
          <div style="text-align:center;max-width:760px;margin:0 auto 3.5rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.4em;text-transform:uppercase;margin-bottom:0.75rem;">Artisan Heritage · Yamunanagar, India</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:1rem;color:#ffffff;">
              About Aurix — Master 22K Gold Goldsmith Heritage
            </h1>
            <p style="color:rgba(255,255,255,0.7);line-height:1.8;font-size:0.95rem;">
              Dedicated to crafting authentic 22K BIS 916 hallmarked heirloom gold jewellery that honors India's millennia-old metallurgical traditions with contemporary precision.
            </p>
          </div>
          <div style="space-y:2rem;color:rgba(255,255,255,0.8);font-size:0.95rem;line-height:1.9;">
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;color:#D4AF37;margin-bottom:1rem;">Our Lifelong Purity Promise</h2>
              <p>Every creation at Aurix begins with certified 22-karat gold (91.6% pure bullion). In an industry where purity variances can diminish investment value, Aurix subjects 100% of its catalogue to strict Bureau of Indian Standards (BIS) assaying with laser-inscribed HUID numbers verifiable on the government BIS Care app.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;color:#D4AF37;margin-bottom:1rem;">Transparent Bullion Pricing & Craftsmanship</h2>
              <p>We believe fine jewellery should be acquired with total financial clarity. We price all pieces based on daily Indian Bullion and Jewellers Association (IBJA) benchmark rates, itemizing net gold weight, transparent making charges, and statutory GST on every certificate.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;color:#D4AF37;margin-bottom:1rem;">Insured Delivery & Lifetime Buyback</h2>
              <p>Operating with trusted logistics partners Sequel Secure and Blue Dart Apex, every parcel is 100% insured until secret OTP handover. Our lifetime buyback and exchange guarantees ensure your investment retains enduring value across generations.</p>
            </section>
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 5. CONTACT PAGE
  if (page.path === '/contact') {
    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">Contact</span>
          </nav>
          <div style="text-align:center;max-width:760px;margin:0 auto 3.5rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.4em;text-transform:uppercase;margin-bottom:0.75rem;">Master Concierge</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:1rem;color:#ffffff;">
              Contact Aurix Support & Enquiries
            </h1>
            <p style="color:rgba(255,255,255,0.7);line-height:1.8;font-size:0.95rem;">
              Have questions about an order, custom 22K bridal designs, or hallmark verification? Our master concierge is available to assist you.
            </p>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;">
            <div style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-size:1.2rem;color:#D4AF37;margin-bottom:1rem;">Direct Telephone</h2>
              <p style="font-size:1.25rem;font-weight:600;color:#fff;margin-bottom:0.5rem;"><a href="tel:+919034196429" style="color:#fff;text-decoration:none;">+91 9034196429</a></p>
              <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;">Monday – Saturday · 10:00 AM – 7:00 PM IST</p>
            </div>
            <div style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-size:1.2rem;color:#D4AF37;margin-bottom:1rem;">Email Concierge</h2>
              <p style="font-size:1.1rem;font-weight:500;color:#fff;margin-bottom:0.5rem;"><a href="mailto:tejinders791@gmail.com" style="color:#fff;text-decoration:none;">tejinders791@gmail.com</a></p>
              <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;">Guaranteed response within 4 business hours</p>
            </div>
            <div style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-size:1.2rem;color:#D4AF37;margin-bottom:1rem;">Boutique Location</h2>
              <p style="color:#fff;font-weight:500;margin-bottom:0.5rem;">Yamunanagar, Haryana, India - 135001</p>
              <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;">Insured courier dispatch hub for India orders</p>
            </div>
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 6. SHIPPING & RETURNS PAGE
  if (page.path === '/shipping-returns') {
    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">Shipping & Returns</span>
          </nav>
          <div style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:2rem;margin-bottom:3rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.35em;text-transform:uppercase;margin-bottom:0.5rem;">Insured Delivery & Guarantees</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:0.75rem;color:#ffffff;">
              Shipping & Returns Policy
            </h1>
            <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;">Last Updated: October 9, 2026 · Compliant with insured transit standards and customer protection guidelines.</p>
          </div>
          <div style="space-y:2rem;color:rgba(255,255,255,0.8);font-size:0.95rem;line-height:1.8;">
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">1. 100% Free Insured Transit Across India</h2>
              <p>Aurix provides 100% complimentary, insured doorstep delivery on every order without minimum spend limitations across all serviceable postal PIN codes in India. Shipments are transported via specialized precious cargo couriers Sequel Secure and Blue Dart Apex with full transit insurance liability.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">2. Dispatch & Delivery Timelines</h2>
              <p style="margin-bottom:0.75rem;">• <strong>Metro Cities:</strong> 2 to 4 Business Days (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune & Ahmedabad).</p>
              <p>• <strong>Rest of India:</strong> 4 to 7 Business Days with real-time GPS tracking telemetry.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">3. Tamper-Evident Pouch & Secret OTP Handover</h2>
              <p>Each parcel is vacuum-sealed in a tamper-evident holographic security pouch. Delivery requires verification of a confidential 4-digit One-Time Password sent to the buyer's registered mobile number at the moment of handover.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">4. 14-Day Hassle-Free Returns</h2>
              <p>Catalogue jewellery in unworn condition with intact security tags, BIS hallmark certificates, and invoice may be returned within 14 calendar days of delivery for a 100% full refund with complimentary armed pickup.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">5. Lifetime Buyback & Exchange</h2>
              <p>• <strong>Lifetime Exchange:</strong> 100% of gold value at prevailing 22K benchmark bullion rate toward any new Aurix creation.</p>
              <p>• <strong>Lifetime Buyback:</strong> 97% of gold value at prevailing benchmark bullion rate with direct bank transfer.</p>
            </section>
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 7. PRIVACY POLICY PAGE
  if (page.path === '/privacy') {
    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">Privacy Policy</span>
          </nav>
          <div style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:2rem;margin-bottom:3rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.35em;text-transform:uppercase;margin-bottom:0.5rem;">Data Confidentiality</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:0.75rem;color:#ffffff;">
              Privacy Policy
            </h1>
            <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;">Last Updated: October 9, 2026 · Compliant with the Digital Personal Data Protection Act, 2023 (India).</p>
          </div>
          <div style="space-y:2rem;color:rgba(255,255,255,0.8);font-size:0.95rem;line-height:1.8;">
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">1. Information We Collect</h2>
              <p>We collect essential order information including name, delivery address, phone number for delivery OTP, and PAN details strictly when legally mandated by the Government of India for bullion purchases exceeding ₹2,00,000.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">2. 256-Bit Cryptographic Security</h2>
              <p>All data transmissions use TLS 1.3 with 256-bit encryption. Payments are processed through RBI-licensed, PCI-DSS Level 1 compliant gateways. Aurix never captures, stores, or sees sensitive credit card credentials.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">3. Zero Commercial Data Sharing</h2>
              <p>We never sell or commercialize customer data. Information is shared strictly with armed couriers (Sequel / Blue Dart) and insurance underwriters to guarantee physical delivery and transit coverage.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">4. Grievance Officer Contact</h2>
              <p>Grievance & Privacy Officer: Tejinder Singh · Email: <a href="mailto:tejinders791@gmail.com" style="color:#D4AF37;">tejinders791@gmail.com</a> · Tel: +91 9034196429 · Yamunanagar, Haryana, India - 135001.</p>
            </section>
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // 8. TERMS OF SERVICE PAGE
  if (page.path === '/terms') {
    return `
      <div style="min-height:100vh;background-color:#050505;color:#ffffff;font-family:Inter,system-ui,sans-serif;">
        ${header}
        <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem;">
          <nav aria-label="Breadcrumb" style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.15em;">
            <a href="/" style="color:rgba(255,255,255,0.6);text-decoration:none;">Home</a> / <span style="color:#D4AF37;">Terms of Service</span>
          </nav>
          <div style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:2rem;margin-bottom:3rem;">
            <p style="color:#D4AF37;font-size:0.75rem;letter-spacing:0.35em;text-transform:uppercase;margin-bottom:0.5rem;">Legal Agreement</p>
            <h1 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:0.75rem;color:#ffffff;">
              Terms of Service
            </h1>
            <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;">Last Updated: October 9, 2026 · Governing certified 22K BIS 916 gold jewellery purchases at Aurix.</p>
          </div>
          <div style="space-y:2rem;color:rgba(255,255,255,0.8);font-size:0.95rem;line-height:1.8;">
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">1. Purity & BIS 916 Hallmark Guarantee</h2>
              <p>Every piece sold by Aurix is certified 22K (91.6% pure gold) bearing laser-engraved Bureau of Indian Standards (BIS) hallmarks including the triangular emblem, 916 purity mark, and 6-digit alphanumeric HUID number verifiable on the BIS Care app.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">2. Transparent Gold Bullion Pricing</h2>
              <p>Gold prices reflect live daily Indian Bullion and Jewellers Association (IBJA) benchmark rates. All invoices clearly itemize certified net gold weight, benchmark rate, transparent making charges, and 3% GST with zero hidden fees.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;margin-bottom:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">3. Insured Transit & Secret OTP Handover</h2>
              <p>Aurix assumes 100% financial liability until parcels are verified with a confidential One-Time Password sent to the buyer's registered mobile upon delivery via Sequel Secure or Blue Dart Apex.</p>
            </section>
            <section style="border:1px solid rgba(255,255,255,0.1);background:#0a0a0a;padding:2rem;">
              <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#D4AF37;margin-bottom:1rem;">4. 14-Day Return & Lifetime Buyback Rights</h2>
              <p>Customers enjoy a 14-day return privilege on catalogue items for a 100% full refund and a lifelong buyback/exchange guarantee based on prevailing 22K benchmark rates.</p>
            </section>
          </div>
        </main>
        ${footer}
      </div>
    `;
  }

  // Default / Home page fallback
  return null;
}

// Canonical Pages configuration
const pages = [
  {
    path: '/',
    title: 'Aurix Gold | Certified 22K BIS 916 Hallmarked Gold Jewellery Online India',
    description: 'Shop certified 22K BIS 916 hallmarked gold necklaces, bridal sets, rings & bangles at Aurix Gold. 100% insured delivery across India, lifetime buyback & EMI options.',
    canonical: `${SITE_URL}/`,
  },
  {
    path: '/products',
    title: '22K Gold Jewellery Collection | Certified BIS 916 Pure Gold | Aurix',
    description: "Explore Aurix's certified 22K BIS 916 gold jewellery collection. Shop handcrafted royal necklaces, bridal chokers, rings and bangles with insured delivery across India.",
    canonical: `${SITE_URL}/products`,
  },
  {
    path: '/about',
    title: 'About Aurix | Master 22K BIS 916 Gold Goldsmith Heritage',
    description: "Discover Aurix: India's luxury brand for certified 22K gold jewellery. Learn about our heritage, master craft and lifelong purity promise.",
    canonical: `${SITE_URL}/about`,
  },
  {
    path: '/blog',
    title: 'Aurix Journal | 22K Gold Jewellery Trends & Purity Guides',
    description: 'Explore Aurix Journal for expert 22K gold jewellery guides, styling tips, latest market trends and wedding jewellery inspiration.',
    canonical: `${SITE_URL}/blog`,
  },
  {
    path: '/contact',
    title: 'Contact Aurix | 22K Jewellery Enquiries & Customer Support',
    description: 'Get in touch with Aurix for custom gold jewellery enquiries, order tracking & support. Call +91 9034196429 or visit our boutique in India.',
    canonical: `${SITE_URL}/contact`,
  },
  {
    path: '/shipping-returns',
    title: 'Shipping & Returns Policy | Aurix - 22K Gold Jewellery India',
    description: "Explore Aurix's shipping and return policies featuring 100% insured delivery across India, 14-day return privilege and lifetime 22K gold buyback guarantee.",
    canonical: `${SITE_URL}/shipping-returns`,
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Aurix - 22K Gold Jewellery India',
    description: 'Read the Aurix privacy policy to learn how we protect your personal data, secure online transactions, and maintain confidentiality for luxury jewellery orders.',
    canonical: `${SITE_URL}/privacy`,
  },
  {
    path: '/terms',
    title: 'Terms of Service | Aurix - 22K Gold Jewellery India',
    description: "Read Aurix's terms of service covering certified 22K gold jewellery purchases, transparent pricing, insured courier delivery, warranties and return guidelines.",
    canonical: `${SITE_URL}/terms`,
  },
  // 8 Canonical Products
  ...productsData.map((p) => ({
    path: `/product/${p.slug}`,
    title: `${p.name} | Certified 22K Gold Jewellery | Aurix`,
    description: `Buy ${p.name} in pure hallmarked gold. Certified BIS 916 hallmark, lifetime buyback and 100% insured delivery across India.`,
    canonical: `${SITE_URL}/product/${p.slug}`,
    productData: p,
  })),
  // Private utility pages (noindex)
  {
    path: '/login',
    title: 'Client Login & VIP Member Access | Aurix 22K Gold Jewellery',
    description: 'Sign in to your Aurix account to track gold orders, manage customized jewellery requests, view purity certificates and access VIP member benefits.',
    canonical: `${SITE_URL}/login`,
    robots: 'noindex, follow',
  },
  {
    path: '/cart',
    title: 'Shopping Cart | Aurix - Certified 22K Gold Jewellery India',
    description: 'Review your chosen handcrafted 22K gold necklaces, bangles, rings and earrings with 100% insured doorstep shipping and transparent billing.',
    canonical: `${SITE_URL}/cart`,
    robots: 'noindex, follow',
  },
  {
    path: '/checkout',
    title: 'Secure Checkout | Aurix - Insured 22K Gold Delivery India',
    description: 'Complete your purchase of certified 22K BIS 916 gold jewellery. Enjoy 100% insured delivery across India, safe payment options & lifetime buyback.',
    canonical: `${SITE_URL}/checkout`,
    robots: 'noindex, follow',
  },
];

function generatePages() {
  const distDir = path.resolve(__dirname, '..', 'dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  pages.forEach((page) => {
    let modifiedHtml = baseHtml;

    // 1. Update Title
    modifiedHtml = modifiedHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`);

    // 2. Update Meta Description
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']>/i,
      `<meta name="description" content="${page.description}">`
    );

    // 3. Ensure strictly ONE canonical tag per page
    modifiedHtml = modifiedHtml.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '');
    modifiedHtml = modifiedHtml.replace(
      /(<meta\s+name=["']description["'][\s\S]*?>)/i,
      `$1\n    <link rel="canonical" href="${page.canonical}">`
    );

    // 4. Handle Robots Directive
    modifiedHtml = modifiedHtml.replace(/<meta\s+name=["']robots["'][^>]*>/gi, '');
    if (page.robots) {
      modifiedHtml = modifiedHtml.replace(
        /(<meta\s+name=["']description["'][\s\S]*?>)/i,
        `$1\n    <meta name="robots" content="${page.robots}">`
      );
    } else {
      modifiedHtml = modifiedHtml.replace(
        /(<meta\s+name=["']description["'][\s\S]*?>)/i,
        `$1\n    <meta name="robots" content="index, follow, max-image-preview:large">`
      );
    }

    // 5. Update OpenGraph Tags
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']>/i,
      `<meta property="og:title" content="${page.title}">`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']>/i,
      `<meta property="og:description" content="${page.description}">`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']>/i,
      `<meta property="og:url" content="${page.canonical}">`
    );

    // 6. Update Twitter Cards
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']>/i,
      `<meta name="twitter:title" content="${page.title}">`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']>/i,
      `<meta name="twitter:description" content="${page.description}">`
    );

    // 7. Inject Rich Schema.org Structured Data
    if (page.productData) {
      const p = page.productData;
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.name,
        image: [`${SITE_URL}${p.image}`],
        description: p.description,
        sku: `AURIX-${p.id}`,
        brand: {
          '@type': 'Brand',
          name: 'Aurix',
        },
        material: p.material,
        offers: {
          '@type': 'Offer',
          url: page.canonical,
          priceCurrency: 'INR',
          price: p.priceNumeric,
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Aurix Gold',
          },
        },
      };

      modifiedHtml = modifiedHtml.replace(
        /<\/head>/i,
        `  <script type="application/ld+json">\n${JSON.stringify(productSchema, null, 2)}\n  </script>\n</head>`
      );
    }

    // 8. CRITICAL: Inject unique, rich body HTML inside <div id="root">
    const customBody = renderPageBody(page);
    if (customBody) {
      const rootIndex = modifiedHtml.indexOf('<div id="root">');
      const bodyIndex = modifiedHtml.indexOf('</body>', rootIndex);
      if (rootIndex !== -1 && bodyIndex !== -1) {
        modifiedHtml =
          modifiedHtml.substring(0, rootIndex) +
          `<div id="root">\n${customBody}\n    </div>\n  ` +
          modifiedHtml.substring(bodyIndex);
      }
    }

    // Safety check: verify canonical count
    const canonicalMatches = modifiedHtml.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi);
    const count = canonicalMatches ? canonicalMatches.length : 0;
    if (count !== 1) {
      console.warn(`Warning: Page ${page.path} has ${count} canonical tags.`);
    }

    // Write output files
    if (page.path === '/') {
      fs.writeFileSync(indexHtmlPath, modifiedHtml, 'utf8');
      console.log(`✓ ${page.path.padEnd(38)} : Pre-rendered Home page HTML`);
    } else {
      const pageDir = path.join(distDir, page.path.replace(/^\//, ''));
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(path.join(pageDir, 'index.html'), modifiedHtml, 'utf8');

      const cleanHtmlFile = path.join(distDir, `${page.path.replace(/^\//, '')}.html`);
      fs.writeFileSync(cleanHtmlFile, modifiedHtml, 'utf8');
      console.log(`✓ ${page.path.padEnd(38)} : Unique pre-rendered HTML -> ${page.canonical}`);
    }
  });

  // Handle Legacy Aliases with Clean 301 / Meta-Refresh Redirect HTML
  const legacyAliases = [
    {
      source: '/product/gold-ring',
      destination: '/product/aurix-royal-gold-ring',
    },
    {
      source: '/product/diamond-necklace',
      destination: '/product/imperial-diamond-gold-choker',
    },
    {
      source: '/collections',
      destination: '/products',
    },
    {
      source: '/collection',
      destination: '/products',
    },
  ];

  legacyAliases.forEach((alias) => {
    const redirectHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirecting to ${alias.destination} | Aurix</title>
  <meta http-equiv="refresh" content="0; url=${alias.destination}">
  <link rel="canonical" href="${SITE_URL}${alias.destination}">
  <meta name="robots" content="noindex, follow">
  <script>window.location.replace("${alias.destination}");</script>
</head>
<body style="background:#050505;color:#fff;font-family:sans-serif;padding:2rem;text-align:center;">
  <p>Redirecting to <a href="${alias.destination}" style="color:#D4AF37;">${alias.destination}</a>...</p>
</body>
</html>`;

    const aliasDir = path.join(distDir, alias.source.replace(/^\//, ''));
    fs.mkdirSync(aliasDir, { recursive: true });
    fs.writeFileSync(path.join(aliasDir, 'index.html'), redirectHtml, 'utf8');
    fs.writeFileSync(path.join(distDir, `${alias.source.replace(/^\//, '')}.html`), redirectHtml, 'utf8');
    console.log(`✓ ${alias.source.padEnd(38)} : Permanent Redirect -> ${alias.destination}`);
  });

  // 404 fallback page
  fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf8');

  console.log('Successfully generated static SEO pages with unique, indexable body content for all pages!');
}

generatePages();
