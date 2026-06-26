
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { articles } from "../data";

export function Blog() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen pb-24">
      <Helmet>
        <title>Aurix Blog - Gold Jewelry Trends</title>
        <link rel="canonical" href="https://aurix1121gold.netlify.app/blog" />
        <meta name="description" content="Explore the Aurix Blog for the latest gold jewelry trends, styling tips, care guides, and expert advice on luxury gold accessories." />
      </Helmet>
      {/* Page Header */}
      <div className="bg-[#111] py-24 px-4 text-center border-b border-white/10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">Aurix Blog - Gold Jewelry Trends</h1>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto"></div>
          <p className="mt-8 text-white/70 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Read our gold jewelry styling guide for insights, learn how to clean 22k gold, and explore timeless gold jewelry trends from the world of fine gold jewelry.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {articles.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="border-b border-white/10 pb-16 last:border-0 last:pb-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-12 items-center">
                <div className="md:col-span-2 mb-8 md:mb-0">
                  <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-black">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      width="800"
                      height="600"
                      loading={idx === 0 ? "eager" : "lazy"}
                      fetchPriority={idx === 0 ? "high" : "auto"}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <span className="text-[#D4AF37] text-[10px] font-medium tracking-[0.2em] uppercase mb-4 block">
                    {article.date}
                  </span>
                  <h2 
                    className="font-serif text-2xl md:text-3xl text-white mb-4 hover:text-[#D4AF37] transition-colors cursor-pointer italic"
                    onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                  >
                    {article.title}
                  </h2>
                  <p className="text-white/70 font-light leading-relaxed mb-8 text-sm">
                    {article.excerpt}
                  </p>
                  
                  {expandedArticle === article.id ? (
                    <div className="bg-[#111] border border-white/10 p-6 mb-8 relative">
                      <button 
                        onClick={() => setExpandedArticle(null)}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                        aria-label="Close article"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <h3 className="text-[#D4AF37] font-serif italic mb-3">Full Article Content</h3>
                      <div className="space-y-4 text-white/70 text-sm font-light leading-relaxed">
                        <p>This is a simulated preview of the full article. In a fully integrated application, this space would expand to reveal the entire piece retrieved from a Content Management System (CMS).</p>
                        <p>Thank you for exploring the Aurix Journal. Explore our collection to see these styling principles put to use in our elegant, timeless pieces.</p>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setExpandedArticle(article.id)}
                      className="flex items-center text-white/80 hover:text-[#D4AF37] transition-colors text-[10px] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37]"
                      aria-label="Read full article"
                    >
                      Read Full Article <ArrowRight className="ml-2 w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
