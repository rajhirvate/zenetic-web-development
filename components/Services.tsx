import React, { useState } from 'react';

// ─── Overview cards (dark section) ───────────────────────────────────────────
const overviewCards = [
  {
    title: "Full-Stack Web Development",
    description: "From custom PHP applications to high-performance Next.js platforms. We build robust, scalable websites that serve as your business's 24/7 salesperson.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ["Next.js", "WordPress", "PHP", "React"],
  },
  {
    title: "Performance Marketing",
    description: "Driving qualified traffic to your newly built site. We specialize in ROI-focused campaigns that turn visitors into loyal customers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tags: ["Google Ads", "Social Ads", "Conversion"],
  },
  {
    title: "Local SEO (Pune Focus)",
    description: "Dominate Pune's local search landscape. We help you win the Google Map Pack and show up when local customers need you most.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tags: ["Pune SEO", "Google My Business", "Reviews"],
  },
];

// ─── Verticals + Detailed services (light panel) ─────────────────────────────
const verticals = [
  {
    title: "Full-Stack Web Development",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: "Web Design & Development",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        heading: "Crafting digital experiences that convert.",
        description: (
          <>
            <p className="mb-4">We build custom websites from scratch for Pune businesses - no templates, no shortcuts. Every site is designed for performance, fast loading, and conversions. We combine UI/UX design with clean semantic code to deliver websites that rank on Google and convert visitors into leads.</p>
            <p>Whether you're a startup <a href="/service/wordpress-development-pune" className="font-bold underline text-brand-red">looking for your first website</a> or an established Pune business ready for a redesign, we craft a digital presence built on modern technologies like Next.js, React, and Tailwind CSS. Every website we deliver is mobile-first, SEO optimized, and scored for Core Web Vitals - because a beautiful website that doesn't rank or load fast is just a digital brochure.</p>
          </>
        ),
        link: "/service/web-design-development-pune",
        tags: ["Custom Design", "Mobile First", "SEO Ready", "Core Web Vitals", "Fast Loading"],
      },
      {
        title: "WordPress Development",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        ),
        heading: "Total control over your digital presence.",
        description: (
          <>
            <p className="mb-4">WordPress powers over 40% of the internet - and when built right, it's one of the most powerful platforms for Pune businesses. We build fully custom WordPress websites with hand-coded themes, performance optimization, and complete CMS control so you can manage your content without touching a single line of code.</p>
            <p>From business websites and blogs to full WooCommerce stores, our WordPress development services in Pune cover everything - custom plugin development, speed optimization, security hardening, and ongoing maintenance. No page builders, no bloated themes - just clean, fast WordPress built the right way.</p>
          </>
        ),
        link: "/service/wordpress-development-pune",
        tags: ["WooCommerce", "Custom Themes", "Plugin Development", "Speed Optimized", "CMS"],
      },
      {
        title: "React & Next.js Development",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        heading: "Scalable web applications for modern teams.",
        description: (
          <>
            <p className="mb-4">When your business needs more than a standard website, React and Next.js are the answer. We build high-performance web applications, SaaS platforms, admin dashboards, and MVP products for startups and tech companies in Pune and beyond.</p>
            <p>Next.js gives you the best of both worlds - the speed of static sites with the flexibility of server-side rendering, making it SEO-friendly and blazing fast. Whether you need a customer-facing product, an internal tool, or a full-stack web application with API integration, our React and Next.js development team in Pune delivers scalable, maintainable code built for growth.</p>
          </>
        ),
        link: "/service/react-nextjs-development-pune",
        tags: ["React", "Next.js", "SaaS", "MVP Development", "Web App", "TypeScript"],
      },
      {
        title: "Landing Page Design",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
        ),
        heading: "Single pages built for a single goal.",
        description: (
          <>
            <p className="mb-4">A high-converting landing page can make or break your ad campaign. We design and develop conversion-focused landing pages for Google Ads, Meta Ads, product launches, and lead generation campaigns - built specifically to turn clicks into enquiries and visitors into customers.</p>
            <p>Every landing page we build in Pune is A/B test ready, mobile optimized, and engineered for a single goal - your conversion. We handle everything from copywriting and UI design to fast hosting and analytics integration. Whether you need a lead gen page, a product launch page, or a dedicated campaign landing page, we deliver pages that perform.</p>
          </>
        ),
        link: "/service/landing-page-design-pune",
        tags: ["High Converting", "Google Ads", "Lead Generation", "A/B Testing", "Fast Turnaround"],
      },
      {
        title: "Ecommerce Development",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        heading: "High-performance stores that sell from day one.",
        description: (
          <>
            <p className="mb-4">Launch your online store with a platform built to sell from day one. We develop ecommerce websites on Shopify and WooCommerce for Pune businesses - with full product catalog setup, payment gateway integration, mobile optimized product pages, and a checkout experience designed to reduce cart abandonment.</p>
            <p>Whether you're launching a new ecommerce brand or migrating from an outdated platform, our ecommerce development team in Pune handles the full build - from store design and category architecture to order management, shipping integration, and post-launch support. We build stores that are fast, secure, and ready to scale.</p>
          </>
        ),
        link: "/service/ecommerce-website-development-pune",
        tags: ["Shopify", "WooCommerce", "Payment Gateway", "Mobile Optimized", "Product Catalog"],
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Services: React.FC = () => {
  const [activeVertical, setActiveVertical] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const currentVertical = verticals[activeVertical];
  const currentService = currentVertical.services[activeService];

  return (
    <>
      {/* ── DARK OVERVIEW SECTION ── */}
      <section id="services" className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">What We Offer</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Your choice for <span className="opacity-80">digital growth.</span>
              </h3>
            </div>
            <p className="text-brand-muted max-w-xs text-lg mb-2">
              We build web solutions that are as functional as they are beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {overviewCards.map((card, index) => (
              <div
                key={index}
                className="group p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-red/50 transition-all duration-500 hover:bg-white/[0.07]"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(209,0,0,0.3)]">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                <p className="text-brand-muted leading-relaxed mb-8">{card.description}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHT "WHAT WE BUILD" 3-COLUMN PANEL ── */}
      <section id="our-services" className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Services</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">What We Build</h3>
            </div>
            <p className="text-gray-500 max-w-xs text-lg mb-2">
              Specialized web solutions for Pune businesses.
            </p>
          </div>


          {/* 2-Column Panel: Services + Details */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.07)]">

            {/* Column 1: SERVICES */}
            <div className="flex flex-col">
              <div className="bg-brand-red text-white py-4 px-6 text-center">
                <span className="text-xs font-extrabold tracking-[0.25em] uppercase">Services</span>
              </div>
              <div className="bg-white flex flex-col p-4 gap-1 flex-1">
                {currentVertical.services.map((service, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-200 group ${activeService === i
                      ? "bg-red-50 text-brand-red"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    <span className={`flex-shrink-0 ${activeService === i ? "text-brand-red" : "text-gray-400 group-hover:text-gray-600"}`}>
                      {service.icon}
                    </span>
                    <span className={`text-sm font-semibold leading-tight ${activeService === i ? "text-brand-red" : ""}`}>
                      {service.title}
                    </span>
                    {activeService === i && (
                      <svg className="w-4 h-4 ml-auto text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: DETAILS */}
            <div className="flex flex-col border-l border-gray-100">
              <div className="bg-brand-red text-white py-4 px-6 text-center">
                <span className="text-xs font-extrabold tracking-[0.25em] uppercase">Details</span>
              </div>
              <div
                key={`${activeVertical}-${activeService}`}
                className="bg-white p-8 md:p-10 flex flex-col flex-1 animate-svc-fadeIn relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-extrabold text-brand-red mb-2">{currentService.title}</h3>
                  <p className="text-lg font-bold text-gray-900 mb-6 leading-snug">{currentService.heading}</p>
                  <div className="text-gray-600 leading-relaxed text-base space-y-3 flex-grow">
                    {currentService.description}
                  </div>
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentService.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-500 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={currentService.link}
                        className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold tracking-widest uppercase text-white bg-brand-red rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/30 transition-all duration-300 group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a
                        href="/#contact"
                        className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold tracking-widest uppercase text-brand-red border-2 border-brand-red rounded-full hover:bg-brand-red hover:text-white transition-all duration-300"
                      >
                        Quick Enquiry
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes svcFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-svc-fadeIn {
          animation: svcFadeIn 0.35s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Services;
