import React, { Suspense, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import LazyMotion from "../components/LazyMotion";

const SITE_URL = "https://aurix-gold.vercel.app";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setIsSubmitted(true);
    setFormData(INITIAL_FORM);

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [id]: value,
    }));
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Aurix",
    url: `${SITE_URL}/contact`,
    description:
      "Contact Aurix for gold jewellery enquiries, product information, orders and customer support.",
    mainEntity: {
      "@type": "Organization",
      name: "Aurix",
      url: SITE_URL,
      email: "tejinders791@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+91-9034196429",
        email: "tejinders791@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] text-white grid place-items-center">
          <div className="text-center">
            <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em]">
              Loading Aurix...
            </div>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-[#050505] text-white">

        {/* ================= SEO ================= */}

        <Helmet>
          <title>
            Contact Aurix | Gold Jewellery Enquiries & Support
          </title>

          <meta
            name="description"
            content="Contact Aurix for gold jewellery enquiries, product information, order support and customer assistance."
          />

          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />

          <link
            rel="canonical"
            href={`${SITE_URL}/contact`}
          />

          {/* Open Graph */}

          <meta
            property="og:title"
            content="Contact Aurix | Gold Jewellery Support"
          />

          <meta
            property="og:description"
            content="Get in touch with Aurix for jewellery enquiries, product information and customer support."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content={`${SITE_URL}/contact`}
          />

          <meta
            property="og:site_name"
            content="Aurix"
          />

          {/* Twitter */}

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Contact Aurix | Gold Jewellery Support"
          />

          <meta
            name="twitter:description"
            content="Contact Aurix for gold jewellery enquiries and customer support."
          />

          {/* Contact Schema */}

          <script type="application/ld+json">
            {JSON.stringify(contactSchema)}
          </script>
        </Helmet>

        {/* ================= HERO ================= */}

        <header className="relative isolate overflow-hidden border-b border-white/10 bg-[#0b0b0b]">

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_0%,rgba(212,175,55,.14),transparent_45%)]"
          />

          <div className="aurix-page-hero-inner">

            <LazyMotion
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
              }}
            >
              {/* Label */}

              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-[10px] uppercase tracking-[0.42em] text-[#D4AF37]">
                  Aurix Support
                </span>

                <span className="h-px w-10 bg-[#D4AF37]" />
              </div>

              {/* Heading */}

              <h1 className="font-serif text-5xl font-light italic sm:text-6xl lg:text-7xl">
                Let’s Talk Jewellery.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                Have a question about a piece, an order or Aurix?
                Send us a message and our team will get back to you.
              </p>
            </LazyMotion>
          </div>
        </header>

        {/* ================= MAIN ================= */}

        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <section className="grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">

            {/* ================= CONTACT INFO ================= */}

            <div className="space-y-4">

              {/* Intro */}

              <div className="border border-white/10 bg-[#0a0a0a] p-6">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  Contact Details
                </p>

                <h2 className="mt-3 font-serif text-3xl italic">
                  We’re here to help.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  For jewellery questions, product details and order
                  support, reach out using the details below.
                </p>
              </div>

              {/* Phone */}

              <a
                href="tel:+919034196429"
                className="flex items-start gap-4 border border-white/10 bg-[#0a0a0a] p-6 transition hover:border-[#D4AF37]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                />

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Phone
                  </span>

                  <span className="mt-2 block text-sm text-white/80">
                    +91 9034196429
                  </span>
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:tejinders791@gmail.com"
                className="flex items-start gap-4 border border-white/10 bg-[#0a0a0a] p-6 transition hover:border-[#D4AF37]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                />

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Email
                  </span>

                  <span className="mt-2 block break-all text-sm text-white/80">
                    tejinders791@gmail.com
                  </span>
                </span>
              </a>

              {/* Location */}

              <div className="flex items-start gap-4 border border-white/10 bg-[#0a0a0a] p-6">

                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                />

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Location
                  </span>

                  <address className="mt-2 not-italic text-sm leading-6 text-white/80">
                    Yamunanagar,
                    <br />
                    Haryana, India - 135001
                  </address>
                </span>
              </div>

              {/* Working Hours */}

              <div className="flex items-start gap-4 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] p-6">

                <Clock3
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                />

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    Working Hours
                  </span>

                  <span className="mt-2 block text-sm text-white/70">
                    Monday – Saturday · 10:00 AM – 7:00 PM
                  </span>

                  <span className="mt-1 block text-sm text-white/40">
                    Sunday · Closed
                  </span>
                </span>
              </div>
            </div>

            {/* ================= FORM ================= */}

            <section className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-9 lg:p-10">

              {isSubmitted ? (
                <div
                  className="flex min-h-[520px] flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-14 w-14 text-[#D4AF37]"
                  />

                  <h2 className="mt-6 font-serif text-3xl italic">
                    Message Sent
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
                    Thank you for contacting Aurix.
                    We’ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Send an Enquiry
                  </p>

                  <h2 className="mt-3 font-serif text-3xl italic">
                    Tell us what you need.
                  </h2>

                  <p className="mt-3 text-sm text-white/50">
                    Fields marked with * are required.
                  </p>

                  <form
                    className="mt-9 space-y-7"
                    onSubmit={handleSubmit}
                  >

                    {/* NAME */}

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        minLength={2}
                        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]"
                        placeholder="Your name"
                      />
                    </div>

                    {/* EMAIL + PHONE */}

                    <div className="grid gap-7 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50"
                        >
                          Email *
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                          className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          inputMode="tel"
                          className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]"
                          placeholder="+91"
                        />
                      </div>

                    </div>

                    {/* SUBJECT */}

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]"
                        placeholder="How can we help?"
                      />
                    </div>

                    {/* MESSAGE */}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50"
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
                        minLength={10}
                        className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]"
                        placeholder="Write your message..."
                      />
                    </div>

                    {/* SUBMIT */}

                    <button
                      type="submit"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#D4AF37] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      Send Message

                      <Send
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </button>

                  </form>
                </>
              )}
            </section>
          </section>
        </main>
      </div>
    </Suspense>
  );
}