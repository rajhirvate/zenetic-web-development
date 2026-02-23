import React from 'react';

const serviceLinks = [
    {
        label: "Web Design & Development Pune",
        href: "/service/web-design-development-pune",
        desc: "Custom websites built for performance, speed, and conversions.",
    },
    {
        label: "WordPress Development Pune",
        href: "/service/wordpress-development-pune",
        desc: "Hand-coded WordPress sites with full CMS control and zero bloat.",
    },
    {
        label: "React & Next.js Development Pune",
        href: "/service/react-nextjs-development-pune",
        desc: "Scalable web apps, SaaS platforms, and MVP products for startups.",
    },
    {
        label: "Landing Page Design Pune",
        href: "/service/landing-page-design-pune",
        desc: "High-converting landing pages for Google Ads and lead generation.",
    },
    {
        label: "Ecommerce Website Development Pune",
        href: "/service/ecommerce-website-development-pune",
        desc: "Shopify and WooCommerce stores built to sell from day one.",
    },
];

const SemanticSEO: React.FC = () => {
    return (
        <section className="py-20 bg-brand-cream border-t border-brand-black/5" aria-label="About Zenetic Web Agency Pune">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left: Keyword-rich editorial content */}
                    <div className="lg:w-[55%]">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Why Zenetic</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 leading-tight">
                            Pune's most trusted <br />web development partner.
                        </h2>

                        <div className="space-y-5 text-brand-muted leading-relaxed text-base">
                            <p>
                                <strong className="text-brand-black">Zenetic</strong> is a full-service <strong className="text-brand-black">web design and development agency in Pune</strong>, specializing in building modern, high-performance websites for businesses across Pune, Maharashtra. Whether you need a brand-new business website, a custom WordPress solution, a React or Next.js web application, or a conversion-focused landing page — Zenetic delivers results that go beyond aesthetics.
                            </p>
                            <p>
                                We work with startups, local businesses, professional service firms, and ecommerce brands across Pune to build digital experiences that are fast-loading, mobile-first, and optimized for Google's Core Web Vitals. Our team combines technical expertise in <strong className="text-brand-black">WordPress, Next.js, React, PHP, and Shopify</strong> with a deep understanding of local SEO and digital marketing — making us the ideal long-term web partner for Pune businesses.
                            </p>
                            <p>
                                From Wakad, Hinjewadi, and Baner to Kothrud, Koregaon Park, and Hadapsar — <strong className="text-brand-black">businesses across Pune</strong> trust Zenetic for professional web design, WordPress development, ecommerce stores, and landing page design. Every website we build is SEO-ready from day one, engineered for speed, and designed to convert visitors into paying customers.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Web Agency Pune", "WordPress Pune", "Next.js Development", "Ecommerce Pune", "Landing Pages", "React Developer Pune", "SEO-Ready Websites", "Local Business Websites"].map((tag) => (
                                <span key={tag} className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Internal service links */}
                    <div className="lg:w-[45%]">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Our Services</span>
                        <div className="flex flex-col divide-y divide-gray-200">
                            {serviceLinks.map((service) => (
                                <a
                                    key={service.href}
                                    href={service.href}
                                    className="group flex items-start justify-between gap-4 py-5 hover:text-brand-red transition-colors"
                                >
                                    <div>
                                        <p className="font-bold text-brand-black group-hover:text-brand-red transition-colors text-base mb-1">{service.label}</p>
                                        <p className="text-sm text-brand-muted leading-relaxed">{service.desc}</p>
                                    </div>
                                    <svg
                                        className="w-5 h-5 flex-shrink-0 mt-1 text-gray-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-200"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SemanticSEO;
