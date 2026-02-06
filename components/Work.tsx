
import React from 'react';

const sectors = [
  {
    icon: "🍽️",
    title: "Food & Beverage",
    description: "Restaurants, cafés, cloud kitchens, FMCG brands, food startups."
  },
  {
    icon: "💼",
    title: "Professional Services",
    description: "Law firms, consultants, CA firms, agencies, freelancers."
  },
  {
    icon: "🏨",
    title: "Hospitality & Leisure",
    description: "Hotels, resorts, spas, event venues, travel experiences."
  },
  {
    icon: "🚚",
    title: "Logistics & Delivery",
    description: "Courier companies, logistics startups, transport services."
  },
  {
    icon: "💳",
    title: "Finance & Fintech",
    description: "NBFCs, fintech apps, loan agencies, accounting platforms."
  },
  {
    icon: "🎮",
    title: "Gaming & Entertainment",
    description: "Gaming communities, content creators, media companies."
  },
  {
    icon: "💻",
    title: "SaaS & Tech Startups",
    description: "Landing pages, dashboards, MVP websites, product sites."
  },
  {
    icon: "🎓",
    title: "Education & Coaching",
    description: "Institutes, online courses, tutors, LMS-based platforms."
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Industries</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black">
            Tailored solutions for <br /><span className="text-brand-muted">diverse sectors.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="text-4xl mb-6">{sector.icon}</div>
              <h4 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">{sector.title}</h4>
              <p className="text-brand-muted text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
