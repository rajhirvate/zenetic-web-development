
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';

const faqs = [
    { q: "What is a landing page and why do I need one?", a: "A landing page is a standalone web page built for a single goal — capturing leads, selling a product, or promoting a service. Unlike a homepage, it removes distractions and guides visitors to one specific action, dramatically improving conversion rates." },
    { q: "How much does a landing page cost in Pune?", a: "A professional landing page starts from ₹15,000 depending on complexity, animations, and integrations required. We provide a detailed quote after understanding your campaign goals." },
    { q: "How fast can you deliver a landing page?", a: "We typically deliver landing pages within 5–7 business days, making them perfect for time-sensitive ad campaigns and product launches." },
    { q: "Will the landing page work with my Google / Meta ads?", a: "Yes. We build landing pages with your ad campaign in mind — ensuring message match from ad copy to page headline, plus proper pixel setup for conversion tracking." },
    { q: "Can you integrate a lead form with my CRM?", a: "Yes. We can integrate your landing page form with any CRM — HubSpot, Zoho, Salesforce, or a simple Google Sheet — so leads are captured automatically." },
    { q: "Do you provide A/B testing support?", a: "Yes. We build landing pages with A/B testing in mind — duplicate variants are easy to create and we can set up Google Optimize or VWO for data-driven optimization." },
];

const features = [
    { icon: "🎯", title: "Conversion First", desc: "Every pixel is designed with one goal: conversion. We use psychological triggers, social proof, and clear CTAs to guide visitors to take action." },
    { icon: "⚡", title: "Blazing Fast", desc: "Speed kills bounce rates. Our landing pages load in under 2 seconds, ensuring you don't lose potential customers while they wait." },
    { icon: "📱", title: "Mobile Optimised", desc: "With paid traffic often being 70%+ mobile, we design frictionless mobile experiences where filling a form takes seconds." },
    { icon: "✍️", title: "Copywriting Support", desc: "Design attracts, copy converts. We help refine your headlines and value proposition to instantly hook visitors and communicate your offer." },
    { icon: "📊", title: "A/B Test Ready", desc: "We build page structures that are easy to duplicate and tweak — allowing you to split-test variants and continuously improve performance." },
    { icon: "📈", title: "Analytics & Pixels", desc: "We set up Google Ads conversion tracking, Meta Pixel, and GA4 events so you know exactly what's working and what isn't." },
];

const LandingPageDesignPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', service: 'Landing Page Design' });
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
            <SEO title="High-Converting Landing Page Design in Pune | Zenetic" description="We design high-converting landing pages for campaigns, products, and services in Pune. Focused on UI/UX, speed, and ROI-driven results. Delivered in 5–7 days." />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Landing Page Design", "name": "Landing Page Design Pune", "url": "https://zenetic.in/service/landing-page-design-pune", "description": "High-converting landing pages for Pune businesses.", "provider": { "@type": "LocalBusiness", "name": "Zenetic Enterprise - Web Solutions", "url": "https://zenetic.in", "telephone": "+919167041276", "email": "rajhirvate@gmail.com", "image": "https://zenetic.in/logo.png", "address": { "@type": "PostalAddress", "streetAddress": "Wakad", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" } }, "areaServed": { "@type": "City", "name": "Pune" }, "offers": { "@type": "Offer", "priceCurrency": "INR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 15000, "priceCurrency": "INR" }, "availability": "https://schema.org/InStock" } }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenetic.in" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zenetic.in/services" }, { "@type": "ListItem", "position": 3, "name": "Landing Page Design Pune", "item": "https://zenetic.in/service/landing-page-design-pune" }] }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

            <section className="relative bg-brand-cream overflow-hidden py-16 md:py-0 md:min-h-[92vh] flex items-center">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10" />
                <div className="container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-muted mb-8 md:mb-10">
                        <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <Link to="/services" className="text-brand-muted hover:text-brand-red transition-colors">Services</Link>
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-brand-red font-semibold">Landing Page Design Pune</span>
                    </nav>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Conversion Focused</span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-brand-black mb-6 uppercase leading-[0.9]">Landing Pages<br />That<br /><span className="text-brand-red">Convert</span></h1>
                            <p className="text-lg text-brand-muted leading-relaxed mb-8 max-w-lg">Stop wasting ad spend on pages that don't convert. We design data-driven landing pages for Pune businesses that turn ad clicks into real leads and sales.</p>
                            <div className="flex flex-wrap gap-6 mb-8">
                                {[{ val: "5–7", label: "Days Delivery" }, { val: "3x", label: "Avg. Lead Boost" }, { val: "₹15K", label: "Starting Price" }].map((s) => (
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
                            <p className="text-sm text-brand-muted mb-6">Tell us about your campaign — we'll get back within 24 hours.</p>
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
                                            <option>Landing Page Design</option>
                                            <option>Google Ads Landing Page</option>
                                            <option>Meta Ads Landing Page</option>
                                            <option>Product Launch Page</option>
                                            <option>Lead Generation Page</option>
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
                            <h2 className="text-3xl font-bold tracking-tighter text-brand-black">Landing Page Design Services in Pune</h2>
                            <p><strong className="text-brand-black">Zenetic</strong> designs and builds high-converting landing pages for businesses in Pune running Google Ads, Meta Ads, or product launch campaigns. A great landing page is the difference between a profitable campaign and one that bleeds budget.</p>
                            <p>Our landing pages are built with <strong className="text-brand-black">conversion rate optimization (CRO) principles</strong> at their core — clear headline hierarchy, trust signals, social proof, urgency elements, and frictionless lead capture forms designed to maximize results.</p>
                            <p>We serve businesses across Pune — including <strong className="text-brand-black">Wakad, Hinjewadi, Baner, Kothrud, Viman Nagar, and Koregaon Park</strong>. Whether you're a real estate developer, coaching institute, clinic, or SaaS company, we build landing pages tailored to your audience and campaign objectives.</p>
                        </div>
                        <div className="lg:w-[40%]">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">What's Included</h3>
                            <ul className="space-y-3">
                                {["Custom UI/UX design (no templates)", "Mobile-first responsive development", "Google Ads / Meta Pixel setup", "Lead form with CRM integration", "WhatsApp & call button integration", "Speed optimization (<2s load time)", "A/B testing structure setup", "5–7 business day delivery"].map((item) => (
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black">What makes our landing pages convert</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">Built in days.<br />Optimised to convert.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10">
                        {[
                            { n: "01", title: "Offer & Audience Analysis", desc: "We study your offer, target audience, and ad creative to ensure perfect message match from click to page — the #1 factor in landing page conversion." },
                            { n: "02", title: "Wireframe & Copy", desc: "We map out the full page flow and write or refine the headline, subheadline, and body copy to address pain points and present your solution compellingly." },
                            { n: "03", title: "Design & Build", desc: "We design and code the landing page using lightweight, fast-loading code — pixel-perfect on desktop and mobile, with smooth animations and a clear CTA." },
                            { n: "04", title: "Track & Hand Off", desc: "We verify all forms, buttons, and tracking pixels fire correctly, then hand over the live URL with full analytics access and a performance monitoring brief." },
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
                            <p className="text-brand-muted mt-3 text-sm">About landing page design in Pune</p>
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

export default LandingPageDesignPage;
