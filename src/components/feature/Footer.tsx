
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://readdy.ai/api/form/d38cejm468ku2jjobsvg', {
        method: 'POST',
        body: new URLSearchParams(formData as any)
      });

      if (response.ok) {
        setSubmitMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
    }
  };

  const quickLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Cloud Solutions', id: 'cloud-solutions' },
    { name: 'Artificial Intelligence', id: 'artificial-intelligence' },
    { name: 'Security & Compliance', id: 'security-compliance' },
    { name: 'Power Platforms', id: 'power-platforms' },
    { name: 'Data Analytics', id: 'data-analytics' },
    { name: 'Data Science', id: 'data-science' }
  ];

  const compliance = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Security Statement', href: '/security-statement' },
    { label: 'Government Compliance', href: '/government-compliance' }
  ];

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <span className="text-2xl font-bold mb-4 block" style={{ fontFamily: "Pacifico, serif" }}>IT1Stop</span>
            <p className="text-neutral-300 mb-6 font-light leading-relaxed">
              Secure, scalable IT solutions for private organizations and government agencies. 
              Trusted by organizations nationwide for cutting-edge technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-teal-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    <i className="ri-arrow-right-s-line mr-1 text-teal-400" aria-hidden="true"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a 
                    href={`/services#${service.id}`}
                    className="text-neutral-300 text-sm hover:text-teal-400 transition-colors cursor-pointer inline-block"
                  >
                    <i className="ri-check-line mr-2 text-orange-500" aria-hidden="true"></i>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Stay Updated</h4>
            <p className="text-neutral-300 mb-4 font-light">Get the latest IT insights and updates.</p>
            <form onSubmit={handleNewsletterSubmit} data-readdy-form id="newsletter">
              <div className="flex">
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-navy-800 border border-navy-700 rounded-l-lg text-white placeholder-neutral-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors duration-300 disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? (
                    <i className="ri-loader-4-line animate-spin" aria-hidden="true"></i>
                  ) : (
                    <i className="ri-send-plane-line" aria-hidden="true"></i>
                  )}
                </button>
              </div>
              {submitMessage && (
                <p className="mt-2 text-sm text-teal-400" role="alert">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-center md:text-left">
              <div className="flex flex-wrap gap-4">
                {compliance.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="text-neutral-400 hover:text-teal-400 text-sm cursor-pointer transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-neutral-400 text-sm mb-2">
                © 2025 IT1Stop. All rights reserved.
              </p>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-teal-400 text-xs cursor-pointer transition-colors"
              >
                Made with Readdy
              </a>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="mt-8 pt-8 border-t border-navy-800">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center space-x-2">
                <i className="ri-shield-check-line text-teal-400" aria-hidden="true"></i>
                <span className="text-xs text-neutral-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-global-line text-teal-400" aria-hidden="true"></i>
                <span className="text-xs text-neutral-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-government-line text-orange-400" aria-hidden="true"></i>
                <span className="text-xs text-neutral-300">Government Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-eye-line text-teal-400" aria-hidden="true"></i>
                <span className="text-xs text-neutral-300">WCAG 2.1 AA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
