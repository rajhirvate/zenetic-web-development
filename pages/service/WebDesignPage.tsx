import React from 'react';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const WebDesignPage: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Web Design & Development Services for Businesses in Pune | Zenetic"
                description="Professional web design and development services in Pune for businesses and startups. Fast, scalable, SEO-friendly websites built to convert."
            />
            {/* SEO Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Web Design & Development",
                    "name": "Web Design & Development Pune",
                    "url": "https://zenetic.in/service/web-design-development-pune",
                    "description": "Professional web design and development services in Pune for businesses and startups. Fast, scalable, SEO-friendly websites built to convert.",
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
                        "priceSpecification": { "@type": "PriceSpecification", "minPrice": 25000, "priceCurrency": "INR" },
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
                        { "@type": "ListItem", "position": 2, "name": "Web Design & Development Pune", "item": "https://zenetic.in/service/web-design-development-pune" }
                    ]
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How much does a website cost in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "A professional business website in Pune starts from ₹25,000 depending on the complexity, number of pages, and features required." } },
                        { "@type": "Question", "name": "How long does it take to build a website?", "acceptedAnswer": { "@type": "Answer", "text": "Most business websites take 2-4 weeks. Complex web applications and ecommerce stores may take 4-8 weeks depending on scope." } },
                        { "@type": "Question", "name": "Do you provide SEO with web design?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All websites we build are SEO-optimized from day one — clean code, fast loading, mobile-first design, and Core Web Vitals compliance." } }
                    ]
                })
            }} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-cream overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Service Spotlight</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-8 uppercase leading-[0.9]">
                            Web Design & <br /><span className="text-brand-red">Development</span> in Pune
                        </h1>
                        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed mb-12">
                            We craft award-winning, high-performance websites tailored for Pune businesses. From custom design to seamless functionality, we build digital experiences that convert.
                        </p>
                        <a href="#contact" className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 inline-block shadow-lg shadow-brand-red/20">
                            Get Your Proposal
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
                            <h3 className="text-2xl font-bold mb-4">Custom Design</h3>
                            <p className="text-brand-muted">No templates. We design unique interfaces that reflect your brand identity and stand out in the Pune market.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Mobile First</h3>
                            <p className="text-brand-muted">Over 70% of web traffic is mobile. We ensure your site looks and performs flawlessly on every device.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">SEO Optimized</h3>
                            <p className="text-brand-muted">Built with clean code and best practices to help you rank higher on Google for local Pune keywords.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Speed Focused</h3>
                            <p className="text-brand-muted">We optimize for Core Web Vitals, ensuring lightning-fast load times that keep visitors engaged.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Easy Management</h3>
                            <p className="text-brand-muted">Whether it's WordPress or Next.js, we build admin panels that make updating your content a breeze.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Secure & Scalable</h3>
                            <p className="text-brand-muted">Security is paramount. We build robust systems that can grow alongside your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Process</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">How We Work</h3>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">01</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Discovery & Strategy</h4>
                                <p className="text-brand-muted max-w-2xl">We start by understanding your business goals, target audience in Pune, and competitors. We create a sitemap and wireframes to outline the structure.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">02</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Design & UI/UX</h4>
                                <p className="text-brand-muted max-w-2xl">Our designers create stunning, high-fidelity mockups. We focus on user experience (UX) to ensure intuitive navigation and engagement.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">03</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Development</h4>
                                <p className="text-brand-muted max-w-2xl">We code your site using the latest technologies (React, Next.js, Tailwind). We ensure clean, semantic code for performance and SEO.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start pb-12">
                            <span className="text-6xl font-black text-white/5">04</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Launch & Support</h4>
                                <p className="text-brand-muted max-w-2xl">After rigorous testing, we go live. We provide training on how to manage your site and offer ongoing support packages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default WebDesignPage;
