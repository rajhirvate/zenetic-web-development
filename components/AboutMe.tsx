
import React from 'react';

const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Happy Clients" },
    { value: "Pune", label: "Based & Trusted" },
];

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cream/50 -z-10 rounded-l-[80px]" />

            <div className="container mx-auto px-6">

                {/* Section label */}
                <div className="mb-14">
                    <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">About Us</span>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black leading-none">
                            Crafted by <br />
                            <span className="text-brand-muted">digital experts.</span>
                        </h2>
                        <p className="text-brand-muted text-lg max-w-sm md:text-right leading-relaxed">
                            A Pune-based web agency helping businesses grow through custom websites, technical excellence, and digital strategy.
                        </p>
                    </div>
                </div>

                {/* Main two-column layout */}
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* LEFT: Agency story + stats */}
                    <div className="lg:w-[55%] flex flex-col justify-between gap-10">

                        {/* Story text */}
                        <div className="space-y-5 text-brand-muted text-lg leading-relaxed">
                            <p>
                                Zenetic is a full-stack web development and digital growth agency founded in Pune. We build high-performance websites, web applications, and digital experiences that go beyond aesthetics — everything we create is engineered to rank, convert, and scale.
                            </p>
                            <p>
                                From first-time business owners looking for their first website to established brands ready to level up, we partner with Pune businesses to build a stronger, faster, and smarter digital presence. <strong className="text-brand-black">No templates. No shortcuts. Just clean code and real results.</strong>
                            </p>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white p-6 flex flex-col items-center justify-center text-center group hover:bg-brand-red transition-all duration-300">
                                    <span className="text-3xl font-black text-brand-black group-hover:text-white transition-colors mb-1">{stat.value}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted group-hover:text-white/70 transition-colors">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-white bg-brand-red rounded-full hover:bg-brand-black transition-all duration-300 group"
                            >
                                Work With Us
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-brand-black border-2 border-brand-black/10 rounded-full hover:border-brand-red hover:text-brand-red transition-all duration-300"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Founder card */}
                    <div className="lg:w-[45%]">
                        <div className="relative bg-brand-dark rounded-3xl overflow-hidden h-full min-h-[480px] flex flex-col justify-end p-8 group">

                            {/* Photo fills card */}
                            <img
                                src="/raj.webp"
                                alt="Raj Hirvate — Founder, Zenetic"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-70 group-hover:scale-[1.02] transition-all duration-700"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />

                            {/* Content over image */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-8 h-0.5 bg-brand-red rounded-full" />
                                    <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Meet the Founder</span>
                                </div>
                                <h3 className="text-3xl font-extrabold text-white mb-1">Raj Hirvate</h3>
                                <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-5">Full-Stack Developer & Founder</p>
                                <p className="text-white/80 text-base leading-relaxed max-w-sm">
                                    With 100+ websites designed and delivered, Raj leads Zenetic's technical vision — combining deep expertise in WordPress, React, and Next.js with a passion for building digital experiences that actually perform.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
