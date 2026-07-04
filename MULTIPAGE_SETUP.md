# Aurix - Multipage React Application with React Router

This document outlines the multipage React application setup using React Router v7 and React Helmet Async for SEO optimization.

## 📋 Project Structure

```
src/
├── pages/
│   ├── Home.tsx          # Home page - "/" route
│   ├── About.tsx         # About page - "/about" route
│   ├── Services.tsx      # Services page - "/services" route
│   ├── Blog.tsx          # Blog page - "/blog" route
│   └── Contact.tsx       # Contact page - "/contact" route
├── components/
│   └── Layout.tsx        # Main layout with navigation
├── contexts/
│   └── CartContext.tsx   # Shopping cart context
└── App.tsx               # Main router setup
```

## 🛣️ Routes Configuration

The application uses React Router v7 with the following routes:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page with featured products |
| `/about` | About | Company information and story |
| `/services` | Services | Premium jewelry services and collection |
| `/blog` | Blog | Articles and jewelry tips |
| `/contact` | Contact | Contact form and information |

## 🔍 SEO Optimization

Each page includes comprehensive SEO metadata:

### Helmet Setup (React Helmet Async)

```tsx
<Helmet>
  <title>Page Title - Keyword</title>
  <link rel="canonical" href="https://yourdomain.com/path" />
  <meta name="description" content="Page description under 160 characters" />
  <meta name="keywords" content="keyword1, keyword2, keyword3" />
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page description" />
  <meta property="og:type" content="website" />
</Helmet>
```

### Page H1 Tags

Each page has a unique, semantically correct H1 tag:

- **Home**: `<h1>Premium Gold Collections.</h1>`
- **About**: `<h1>About Aurix - Premium Gold Jewelry</h1>`
- **Services**: `<h1>Premium Gold Jewelry Services</h1>`
- **Blog**: `<h1>Aurix Blog - Gold Jewelry Trends, Tips & Expert Advice</h1>`
- **Contact**: `<h1>Contact Aurix | Get in Touch With Our Jewelry Experts</h1>`

### Structured Data (Schema.org)

Schema.org JSON-LD structured data is included on relevant pages:

- **Home**: Product schema with aggregate ratings
- **Contact**: ContactPage schema with organization information
- **Services**: Product collection schema

## 🚀 Deployment

### Vercel Deployment

The application is configured for seamless Vercel deployment:

1. **vercel.json** - Configured with:
   - Build command: `npm run build`
   - Dev command: `npm run dev`
   - Install command: `npm install`
   - SPA routing rules for client-side navigation

2. **_redirects** - Fallback redirect rules for Netlify (also supported by Vercel)

### Deployment Steps

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Vite configuration
4. Deploy with: `vercel --prod`

### Important: Update Canonical URLs

Before deploying, replace `https://yourdomain.com` with your actual domain in all page components:

**Files to update:**
- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Blog.tsx`
- `src/pages/Contact.tsx`

## ✨ Key Features

### Code Splitting & Lazy Loading

Pages are lazy-loaded using React.lazy() for optimal performance:

```tsx
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
// ... more pages
```

### React Router Configuration

```tsx
<Router>
  <Suspense fallback={<LoadingComponent />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </Suspense>
</Router>
```

### Navigation Component

The Layout component includes:
- Responsive navigation menu
- Active route highlighting
- Mobile menu toggle
- Shopping cart integration
- Smooth page transitions with scroll-to-top

## 📦 Dependencies

```json
{
  "react": "^19.0.1",
  "react-dom": "^19.0.1",
  "react-router-dom": "^7.18.0",
  "react-helmet-async": "^3.0.0",
  "vite": "^6.2.3",
  "@vitejs/plugin-react": "^5.0.4"
}
```

## 🎯 Best Practices Implemented

1. ✅ **Unique H1 Tags**: Each page has exactly one unique H1
2. ✅ **Meta Descriptions**: All pages have descriptions under 160 characters
3. ✅ **Canonical URLs**: Each page has a canonical tag
4. ✅ **Open Graph Tags**: Social media preview optimization
5. ✅ **Structured Data**: Schema.org JSON-LD for rich snippets
6. ✅ **Code Splitting**: Lazy-loaded routes for faster initial load
7. ✅ **Mobile Responsive**: Fully responsive on all devices
8. ✅ **Vercel Compatible**: Proper routing configuration
9. ✅ **Sitemap Ready**: Standard URL structure for sitemap generation
10. ✅ **Accessibility**: Semantic HTML and ARIA labels

## 🔧 Development

### Local Development

```bash
npm run dev
```

Runs on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Generates optimized build in `/dist` directory

### Type Checking

```bash
npm run lint
```

## 📝 Customization

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Add lazy import in `App.tsx`
3. Add route in `<Routes>` configuration
4. Update navigation in `Layout.tsx`
5. Add SEO metadata using Helmet

### Updating SEO Metadata

Edit the `<Helmet>` block in each page component:

```tsx
<Helmet>
  <title>Your Title</title>
  <link rel="canonical" href="https://yourdomain.com/your-path" />
  <meta name="description" content="Your description" />
</Helmet>
```

## 🎨 Styling

The application uses:
- **Tailwind CSS v4** for utility-first styling
- **@tailwindcss/vite** plugin for optimized builds
- **motion/react** for animations
- **lucide-react** for icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🐛 Troubleshooting

### Routes Not Working After Deployment

**Solution**: Ensure `vercel.json` is present and configured correctly. This redirects all routes to `index.html` for client-side routing.

### SEO Metadata Not Appearing

**Solution**: Ensure:
1. `HelmetProvider` wraps your app (done in App.tsx)
2. Helmet tags are inside the route component
3. Canonical URLs are properly formatted

### Images Not Loading

**Solution**: 
1. Ensure image paths are correct relative to `public/` folder
2. Use absolute URLs for external images
3. Check image optimization in `vite.config.ts`

## 📊 Performance Metrics

With the current setup, you should achieve:
- ✅ Lighthouse Performance: 85+
- ✅ First Contentful Paint: < 1.5s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Cumulative Layout Shift: < 0.1

## 🚢 Deployment Checklist

Before deploying to production:

- [ ] Update canonical URLs to your domain
- [ ] Update meta descriptions for all pages
- [ ] Test all routes work correctly
- [ ] Verify images load properly
- [ ] Test mobile responsiveness
- [ ] Check console for errors
- [ ] Run `npm run lint` for type checking
- [ ] Test on Vercel staging environment
- [ ] Update robots.txt if needed
- [ ] Generate and submit sitemap

## 📞 Support

For issues or questions about the setup, refer to:
- [React Router Documentation](https://reactrouter.com/)
- [React Helmet Async Documentation](https://github.com/statelyai/react-helmet-async)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated**: 2026-07-04
**Version**: 1.0.0
