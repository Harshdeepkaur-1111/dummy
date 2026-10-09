import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { CartProvider } from "./contexts/CartContext";
import { HelmetProvider, Helmet } from "react-helmet-async";

/* =========================================================
   ROBUST LAZY LOADER WITH RETRY
   Handles transient network hiccups or chunk fetch failures
   ========================================================= */

function lazyWithRetry<T extends Record<string, any>>(
  importer: () => Promise<T>,
  exportName?: string
) {
  return lazy(async () => {
    try {
      const module = await importer();
      const Component = exportName
        ? (module[exportName] || module.default)
        : (module.default || (exportName ? module[exportName] : Object.values(module)[0]));
      return { default: Component };
    } catch (error) {
      console.warn(`Dynamic module load failed, retrying...`, error);
      // Wait 350ms and retry once
      try {
        await new Promise((res) => setTimeout(res, 350));
        const module = await importer();
        const Component = exportName
          ? (module[exportName] || module.default)
          : (module.default || (exportName ? module[exportName] : Object.values(module)[0]));
        return { default: Component };
      } catch (retryError) {
        console.error(`Dynamic module load failed after retry:`, retryError);
        throw retryError;
      }
    }
  });
}

/* =========================================================
   LAZY PAGES
   ========================================================= */

const Home = lazyWithRetry(() => import("./pages/Home"));
const About = lazyWithRetry(() => import("./pages/About"), "About");
const Products = lazyWithRetry(() => import("./pages/Products"), "Products");
const Blog = lazyWithRetry(() => import("./pages/Blog"), "Blog");
const Contact = lazyWithRetry(() => import("./pages/Contact"), "Contact");
const Privacy = lazyWithRetry(() => import("./pages/Privacy"), "Privacy");
const Terms = lazyWithRetry(() => import("./pages/Terms"), "Terms");
const ShippingReturns = lazyWithRetry(() => import("./pages/ShippingReturns"), "ShippingReturns");
const ProductDetail = lazyWithRetry(() => import("./pages/ProductDetail"), "ProductDetail");
const CartPage = lazyWithRetry(() => import("./pages/CartPage"), "CartPage");
const CheckoutPage = lazyWithRetry(() => import("./pages/CheckoutPage"), "CheckoutPage");
const LoginPage = lazyWithRetry(() => import("./pages/LoginPage"), "LoginPage");

/* =========================================================
   LOADING
   ========================================================= */

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-inner">
        <span className="page-loader-logo">AURIX</span>
        <span className="page-loader-line" />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#050505] text-white">
      <Helmet>
        <title>Page Not Found | Aurix</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <p className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4">404 Error</p>
      <h1 className="font-serif text-4xl sm:text-5xl text-white mb-6">Page Not Found</h1>
      <p className="text-white/60 text-sm max-w-md mb-8">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="bg-[#D4AF37] text-black px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition"
        >
          Return Home
        </Link>
        <Link
          to="/products"
          className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition"
        >
          View 22K Collection
        </Link>
      </div>
    </div>
  );
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <ErrorBoundary>
          <Router>
            <Suspense fallback={<PageLoader />}>
              <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route
                  path="/about"
                  element={<About />}
                />

                <Route
                  path="/products"
                  element={<Products />}
                />

                {/* Redirect legacy /services to /products for SEO */}
                <Route
                  path="/services"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/services/*"
                  element={<Navigate to="/products" replace />}
                />

                <Route
                  path="/blog"
                  element={<Blog />}
                />

                <Route
                  path="/contact"
                  element={<Contact />}
                />

                {/* Redirect legacy and collection paths to /products for SEO and unified 22K catalogue */}
                <Route
                  path="/collections"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/collections/*"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/collection"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/collection/*"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/product"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/service"
                  element={<Navigate to="/products" replace />}
                />
                <Route
                  path="/service/*"
                  element={<Navigate to="/products" replace />}
                />

                <Route
                  path="/product/:slug"
                  element={<ProductDetail />}
                />

                <Route
                  path="/cart"
                  element={<CartPage />}
                />

                <Route
                  path="/checkout"
                  element={<CheckoutPage />}
                />

                <Route
                  path="/login"
                  element={<LoginPage />}
                />

                <Route
                  path="/privacy"
                  element={<Privacy />}
                />

                <Route
                  path="/terms"
                  element={<Terms />}
                />

                <Route
                  path="/shipping-returns"
                  element={<ShippingReturns />}
                />

                {/* 404 Route with noindex */}
                <Route
                  path="*"
                  element={<NotFound />}
                />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </CartProvider>
  </HelmetProvider>
);
}