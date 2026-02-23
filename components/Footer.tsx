
import React from 'react';

const serviceLinks = [
  { label: "Web Design & Development", href: "/service/web-design-development-pune" },
  { label: "WordPress Development", href: "/service/wordpress-development-pune" },
  { label: "React & Next.js Development", href: "/service/react-nextjs-development-pune" },
  { label: "Landing Page Design", href: "/service/landing-page-design-pune" },
  { label: "Ecommerce Development", href: "/service/ecommerce-website-development-pune" },
];

const navLinks = [
  { label: "What We Offer", href: "#services" },
  { label: "Industries", href: "#work" },
  { label: "Technologies", href: "#tech" },
  { label: "About Us", href: "#about" },
  { label: "Get a Quote", href: "#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">

      {/* ── Top strip with map + columns ── */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1.4fr] gap-12 mb-16">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img src="/logo.png" alt="Zenetic Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Zenetic.</span>
            </div>
            <p className="text-brand-muted leading-relaxed text-sm">
              A Pune-based web agency helping businesses build a stronger digital presence through custom websites, performance marketing, and technical excellence.
            </p>
            {/* Contact under tagline */}
            <div className="space-y-2 pt-1">
              <a href="tel:+919167041276" className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors text-sm">
                <svg className="w-4 h-4 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 91670 41276
              </a>
              <a href="mailto:rajhirvate@gmail.com" className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors text-sm">
                <svg className="w-4 h-4 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rajhirvate@gmail.com
              </a>
            </div>
            {/* Social links */}
            <div className="flex gap-5 pt-2">
              <a href="https://x.com/rajhirvate" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-brand-muted hover:border-brand-red hover:text-brand-red transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/rajhirvate/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-brand-muted hover:border-brand-red hover:text-brand-red transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/rajhirvate/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-brand-muted hover:border-brand-red hover:text-brand-red transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h5 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-6">What We Do</h5>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + Contact */}
          {/* Navigation only — no contact (moved to brand col) */}
          <div>
            <h5 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-6">Navigation</h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h5 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-6">Find Us</h5>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7745932.440881531!2d64.07575962499999!3d18.565309700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62e2ee2851c5d09f%3A0xdd626f3c067b6bff!2sZenetic%20Enterprise%20-%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1771861371490!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zenetic Office Location - Pune"
              />
            </div>
            <a
              href="https://share.google/k5PfXyEURyF5SELIK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-xs text-brand-muted hover:text-brand-red transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View on Google Maps →
            </a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Zenetic Enterprise Solutions. All Rights Reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Crafted with ❤️ in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
