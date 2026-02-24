import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
    const [visible, setVisible] = useState(false);

    // Slide in after 1s delay so it doesn't distract on page load
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(t);
    }, []);

    const buttons = [
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            href: 'https://wa.me/919167041276?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20web%20project%20with%20Zenetic.',
            bg: '#25D366',
            hoverBg: '#1ebe5d',
            pulse: true,
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.054 23.454a.5.5 0 00.492.593l5.876-1.541A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.784-.535-5.354-1.462l-.382-.227-3.966 1.04 1.06-3.865-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
            ),
        },
        {
            id: 'call',
            label: 'Call Us',
            href: 'tel:+919167041276',
            bg: '#E63329',
            hoverBg: '#c9281f',
            pulse: false,
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            id: 'email',
            label: 'Email Us',
            href: 'mailto:rajhirvate@gmail.com',
            bg: '#1a1a1a',
            hoverBg: '#333333',
            pulse: false,
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Pulse keyframe */}
            <style>{`
                @keyframes float-pulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
                    50% { box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
                }
                .whatsapp-pulse {
                    animation: float-pulse 2.5s ease-in-out infinite;
                }
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(60px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .float-btn-enter {
                    animation: slide-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
            `}</style>

            {/* Desktop: right-center fixed */}
            <div
                className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pr-0"
                style={{ visibility: visible ? 'visible' : 'hidden' }}
            >
                {buttons.map((btn, i) => (
                    <div
                        key={btn.id}
                        className="group relative flex items-center justify-end"
                        style={{
                            opacity: visible ? 1 : 0,
                            animation: visible ? `slide-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1 + 0.1}s both` : 'none',
                        }}
                    >
                        {/* Tooltip label — slides left on hover */}
                        <span
                            className="absolute right-14 whitespace-nowrap text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover:translate-x-0"
                            style={{ backgroundColor: btn.bg }}
                        >
                            {btn.label}
                        </span>

                        {/* Button */}
                        <a
                            href={btn.href}
                            target={btn.id === 'whatsapp' ? '_blank' : undefined}
                            rel={btn.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                            className={`w-12 h-12 rounded-l-2xl flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:w-14 ${btn.pulse ? 'whatsapp-pulse' : ''}`}
                            style={{ backgroundColor: btn.bg }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = btn.hoverBg)}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = btn.bg)}
                            aria-label={btn.label}
                        >
                            {btn.icon}
                        </a>
                    </div>
                ))}
            </div>

            {/* Mobile: bottom-right corner */}
            <div
                className="flex md:hidden fixed bottom-6 right-4 z-50 flex-col gap-3 items-end"
                style={{ visibility: visible ? 'visible' : 'hidden' }}
            >
                {buttons.map((btn, i) => (
                    <a
                        key={btn.id}
                        href={btn.href}
                        target={btn.id === 'whatsapp' ? '_blank' : undefined}
                        rel={btn.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 active:scale-90 ${btn.pulse ? 'whatsapp-pulse' : ''}`}
                        style={{
                            backgroundColor: btn.bg,
                            opacity: visible ? 1 : 0,
                            animation: visible ? `slide-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1 + 0.1}s both` : 'none',
                        }}
                        aria-label={btn.label}
                    >
                        {btn.icon}
                    </a>
                ))}
            </div>
        </>
    );
};

export default FloatingCTA;
