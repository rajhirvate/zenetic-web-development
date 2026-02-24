
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

const serviceLinks = [
  { to: '/service/web-design-development-pune', label: 'Web Design', sub: 'Custom Websites & SEO' },
  { to: '/service/wordpress-development-pune', label: 'WordPress', sub: 'CMS, Plugins & E-comm' },
  { to: '/service/react-nextjs-development-pune', label: 'React & Next.js', sub: 'SaaS, MVP & Web Apps' },
  { to: '/service/landing-page-design-pune', label: 'Landing Pages', sub: 'High Converting Designs' },
  { to: '/service/ecommerce-website-development-pune', label: 'Ecommerce Website', sub: 'WooCommerce & Shopify' },
];

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileOpen(false);
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-brand-red/10' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsMobileOpen(false)}>
            <div className="w-10 h-10 relative overflow-hidden">
              <img src="/logo.png" alt="Zenetic Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter uppercase text-brand-black">
              Zenetic<span className="text-brand-red">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-semibold tracking-wide uppercase hover:text-brand-red transition-colors duration-300 flex items-center gap-1">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-white rounded-xl shadow-xl border border-brand-black/5 p-2 overflow-hidden">
                  {serviceLinks.map((s) => (
                    <Link key={s.to} to={s.to} className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item" onClick={() => setIsServicesOpen(false)}>
                      <div className="text-xs font-bold uppercase tracking-widest mb-1">{s.label}</div>
                      <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">{s.sub}</div>
                    </Link>
                  ))}
                  <a href="/#services" onClick={(e) => { setIsServicesOpen(false); handleNavClick(e, 'services'); }} className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1">All Services</div>
                    <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">Explore our full offers</div>
                  </a>
                </div>
              </div>
            </div>

            {['Work', 'About', 'Tech', 'Contact'].map((item) => (
              <a
                key={item}
                href={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-sm font-semibold tracking-wide uppercase hover:text-brand-red transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a href="tel:9167041276" className="bg-brand-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-red transition-all duration-300 transform hover:scale-105">
              Start a Project
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-brand-black p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[80vw] max-w-sm z-50 bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2">
            <img src="/logo.png" alt="Zenetic" className="w-7 h-7 object-contain" />
            <span className="text-lg font-extrabold tracking-tighter uppercase">Zenetic<span className="text-brand-red">.</span></span>
          </Link>
          <button onClick={() => setIsMobileOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">

          {/* Services accordion */}
          <button
            className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-red transition-colors"
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
          >
            Services
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isMobileServicesOpen && (
            <div className="pl-3 pb-2 space-y-1 border-l-2 border-brand-red/20">
              {serviceLinks.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-2.5 px-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                >
                  <div className="text-xs font-bold uppercase tracking-widest">{s.label}</div>
                  <div className="text-[10px] text-brand-muted mt-0.5">{s.sub}</div>
                </Link>
              ))}
            </div>
          )}

          {/* Main nav links */}
          {[
            { label: 'Our Work', id: 'work' },
            { label: 'About', id: 'about' },
            { label: 'Technologies', id: 'tech' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={isHome ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="block py-3 text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-red transition-colors border-b border-gray-50"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="px-6 py-6 border-t border-gray-100 space-y-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="block w-full bg-brand-red text-white text-center py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300"
          >
            Start a Project
          </a>
          <a href="tel:9167041276" className="block w-full border-2 border-brand-black/10 text-brand-black text-center py-3.5 rounded-full text-sm font-bold tracking-widest uppercase hover:border-brand-red hover:text-brand-red transition-all duration-300">
            +91 91670 41276
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
