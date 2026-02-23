import React from 'react';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const LandingPageDesignPage: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="High-Converting Landing Page Design Services in Pune | Zenetic"
                description="We design high-converting landing pages for campaigns, products, and services in Pune. Focused on UI/UX, speed, and ROI-driven results."
            />
            {/* SEO Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Landing Page Design",
                    "name": "Landing Page Design Pune",
                    "url": "https://zenetic.in/service/landing-page-design-pune",
                    "description": "We design high-converting landing pages for campaigns, products, and services in Pune. Focused on UI/UX, speed, and ROI-driven results.",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Zenetic Enterprise - Web Solutions",
                        "url": "https://zenetic.in",
                        "telephone": "+919167041276",
                        "email": "rajhirvate@gmail.com",
                        "image": "https://zenetic.in/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Wakad",
                            "addressLocality": "Pune",
                            "addressRegion": "Maharashtra",
                            "postalCode": "411057",
                            "addressCountry": "IN"
                        }
                    },
                    "areaServed": { "@type": "City", "name": "Pune" },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "priceSpecification": { "@type": "PriceSpecification", "minPrice": 15000, "priceCurrency": "INR" },
                        "availability": "https://schema.org/InStock"
                    }
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenetic.in" },
                        { "@type": "ListItem", "position": 2, "name": "Landing Page Design Pune", "item": "https://zenetic.in/service/landing-page-design-pune" }
                    ]
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is a landing page?", "acceptedAnswer": { "@type": "Answer", "text": "A landing page is a standalone web page designed for a specific marketing campaign goal — such as capturing leads, selling a product, or promoting an event." } },
                        { "@type": "Question", "name": "How much does a landing page cost in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "A professional landing page in Pune starts from ₹15,000 depending on complexity, animations, and integrations required." } },
                        { "@type": "Question", "name": "How fast can you deliver a landing page?", "acceptedAnswer": { "@type": "Answer", "text": "We typically deliver landing pages within 5-7 business days, making them ideal for time-sensitive ad campaigns." } }
                    ]
                })
            }} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-cream overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Conversion Focused</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-8 uppercase leading-[0.9]">
                            High Converting <span className="text-brand-red">Landing Pages</span> in Pune
                        </h1>
                        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed mb-12">
                            Stop wasting ad spend on pages that don't convert. We design scientific, psychological, and data-driven landing pages capable of doubling your leads.
                        </p>
                        <a href="#contact" className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 inline-block shadow-lg shadow-brand-red/20">
                            Boost Your ROI
                        </a>
                    </div>
                </div>

                {/* Floating Logo Representation */}
                <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 w-1/3 opacity-5 pointer-events-none animate-float">
                    <img
                        src="/logo.png"
                        alt="Zenetic Branding"
                        className="w-full h-auto"
                    />
                </div>
            </section>

            {/* Why Choose Us / Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Conversion First</h3>
                            <p className="text-brand-muted">Every pixel is designed with one goal: conversion. We use proven psychological triggers to guide visitors to the CTA.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Blazing Fast</h3>
                            <p className="text-brand-muted">Speed kills bounce rates. Our landing pages load instantly, ensuring you don't lose potential customers to loading screens.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Mobile Optimized</h3>
                            <p className="text-brand-muted">With paid ads often being mobile-heavy, we design a seamless mobile experience that makes filling forms effortless.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Copywriting</h3>
                            <p className="text-brand-muted">Design attracts, copy sells. We help refine your headlines and value propositions to hook visitors instantly.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">A/B Testing Ready</h3>
                            <p className="text-brand-muted">We build structures easy to duplicate and tweak, allowing you to run A/B tests to continuously improve performance.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Analytics Integration</h3>
                            <p className="text-brand-muted">We set up tracking pixels (Facebook, Google Ads) and event tracking so you know exactly what's working.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Campaign Strategy</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Launch in Days</h3>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">01</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Offer Analysis</h4>
                                <p className="text-brand-muted max-w-2xl">We analyze your offer, target audience, and ad creative to ensure message consistency from click to page.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">02</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Wireframe & Copy</h4>
                                <p className="text-brand-muted max-w-2xl">We structure the page flow and write compelling headlines that address pain points and present solutions.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">03</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Design & Build</h4>
                                <p className="text-brand-muted max-w-2xl">We design and code the page using lightweight frameworks for maximum speed and visual impact.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start pb-12">
                            <span className="text-6xl font-black text-white/5">04</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Testing & Handoff</h4>
                                <p className="text-brand-muted max-w-2xl">We verify all forms, buttons, and pixels are firing correctly before handing over the live URL.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default LandingPageDesignPage;
