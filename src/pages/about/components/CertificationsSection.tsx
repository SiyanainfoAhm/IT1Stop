export default function CertificationsSection() {
  const certifications = [
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      icon: 'ri-shield-check-fill',
      color: 'bg-green-500',
      details: ['Risk Management', 'Security Controls', 'Continuous Improvement']
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program certification',
      icon: 'ri-government-fill',
      color: 'bg-blue-500',
      details: ['Cloud Security', 'Federal Compliance', 'Risk Assessment']
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 audit for security and availability',
      icon: 'ri-secure-payment-fill',
      color: 'bg-purple-500',
      details: ['Security Controls', 'Availability', 'Process Integrity']
    },
    {
      name: 'CMMI Level 3',
      description: 'Capability Maturity Model Integration for development processes',
      icon: 'ri-trophy-fill',
      color: 'bg-orange-500',
      details: ['Process Maturity', 'Quality Management', 'Performance Optimization']
    },
    {
      name: 'NIST Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework',
      icon: 'ri-shield-star-fill',
      color: 'bg-indigo-500',
      details: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover']
    },
    {
      name: 'Section 508',
      description: 'Federal accessibility standards for electronic information technology',
      icon: 'ri-accessibility-fill',
      color: 'bg-teal-500',
      details: ['WCAG 2.1 AA', 'Screen Reader Compatible', 'Keyboard Navigation']
    }
  ];

  const partnerships = [
    {
      name: 'AWS Partner',
      logo: 'ri-amazon-fill',
      tier: 'Advanced Consulting Partner'
    },
    {
      name: 'Microsoft Gold',
      logo: 'ri-microsoft-fill',
      tier: 'Gold Certified Partner'
    },
    {
      name: 'Google Cloud',
      logo: 'ri-google-fill',
      tier: 'Premier Partner'
    },
    {
      name: 'Salesforce',
      logo: 'ri-cloud-fill',
      tier: 'Platinum Partner'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Compliance</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to the highest standards of security, quality, and compliance 
            ensures your projects meet all regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${cert.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{cert.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{cert.description}</p>
              <div className="space-y-2">
                {cert.details.map((detail) => (
                  <div key={detail} className="flex items-center text-sm text-gray-400">
                    <i className="ri-check-line text-teal-400 mr-2"></i>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Technology Partnerships</h3>
            <p className="text-lg text-gray-300">
              Strategic partnerships with leading technology providers ensure access to the latest tools and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner) => (
              <div key={partner.name} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${partner.logo} text-3xl text-orange-400`}></i>
                </div>
                <h4 className="text-lg font-bold mb-2">{partner.name}</h4>
                <p className="text-gray-400 text-sm">{partner.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}