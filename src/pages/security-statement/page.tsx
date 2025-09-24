
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function SecurityStatement() {
  useEffect(() => {
    // Add Schema.org JSON-LD for security statement page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Security Statement - IT1Stop",
      "description": "IT1Stop security statement detailing enterprise-grade security measures, compliance certifications, and data protection for government and private sector clients.",
      "url": `${import.meta.env.VITE_SITE_URL || "https://it1stop.com"}/security-statement`,
      "dateModified": "2025-01-01",
      "publisher": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Cybersecurity",
          "description": "Enterprise cybersecurity and data protection measures"
        },
        {
          "@type": "Thing",
          "name": "ISO 27001",
          "description": "Information security management system certification"
        },
        {
          "@type": "Thing",
          "name": "FISMA Compliance",
          "description": "Federal Information Security Management Act compliance"
        }
      ]
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "Security Statement - IT1Stop Enterprise Security & Compliance";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'IT1Stop security statement outlining enterprise-grade security framework, ISO 27001 certification, FISMA compliance, and data protection measures for government clients.');
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
            <i className="ri-shield-check-line text-5xl text-teal-400 mr-4"></i>
            <h1 className="text-4xl md:text-5xl font-bold">Security Statement</h1>
          </div>
          <p className="text-xl text-neutral-300">
            Enterprise-grade security for government and private sector clients
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Security Framework</h2>
            <p className="text-neutral-700 mb-6">
              IT1Stop maintains a comprehensive security framework based on NIST Cybersecurity 
              Framework, ISO 27001 standards, and federal security requirements. Our security 
              posture is continuously monitored and updated to address emerging threats.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Protection</h2>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• End-to-end encryption for data in transit and at rest</li>
              <li>• Multi-factor authentication for all system access</li>
              <li>• Regular security audits and penetration testing</li>
              <li>• Data backup and disaster recovery procedures</li>
              <li>• Secure data centers with 24/7 monitoring</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Compliance Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-semibold text-navy-900 mb-2">Government Standards</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• FISMA Compliance</li>
                  <li>• FedRAMP Authorized</li>
                  <li>• NIST 800-53 Controls</li>
                  <li>• Section 508 Accessibility</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-semibold text-navy-900 mb-2">Industry Standards</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• ISO 27001 Certified</li>
                  <li>• SOC 2 Type II</li>
                  <li>• GDPR Compliant</li>
                  <li>• HIPAA Ready</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Access Controls</h2>
            <p className="text-neutral-700 mb-6">
              We implement role-based access controls with principle of least privilege. All access 
              is logged and monitored. Personnel undergo background checks and security clearance 
              processes appropriate for government contracts.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Incident Response</h2>
            <p className="text-neutral-700 mb-6">
              Our incident response team operates 24/7 to detect, analyze, and respond to security 
              events. We maintain detailed incident response procedures and provide timely 
              notifications to affected clients and regulatory bodies as required.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Security Clearance</h2>
            <p className="text-neutral-700 mb-6">
              Our team includes personnel with active security clearances including Secret and 
              Top Secret levels. We can provide cleared personnel for sensitive government projects 
              requiring appropriate clearance levels.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Vulnerability Management</h2>
            <p className="text-neutral-700 mb-6">
              We conduct regular vulnerability assessments and maintain an active patch management 
              program. All systems are continuously monitored for security threats and 
              vulnerabilities are remediated according to risk-based priorities.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Third-Party Security</h2>
            <p className="text-neutral-700 mb-6">
              All third-party vendors and partners undergo security assessments and must meet our 
              security standards. Contracts include appropriate security clauses and data protection 
              requirements.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Security Team</h2>
            <p className="text-neutral-700">
              For security-related inquiries or to report vulnerabilities:
              <br />
              Email: security@it1stop.com
              <br />
              Emergency: 1-800-IT1STOP (Press 1 for Security)
              <br />
              Secure Portal: Available for government clients
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
