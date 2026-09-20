const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.VITE_SITE_URL || 'https://aurix-gold.vercel.app';

const pages = [
  {
    path: '/',
    title: 'Aurix | BIS 916 Hallmarked 22K Gold Jewellery Online India',
    description: 'Buy certified 22K BIS 916 hallmarked gold necklaces, rings, earrings & bridal jewellery at Aurix. 100% insured delivery across India, lifetime buyback & EMI.',
    canonical: `${SITE_URL}/`,
  },
  {
    path: '/products',
    title: '22K Gold Jewellery Collection | Necklaces, Rings & Earrings | Aurix',
    description: "Explore Aurix's certified 22K BIS 916 gold jewellery. Shop handcrafted gold necklaces, bridal rings, earrings and bangles with insured delivery across India.",
    canonical: `${SITE_URL}/products`,
  },
  {
    path: '/about',
    title: 'About Aurix | Handcrafted 22K BIS 916 Gold Jewellery Heritage',
    description: "Discover Aurix: India's luxury brand for certified 22K BIS 916 hallmarked gold jewellery. Learn about our heritage, master craft and lifelong purity promise.",
    canonical: `${SITE_URL}/about`,
  },
  {
    path: '/blog',
    title: 'Aurix Journal | 22K Gold Jewellery Trends, Styling & Purity Guides',
    description: 'Explore Aurix Journal for expert 22K gold jewellery guides, styling tips, BIS 916 purity advice, latest market trends and wedding jewellery inspiration.',
    canonical: `${SITE_URL}/blog`,
  },
  {
    path: '/contact',
    title: 'Contact Aurix | 22K Gold Jewellery Enquiries & Customer Support',
    description: 'Get in touch with Aurix for custom gold jewellery enquiries, 22K bridal designs, order tracking & support. Call +91 9034196429 or visit our boutique in India.',
    canonical: `${SITE_URL}/contact`,
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
    // Verify description length constraint: 150 - 160 chars
    const descLen = page.description.length;
    if (descLen < 150 || descLen > 160) {
      console.warn(`Warning: ${page.path} description length is ${descLen} (expected 150-160)`);
    } else {
      console.log(`✓ ${page.path.padEnd(18)} : ${descLen} chars | Canonical: ${page.canonical}`);
    }

    let modifiedHtml = baseHtml;

    // 1. Update Title
    modifiedHtml = modifiedHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`);

    // 2. Update Meta Description
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']>/i,
      `<meta name="description" content="${page.description}">`
    );

    // 3. Update Canonical Tag
    modifiedHtml = modifiedHtml.replace(
      /<link\s+rel=["']canonical["'][\s\S]*?>/i,
      `<link rel="canonical" data-rh="true" href="${page.canonical}">`
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

  console.log('Successfully generated static SEO pages with custom canonical tags and 150-160 char descriptions!');
}

generatePages();
