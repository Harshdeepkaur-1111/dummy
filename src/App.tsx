import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import { CartProvider } from "./contexts/CartContext";
import { HelmetProvider } from "react-helmet-async";

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

                <Route
                  path="/blog"
                  element={<Blog />}
                />

                <Route
                  path="/contact"
                  element={<Contact />}
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
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}