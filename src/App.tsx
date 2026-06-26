/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CartProvider } from "./contexts/CartContext";
import { HelmetProvider } from "react-helmet-async";




const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Products = lazy(() => import("./pages/Products").then(m => ({ default: m.Products })));
const Blog = lazy(() => import("./pages/Blog").then(m => ({ default: m.Blog })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));

export default function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <Suspense fallback={<div className="min-h-screen bg-[#050505] text-white flex items-center justify-center font-serif italic text-2xl">Loading Aurix...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}
