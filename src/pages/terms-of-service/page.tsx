
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function TermsOfService() {
  useEffect(() => {
    // Add Schema.org JSON-LD for terms of service page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - IT1Stop",
      "description": "IT1Stop terms of service outlining professional terms and conditions for technology services provided to government and enterprise clients.",
      "url": `${import.meta.env.VITE_SITE_URL || "https://it1stop.com"}/terms-of-service`,
      "dateModified": "2025-01-20",
      "publisher": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com"
      },
      "mainEntity": {
        "@type": "TermsOfService",
        "name": "IT1Stop Terms of Service",
        "dateModified": "2025-01-20"
      }
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "Terms of Service - IT1Stop Professional Agreement";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive terms of service for IT1Stop technology solutions, including service agreements, liability terms, intellectual property rights, and compliance with U.S. regulations.');
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
          backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20legal%20document%20concept%20with%20contract%20papers%2C%20digital%20agreements%2C%20business%20handshake%2C%20corporate%20law%20elements%2C%20professional%20office%20setting%2C%20blue%20and%20teal%20color%20scheme%2C%20legal%20technology%20services&width=1920&height=800&seq=terms-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl opacity-90">
            Professional terms and conditions governing the use of our technology services and solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing, using, or engaging with IT1Stop services, websites, or platforms, you acknowledge 
              that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. 
              These terms constitute a legally binding agreement between you and IT1Stop. If you do not agree to 
              these terms, you must discontinue use of our services immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              IT1Stop provides comprehensive technology solutions including but not limited to:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Cloud computing services and infrastructure solutions</li>
              <li>Custom software development and application modernization</li>
              <li>Artificial intelligence and machine learning implementations</li>
              <li>Cybersecurity services and compliance management</li>
              <li>Data analytics and business intelligence platforms</li>
              <li>Microsoft Power Platform solutions and automation</li>
              <li>Government technology services and federal contracting</li>
              <li>Enterprise consulting and digital transformation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities and Conduct</h2>
            <p className="text-gray-700 mb-4">Users of our services agree to:</p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Provide accurate, current, and complete information when required</li>
              <li>Maintain the confidentiality and security of account credentials</li>
              <li>Use services in compliance with all applicable federal, state, and local laws</li>
              <li>Respect intellectual property rights and proprietary information</li>
              <li>Report security vulnerabilities or system issues promptly</li>
              <li>Refrain from unauthorized access, misuse, or disruption of services</li>
              <li>Comply with government regulations when applicable to contracts</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              All proprietary content, software, methodologies, and materials provided by IT1Stop remain our 
              exclusive intellectual property. This includes:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Proprietary software code, algorithms, and technical documentation</li>
              <li>Service methodologies, frameworks, and best practices</li>
              <li>Training materials, user guides, and technical specifications</li>
              <li>Trademarks, service marks, and brand elements</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Custom solutions developed specifically for clients become the property of the respective client 
              organization, subject to agreed-upon licensing terms and any retained rights for underlying technologies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability and Performance</h2>
            <p className="text-gray-700 mb-6">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. 
              Service levels vary by contract type and service tier. For enterprise and government clients, 
              specific Service Level Agreements (SLAs) are detailed in individual contracts. We provide 
              24/7 monitoring for critical systems and emergency support for high-priority incidents.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Protection and Privacy</h2>
            <p className="text-gray-700 mb-6">
              We are committed to protecting client data and maintaining privacy standards that exceed industry 
              requirements. Our data protection measures include encryption, access controls, regular security audits, 
              and compliance with applicable privacy regulations. Detailed information about our data practices 
              is available in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms and Billing</h2>
            <p className="text-gray-700 mb-4">
              Payment terms are specified in individual service agreements and may include:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1 list-disc pl-6">
              <li>Project-based pricing with milestone payments</li>
              <li>Monthly or annual subscription fees for ongoing services</li>
              <li>Usage-based billing for cloud and infrastructure services</li>
              <li>Retainer agreements for consulting and support services</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Payment is typically due within 30 days of invoice date unless otherwise specified. 
              Late payments may incur interest charges and service interruptions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, IT1Stop's liability for any damages arising from the use 
              of our services is limited to the amount paid for the specific service in question during the 
              12-month period preceding the claim. We shall not be liable for indirect, incidental, special, 
              consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              Clients agree to indemnify and hold IT1Stop harmless from any claims, damages, or expenses arising 
              from their use of our services, violation of these terms, or infringement of third-party rights. 
              This indemnification includes reasonable attorney fees and costs associated with defending such claims.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Government Contracts and Compliance</h2>
            <p className="text-gray-700 mb-6">
              For government clients and federal contracts, additional terms may apply including Federal Acquisition 
              Regulation (FAR) clauses, agency-specific requirements, security clearance provisions, and compliance 
              with government standards such as FedRAMP, FISMA, and NIST frameworks. Government contract terms 
              may supersede certain provisions outlined in these general terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate services with appropriate notice as specified in the service agreement, 
              typically 30-90 days for ongoing services. Upon termination, we will provide reasonable assistance 
              with data export and transition activities. All confidentiality obligations survive termination. 
              Clients remain responsible for payment of services rendered prior to termination.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Force Majeure</h2>
            <p className="text-gray-700 mb-6">
              Neither party shall be liable for delays or failure to perform due to circumstances beyond reasonable 
              control, including but not limited to natural disasters, government actions, cyber attacks, pandemic 
              restrictions, or other acts of God. We will make reasonable efforts to mitigate such circumstances 
              and resume normal operations as quickly as possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Disputes arising from these terms or our services shall be resolved through binding arbitration in 
              accordance with the rules of the American Arbitration Association. The arbitration shall be conducted 
              in Jacksonville, Florida, unless otherwise agreed upon by both parties. For government contracts, 
              dispute resolution procedures may be governed by applicable federal regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service are governed by the laws of the State of Florida and the United States, 
              without regard to conflict of law principles. Any legal proceedings not subject to arbitration 
              shall be conducted in the appropriate courts of Florida.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Modifications to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time to reflect changes in our services, 
              legal requirements, or business practices. Significant changes will be communicated through 
              our website, and continued use of our services constitutes acceptance of modified terms. 
              For active contracts, modifications may require mutual agreement between parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
            <p className="text-gray-700 mb-6">
              If any provision of these terms is found to be unenforceable or invalid, the remaining provisions 
              shall continue in full force and effect. The unenforceable provision shall be modified to the 
              minimum extent necessary to make it enforceable while preserving the original intent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions regarding these Terms of Service or our services, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>IT1Stop Legal Department</strong></p>
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
