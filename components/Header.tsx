
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Helper to handle navigation scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-brand-red/10' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 relative overflow-hidden">
            <img
              src="/logo.png"
              alt="Zenetic Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase text-brand-black">
            Zenetic<span className="text-brand-red">.</span>
          </span>
        </Link>

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

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white rounded-xl shadow-xl border border-brand-black/5 p-2 overflow-hidden">
                <Link
                  to="/service/web-design-development-pune"
                  className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item"
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1">Web Design</div>
                  <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">Custom Websites & SEO</div>
                </Link>
                <Link
                  to="/service/wordpress-development-pune"
                  className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item"
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1">WordPress</div>
                  <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">CMS, Plugins & E-comm</div>
                </Link>
                <Link
                  to="/service/react-nextjs-development-pune"
                  className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item"
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1">React & Next.js</div>
                  <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">SaaS, MVP & Web Apps</div>
                </Link>
                <Link
                  to="/service/landing-page-design-pune"
                  className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item"
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1">Landing Pages</div>
                  <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">High Converting Designs</div>
                </Link>
                <Link
                  to="/service/ecommerce-website-development-pune"
                  className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item"
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1">Ecommerce Website</div>
                  <div className="text-[10px] text-brand-muted group-hover/item:text-brand-red/70">WooCommerce & Shopify</div>
                </Link>
                <a
                  href="/#services"
                  onClick={(e) => {
                    setIsServicesOpen(false);
                    handleNavClick(e, 'services');
                  }}
                  className="block p-3 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-colors group/item"
                >
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
          <a
            href="tel:9167041276"
            className="bg-brand-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-red transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
          </a>
        </div>

        <button className="md:hidden text-brand-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
