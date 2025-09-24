
export default function Services() {
  const services = [
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Secure cloud infrastructure and migration services with enterprise-grade security and government compliance standards.',
      features: ['Cloud Migration Strategy', 'FedRAMP Certified Solutions', 'DevOps & CI/CD Pipelines'],
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      icon: 'ri-brain-line',
      title: 'Artificial Intelligence',
      description: 'AI-powered solutions for automation, analytics, and intelligent decision-making systems.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Predictive Analytics'],
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Compliance',
      description: 'Comprehensive cybersecurity solutions and compliance management for government standards.',
      features: ['Security Risk Assessments', 'Penetration Testing', 'Compliance Auditing'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-window-line',
      title: 'Power Platforms',
      description: 'Microsoft Power Platform solutions for business automation and low-code development.',
      features: ['Power Apps Development', 'Power Automate Workflows', 'Power BI Analytics'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions for informed decision making.',
      features: ['Business Intelligence', 'Data Visualization', 'Performance Analytics'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'ri-database-line',
      title: 'Data Science',
      description: 'Data science services including predictive modeling, statistical analysis, and data mining.',
      features: ['Predictive Modeling', 'Statistical Analysis', 'Data Mining'],
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4 font-sans">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            End-to-end technology solutions designed for enterprises and government agencies 
            with the highest standards of security and compliance.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              role="article"
              aria-labelledby={`service-${index}-title`}
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-2xl text-white`} aria-hidden="true"></i>
                </div>
                
                <h3 id={`service-${index}-title`} className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors font-sans">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-green-500 mr-2 text-base" aria-hidden="true"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12 font-sans">Our Proven Development Process</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { step: '01', title: 'Discovery', icon: 'ri-search-line' },
              { step: '02', title: 'Design', icon: 'ri-palette-line' },
              { step: '03', title: 'Development', icon: 'ri-code-line' },
              { step: '04', title: 'Testing', icon: 'ri-bug-line' },
              { step: '05', title: 'Deployment', icon: 'ri-rocket-line' },
              { step: '06', title: 'Support', icon: 'ri-customer-service-line' }
            ].map((process) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i className={`${process.icon} text-white text-xl`} aria-hidden="true"></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {process.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
