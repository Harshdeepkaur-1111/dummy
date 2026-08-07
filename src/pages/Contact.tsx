import React, { Suspense, useState } from "react";
import { Helmet } from "react-helmet-async";
import LazyMotion from "../components/LazyMotion";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email and Message.");
      return;
    }

    // Demo submission
    setTimeout(() => {
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white pb-24">

        {/* =====================================================
            SEO
        ===================================================== */}

        <Helmet>

          <title>
            Contact Aurix | Gold Jewellery Support & Enquiries
          </title>

          <meta
            name="description"
            content="Contact Aurix for gold jewellery enquiries, product information, order support and customer assistance. Our team is here to help."
          />

          <meta
            name="robots"
            content="index, follow"
          />

          <link
            rel="canonical"
            href="https://aurix-gold.vercel.app/contact"
          />

          {/* Open Graph */}

          <meta
            property="og:title"
            content="Contact Aurix | Gold Jewellery Support"
          />

          <meta
            property="og:description"
            content="Get in touch with Aurix for gold jewellery enquiries, product information and customer support."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content="https://aurix-gold.vercel.app/contact"
          />

          <meta
            property="og:site_name"
            content="Aurix"
          />

          {/* Twitter */}

          <meta
            name="twitter:card"
            content="summary"
          />

          <meta
            name="twitter:title"
            content="Contact Aurix | Gold Jewellery Support"
          />

          <meta
            name="twitter:description"
            content="Contact Aurix for gold jewellery enquiries and customer support."
          />

          {/* =====================================================
              BREADCRUMB SCHEMA
          ===================================================== */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aurix-gold.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: "https://aurix-gold.vercel.app/contact",
                },
              ],
            })}
          </script>

          {/* =====================================================
              CONTACT PAGE SCHEMA
          ===================================================== */}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Aurix",
              url: "https://aurix-gold.vercel.app/contact",
              description:
                "Contact Aurix for gold jewellery enquiries, product information, order support and customer assistance.",
              mainEntity: {
                "@type": "Organization",
                name: "Aurix",
                url: "https://aurix-gold.vercel.app/",
                email: "tejinders791@gmail.com",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "tejinders791@gmail.com",
                  telephone: "+91-9034196429",
                  availableLanguage: ["English", "Hindi"],
                },
              },
            })}
          </script>

        </Helmet>


        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="bg-[#111] py-24 px-4 text-center border-b border-white/10">

          <LazyMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >

            <div className="flex items-center justify-center gap-4 mb-7">

              <div className="w-10 h-px bg-[#D4AF37]" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Aurix Support
              </span>

              <div className="w-10 h-px bg-[#D4AF37]" />

            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 italic">
              Contact Aurix
            </h1>

            <div className="w-16 h-px bg-[#D4AF37] mx-auto" />

            <p className="mt-8 text-white/70 font-light max-w-2xl mx-auto text-sm leading-relaxed">
              Have a question about our gold jewellery, products or orders?
              Get in touch with the Aurix team and we will be happy to help.
            </p>

          </LazyMotion>

        </section>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <section className="flex flex-col justify-center">

              <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">
                Gold Jewellery Contact Details
              </h2>


              <div className="space-y-10">


                {/* ADDRESS */}

                <div className="border-l border-[#D4AF37]/30 pl-6 relative">

                  <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#D4AF37] rounded-full" />

                  <h3 className="text-[#D4AF37] mb-2 uppercase tracking-widest text-[10px]">
                    Address
                  </h3>

                  <address className="not-italic text-white/70 font-light leading-relaxed text-sm">
                    Yamunanagar,
                    <br />
                    Haryana, India - 135001
                  </address>

                </div>


                {/* PHONE */}

                <div className="border-l border-[#D4AF37]/30 pl-6 relative">

                  <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#D4AF37] rounded-full" />

                  <h3 className="text-[#D4AF37] mb-2 uppercase tracking-widest text-[10px]">
                    Phone
                  </h3>

                  <a
                    href="tel:+919034196429"
                    className="text-white/70 font-light text-sm tracking-widest hover:text-[#D4AF37] transition-colors"
                  >
                    +91 9034196429
                  </a>

                </div>


                {/* EMAIL */}

                <div className="border-l border-[#D4AF37]/30 pl-6 relative">

                  <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#D4AF37] rounded-full" />

                  <h3 className="text-[#D4AF37] mb-2 uppercase tracking-widest text-[10px]">
                    Email
                  </h3>

                  <a
                    href="mailto:tejinders791@gmail.com"
                    className="text-white/70 font-light text-sm tracking-widest hover:text-[#D4AF37] transition-colors break-all"
                  >
                    tejinders791@gmail.com
                  </a>

                </div>

              </div>


              {/* =================================================
                  WORKING HOURS
              ================================================= */}

              <div className="mt-16 pt-12 border-t border-white/10">

                <h3 className="text-white mb-6 font-serif italic text-xl">
                  Working Hours
                </h3>

                <ul className="text-white/70 font-light space-y-4 text-sm">

                  <li className="flex justify-between max-w-[320px] border-b border-white/5 pb-2">
                    <span>Monday - Saturday</span>

                    <span className="font-mono text-xs text-white/80">
                      10:00 AM – 7:00 PM
                    </span>
                  </li>

                  <li className="flex justify-between max-w-[320px]">
                    <span>Sunday</span>

                    <span className="font-mono text-xs text-[#D4AF37]">
                      CLOSED
                    </span>
                  </li>

                </ul>

              </div>

            </section>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <section className="bg-[#111] p-8 md:p-12 border border-white/10 relative overflow-hidden">

              {isSubmitted ? (

                <LazyMotion
                  tag="div"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex flex-col items-center justify-center py-16 text-center min-h-[500px]"
                >

                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-6">

                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />

                  </div>

                  <h2 className="font-serif text-2xl text-white mb-3 italic">
                    Message Sent
                  </h2>

                  <p className="text-white/70 text-sm font-light max-w-sm">
                    Thank you for contacting Aurix. We will get back to you
                    shortly.
                  </p>

                </LazyMotion>

              ) : (

                <>

                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-2 italic">
                    Send a Message
                  </h2>

                  <p className="text-white/70 text-[10px] uppercase tracking-widest mb-10">
                    We will respond within 24 hours.
                  </p>


                  <form
                    className="space-y-8"
                    onSubmit={handleSubmit}
                    noValidate
                  >

                    {/* NAME */}

                    <div>

                      <label
                        htmlFor="name"
                        className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3"
                      >
                        Full Name *
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                        placeholder="Enter your name"
                      />

                    </div>


                    {/* EMAIL + PHONE */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                      <div>

                        <label
                          htmlFor="email"
                          className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3"
                        >
                          Email Address *
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                          placeholder="Enter your email"
                        />

                      </div>


                      <div>

                        <label
                          htmlFor="phone"
                          className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3"
                        >
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          inputMode="tel"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                          placeholder="Enter your number"
                        />

                      </div>

                    </div>


                    {/* SUBJECT */}

                    <div>

                      <label
                        htmlFor="subject"
                        className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3"
                      >
                        Subject
                      </label>

                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        autoComplete="off"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors rounded-none placeholder-white/20 text-sm"
                        placeholder="Inquiry reason"
                      />

                    </div>


                    {/* MESSAGE */}

                    <div>

                      <label
                        htmlFor="message"
                        className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3"
                      >
                        Message *
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-colors resize-none rounded-none placeholder-white/20 text-sm"
                        placeholder="Write your message here..."
                      />

                    </div>


                    {/* SUBMIT */}

                    <button
                      type="submit"
                      className="w-full py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[11px] hover:bg-[#c4a132] transition-colors mt-6"
                      aria-label="Send message to Aurix"
                    >
                      Send Message
                    </button>

                  </form>

                </>

              )}

            </section>

          </div>

        </main>

      </div>
    </Suspense>
  );
}