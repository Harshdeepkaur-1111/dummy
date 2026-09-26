const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://aurix-gold.vercel.app';

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
    path: '/login',
    title: 'Client Login & VIP Member Access | Aurix 22K Gold Jewellery',
    description: 'Sign in to your Aurix account to track gold orders, manage customized jewellery requests, view purity certificates and access VIP member benefits.',
    canonical: `${SITE_URL}/login`,
  },
  {
    path: '/cart',
    title: 'Shopping Cart | Aurix - Certified 22K Gold Jewellery India',
    description: 'Review your chosen handcrafted 22K gold necklaces, bangles, rings and earrings with 100% insured doorstep shipping and transparent billing.',
    canonical: `${SITE_URL}/cart`,
  },
  {
    path: '/checkout',
    title: 'Secure Checkout | Aurix - Insured 22K Gold Delivery India',
    description: 'Complete your purchase of certified 22K BIS 916 gold jewellery. Enjoy 100% insured delivery across India, safe payment options & lifetime buyback.',
    canonical: `${SITE_URL}/checkout`,
  },
  {
    path: '/product/gold-ring',
    title: 'Aurix Royal Gold Ring | Certified 22K Gold Jewellery | Aurix',
    description: 'Buy Aurix Royal Gold Ring in pure 22K gold. Certified BIS 916 hallmark, lifetime buyback and 100% insured delivery across India.',
    canonical: `${SITE_URL}/product/gold-ring`,
  },
  {
    path: '/product/diamond-necklace',
    title: 'Imperial Diamond Gold Choker | Certified 22K Gold Jewellery | Aurix',
    description: 'Buy Imperial Diamond Gold Choker crafted in pure 22K gold. Certified BIS 916 hallmark, 100% insured delivery and lifetime buyback across India.',
    canonical: `${SITE_URL}/product/diamond-necklace`,
  },
  {
    path: '/product/classic-gold-necklace',
    title: 'Classic Gold Necklace | Certified 22K Gold Jewellery | Aurix',
    description: 'Buy Classic Gold Necklace in pure 22K gold. Certified BIS 916 hallmark, lifetime buyback and 100% insured delivery across India.',
    canonical: `${SITE_URL}/product/classic-gold-necklace`,
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
  {
    path: '/shipping-returns',
    title: 'Shipping & Returns Policy | Aurix - 22K Gold Jewellery India',
    description: "Explore Aurix's shipping and return policies featuring 100% insured delivery across India, 14-day return privilege and lifetime 22K gold buyback guarantee.",
    canonical: `${SITE_URL}/shipping-returns`,
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
    // First, strip all existing canonical tags in document
    modifiedHtml = modifiedHtml.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '');
    // Next, insert the single authoritative canonical tag right after meta description
    modifiedHtml = modifiedHtml.replace(
      /(<meta\s+name=["']description["'][\s\S]*?>)/i,
      `$1\n    <link rel="canonical" href="${page.canonical}">`
    );

    // 4. Update OpenGraph Tags
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

    // 5. Update Twitter Cards
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']>/i,
      `<meta name="twitter:title" content="${page.title}">`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']>/i,
      `<meta name="twitter:description" content="${page.description}">`
    );

    // Safety check: ensure count of canonical tags is exactly 1
    const canonicalMatches = modifiedHtml.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi);
    const count = canonicalMatches ? canonicalMatches.length : 0;
    if (count !== 1) {
      console.warn(`Warning: Page ${page.path} has ${count} canonical tags (expected 1).`);
    } else {
      console.log(`✓ ${page.path.padEnd(28)} : Exactly 1 canonical tag -> ${page.canonical}`);
    }

    if (page.path === '/') {
      // Overwrite dist/index.html with verified meta
      fs.writeFileSync(indexHtmlPath, modifiedHtml, 'utf8');
    } else {
      const pageDir = path.join(distDir, page.path.replace(/^\//, ''));
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(path.join(pageDir, 'index.html'), modifiedHtml, 'utf8');

      // Also create clean html file e.g. dist/products.html
      const cleanHtmlFile = path.join(distDir, `${page.path.replace(/^\//, '')}.html`);
      fs.writeFileSync(cleanHtmlFile, modifiedHtml, 'utf8');
    }
  });

  console.log('Successfully generated static SEO pages with strictly 1 canonical tag each!');
}

generatePages();
