import React from 'react';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const WordPressDevelopmentPage: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="WordPress Development Services in Pune | Zenetic"
                description="Custom WordPress development services in Pune. We build fast, secure, and easy-to-manage WordPress websites tailored to your business needs."
            />
            {/* SEO Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "WordPress Development",
                    "name": "WordPress Development Pune",
                    "url": "https://zenetic.in/service/wordpress-development-pune",
                    "description": "Custom WordPress development services in Pune. We build fast, secure, and easy-to-manage WordPress websites tailored to your business needs.",
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
                        "priceSpecification": { "@type": "PriceSpecification", "minPrice": 20000, "priceCurrency": "INR" },
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
                        { "@type": "ListItem", "position": 2, "name": "WordPress Development Pune", "item": "https://zenetic.in/service/wordpress-development-pune" }
                    ]
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "Why use WordPress for my business website?", "acceptedAnswer": { "@type": "Answer", "text": "WordPress powers 43% of the internet and provides an easy-to-use CMS so you can update content yourself without needing a developer every time." } },
                        { "@type": "Question", "name": "Do you build custom WordPress themes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We hand-code custom WordPress themes without relying on bloated page builders, resulting in faster, cleaner, more secure websites." } },
                        { "@type": "Question", "name": "Can you migrate my existing site to WordPress?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle complete website migrations to WordPress with zero downtime and full content preservation." } }
                    ]
                })
            }} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-cream overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">CMS Solutions</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-8 uppercase leading-[0.9]">
                            Expert <span className="text-brand-red">WordPress</span> Development in Pune
                        </h1>
                        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed mb-12">
                            Powering your business with the world's most popular CMS. We create custom, scalable, and secure WordPress sites that are easy to manage and built to perform.
                        </p>
                        <a href="#contact" className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 inline-block shadow-lg shadow-brand-red/20">
                            Start Your Project
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
                            <h3 className="text-2xl font-bold mb-4">Page Builders Expert</h3>
                            <p className="text-brand-muted">We master them all. Whether you prefer <span className="font-bold text-brand-black">Elementor</span>, <span className="font-bold text-brand-black">Divi</span>, <span className="font-bold text-brand-black">Bricks</span>, or <span className="font-bold text-brand-black">Gutenberg</span>, we build pixel-perfect layouts.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">WooCommerce</h3>
                            <p className="text-brand-muted">Turn your site into a selling machine. We build robust e-commerce stores using WooCommerce that are secure and user-friendly.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Speed Optimization</h3>
                            <p className="text-brand-muted">Slow sites lose customers. We optimize images, caching, and code to ensure your WordPress site loads instantly.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Easy Editing</h3>
                            <p className="text-brand-muted">We set up the dashboard so you can easily update text, images, and blogs without needing to touch a line of code.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Plugin Development</h3>
                            <p className="text-brand-muted">Need specific functionality? We can develop custom plugins to extend your website's capabilities exactly how you need.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Migration & Care</h3>
                            <p className="text-brand-muted">Moving from another platform? We handle seamless migrations and offer ongoing maintenance packages.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Process</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">WordPress Workflow</h3>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">01</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Requirement Analysis</h4>
                                <p className="text-brand-muted max-w-2xl">We discuss your needs to decide on the best theme structure and necessary plugins for your goals.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">02</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Theme Customization</h4>
                                <p className="text-brand-muted max-w-2xl">We design and code the theme, ensuring it is responsive, accessible, and visually stunning.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">03</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Content & Features</h4>
                                <p className="text-brand-muted max-w-2xl">We integrate your content, set up forms, and configure SEO plugins like Yoast or RankMath.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start pb-12">
                            <span className="text-6xl font-black text-white/5">04</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Training & Launch</h4>
                                <p className="text-brand-muted max-w-2xl">We train you on how to use the dashboard and then launch your site to the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default WordPressDevelopmentPage;
