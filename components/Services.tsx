
import React from 'react';

const services = [
  {
    title: "Full-Stack Web Development",
    description: "From custom PHP applications to high-performance Next.js platforms. We build robust, scalable websites that serve as your business's 24/7 salesperson.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    ),
    tags: ["Next.js", "WordPress", "PHP", "React"]
  },
  {
    title: "Performance Marketing",
    description: "Driving qualified traffic to your newly built site. We specialize in ROI-focused campaigns that turn visitors into loyal customers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    ),
    tags: ["Google Ads", "Social Ads", "Conversion"]
  },
  {
    title: "Local SEO (Pune Focus)",
    description: "Dominate Pune's local search landscape. We help you win the Google Map Pack and show up when local customers need you most.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    tags: ["Pune SEO", "Google My Business", "Reviews"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">What We Offer</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Pune's choice for <span className="opacity-80">digital growth.</span>
            </h3>
          </div>
          <p className="text-brand-muted max-w-xs text-lg mb-2">
            We build web solutions that are as functional as they are beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-red/50 transition-all duration-500 hover:bg-white/[0.07]"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(209,0,0,0.3)]">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-brand-muted leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
