
export default function Differentiators() {
  const differentiators = [
    {
      icon: 'ri-shield-check-line',
      title: 'Security Clearance Ready',
      description: 'Our team holds security clearances and follows strict protocols for government contracts.'
    },
    {
      icon: 'ri-government-line',
      title: 'Government Procurement Compliant',
      description: 'Experienced in federal acquisition processes with GSA Schedule and SEWP contracts.'
    },
    {
      icon: 'ri-award-line',
      title: 'ISO 27001 & GDPR Compliant',
      description: 'Certified security management systems ensuring data protection and privacy compliance.'
    },
    {
      icon: 'ri-time-line',
      title: 'Proven Track Record',
      description: 'Successful delivery of complex projects for government agencies and enterprises.'
    }
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="differentiators-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="differentiators-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose IT1Stop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by government agencies and enterprises for secure, compliant, and scalable technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <i className={`${item.icon} text-3xl text-white`} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
