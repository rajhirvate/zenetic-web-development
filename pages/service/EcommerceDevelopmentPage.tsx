import React from 'react';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const EcommerceDevelopmentPage: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Ecommerce Website Development Services in Pune | Zenetic"
                description="Custom Ecommerce development services in Pune. We build secure, high-performance online stores using WooCommerce and Shopify to maximize your sales."
            />
            {/* SEO Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Ecommerce Development",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Zenetic",
                        "image": "https://zenetic.in/logo.png"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Pune"
                    },
                    "description": "Custom Ecommerce development services in Pune. We build secure, high-performance online stores using WooCommerce and Shopify to maximize your sales.",
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": "Starting from ₹35,000",
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
                        "name": "Ecommerce Development",
                        "item": "https://zenetic.in/service/ecommerce-website-development-pune"
                    }]
                })
            }} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-cream overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Online Retail</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-8 uppercase leading-[0.9]">
                            Ecommerce Stores That <span className="text-brand-red">Sell</span>
                        </h1>
                        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed mb-12">
                            Turn visitors into customers. We build powerful, secure, and user-friendly online stores that streamline your operations and boost your bottom line.
                        </p>
                        <a href="#contact" className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 inline-block shadow-lg shadow-brand-red/20">
                            Start Selling Online
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
                            <h3 className="text-2xl font-bold mb-4">WooCommerce & Shopify</h3>
                            <p className="text-brand-muted">We are experts in the world's leading platforms. Whether you want open-source flexibility or hosted simplicity, we have you covered.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
                            <p className="text-brand-muted">We integrate reliable payment gateways (Razorpay, Stripe, PayPal) ensuring your transactions are safe and smooth.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Inventory Management</h3>
                            <p className="text-brand-muted">Keep track of your stock automatically. Our systems assist with inventory alerts and product variations.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Mobile Shopping</h3>
                            <p className="text-brand-muted">Most purchases happen on phones. We design mobile-first checkout flows to reduce cart abandonment.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">SEO/Product Schema</h3>
                            <p className="text-brand-muted">We structure your product data so Google can display prices, reviews, and availability directly in search results.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-cream border border-brand-black/5 hover:border-brand-red/20 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
                            <p className="text-brand-muted">Know your best-selling products and customer behavior with integrated dashboards and Google Analytics 4.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Store Setup</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Road to Revenue</h3>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">01</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Product Discovery</h4>
                                <p className="text-brand-muted max-w-2xl">We analyze your product catalog, shipping needs, and tax rules to determine the best platform architecture.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">02</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Design & User Flow</h4>
                                <p className="text-brand-muted max-w-2xl">We create a seamless shopping experience from the homepage to checkout, minimizing friction at every step.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/10 pb-12">
                            <span className="text-6xl font-black text-white/5">03</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Development & Integration</h4>
                                <p className="text-brand-muted max-w-2xl">We build the store, assist with product uploads, and integrate shipping and payment providers.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start pb-12">
                            <span className="text-6xl font-black text-white/5">04</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Launch & Growth</h4>
                                <p className="text-brand-muted max-w-2xl">We stress-test the checkout process, launch the live site, and provide training on fulfilling orders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default EcommerceDevelopmentPage;
