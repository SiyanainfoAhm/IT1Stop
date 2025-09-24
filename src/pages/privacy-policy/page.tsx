
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Add Schema.org JSON-LD for privacy policy page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - IT1Stop",
      "description": "IT1Stop privacy policy outlining data collection, usage, and protection practices for government and enterprise clients.",
      "url": `${import.meta.env.VITE_SITE_URL || "https://it1stop.com"}/privacy-policy`,
      "dateModified": "2025-01-20",
      "publisher": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com"
      },
      "mainEntity": {
        "@type": "PrivacyPolicy",
        "name": "IT1Stop Privacy Policy",
        "dateModified": "2025-01-20"
      }
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "Privacy Policy - IT1Stop Data Protection & Security";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive privacy policy detailing IT1Stop data protection practices, user rights, cookie usage, and compliance with U.S. regulations including CCPA and federal data standards.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Data%20privacy%20and%20security%20concept%20with%20digital%20locks%2C%20shield%20symbols%2C%20secure%20data%20protection%2C%20cybersecurity%20elements%2C%20professional%20technology%20background%2C%20blue%20and%20teal%20color%20scheme%2C%20enterprise%20data%20security&width=1920&height=800&seq=privacy-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            Your privacy and data security are our top priorities. We are committed to protecting your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We collect personal information that you voluntarily provide when you:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Contact us through our website forms or communication channels</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Engage with our customer support</li>
              <li>Participate in surveys or feedback requests</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              We automatically collect certain technical information when you visit our website, including:
              IP addresses, browser type and version, operating system, referring URLs, pages viewed, 
              time spent on pages, and general location data (city/state level).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Provide, maintain, and improve our technology services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send service-related communications and updates</li>
              <li>Process business transactions and contracts</li>
              <li>Analyze website usage to enhance user experience</li>
              <li>Comply with legal obligations and government requirements</li>
              <li>Protect against fraud and ensure security</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar tracking technologies to enhance functionality and analyze usage patterns:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookie preferences through your browser settings. However, disabling certain cookies may limit website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information. We may share information in the following circumstances:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in business operations</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
              <li><strong>Business Protection:</strong> To protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you have given explicit consent for sharing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement industry-standard security measures to protect your personal information, including:
              encryption in transit and at rest, secure servers, regular security assessments, 
              access controls and authentication, and employee training on data protection protocols.
              While we strive to protect your information, no method of transmission over the internet 
              or electronic storage is completely secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">General Rights</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="text-gray-700 mb-4 space-y-1 list-disc pl-6">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (receive your data in a structured format)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">California Consumer Privacy Act (CCPA) Rights</h3>
            <p className="text-gray-700 mb-4">If you are a California resident, you have additional rights under CCPA:</p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or integrate with third-party services. 
              These external sites have their own privacy policies, and we are not responsible for their 
              privacy practices. We recommend reviewing their privacy policies before providing personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Government and Enterprise Compliance</h2>
            <p className="text-gray-700 mb-6">
              For government contracts and enterprise clients, we maintain additional security and privacy 
              measures including FedRAMP compliance standards, FISMA security controls, ISO 27001 certification, 
              and contractual data protection agreements that may supersede certain provisions of this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, 
              comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary based on 
              the type of information and applicable legal requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If we become aware that we have collected personal 
              information from a child under 13, we will take steps to delete such information promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
              We will notify you of significant changes by posting the updated policy on our website and updating 
              the "Last Updated" date. Your continued use of our services after changes become effective constitutes 
              acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>IT1Stop Privacy Team</strong></p>
              <p className="text-gray-700 mb-2">Phone: +1 (301) 332-0649</p>
              <p className="text-gray-700 mb-2">Address: 1225 W Beaver S St. Ste 205-1 #1079</p>
              <p className="text-gray-700">Jacksonville, FL 32204, United States</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
