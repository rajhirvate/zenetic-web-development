
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const faqs = [
    {
        q: "How much does a website cost in Pune?",
        a: "A professional business website in Pune starts from ₹15,000 depending on the complexity, number of pages, and features required. We provide a detailed quote after understanding your requirements."
    },
    {
        q: "How long does it take to build a website?",
        a: "Most business websites take 2–4 weeks. Complex web applications and ecommerce stores may take 4–8 weeks depending on scope, content readiness, and revision cycles."
    },
    {
        q: "Do you provide SEO with web design?",
        a: "Yes. All websites we build are SEO-optimized from day one — clean semantic code, fast loading, mobile-first design, proper heading structure, meta tags, and Core Web Vitals compliance."
    },
    {
        q: "Will my website work on mobile and tablets?",
        a: "Absolutely. Every website we build is fully responsive and tested across all major devices and screen sizes — mobile, tablet, laptop, and desktop."
    },
    {
        q: "Can I update my website content myself?",
        a: "Yes. We build websites with easy-to-use admin panels (WordPress CMS or custom dashboards) so you can update text, images, and blogs without needing a developer."
    },
    {
        q: "Do you provide website hosting and maintenance?",
        a: "We can help you set up hosting and provide ongoing maintenance packages for security updates, performance monitoring, content updates, and technical support."
    },
];

const features = [
    { icon: "✦", title: "Custom Design", desc: "No templates. Every interface is designed from scratch to reflect your brand and stand out in the Pune market." },
    { icon: "📱", title: "Mobile First", desc: "70%+ of web traffic is mobile. We ensure flawless performance and aesthetics on every screen size." },
    { icon: "⚡", title: "Speed Optimized", desc: "Core Web Vitals compliance, lazy loading, and clean code ensure lightning-fast page loads." },
    { icon: "🔍", title: "SEO Ready", desc: "Built with semantic HTML, proper heading structure, meta tags, and local Pune keyword optimization." },
    { icon: "🔒", title: "Secure & Scalable", desc: "HTTPS, secure coding practices, and architectures designed to grow with your business." },
    { icon: "🛠️", title: "Easy to Manage", desc: "We hand you a site you can actually update — WordPress CMS or custom admin panels built for real people." },
];

const WebDesignPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', service: 'Web Design & Development' });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formError, setFormError] = useState('');

    const handleQuickSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setFormError('');

        const payload = {
            name: formData.name,
            email: 'n/a',
            phone: formData.phone,
            requirements: [formData.service],
            pageUrl: window.location.href,
            timestamp: new Date().toISOString(),
            honeypot: ''
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Failed to submit');

            setFormStatus('success');
            const text = `Hi, I'm interested in ${formData.service}. My name is ${formData.name}, phone: ${formData.phone}. Please get in touch.`;
            setTimeout(() => window.open(`https://wa.me/919167041276?text=${encodeURIComponent(text)}`, '_blank'), 500);

        } catch (err: any) {
            console.error(err);
            setFormStatus('error');
            setFormError('Something went wrong. Please try WhatsApp directly.');
        }
    };

    return (
        <div className="pt-20 font-sans">
            <SEO
                title="Web Design & Development Services for Businesses in Pune | Zenetic"
                description="Professional web design and development services in Pune for businesses and startups. Fast, scalable, SEO-friendly websites built to convert."
            />

            {/* SEO Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "Service",
                    "serviceType": "Web Design & Development", "name": "Web Design & Development Pune",
                    "url": "https://zenetic.in/service/web-design-development-pune",
                    "description": "Professional web design and development services in Pune for businesses and startups. Fast, scalable, SEO-friendly websites built to convert.",
                    "provider": {
                        "@type": "LocalBusiness", "name": "Zenetic Enterprise - Web Solutions",
                        "url": "https://zenetic.in", "telephone": "+919167041276", "email": "rajhirvate@gmail.com",
                        "image": "https://zenetic.in/logo.png",
                        "address": { "@type": "PostalAddress", "streetAddress": "Wakad", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" }
                    },
                    "areaServed": { "@type": "City", "name": "Pune" },
                    "offers": { "@type": "Offer", "priceCurrency": "INR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 15000, "priceCurrency": "INR" }, "availability": "https://schema.org/InStock" }
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenetic.in" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zenetic.in/services" },
                        { "@type": "ListItem", "position": 3, "name": "Web Design & Development Pune", "item": "https://zenetic.in/service/web-design-development-pune" }
                    ]
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
                })
            }} />

            {/* ── HERO ── */}
            <section className="relative bg-brand-cream overflow-hidden py-16 md:py-0 md:min-h-[92vh] flex items-center">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-black/3 rounded-full blur-3xl -z-10" />

                <div className="container mx-auto px-6">

                    {/* Visual Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-muted mb-8 md:mb-10">
                        <a href="/" className="hover:text-brand-red transition-colors font-medium">Home</a>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <Link to="/services" className="text-brand-muted hover:text-brand-red transition-colors">Services</Link>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-brand-red font-semibold">Web Design & Development Pune</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left: Content */}
                        <div>
                            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Web Design Agency Pune</span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-brand-black mb-6 uppercase leading-[0.9]">
                                Web Design &<br /><span className="text-brand-red">Development</span><br />in Pune
                            </h1>
                            <p className="text-lg text-brand-muted leading-relaxed mb-8 max-w-lg">
                                We craft high-performance, conversion-focused websites for Pune businesses — custom designed, mobile-first, and SEO-ready from day one.
                            </p>

                            {/* Trust stats */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                {[
                                    { val: "100+", label: "Websites Built" },
                                    { val: "5+", label: "Years in Pune" },
                                    { val: "₹15K", label: "Starting Price" },
                                ].map((s) => (
                                    <div key={s.label} className="flex flex-col">
                                        <span className="text-2xl font-black text-brand-black">{s.val}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-brand-muted">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 shadow-lg shadow-brand-red/20 group">
                                Get a Free Quote
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Right: Quick lead form */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-brand-black/5 border border-gray-100 p-8 md:p-10">
                            <h2 className="text-xl font-bold text-brand-black mb-1">Get a Free Consultation</h2>
                            <p className="text-sm text-brand-muted mb-6">Tell us about your project — we'll get back within 24 hours.</p>

                            {formStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center">
                                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                                        <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-brand-black text-lg">Thank you!</p>
                                    <p className="text-brand-muted text-sm mt-1">Redirecting you to WhatsApp…</p>
                                </div>
                            ) : (
                                <form onSubmit={handleQuickSubmit} className="space-y-5">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Your Name *</label>
                                        <input
                                            type="text" required
                                            value={formData.name}
                                            onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                            placeholder="e.g. Rahul Sharma"
                                            className="w-full border-b-2 border-gray-200 focus:border-brand-red outline-none py-3 text-base bg-transparent transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Phone Number *</label>
                                        <input
                                            type="tel" required
                                            value={formData.phone}
                                            onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                            placeholder="+91 98765 43210"
                                            className="w-full border-b-2 border-gray-200 focus:border-brand-red outline-none py-3 text-base bg-transparent transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">I Need</label>
                                        <select
                                            value={formData.service}
                                            onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                                            className="w-full border-b-2 border-gray-200 focus:border-brand-red outline-none py-3 text-base bg-transparent transition-colors text-brand-black"
                                        >
                                            <option>Web Design & Development</option>
                                            <option>WordPress Website</option>
                                            <option>React / Next.js App</option>
                                            <option>Landing Page</option>
                                            <option>Ecommerce Store</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-brand-red text-white py-4 rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                                    >
                                        {formStatus === 'submitting' ? 'Sending…' : (
                                            <>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.054 23.454a.5.5 0 00.492.593l5.876-1.541A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.784-.535-5.354-1.462l-.382-.227-3.966 1.04 1.06-3.865-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                                </svg>
                                                WhatsApp Us Now
                                            </>
                                        )}
                                    </button>
                                    <p className="text-[10px] text-center text-brand-muted">No spam. Free consultation. We'll respond within 2 hours.</p>
                                    {formStatus === 'error' && (
                                        <p className="text-xs text-center text-red-500">{formError}</p>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEMANTIC SEO CONTENT ── */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <div className="lg:w-[60%] space-y-5 text-brand-muted leading-relaxed text-base">
                            <h2 className="text-3xl font-bold tracking-tighter text-brand-black">
                                Web Design & Development Services in Pune
                            </h2>
                            <p>
                                <strong className="text-brand-black">Zenetic</strong> is a Pune-based web design and development agency specializing in building custom, high-performance websites for businesses of all sizes. Whether you're a local Pune business looking for your first professional website, or an established company ready to revamp your digital presence, we design and develop websites that are fast, scalable, mobile-friendly, and built to rank on Google.
                            </p>
                            <p>
                                Unlike generic web design agencies that rely on off-the-shelf templates, every website we build at Zenetic is custom-designed from scratch — reflecting your brand identity and tailored to your target audience. Our websites are built using modern technologies like <strong className="text-brand-black">React, Next.js, WordPress, and Tailwind CSS</strong>, ensuring clean code, excellent Core Web Vitals scores, and long-term maintainability.
                            </p>
                            <p>
                                We serve businesses across Pune — including areas like <strong className="text-brand-black">Wakad, Hinjewadi, Baner, Kothrud, Viman Nagar, Koregaon Park, Hadapsar, and Kharadi</strong>. Our web design services are trusted by restaurants, professional service firms, startups, ecommerce stores, and real estate businesses throughout Pune and Maharashtra.
                            </p>
                        </div>
                        <div className="lg:w-[40%]">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">What's Included</h3>
                            <ul className="space-y-3">
                                {[
                                    "Custom UI/UX Design (no templates)",
                                    "Mobile-first responsive development",
                                    "On-page SEO setup & meta optimization",
                                    "Google Analytics & Search Console setup",
                                    "Contact forms & WhatsApp integration",
                                    "Speed optimization (Core Web Vitals)",
                                    "CMS / admin panel for easy editing",
                                    "1 month post-launch support",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-brand-muted">
                                        <span className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className="py-16 bg-brand-cream">
                <div className="container mx-auto px-6">
                    <div className="mb-10">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black">What makes our websites different</h2>
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

            {/* ── PROCESS ── */}
            <section className="py-16 bg-brand-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block">/Our Process/</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
                                Strategic execution.<br />Predictable results.
                            </h2>
                        </div>
                    </div>

                    {/* Always-visible cards, red border on hover only */}
                    <div className="grid grid-cols-1 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10">
                        {[
                            { n: "01", title: "Discovery & Strategy", desc: "We start by understanding your business goals, Pune target audience, and competitors. We create a sitemap and wireframes to outline the full site structure before a single line of code is written." },
                            { n: "02", title: "Design & UI/UX", desc: "Our designers create high-fidelity mockups focused on user experience — intuitive navigation, visual hierarchy, brand consistency, and mobile-first layouts that look beautiful on every device." },
                            { n: "03", title: "Development", desc: "We build your site using React, Next.js, or WordPress — clean, semantic, and SEO-optimized code. Every component is engineered for performance, accessibility, and long-term maintainability." },
                            { n: "04", title: "Launch & Support", desc: "After rigorous cross-device testing, we go live. We provide CMS training, set up Google Analytics and Search Console, and offer ongoing support packages post-launch." },
                        ].map((step) => (
                            <div
                                key={step.n}
                                className="group relative text-left p-8 flex flex-col gap-4 border-r border-white/10 last:border-r-0 bg-brand-dark"
                                style={{ minHeight: '260px' }}
                            >
                                {/* Red left border — slides down on hover */}
                                <div
                                    className="absolute left-0 top-0 w-0.5 bg-brand-red"
                                    style={{ height: '0%', transition: 'height 0.4s ease' }}
                                    ref={(el) => {
                                        if (el) {
                                            el.parentElement?.addEventListener('mouseenter', () => { el.style.height = '100%'; });
                                            el.parentElement?.addEventListener('mouseleave', () => { el.style.height = '0%'; });
                                        }
                                    }}
                                />

                                <span className="text-[11px] font-bold tracking-[0.2em] text-white/20">{step.n}</span>
                                <h3 className="text-xl font-bold text-white leading-tight">{step.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-16 bg-white" id="faq">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-10 text-center">
                            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3 block">FAQ</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black">Frequently Asked Questions</h2>
                            <p className="text-brand-muted mt-3 text-sm">About web design & development in Pune</p>
                        </div>

                        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors group"
                                    >
                                        <span className={`font-semibold leading-snug pr-4 ${openFaq === i ? 'text-brand-red' : 'text-brand-black group-hover:text-brand-red'} transition-colors`}>
                                            {faq.q}
                                        </span>
                                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-brand-red text-white rotate-45' : 'bg-gray-100 text-gray-400'}`}>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </span>
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-5 text-brand-muted leading-relaxed border-t border-gray-50 pt-3">
                                            {faq.a}
                                        </div>
                                    )}
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

export default WebDesignPage;
