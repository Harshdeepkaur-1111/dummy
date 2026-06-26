
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in the required fields (Name, Email, Message).");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen pb-24">
      <Helmet>
        <title>Contact Aurix - Get in Touch With Our Jewelry Experts</title>
        <link rel="canonical" href="https://aurix1121gold.netlify.app/contact" />
        <meta name="description" content="Contact Aurix for inquiries about gold jewelry, orders, support, and product information. We're here to help with all your jewelry needs." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Aurix",
              "url": "https://aurix1121gold.netlify.app/contact",
              "description": "Contact Aurix for customer support, product inquiries, and assistance with your gold jewelry purchases.",
              "mainEntity": {
                "@type": "Organization",
                "name": "Aurix",
                "telephone": "+91-9034196429",
                "email": "tejinders791@gmail.com"
              }
            }
          `}
        </script>
      </Helmet>
      {/* Page Header */}
      <div className="bg-[#111] py-24 px-4 text-center border-b border-white/10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">Contact Aurix | Get in Touch With Our Jewelry Experts</h1>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto"></div>
          <p className="mt-8 text-white/70 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            We would love to hear from you. Reach out to us for any inquiries about gold jewelry, orders, support, and product information. We're here to help with all your jewelry needs.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-white mb-12">Gold Jewelry Contact Details</h2>
            
            <div className="space-y-10">
              <div className="border-l border-[#D4AF37]/30 pl-6 relative">
                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <h3 className="text-[#D4AF37] mb-2 uppercase tracking-widest text-[10px]">Address</h3>
                <p className="text-white/70 font-light leading-relaxed text-sm">
                  Yamunanagar,<br />
                  Haryana, India - 135001
                </p>
              </div>

              <div className="border-l border-[#D4AF37]/30 pl-6 relative">
                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <h3 className="text-[#D4AF37] mb-2 uppercase tracking-widest text-[10px]">Phone</h3>
                <p className="text-white/70 font-light text-sm tracking-widest">+91 9034196429<br /><span className="text-[11px] text-[#D4AF37]">(Contact: Harshdeep)</span></p>
              </div>

              <div className="border-l border-[#D4AF37]/30 pl-6 relative">
                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <h3 className="text-[#D4AF37] mb-2 uppercase tracking-widest text-[10px]">Email</h3>
                <p className="text-white/70 font-light text-sm tracking-widest">tejinders791@gmail.com</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <h3 className="text-white mb-6 font-serif italic text-xl">Working Hours</h3>
              <ul className="text-white/70 font-light space-y-4 text-sm">
                <li className="flex justify-between max-w-[300px] border-b border-white/5 pb-2">
                  <span>Mon - Sat</span>
                  <span className="font-mono text-xs text-white/80">10:00 AM – 7:00 PM</span>
                </li>
                <li className="flex justify-between max-w-[300px]">
                  <span>Sunday</span>
                  <span className="font-mono text-xs text-[#D4AF37]">CLOSED</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111] p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <h2 className="font-serif text-2xl text-white mb-2 italic">Send a Message</h2>
            <p className="text-white/70 text-[10px] uppercase tracking-widest mb-10">We will respond within 24 hours.</p>

            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center py-16 text-center"
               >
                 <div className="w-16 h-16 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-6">
                   <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                 </div>
                 <h3 className="font-serif text-2xl text-white mb-2 italic">Message Sent</h3>
                 <p className="text-white/70 text-sm font-light">Thank you for reaching out. We will get back to you shortly.</p>
               </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                      placeholder="Enter your number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                    placeholder="Inquiry reason"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3">Message *</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors resize-none rounded-none placeholder-white/20 text-sm"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[11px] hover:bg-[#c4a132] transition-colors mt-6"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
