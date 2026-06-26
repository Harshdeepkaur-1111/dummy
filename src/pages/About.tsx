
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { team } from "../data";

export function About() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen">
      <Helmet>
        <title>About Aurix - Premium Gold Jewelry</title>
        <link rel="canonical" href="https://aurix1121gold.netlify.app/about" />
        <meta name="description" content="Learn about Aurix, a trusted brand offering premium gold jewelry and accessories. Discover our passion for quality, craftsmanship, and timeless elegance." />
      </Helmet>
      {/* Page Header */}
      <div className="bg-[#111] py-24 px-4 text-center border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-6">Our Story</div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">About Aurix - Premium Gold Jewelry</h1>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto"></div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto text-white/70 font-light leading-relaxed space-y-16 text-sm md:text-base">
          <p className="text-lg md:text-2xl text-white font-serif leading-relaxed text-center italic max-w-2xl mx-auto border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-10">
            "Aurix is an ethical gold jewelry brand dedicated to creating timeless jewelry that combines artisanal gold jewelry crafting with modern elegance."
          </p>
          
          <div className="text-center max-w-2xl mx-auto pt-8">
            <p className="mb-6">
              Founded in 2023, Aurix has grown into a trusted destination for customers seeking high-quality gold accessories. Every piece is carefully designed and crafted to meet the highest standards of quality, focusing heavily on sustainable gold sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#111] p-12 border border-white/10">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4">Our Mission</div>
              <p className="text-sm">To provide beautifully crafted gold accessories that inspire confidence, elegance, and individuality.</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4">Our Vision</div>
              <p className="text-sm">To become a globally recognized jewelry brand known for innovation, quality, and customer satisfaction.</p>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl text-white mb-4">Our Core Values</h2>
              <div className="w-8 h-px bg-[#D4AF37] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Quality Gold", desc: "We use only premium materials and expert gold craftsmanship." },
                { title: "Trust", desc: "Transparency and customer satisfaction are at the heart of our gold business." },
                { title: "Innovation", desc: "We continuously create fresh and modern gold jewelry designs." },
                { title: "Sustainability", desc: "We strive for responsible gold sourcing and ethical business practices." }
              ].map((value, idx) => (
                <div key={idx} className="border border-white/10 p-8 hover:bg-white/5 transition-colors bg-[#111]">
                  <div className="text-[#D4AF37] font-mono text-[10px] mb-4">0{idx + 1}</div>
                  <h3 className="font-serif text-lg text-white mb-3">{value.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-24">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl text-white mb-4">Meet Our Artisan Team</h2>
              <div className="w-8 h-px bg-[#D4AF37] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {team.map((member, idx) => (
                <div key={idx} className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 bg-[#111] rounded-full mb-6 overflow-hidden border border-[#D4AF37]/20 p-2">
                    <img 
                      src={member.image}
                      alt={member.name}
                      width="128"
                      height="128"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-serif text-base text-white mb-2">{member.name}</h3>
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
