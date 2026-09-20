import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

faq_start_pattern = r'\{\/\* ===================================================\s*FAQ\s*=================================================== \*\/\}\s*<section className="py-20 bg-\[#080808\] border-t border-white\/5">.*?<\/section>'

new_faq_block = """{/* ===================================================
              FAQ & COMMUNITY
          =================================================== */}
          <section className="py-20 bg-[#080808] border-t border-white/5">
            <div className="max-w-4xl mx-auto px-5 lg:px-10">
              <div className="text-center mb-10">
                <p className="text-[8px] uppercase tracking-[0.5em] text-[#D4AF37] mb-3">
                  FAQ
                </p>
                <h2 className="font-serif text-4xl italic">
                  Frequently Asked Questions
                </h2>
                <p className="text-white/60 text-sm mt-4 max-w-xl mx-auto">
                  Everything You Need to Know<br/>
                  Clear, transparent answers about our 22K gold purity, authentic craftsmanship, sizing recommendations, secure shipping, and returns.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-10">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <input
                    type="text"
                    placeholder="Search frequently asked questions (e.g. shipping, returns)..."
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 text-white text-sm py-4 pl-12 pr-4 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {faqCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFaqCategory(cat)}
                    className={`px-5 py-2 text-[10px] uppercase tracking-[0.15em] transition border ${
                      faqCategory === cat
                        ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                        : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-white/6 p-5 hover:border-white/10 transition"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex justify-between items-start text-left gap-4"
                        aria-expanded={openFaq === idx}
                      >
                        <div className="flex gap-4 items-start">
                          <span className="text-[#D4AF37] text-xs font-serif italic mt-0.5">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-medium text-white text-sm sm:text-base">
                            {item.q}
                          </span>
                        </div>
                        <span className="mt-1">
                          <ArrowRight
                            size={16}
                            className={`text-[#D4AF37] transition-transform duration-300 ${
                              openFaq === idx ? "rotate-90" : "rotate-0"
                            }`}
                          />
                        </span>
                      </button>
                      <div
                        className={`text-white/60 text-sm overflow-hidden transition-all duration-300 ${
                          openFaq === idx ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-8">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-white/50 text-sm">
                    No questions found matching your search.
                  </div>
                )}
              </div>

              {/* Contact Support Block */}
              <div className="mt-20 border border-white/10 bg-[#050505] p-8 sm:p-12 text-center">
                <h3 className="font-serif text-2xl mb-3 text-white">Still have questions?</h3>
                <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
                  Can't find what you're looking for? Our dedicated customer care team is here to assist you with any inquiries about our collections.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition">
                  Contact Support
                </a>
                <p className="text-white/40 text-xs mt-4">
                  +91 7988227604
                </p>
              </div>

              {/* Newsletter Block */}
              <div className="mt-12 bg-gradient-to-br from-[#101010] to-[#050505] border border-white/10 p-8 sm:p-12 text-center">
                <div className="w-12 h-12 mx-auto border border-[#D4AF37]/30 rotate-45 flex items-center justify-center mb-8">
                  <Mail size={18} className="text-[#D4AF37] -rotate-45" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl italic mb-3 text-white">Join Our Community</h3>
                <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
                  Stay Updated on New Gold Jewellery Trends. Receive exclusive offers, styling tips, and early access to new collections.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#D4AF37] text-black px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </section>"""

new_content = re.sub(faq_start_pattern, new_faq_block, content, flags=re.DOTALL)
with open("src/pages/Home.tsx", "w") as f:
    f.write(new_content)
