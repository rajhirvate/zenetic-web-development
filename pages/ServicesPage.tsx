
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const services = [
    {
        number: "01",
        title: "Web Design & Development",
        slug: "/service/web-design-development-pune",
        tag: "Most Popular",
        tagColor: "bg-brand-red text-white",
        desc: "Custom-designed, high-performance websites built from scratch for Pune businesses. Mobile-first, SEO-ready, and built to convert visitors into customers.",
        highlights: ["Custom UI/UX Design", "Mobile-First Development", "SEO Optimized", "Core Web Vitals"],
        price: "Starting ₹15,000",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "WordPress Development",
        slug: "/service/wordpress-development-pune",
        tag: "CMS",
        tagColor: "bg-blue-100 text-blue-700",
        desc: "Flexible, easy-to-manage WordPress websites and WooCommerce stores. Perfect for businesses that want full control over their content without needing a developer.",
        highlights: ["Custom Themes", "WooCommerce Stores", "Plugin Development", "CMS Training"],
        price: "Starting ₹20,000",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "React & Next.js Development",
        slug: "/service/react-nextjs-development-pune",
        tag: "Advanced",
        tagColor: "bg-purple-100 text-purple-700",
        desc: "Blazing-fast web applications, SaaS platforms, and MVPs built with React and Next.js. Ideal for startups and businesses that need custom functionality at scale.",
        highlights: ["SaaS & MVPs", "Server-Side Rendering", "API Integrations", "Dashboard Builds"],
        price: "Starting ₹40,000",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Landing Page Design",
        slug: "/service/landing-page-design-pune",
        tag: "Fast Delivery",
        tagColor: "bg-green-100 text-green-700",
        desc: "High-converting landing pages designed for ad campaigns, product launches, and lead generation. Delivered in 5–7 days and built to maximize your ROI.",
        highlights: ["Ad Campaign Pages", "Lead Gen Focused", "A/B Test Ready", "5–7 Day Delivery"],
        price: "Starting ₹15,000",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Ecommerce Development",
        slug: "/service/ecommerce-website-development-pune",
        tag: "Sell Online",
        tagColor: "bg-orange-100 text-orange-700",
        desc: "Powerful, secure, and scalable online stores built on WooCommerce and Shopify. From product catalog to checkout, we build ecommerce experiences that sell.",
        highlights: ["WooCommerce & Shopify", "Razorpay Integration", "Inventory Management", "Mobile Checkout"],
        price: "Starting ₹35,000",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
];

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-20 font-sans">
            <SEO
                title="Web Design & Development Services in Pune | Zenetic"
                description="Explore all web design and development services offered by Zenetic in Pune — Web Design, WordPress, React/Next.js, Landing Pages, and Ecommerce Development."
            />

            {/* Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Zenetic Enterprise - Web Solutions",
                    "url": "https://zenetic.in",
                    "telephone": "+919167041276",
                    "email": "rajhirvate@gmail.com",
                    "image": "https://zenetic.in/logo.png",
                    "description": "Zenetic is a Pune-based web design and development agency offering WordPress, React/Next.js, Landing Page, and Ecommerce development services.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Wakad",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411057",
                        "addressCountry": "IN"
                    },
                    "areaServed": { "@type": "City", "name": "Pune" },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Web Development Services",
                        "itemListElement": services.map(s => ({
                            "@type": "Offer",
                            "itemOffered": { "@type": "Service", "name": s.title, "url": `https://zenetic.in${s.slug}` }
                        }))
                    }
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenetic.in" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zenetic.in/services" }
                    ]
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Web Development Services in Pune",
                    "itemListElement": services.map((s, i) => ({
                        "@type": "ListItem",
                        "position": i + 1,
                        "name": s.title,
                        "url": `https://zenetic.in${s.slug}`
                    }))
                })
            }} />

            {/* Hero */}
            <section className="bg-brand-cream py-20 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    {/* Visual Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-muted mb-10">
                        <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-brand-red font-semibold">Services</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">What We Do</span>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-brand-black mb-6 uppercase leading-[0.9]">
                            Our <span className="text-brand-red">Services</span>
                        </h1>
                        <p className="text-xl text-brand-muted leading-relaxed max-w-2xl">
                            From custom web design to full-stack web applications — we build digital products that help Pune businesses grow online. Every service is tailored, not templated.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="divide-y divide-gray-100">
                        {services.map((service, i) => (
                            <div key={service.slug} className="group py-10 flex flex-col lg:flex-row gap-8 lg:items-center hover:bg-brand-cream/40 transition-colors -mx-6 px-6 rounded-2xl">
                                {/* Left: Number + Icon */}
                                <div className="flex items-center gap-5 lg:w-16 flex-shrink-0">
                                    <span className="text-4xl font-black text-brand-black/5 leading-none select-none hidden lg:block">{service.number}</span>
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-bold text-brand-black tracking-tight">{service.title}</h2>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${service.tagColor}`}>
                                            {service.tag}
                                        </span>
                                    </div>
                                    <p className="text-brand-muted leading-relaxed mb-4 max-w-2xl">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.highlights.map(h => (
                                            <span key={h} className="text-xs font-semibold text-brand-muted bg-gray-100 px-3 py-1.5 rounded-full">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Price + CTA */}
                                <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
                                    <span className="text-sm font-bold text-brand-muted">{service.price}</span>
                                    <Link
                                        to={service.slug}
                                        className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-red transition-all duration-300 group/btn"
                                    >
                                        Learn More
                                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-brand-dark text-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Pune's Web Agency</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Not sure which service <br />you need?</h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">Tell us about your project — we'll recommend the right approach and give you a free no-obligation quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919167041276?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20web%20project%20with%20Zenetic."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-black transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.054 23.454a.5.5 0 00.492.593l5.876-1.541A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.784-.535-5.354-1.462l-.382-.227-3.966 1.04 1.06-3.865-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                            WhatsApp Us
                        </a>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:border-white hover:bg-white hover:text-brand-black transition-all duration-300"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
