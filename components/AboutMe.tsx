
import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/raj.webp"
                                alt="Raj Hirvate"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Abstract decoration */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red rounded-full opacity-10 mix-blend-multiply blur-2xl"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-black rounded-full opacity-5 mix-blend-multiply blur-2xl"></div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8">
                            Expertise built on <br /><span className="text-brand-muted">proven results.</span>
                        </h2>

                        <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                            <p>
                                Hello! I'm Raj Hirvate. With over <strong className="text-brand-black">100+ websites designed and developed</strong>, I bring a wealth of experience to every project. I specialize in WordPress development and am creating tailored digital solutions that drive growth.
                            </p>
                            <p>
                                My expertise isn't limited to just one platform. I am a full-stack developer familiar with the modern web ecosystem's vast array of tools.
                            </p>
                            <p>
                                Together with my dedicated team, we provide comprehensive full-stack development services. Whether you need a simple landing page or a complex web application, we have the skills and passion to bring your vision to life.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-brand-black/5 pt-8">
                            <div>
                                <span className="block text-4xl font-black text-brand-black mb-1">100+</span>
                                <span className="text-xs uppercase tracking-widest text-brand-muted">Projects Completed</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-brand-black mb-1">Full Stack</span>
                                <span className="text-xs uppercase tracking-widest text-brand-muted">Development</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
