
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate message length
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('projectType', formData.projectType);
      formDataToSubmit.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d38cejm468ku2jjobsvg', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white section-padding" id="contact-form">
      <div className="max-w-2xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-neutral-600">
            Ready to transform your digital presence? Let&apos;s discuss your project requirements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-inquiries">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-navy-900 mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-8 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              >
                <option value="">Select project type</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="artificial-intelligence">Artificial Intelligence</option>
                <option value="security-compliance">Security & Compliance</option>
                <option value="power-platforms">Power Platforms</option>
                <option value="data-analytics">Data Analytics</option>
                <option value="data-science">Data Science</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile Application</option>
                <option value="custom-software">Custom Software</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
              Project Description *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              maxLength={500}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              placeholder="Please describe your project requirements, goals, and any specific features or integrations needed..."
            />
            <div className="text-right text-sm text-neutral-500 mt-1">
              {formData.message.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || formData.message.length > 500}
              className="whitespace-nowrap cursor-pointer bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-teal transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner mr-2"></div>
                  Sending Request...
                </>
              ) : (
                <>
                  <i className="ri-send-plane-line mr-2"></i>
                  Send Project Request
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-center p-4 bg-success-50 border border-success-200 rounded-lg">
              <div className="flex items-center justify-center text-success-700">
                <i className="ri-check-circle-line text-xl mr-2"></i>
                <span className="font-medium">Request sent successfully! We&apos;ll respond within 24 hours.</span>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-center text-red-700">
                <i className="ri-error-warning-line text-xl mr-2"></i>
                <span className="font-medium">Error sending request. Please try again or contact us directly.</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
