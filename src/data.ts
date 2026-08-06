import { Star, ShieldCheck, Diamond, Truck } from "lucide-react";
import { classicNecklace, diamondRing, pearlEarrings, modernBracelet, signaturePendant, heritageBangle, imperialDiamondChoker, sovereignSignetRing } from "./assets/images";

export const categories = [
  {
    title: "Gold Necklaces",
    description: "Elegant designs crafted for everyday wear and special occasions.",
    image: "/images/336052524_594628079068489_8991184652865232177_n.avif",
  },
  {
    title: "Gold Rings",
    description: "Stylish and luxurious rings for men and women.",
    image:"/images/LJ-R00631YG_1_0c039dbf-f4b9-4693-98b8-25f1b5e3f4d5.avif",
  },
  {
    title: "Gold Earrings",
    description: "Classic and contemporary earrings designed with precision.",
    image: "/images/1731666009378_2.avif",
  },
  {
    title: "Gold Bracelets",
    description: "Beautiful bracelets that add sophistication to every look.",
    image: "/images/9619e7cde469090473c070feb2005eca.avif",
  }
];

export const features = [
  { icon: Diamond, title: "Premium Quality", desc: "Made with certified 22k gold and superior craftsmanship." },
  { icon: Star, title: "Unique Designs", desc: "Exclusive collections inspired by modern fashion trends." },
  { icon: ShieldCheck, title: "Secure Shopping", desc: "Safe payments and secure online transactions for your fine jewelry." },
  { icon: Truck, title: "Insured Delivery", desc: "Quick and reliable shipping across the country for all orders." }
];

export const reviews = [
  { name: "Priya Sharma", text: "The necklace I purchased from Aurix is stunning. Excellent quality and packaging.", rating: 5 },
  { name: "Rahul Verma", text: "Beautiful craftsmanship and timely delivery. Highly recommended.", rating: 5 },
  { name: "Ananya Gupta", text: "The earrings are elegant and lightweight. Perfect for daily wear.", rating: 5 }
];

export const team = [
  { name: "Sophia Bennett", role: "Founder & CEO", image: "/images/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.avif" },
  { name: "Daniel Carter", role: "Creative Director", image: "/images/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.avif" },
  { name: "Emma Wilson", role: "Head of Product Design", image: "/images/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.avif" },
  { name: "Michael Brooks", role: "Customer Exp Manager", image: "/images/a312eedff6062cb35225cc1b12e68c4d.avif" }
];

export const articles = [
  {
    id: 1,
    title: "How to Choose the Perfect Gold Accessory",
    excerpt: "Gold accessories can complement any outfit. When choosing jewelry, consider your style, occasion, and comfort. Necklaces and bracelets are excellent everyday options, while statement rings and earrings are ideal for special events.",
    date: "March 15, 2026",
    image: "/images/il_570xN.6784115192_tg5l.avif",
  },
  {
    id: 2,
    title: "Gold Jewelry Trends for 2026",
    excerpt: "This year, minimalist designs, layered necklaces, and personalized pendants are dominating fashion trends. Customers are increasingly choosing elegant and versatile pieces.",
    date: "April 10, 2026",
    image: "/images/Punk-Simple-Style-Square-Customization-Laser-Engraving-304-Stainless-Steel-Polishing-Men-S-Men-Pendant-Necklaces-6.avif",
  },
  {
    id: 3,
    title: "Tips for Maintaining Gold Accessories",
    excerpt: "Store jewelry separately. Avoid exposure to chemicals. Clean regularly using a soft cloth. Remove jewelry before swimming.",
    date: "May 5, 2026",
    image: "/images/il_570xN.6784115192_tg5l.avif",
  },
  {
    id: 4,
    title: "Why Gold Accessories Never Go Out of Style",
    excerpt: "Gold has symbolized luxury and sophistication for centuries. Its timeless appeal makes it a favorite choice for fashion enthusiasts worldwide.",
    date: "June 1, 2026",
    image: "/images/354-T26136.avif",
  }
];

export const products = [
  {
    id: 1,
    name: "Classic Gold Necklace",
    price: "₹24,999",
    material: "22K Gold",
    weight: "8g",
    desc: "Elegant gold necklace suitable for weddings and celebrations.",
    image: classicNecklace,
  },
  {
    id: 2,
    name: "Aurix Royal Gold Ring",
    price: "₹12,499",
    material: "18K Gold",
    weight: "4g",
    desc: "Luxury gold ring with a timeless design.",
    image: diamondRing,
  },
  {
    id: 3,
    name: "Pearl Drop Gold Earrings",
    price: "₹15,999",
    material: "22K Gold",
    weight: "5g",
    desc: "Sophisticated gold earrings featuring pearl accents.",
    image: pearlEarrings,
  },
  {
    id: 4,
    name: "Modern Gold Charm Bracelet",
    price: "₹18,999",
    material: "22K Gold",
    weight: "6g",
    desc: "Modern gold bracelet designed for daily elegance.",
    image: modernBracelet,
  },
  {
    id: 5,
    name: "Signature Gold Pendant",
    price: "₹10,999",
    material: "18K Gold",
    weight: "3g",
    desc: "Minimalist gold pendant for a refined look.",
    image: signaturePendant,
  },
  {
    id: 6,
    name: "Heritage Gold Bangle",
    price: "₹29,999",
    material: "22K Gold",
    weight: "10g",
    desc: "Traditional gold craftsmanship with contemporary styling.",
    image: heritageBangle,
  },
  {
    id: 7,
    name: "Imperial Diamond Gold Choker",
    price: "₹1,85,999",
    material: "22K Gold",
    weight: "25g",
    desc: "An opulent gold piece reserved for royal celebrations and grand events.",
    image: imperialDiamondChoker,
  },
  {
    id: 8,
    name: "Sovereign Gold Signet Ring",
    price: "₹45,999",
    material: "22K Solid Gold",
    weight: "14g",
    desc: "A bold statement gold ring that speaks volumes of the wearer's legacy.",
    image: sovereignSignetRing,
  }
];
