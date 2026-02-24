
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const faqs = [
    { q: "Which ecommerce platform is best for my business?", a: "WooCommerce is ideal for businesses wanting full control and customization on their own hosting. Shopify is better for businesses that want a hosted, easier-to-manage solution. We help you choose based on your catalog size, budget, and technical needs." },
    { q: "How much does an ecommerce website cost in Pune?", a: "A professional ecommerce store in Pune starts from ₹35,000 depending on the number of products, payment gateways, and custom functionality required." },
    { q: "Can you add Razorpay to my ecommerce site?", a: "Yes. We integrate all major Indian payment gateways including Razorpay, PayU, and CCAvenue, along with international gateways like Stripe and PayPal." },
    { q: "How long does it take to build an ecommerce store?", a: "A standard WooCommerce store takes 3–5 weeks. A fully custom ecommerce platform with advanced features can take 8–12 weeks depending on the scope." },
    { q: "Can you migrate my existing store to WooCommerce or Shopify?", a: "Yes. We handle complete ecommerce migrations — including product data, customer records, order history, and SEO settings — with minimal downtime." },
    { q: "Do you provide post-launch ecommerce support?", a: "Yes. We offer ongoing ecommerce maintenance packages covering security updates, plugin updates, performance monitoring, and content changes." },
];

const features = [
    { icon: "🛒", title: "WooCommerce & Shopify", desc: "Experts in the world's leading platforms. Whether you want open-source flexibility or a hosted solution, we deliver results on both." },
    { icon: "💳", title: "Secure Payment Gateways", desc: "We integrate Razorpay, PayU, Stripe, and PayPal — ensuring fast, secure, and familiar checkout experiences for your customers." },
    { icon: "📦", title: "Inventory Management", desc: "Automatic stock tracking, low-stock alerts, and product variation management built into your store from day one." },
    { icon: "📱", title: "Mobile-First Checkout", desc: "Most purchases happen on phones. We design frictionless mobile checkout flows that minimize cart abandonment and maximize sales." },
    { icon: "🔍", title: "SEO & Product Schema", desc: "We structure your product data so Google shows prices, reviews, and availability directly in search results — driving free organic traffic." },
    { icon: "📊", title: "Analytics Dashboard", desc: "Track best-selling products, customer behaviour, and revenue with integrated Google Analytics 4 and WooCommerce/Shopify dashboards." },
];

const EcommerceDevelopmentPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', service: 'Ecommerce Development' });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formError, setFormError] = useState('');

    const handleQuickSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setFormError('');
        const payload = { name: formData.name, email: 'n/a', phone: formData.phone, requirements: [formData.service], pageUrl: window.location.href, timestamp: new Date().toISOString(), honeypot: '' };
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || 'Failed');
            setFormStatus('success');
            const text = `Hi, I'm interested in ${formData.service}. My name is ${formData.name}, phone: ${formData.phone}.`;
            setTimeout(() => window.open(`https://wa.me/919167041276?text=${encodeURIComponent(text)}`, '_blank'), 500);
        } catch { setFormStatus('error'); setFormError('Something went wrong. Please try WhatsApp directly.'); }
    };

    return (
        <div className="pt-20 font-sans">
            <SEO title="Ecommerce Website Development Services in Pune | Zenetic" description="Custom Ecommerce development services in Pune. We build secure, high-performance WooCommerce and Shopify stores to maximize your online sales." />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Ecommerce Development", "name": "Ecommerce Website Development Pune", "url": "https://zenetic.in/service/ecommerce-website-development-pune", "description": "Custom ecommerce development in Pune using WooCommerce and Shopify.", "provider": { "@type": "LocalBusiness", "name": "Zenetic Enterprise - Web Solutions", "url": "https://zenetic.in", "telephone": "+919167041276", "email": "rajhirvate@gmail.com", "image": "https://zenetic.in/logo.png", "address": { "@type": "PostalAddress", "streetAddress": "Wakad", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" } }, "areaServed": { "@type": "City", "name": "Pune" }, "offers": { "@type": "Offer", "priceCurrency": "INR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 35000, "priceCurrency": "INR" }, "availability": "https://schema.org/InStock" } }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenetic.in" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zenetic.in/services" }, { "@type": "ListItem", "position": 3, "name": "Ecommerce Development Pune", "item": "https://zenetic.in/service/ecommerce-website-development-pune" }] }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

            <section className="relative bg-brand-cream overflow-hidden py-16 md:py-0 md:min-h-[92vh] flex items-center">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10" />
                <div className="container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-muted mb-8 md:mb-10">
                        <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <Link to="/services" className="text-brand-muted hover:text-brand-red transition-colors">Services</Link>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-brand-red font-semibold">Ecommerce Development Pune</span>
                    </nav>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Online Retail</span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-brand-black mb-6 uppercase leading-[0.9]">Ecommerce<br />Stores That<br /><span className="text-brand-red">Sell</span></h1>
                            <p className="text-lg text-brand-muted leading-relaxed mb-8 max-w-lg">Turn visitors into customers. We build powerful, secure, and user-friendly online stores on WooCommerce and Shopify that streamline your operations and boost your revenue.</p>
                            <div className="flex flex-wrap gap-6 mb-8">
                                {[{ val: "40+", label: "Stores Built" }, { val: "5+", label: "Years in Pune" }, { val: "₹35K", label: "Starting Price" }].map((s) => (
                                    <div key={s.label} className="flex flex-col">
                                        <span className="text-2xl font-black text-brand-black">{s.val}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-brand-muted">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="#contact" className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 shadow-lg shadow-brand-red/20 group">
                                Get a Free Quote <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                        <div className="bg-white rounded-3xl shadow-xl shadow-brand-black/5 border border-gray-100 p-8 md:p-10">
                            <h2 className="text-xl font-bold text-brand-black mb-1">Get a Free Consultation</h2>
                            <p className="text-sm text-brand-muted mb-6">Tell us about your store — we'll get back within 24 hours.</p>
                            {formStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center">
                                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4"><svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                                    <p className="font-bold text-brand-black text-lg">Thank you!</p>
                                    <p className="text-brand-muted text-sm mt-1">Redirecting you to WhatsApp…</p>
                                </div>
                            ) : (
                                <form onSubmit={handleQuickSubmit} className="space-y-5">
                                    <div className="space-y-1"><label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Your Name *</label><input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Rahul Sharma" className="w-full border-b-2 border-gray-200 focus:border-brand-red outline-none py-3 text-base bg-transparent transition-colors" /></div>
                                    <div className="space-y-1"><label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Phone Number *</label><input type="tel" required value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+91 98765 43210" className="w-full border-b-2 border-gray-200 focus:border-brand-red outline-none py-3 text-base bg-transparent transition-colors" /></div>
                                    <div className="space-y-1"><label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">I Need</label>
                                        <select value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))} className="w-full border-b-2 border-gray-200 focus:border-brand-red outline-none py-3 text-base bg-transparent transition-colors text-brand-black">
                                            <option>Ecommerce Development</option>
                                            <option>WooCommerce Store</option>
                                            <option>Shopify Store</option>
                                            <option>Ecommerce Migration</option>
                                            <option>Razorpay Integration</option>
                                        </select>
                                    </div>
                                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-brand-red text-white py-4 rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2">
                                        {formStatus === 'submitting' ? 'Sending…' : 'WhatsApp Us Now'}
                                    </button>
                                    <p className="text-[10px] text-center text-brand-muted">No spam. Free consultation. We'll respond within 2 hours.</p>
                                    {formStatus === 'error' && <p className="text-xs text-center text-red-500">{formError}</p>}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <div className="lg:w-[60%] space-y-5 text-brand-muted leading-relaxed text-base">
                            <h2 className="text-3xl font-bold tracking-tighter text-brand-black">Ecommerce Development Services in Pune</h2>
                            <p><strong className="text-brand-black">Zenetic</strong> is a Pune-based ecommerce development agency specializing in WooCommerce and Shopify stores. From fashion and electronics to food and handmade goods, we build online stores that are fast, secure, and engineered to convert browsers into buyers.</p>
                            <p>We go beyond just installing a theme. We design the full customer journey — from homepage to product page to checkout — with <strong className="text-brand-black">UX-driven layouts, mobile-first design, and optimized checkout flows</strong> that reduce cart abandonment and maximize revenue per visitor.</p>
                            <p>We serve ecommerce businesses across Pune — including brands in <strong className="text-brand-black">Wakad, Hinjewadi, Baner, Kothrud, Viman Nagar, Hadapsar, and Kharadi</strong>. Whether you're launching your first store or migrating from an existing platform, we manage the full process end-to-end.</p>
                        </div>
                        <div className="lg:w-[40%]">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">What's Included</h3>
                            <ul className="space-y-3">
                                {["WooCommerce / Shopify setup & design", "Razorpay, Stripe & PayPal integration", "Product catalog & category setup", "Mobile-first checkout optimization", "Inventory & order management", "Product SEO & schema markup", "GST tax configuration", "Post-launch training & support"].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-brand-muted">
                                        <span className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-3 h-3 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-brand-cream">
                <div className="container mx-auto px-6">
                    <div className="mb-10">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black">What makes our ecommerce stores different</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="p-7 rounded-2xl bg-white border border-gray-100 hover:border-brand-red/20 hover:shadow-lg transition-all group">
                                <div className="text-2xl mb-4">{f.icon}</div>
                                <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">{f.title}</h3>
                                <p className="text-brand-muted leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block">/Our Process/</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">Your store.<br />Live and selling.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10">
                        {[
                            { n: "01", title: "Product Discovery", desc: "We analyze your product catalog, shipping requirements, GST rules, and payment preferences to determine the best platform architecture for your business." },
                            { n: "02", title: "Design & User Flow", desc: "We design a seamless shopping journey from homepage to checkout — mapping every touchpoint to minimize friction, reduce abandonment, and maximize conversions." },
                            { n: "03", title: "Build & Integrate", desc: "We build the store, configure product pages, upload catalog, integrate payment gateways, and set up shipping rules — all tested across devices before launch." },
                            { n: "04", title: "Launch & Train", desc: "We stress-test the full checkout flow, go live, configure analytics, and provide hands-on training so you can manage products and orders independently." },
                        ].map((step) => (
                            <div key={step.n} className="group relative text-left p-8 flex flex-col gap-4 border-r border-white/10 last:border-r-0 bg-brand-dark" style={{ minHeight: '260px' }}>
                                <div className="absolute left-0 top-0 w-0.5 bg-brand-red" style={{ height: '0%', transition: 'height 0.4s ease' }} ref={(el) => { if (el) { el.parentElement?.addEventListener('mouseenter', () => { el.style.height = '100%'; }); el.parentElement?.addEventListener('mouseleave', () => { el.style.height = '0%'; }); } }} />
                                <span className="text-[11px] font-bold tracking-[0.2em] text-white/20">{step.n}</span>
                                <h3 className="text-xl font-bold text-white leading-tight">{step.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white" id="faq">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-10 text-center">
                            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3 block">FAQ</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black">Frequently Asked Questions</h2>
                            <p className="text-brand-muted mt-3 text-sm">About ecommerce development in Pune</p>
                        </div>
                        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors group">
                                        <span className={`font-semibold leading-snug pr-4 ${openFaq === i ? 'text-brand-red' : 'text-brand-black group-hover:text-brand-red'} transition-colors`}>{faq.q}</span>
                                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-brand-red text-white rotate-45' : 'bg-gray-100 text-gray-400'}`}><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg></span>
                                    </button>
                                    {openFaq === i && <div className="px-6 pb-5 text-brand-muted leading-relaxed border-t border-gray-50 pt-3">{faq.a}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default EcommerceDevelopmentPage;
