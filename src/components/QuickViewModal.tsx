import React from "react";
import { X, ShieldCheck, ShoppingBag, Sparkles, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export interface QuickViewProduct {
  id: number;
  name: string;
  category: string;
  purity: string;
  weight: string;
  price: string;
  image: string;
  desc?: string;
}

interface QuickViewModalProps {
  product: QuickViewProduct | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart, setIsCartOpen } = useCart();
  const [added, setAdded] = React.useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setIsCartOpen(true);
    }, 600);
  };

  const getSlug = () => {
    return product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0d0d0d] border border-white/10 rounded-none shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white hover:bg-white/10 transition rounded-full"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Showcase */}
          <div className="relative bg-[#050505] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[#D4AF37] text-[10px] tracking-widest uppercase">
              <Sparkles size={12} />
              <span>BIS 916 Certified</span>
            </div>
            <img
              src={product.image}
              alt={`${product.name} - Aurix 22K Gold`}
              className="max-h-[320px] w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Details & Actions */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2 font-medium">
                {product.category} · {product.purity}
              </div>
              <h2 id="quick-view-title" className="font-serif text-2xl sm:text-3xl text-white italic mb-3">
                {product.name}
              </h2>
              <div className="font-mono text-2xl text-[#E5C158] font-semibold mb-6">
                {product.price}
              </div>

              {/* Specifications Matrix */}
              <div className="space-y-2.5 py-4 border-y border-white/10 text-xs mb-6">
                <div className="flex justify-between">
                  <span className="text-white/60">Purity Standard</span>
                  <span className="font-medium text-white">22K Gold (91.6% Pure Gold)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Gross Weight</span>
                  <span className="font-mono text-white">{product.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Hallmark Certification</span>
                  <span className="font-medium text-[#E5C158] flex items-center gap-1">
                    <ShieldCheck size={14} /> Official BIS HUID Laser
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Delivery & Insurance</span>
                  <span className="font-medium text-white">100% Insured Express Shipping</span>
                </div>
              </div>

              <p className="text-white/70 text-xs leading-relaxed mb-6 font-light">
                {product.desc ||
                  "Handcrafted with precision by master Indian artisans. Finished with a high-polish 22-karat luster and delivered in tamper-proof signature luxury vault packaging."}
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleAdd}
                className="w-full min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-6 py-3.5 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white transition"
              >
                {added ? (
                  <>
                    <Check size={16} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>

              <Link
                to={`/product/${getSlug()}`}
                onClick={onClose}
                className="w-full min-h-[44px] border border-white/20 text-white/90 hover:text-white hover:border-[#D4AF37] px-6 py-2.5 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition"
              >
                View Complete Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
