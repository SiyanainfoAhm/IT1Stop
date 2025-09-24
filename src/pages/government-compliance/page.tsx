
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function GovernmentCompliance() {
  useEffect(() => {
    // Add Schema.org JSON-LD for government compliance page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Government Compliance - IT1Stop",
      "description": "IT1Stop government compliance documentation detailing federal standards adherence, regulatory requirements, and certifications for government contracting.",
      "url": `${import.meta.env.VITE_SITE_URL || "https://it1stop.com"}/government-compliance`,
      "dateModified": "2025-01-01",
      "publisher": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "FISMA Compliance",
          "description": "Federal Information Security Management Act compliance"
        },
        {
          "@type": "Thing",
          "name": "FedRAMP Authorization",
          "description": "Federal Risk and Authorization Management Program certification"
        },
        {
          "@type": "Thing",
          "name": "Section 508",
          "description": "Digital accessibility compliance for government systems"
        },
        {
          "@type": "Thing",
          "name": "Government Contracting",
          "description": "Federal acquisition regulations and contract vehicles"
        }
      ]
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "Government Compliance - IT1Stop Federal Standards & Certifications";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'IT1Stop government compliance overview including FISMA, FedRAMP authorization, Section 508 accessibility, FAR compliance, and federal contracting certifications.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <i className="ri-government-line text-5xl text-accent-400 mr-4"></i>
            <h1 className="text-4xl md:text-5xl font-bold">Government Compliance</h1>
          </div>
          <p className="text-xl text-neutral-300">
            Meeting federal standards and regulatory requirements
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Federal Compliance Overview</h2>
            <p className="text-neutral-700 mb-6">
              IT1Stop maintains full compliance with federal regulations and standards required for 
              government contracting. Our compliance program is audited regularly and certified by 
              independent third-party assessors.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Compliance Areas</h2>
            
            <div className="space-y-8 mb-8">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">FISMA Compliance</h3>
                <p className="text-neutral-700 mb-3">
                  Full compliance with Federal Information Security Management Act requirements:
                </p>
                <ul className="text-neutral-700 space-y-1">
                  <li>• Continuous monitoring and risk assessment</li>
                  <li>• NIST 800-53 security controls implementation</li>
                  <li>• Annual security assessments and authorizations</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">FedRAMP Authorization</h3>
                <p className="text-neutral-700 mb-3">
                  Federal Risk and Authorization Management Program certified:
                </p>
                <ul className="text-neutral-700 space-y-1">
                  <li>• FedRAMP Moderate baseline authorization</li>
                  <li>• Continuous monitoring program</li>
                  <li>• Independent security assessments</li>
                  <li>• Government-wide reuse of security authorizations</li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Section 508 Accessibility</h3>
                <p className="text-neutral-700 mb-3">
                  Full accessibility compliance for digital content:
                </p>
                <ul className="text-neutral-700 space-y-1">
                  <li>• WCAG 2.1 AA accessibility standards</li>
                  <li>• Screen reader compatibility</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Regular accessibility testing and validation</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Acquisition Compliance</h2>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• Federal Acquisition Regulation (FAR) compliant</li>
              <li>• Small Business Administration certifications</li>
              <li>• GSA Schedule contracts available</li>
              <li>• Registered in System for Award Management (SAM)</li>
              <li>• CAGE Code and DUNS number verified</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Handling Standards</h2>
            <p className="text-neutral-700 mb-6">
              Our data handling procedures meet or exceed government requirements for sensitive 
              information including Controlled Unclassified Information (CUI) and personally 
              identifiable information (PII) protection standards.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Personnel Security</h2>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• Background investigations for all personnel</li>
              <li>• Active security clearances (Secret and Top Secret)</li>
              <li>• Regular training on security and compliance requirements</li>
              <li>• Non-disclosure agreements and confidentiality protocols</li>
              <li>• Insider threat awareness and reporting procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Audit and Reporting</h2>
            <p className="text-neutral-700 mb-6">
              We maintain comprehensive audit trails and provide regular compliance reporting to 
              government clients. Our systems support automated compliance monitoring and 
              real-time security status reporting.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contract Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Available Contracts</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• GSA IT Schedule 70</li>
                  <li>• CIO-SP3 Contract</li>
                  <li>• SEWP V Contract</li>
                  <li>• Agency-specific IDIQs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Certifications</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Small Disadvantaged Business</li>
                  <li>• 8(a) Certified</li>
                  <li>• WOSB Certified</li>
                  <li>• HUBZone Certified</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Compliance Team</h2>
            <p className="text-gray-700">
              For compliance-related questions or documentation:
              <br />
              Email: compliance@it1stop.com
              <br />
              Phone: +1 (301) 332-0649
              <br />
              Address: 1225 W Beaver S St. Ste 205-1 #1079, Jacksonville, FL 32204, United States
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
