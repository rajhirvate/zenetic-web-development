
import React from 'react';

const techs = [
  { name: 'Next.js', color: 'border-black' },
  { name: 'WordPress', color: 'border-blue-500' },
  { name: 'React', color: 'border-cyan-400' },
  { name: 'PHP', color: 'border-indigo-600' },
  { name: 'HTML5', color: 'border-orange-500' },
  { name: 'Tailwind CSS', color: 'border-sky-400' },
  { name: 'Node.js', color: 'border-green-500' },
  { name: 'TypeScript', color: 'border-blue-600' }
];

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-16 bg-white border-y border-brand-red/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Technology</h2>
          <h3 className="text-4xl font-bold tracking-tighter text-brand-black">
            Modern stacks for <span className="italic font-serif font-light text-brand-muted">maximum performance.</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className={`px-8 py-4 rounded-2xl border-2 ${tech.color} bg-brand-cream flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group cursor-default`}
            >
              <span className="text-xl font-bold tracking-tight text-brand-black group-hover:text-brand-red transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
