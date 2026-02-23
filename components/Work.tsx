
import React from 'react';

const sectors = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Food & Beverage",
    description: "Restaurants, cafés, cloud kitchens, FMCG brands, food startups.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Professional Services",
    description: "Law firms, consultants, CA firms, agencies, freelancers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Hospitality & Leisure",
    description: "Hotels, resorts, spas, event venues, travel experiences.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Logistics & Delivery",
    description: "Courier companies, logistics startups, transport services.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Finance & Fintech",
    description: "NBFCs, fintech apps, loan agencies, accounting platforms.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.069A1 1 0 0121 8.81v6.38a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Gaming & Entertainment",
    description: "Gaming communities, content creators, media companies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "SaaS & Tech Startups",
    description: "Landing pages, dashboards, MVP websites, product sites.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Education & Coaching",
    description: "Institutes, online courses, tutors, LMS-based platforms.",
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Industries</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black leading-none">
              Tailored solutions for <br />
              <span className="text-brand-muted">diverse sectors.</span>
            </h3>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-red inline-block"></span>
              8 Industries
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-3xl overflow-hidden border border-gray-200">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative bg-white p-8 group hover:bg-brand-red transition-all duration-300 overflow-hidden"
            >
              {/* Number accent */}
              <span className="absolute top-6 right-6 text-[11px] font-black tracking-widest text-gray-200 group-hover:text-white/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 group-hover:bg-white/20 flex items-center justify-center text-brand-red group-hover:text-white mb-6 transition-all duration-300">
                {sector.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-brand-black group-hover:text-white mb-2 transition-colors leading-tight">
                {sector.title}
              </h4>

              {/* Description */}
              <p className="text-brand-muted group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {sector.description}
              </p>

              {/* Bottom accent line that slides in on hover */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
