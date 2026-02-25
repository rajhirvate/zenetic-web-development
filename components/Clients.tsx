import React from 'react';

const clients = [
    { name: "Amiri Foods", logo: "/clients/amirifoods.webp" },
    { name: "Aurea Aesthetic", logo: "/clients/aurea-aesthecticlogo.webp" },
    { name: "Enlightink", logo: "/clients/enlightinklogo.webp" },
    { name: "Flex Fuel Hub", logo: "/clients/flexfuelhub-logo.webp" },
    { name: "Foodelovery", logo: "/clients/foodelovery.webp" },
    { name: "Funtoo", logo: "/clients/funtoo.webp" },
    { name: "Marks Solution", logo: "/clients/markssolution.webp" },
    { name: "Needles At Work", logo: "/clients/needlesatworklogo.webp" },
    { name: "Orrlee", logo: "/clients/orrlee.webp" },
    { name: "People Dynamo", logo: "/clients/peopledynamo.webp" },
    { name: "Rajmudra", logo: "/clients/rajmudra.webp" },
    { name: "Rexllance", logo: "/clients/rexllance.webp" },
    { name: "Round The World", logo: "/clients/roundtheworld.webp" },
    { name: "Sansuve", logo: "/clients/sansuve.webp" },
    { name: "Speedbird", logo: "/clients/speedbird.webp" },
    { name: "Techicy", logo: "/clients/techicy.webp" },
    { name: "Techlogistic", logo: "/clients/techlogitic.webp" },
    { name: "TRS Health", logo: "/clients/trshealth.webp" },
];

const Clients: React.FC = () => {
    return (
        <section className="py-12 bg-[#FDFCFA] border-b border-gray-100 overflow-hidden">
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-200px * 18)); } /* Width of 1 set */
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                    // Pause on hover
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-muted">
                    Trusted by ambitious brands & startups
                </p>
            </div>

            <div className="relative w-full overflow-hidden flex items-center">
                {/* Fade masks for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#FDFCFA] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#FDFCFA] to-transparent pointer-events-none" />

                {/* Marquee Track */}
                <div className="flex animate-scroll whitespace-nowrap items-center min-w-max">
                    {/* Render twice for seamless loop */}
                    {[...clients, ...clients].map((client, i) => (
                        <div
                            key={`${client.name}-${i}`}
                            className="w-[200px] flex items-center justify-center flex-shrink-0 px-8"
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="max-h-12 w-auto object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
