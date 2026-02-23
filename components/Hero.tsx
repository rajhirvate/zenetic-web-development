
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden overflow-x-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red text-xs font-bold tracking-widest uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            Pune's Leading Web Specialists
          </div>

          <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-brand-black uppercase overflow-hidden">
            WEB DESIGN & <span className="text-brand-red">DEVELOPMENT</span> AGENCY IN PUNE
          </h1>

          <p className="text-xl md:text-2xl text-brand-muted max-w-2xl leading-relaxed mb-12">
            We build modern, high-performance websites that help businesses grow. Zenetic is a trusted web design & development agency in Pune.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-black transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#work"
              className="bg-white border-2 border-brand-black text-brand-black px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-cream transition-all duration-300 text-center"
            >
              Our Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Floating Logo Representation */}
      <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 w-1/3 opacity-5 pointer-events-none animate-float">
        <img
          src="/logo.png"
          alt="Zenetic Branding"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
