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

import SEO from './components/SEO';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home: React.FC = () => (
  <main>
    <SEO
      title="Web Design & Development Agency in Pune | Zenetic"
      description="We build modern, high-performance websites that help businesses grow. Zenetic is a trusted web design & development agency in Pune."
    />
    <Hero />
    <Services />
    <Work />
    <AboutMe />
    <TechStack />
    <Contact />
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/web-design-development-pune" element={<WebDesignPage />} />
          <Route path="/service/wordpress-development-pune" element={<WordPressDevelopmentPage />} />
          <Route path="/service/react-nextjs-development-pune" element={<ReactNextDevelopmentPage />} />
          <Route path="/service/landing-page-design-pune" element={<LandingPageDesignPage />} />
          <Route path="/service/ecommerce-website-development-pune" element={<EcommerceDevelopmentPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};


export default App;
