import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebDesignPage from './pages/service/WebDesignPage';


import WordPressDevelopmentPage from './pages/service/WordPressDevelopmentPage';
import ReactNextDevelopmentPage from './pages/service/ReactNextDevelopmentPage';
import LandingPageDesignPage from './pages/service/LandingPageDesignPage';
import EcommerceDevelopmentPage from './pages/service/EcommerceDevelopmentPage';
import ServicesPage from './pages/ServicesPage';

import SEO from './components/SEO';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import SemanticSEO from './components/SemanticSEO';
import FloatingCTA from './components/FloatingCTA';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zenetic Enterprise - Web Solutions",
  "alternateName": "Zenetic",
  "url": "https://zenetic.in",
  "logo": "https://zenetic.in/logo.png",
  "image": "https://zenetic.in/logo.png",
  "description": "Zenetic is a Pune-based web design and development agency specializing in custom websites, WordPress development, React & Next.js applications, landing pages, and ecommerce solutions.",
  "telephone": "+919167041276",
  "email": "rajhirvate@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wakad",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411057",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5983",
    "longitude": "73.7609"
  },
  "areaServed": [
    { "@type": "City", "name": "Pune" },
    { "@type": "State", "name": "Maharashtra" }
  ],
  "priceRange": "₹₹",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.instagram.com/rajhirvate/",
    "https://www.linkedin.com/in/rajhirvate/",
    "https://x.com/rajhirvate"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development Pune", "url": "https://zenetic.in/service/web-design-development-pune" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development Pune", "url": "https://zenetic.in/service/wordpress-development-pune" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React & Next.js Development Pune", "url": "https://zenetic.in/service/react-nextjs-development-pune" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Design Pune", "url": "https://zenetic.in/service/landing-page-design-pune" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce Website Development Pune", "url": "https://zenetic.in/service/ecommerce-website-development-pune" } }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zenetic",
  "url": "https://zenetic.in",
  "description": "Pune's trusted web design and development agency.",
  "publisher": {
    "@type": "Organization",
    "name": "Zenetic Enterprise - Web Solutions",
    "logo": { "@type": "ImageObject", "url": "https://zenetic.in/logo.png" }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://zenetic.in/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Home: React.FC = () => (
  <main>
    <SEO
      title="Web Design & Development Agency in Pune | Zenetic"
      description="We build modern, high-performance websites that help businesses grow. Zenetic is a trusted web design & development agency in Pune."
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <Hero />
    <Services />
    <Work />
    <AboutMe />
    <TechStack />
    <Contact />
    <SemanticSEO />
  </main>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-brand-black bg-brand-cream selection:bg-brand-red selection:text-white">
        <Header scrolled={scrolled} />
        <FloatingCTA />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/web-design-development-pune" element={<WebDesignPage />} />
          <Route path="/service/wordpress-development-pune" element={<WordPressDevelopmentPage />} />
          <Route path="/service/react-nextjs-development-pune" element={<ReactNextDevelopmentPage />} />
          <Route path="/service/landing-page-design-pune" element={<LandingPageDesignPage />} />
          <Route path="/service/ecommerce-website-development-pune" element={<EcommerceDevelopmentPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};


export default App;
