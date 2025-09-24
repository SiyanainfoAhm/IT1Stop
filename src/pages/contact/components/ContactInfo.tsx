
export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      details: '1225 W Beaver S St. Ste 205-1 #1079, Jacksonville, FL 32204',
      description: 'Our main office location',
      action: 'https://maps.google.com?q=1225+W+Beaver+S+St+Jacksonville+FL'
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: "We're here to help during business hours",
      action: null
    }
  ];

  const guarantees = [
    {
      icon: 'ri-shield-check-line',
      title: 'Security Clearance Available',
      description: 'Our team holds various levels of security clearance for government projects'
    },
    {
      icon: 'ri-time-line',
      title: '24-Hour Response Guarantee',
      description: 'We respond to all inquiries within 24 hours during business days'
    },
    {
      icon: 'ri-award-line',
      title: 'Compliance Ready',
      description: 'ISO 27001, FedRAMP, and FISMA compliant solutions available'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 to-teal-900/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to discuss your next project? Our team is here to help you achieve your technology goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Office Location */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-xl text-teal-400" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Office Location</h4>
                <p className="opacity-90">1225 W Beaver S St. Ste 205-1 #1079</p>
                <p className="opacity-90">Jacksonville, FL 32204</p>
                <p className="text-sm opacity-75">United States</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-xl text-orange-400" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Business Hours</h4>
                <p className="opacity-90">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="opacity-90">Saturday: 10:00 AM - 2:00 PM EST</p>
                <p className="text-sm opacity-75">Emergency support available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mt-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Service Commitment</h3>
            <p className="text-lg text-gray-600">
              When you work with IT1Stop, you get more than just technical expertise—you get a committed partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${guarantee.icon} text-3xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{guarantee.title}</h4>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
