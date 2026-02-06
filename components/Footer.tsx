
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 relative">
                <img
                  src="/logo.png"
                  alt="Zenetic Logo"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Zenetic.</span>
            </div>
            <p className="text-brand-muted leading-relaxed">
              Crafting high-performance website solutions for bold brands and visionary startups.
            </p>
          </div>

          <div>
            <h5 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-8">What We Do</h5>
            <ul className="space-y-4">
              <li><a href="#services" className="text-brand-muted hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-brand-muted hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="text-brand-muted hover:text-white transition-colors">Local SEO</a></li>
              <li><a href="#tech" className="text-brand-muted hover:text-white transition-colors">Next.js & WordPress</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-8">Navigation</h5>
            <ul className="space-y-4">
              <li><a href="#work" className="text-brand-muted hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#tech" className="text-brand-muted hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#contact" className="text-brand-muted hover:text-white transition-colors">Get Quote</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-8">Contact Direct</h5>
            <div className="space-y-4">
              <a href="tel:+919167041276" className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 91670 41276
              </a>
              <a href="mailto:rajhirvate@gmail.com" className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                rajhirvate@gmail.com
              </a>
              <p className="text-brand-muted text-sm pt-4">
                Pune, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-muted text-xs uppercase tracking-widest">
            © 2026 Zenetic Enterprise Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="https://x.com/rajhirvate" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-brand-muted hover:text-brand-red transition-colors">
              X
            </a>
            <a href="https://www.instagram.com/rajhirvate/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-brand-muted hover:text-brand-red transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/rajhirvate/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-brand-muted hover:text-brand-red transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
