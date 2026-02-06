import React from 'react';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const ReactNextDevelopmentPage: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="React & Next.js Development Services in Pune | Zenetic"
                description="Specialized React & Next.js development for startups and SaaS businesses in Pune. We build modern, high-performance web applications that scale."
            />
            {/* SEO Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Web Application Development",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Zenetic",
                        "image": "https://zenetic.in/logo.png"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Pune"
                    },
                    "description": "Specialized React & Next.js development for startups and SaaS businesses in Pune. We build modern, high-performance web applications that scale.",
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": "Starting from ₹40,000",
                        "availability": "https://schema.org/InStock"
                    }
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://zenetic.in"
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "React & Next.js Development",
                        "item": "https://zenetic.in/service/react-nextjs-development-pune"
                    }]
                })
            }} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-cream overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Modern Stack</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-8 uppercase leading-[0.9]">
                            React & <span className="text-brand-red">Next.js</span> Solutions in Pune
                        </h1>
                        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed mb-12">
                            Building the next generation of web apps. We construct blazing fast, scalable, and interactive applications customized for Startups and SaaS platforms.
                        </p>
                        <a href="#contact" className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 inline-block shadow-lg shadow-brand-red/20">
                            Build Your App
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
                            <h3 className="text-2xl font-bold mb-4">Modern Web Apps</h3>
                            <p className="text-brand-muted">We leave legacy tech behind. We build Single Page Applications (SPAs) and PWAs that feel like native apps.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Startup & SaaS</h3>
                            <p className="text-brand-muted">Launching a product? We build scalable MVP architectures designed to grow from 10 to 10 million users.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">High Performance</h3>
                            <p className="text-brand-muted">Leveraging Next.js Server Side Rendering (SSR) and Static Generation (SSG) for instant load times and perfect SEO.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Headless CMS</h3>
                            <p className="text-brand-muted">We decouple frontends from backends using Sanity, Strapi, or Contentful for ultimate flexibility and security.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Component Driven</h3>
                            <p className="text-brand-muted">We build reusable, modular component libraries making your codebase clean, maintainable, and easy to extend.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">API Integration</h3>
                            <p className="text-brand-muted">Seamlessly connect your frontend to any backend services, payment gateways, or third-party APIs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Development Cycle</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Agile Engineering</h3>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">01</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Architecture Planning</h4>
                                <p className="text-brand-muted max-w-2xl">We define the database schema (SQL/NoSQL), API structure, and state management strategy (Redux/Zustand).</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">02</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Frontend Development</h4>
                                <p className="text-brand-muted max-w-2xl">We implement pixel-perfect UI with Tailwind CSS and build interactive logic using React Hooks.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">03</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">API & Backend</h4>
                                <p className="text-brand-muted max-w-2xl">We build robust API routes in Next.js or integrate with your existing backend services securely.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start pb-12">
                            <span className="text-6xl font-black text-white/5">04</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Deployment & Search</h4>
                                <p className="text-brand-muted max-w-2xl">We deploy to Vercel/AWS, configure CI/CD pipelines, and ensure your dynamic content is indexed by Google.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default ReactNextDevelopmentPage;
