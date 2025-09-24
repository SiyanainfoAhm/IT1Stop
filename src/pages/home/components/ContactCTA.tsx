
import { useState } from 'react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      setSubmitMessage('Message must be 500 characters or less.');
      return;
    }

    setIsSubmitting(true);
    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d38cejm468ku2jjobsvg', {
        method: 'POST',
        body: new URLSearchParams(submitData as any)
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ll contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20technology%20consultation%20meeting%2C%20business%20handshake%2C%20modern%20office%20environment%20with%20technology%20displays%2C%20blue%20and%20orange%20lighting%2C%20corporate%20meeting%20room%2C%20professional%20atmosphere&width=1920&height=800&seq=contact-cta-bg&orientation=landscape')`
      }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white mb-16">
          <h2 id="contact-heading" className="text-4xl font-bold mb-4 font-sans">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto font-light">
            Get a detailed proposal tailored to your specific requirements. 
            Our experts are ready to discuss your IT challenges and provide solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 font-sans">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-orange-400" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="opacity-90">1225 W Beaver S St. Ste 205-1 #1079</p>
                    <p className="opacity-90">Jacksonville, FL 32204</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">Why Choose IT1Stop?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <i className="ri-check-line mr-2 text-green-300" aria-hidden="true"></i>
                    Security clearance available
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-2 text-green-300" aria-hidden="true"></i>
                    Government procurement ready
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-2 text-green-300" aria-hidden="true"></i>
                    ISO 27001 & GDPR compliant
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line mr-2 text-green-300" aria-hidden="true"></i>
                    Comprehensive IT solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">
              Request a Proposal
            </h3>

            <form onSubmit={handleSubmit} data-readdy-form id="contact-proposal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                    required
                    aria-describedby="name-error"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                    required
                    aria-describedby="email-error"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="projectType">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8 transition-colors"
                  >
                    <option value="">Select service</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="artificial-intelligence">Artificial Intelligence</option>
                    <option value="security-compliance">Security & Compliance</option>
                    <option value="power-platforms">Power Platforms</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="data-science">Data Science</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                  placeholder="Tell us about your project requirements, challenges, and goals..."
                  required
                  aria-describedby="message-count message-error"
                />
                <div id="message-count" className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {submitMessage && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`} role="alert">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:transform-none"
                aria-label="Send proposal request"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line mr-2 animate-spin" aria-hidden="true"></i>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2" aria-hidden="true"></i>
                    Send Proposal Request
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We'll respond within 24 hours with a detailed proposal and next steps.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
