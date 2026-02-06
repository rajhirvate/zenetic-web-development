
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added validation for this too even if not in UI explicitly yet
    requirements: [] as string[],
    honeypot: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleRequirement = (req: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter(r => r !== req)
        : [...prev.requirements, req]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic Validation
    if (!formData.name || !formData.email || formData.requirements.length === 0) {
      setStatus('error');
      setErrorMessage('Please fill in Name, Email and select at least one Requirement.');
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '', // If we add phone field later
      requirements: formData.requirements,
      pageUrl: window.location.href,
      timestamp: new Date().toISOString(),
      honeypot: formData.honeypot
    };

    try {
      // 1. Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // 2. Success - Prepare WhatsApp Redirect
      setStatus('success');

      const text = `Hi, I am interested in ${formData.requirements.join(', ')}. My name is ${formData.name} (${formData.email}). Link: ${window.location.href}`;
      const whatsappUrl = `https://wa.me/919167041276?text=${encodeURIComponent(text)}`;

      // 3. Open WhatsApp in new tab (Failsafe: user already sees success message if this blocked)
      // Small timeout to ensure UI updates first
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);

      // Reset form
      setFormData({ name: '', email: '', phone: '', requirements: [], honeypot: '' });

    } catch (error: any) {
      console.error('Submission failed:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try emailing us directly.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-cream border-t border-brand-red/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">Let's Talk</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black mb-8 leading-none">
              Grow your <br />business <span>with Zenetic.</span>
            </h3>
            <p className="text-xl text-brand-muted mb-12 max-w-md">
              Ready to dominate the digital landscape in Pune? Get a custom quote for your project today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Email us</p>
                  <p className="text-xl font-bold">rajhirvate@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Call us</p>
                  <p className="text-xl font-bold">+91 91670 41276</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Base</p>
                  <p className="text-xl font-bold">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-brand-red/5">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Invisible Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-brand-black/10 focus:border-brand-red outline-none py-3 text-lg transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b-2 border-brand-black/10 focus:border-brand-red outline-none py-3 text-lg transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">Requirement *</label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {['Web Dev', 'WordPress', 'Local SEO', 'Next.js'].map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleRequirement(tag)}
                      className={`px-5 py-2 rounded-full border text-xs font-bold uppercase transition-all ${formData.requirements.includes(tag)
                          ? 'bg-brand-red border-brand-red text-white'
                          : 'border-brand-black/10 hover:bg-brand-red hover:border-brand-red hover:text-white'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
                  Message sent! You are being redirected to WhatsApp...
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-brand-black text-white py-6 rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-red transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
