import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import { CartProvider } from "./contexts/CartContext";
import { HelmetProvider, Helmet } from "react-helmet-async";

/* =========================================================
   LAZY PAGES
   ========================================================= */

const Home = lazy(() => import("./pages/Home"));

const About = lazy(() =>
  import("./pages/About").then((module) => ({
    default: module.About,
  }))
);

const Products = lazy(() =>
  import("./pages/Products").then((module) => ({
    default: module.Products,
  }))
);

const Blog = lazy(() =>
  import("./pages/Blog").then((module) => ({
    default: module.Blog,
  }))
);

const Contact = lazy(() =>
  import("./pages/Contact").then((module) => ({
    default: module.Contact,
  }))
);

const Privacy = lazy(() =>
  import("./pages/Privacy").then((module) => ({
    default: module.Privacy,
  }))
);

const Terms = lazy(() =>
  import("./pages/Terms").then((module) => ({
    default: module.Terms,
  }))
);

const ShippingReturns = lazy(() =>
  import("./pages/ShippingReturns").then((module) => ({
    default: module.ShippingReturns,
  }))
);

const ProductDetail = lazy(() =>
  import("./pages/ProductDetail").then((module) => ({
    default: module.ProductDetail,
  }))
);

const Collections = lazy(() =>
  import("./pages/Collections").then((module) => ({
    default: module.Collections,
  }))
);

const CartPage = lazy(() =>
  import("./pages/CartPage").then((module) => ({
    default: module.CartPage,
  }))
);

const CheckoutPage = lazy(() =>
  import("./pages/CheckoutPage").then((module) => ({
    default: module.CheckoutPage,
  }))
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage").then((module) => ({
    default: module.LoginPage,
  }))
);

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

                <Route
                  path="/collections"
                  element={<Collections />}
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
      </CartProvider>
    </HelmetProvider>
  );
}