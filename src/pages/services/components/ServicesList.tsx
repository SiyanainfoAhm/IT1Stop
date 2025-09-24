
export default function ServicesList() {
  const services = [
    {
      id: 'cloud-solutions',
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure and migration services with enterprise-grade security and government compliance standards.',
      features: [
        'Cloud Migration & Strategy',
        'FedRAMP Certified Solutions',
        'DevOps & CI/CD Pipelines',
        'Multi-Cloud Architecture',
        'Disaster Recovery Planning',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker'],
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      id: 'artificial-intelligence',
      icon: 'ri-brain-line',
      title: 'Artificial Intelligence',
      description: 'AI-powered solutions for automation, analytics, and intelligent decision-making systems tailored for enterprise and government use.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Chatbots & Virtual Assistants',
        'Automated Decision Systems'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'scikit-learn', 'Apache Spark'],
      gradient: 'from-teal-500 to-green-500'
    },
    {
      id: 'security-compliance',
      icon: 'ri-shield-check-line',
      title: 'Security & Compliance',
      description: 'Comprehensive cybersecurity solutions and compliance management for government standards and enterprise requirements.',
      features: [
        'Security Risk Assessments',
        'Penetration Testing',
        'Compliance Auditing',
        'Identity & Access Management',
        'Security Training Programs',
        'Incident Response Planning'
      ],
      technologies: ['NIST Framework', 'ISO 27001', 'FedRAMP', 'FISMA', 'SOC 2', 'HIPAA'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'power-platforms',
      icon: 'ri-window-line',
      title: 'Power Platforms',
      description: 'Microsoft Power Platform solutions for business automation, low-code development, and organizational efficiency.',
      features: [
        'Power Apps Development',
        'Power Automate Workflows',
        'Power BI Analytics & Reporting',
        'Power Virtual Agents',
        'SharePoint Integration',
        'Office 365 Optimization'
      ],
      technologies: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Teams', 'Azure AD'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'data-analytics',
      icon: 'ri-bar-chart-line',
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions for informed decision making and operational insights.',
      features: [
        'Business Intelligence Dashboards',
        'Data Visualization',
        'Performance Analytics',
        'Real-time Reporting',
        'Data Warehousing',
        'ETL Process Development'
      ],
      technologies: ['Tableau', 'Power BI', 'SQL Server', 'Python', 'R', 'Apache Spark'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'data-science',
      icon: 'ri-database-line',
      title: 'Data Science',
      description: 'Data science services including predictive modeling, statistical analysis, and advanced data mining for strategic insights.',
      features: [
        'Predictive Modeling',
        'Statistical Analysis',
        'Data Mining & Discovery',
        'Machine Learning Implementation',
        'Big Data Processing',
        'Advanced Analytics Consulting'
      ],
      technologies: ['Python', 'R', 'Jupyter', 'Apache Spark', 'Hadoop', 'TensorFlow'],
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to meet the complex requirements 
            of government agencies and enterprise organizations.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Service Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-gray-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Illustration */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-10 transform rotate-3`}></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className={`w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <i className={`${service.icon} text-4xl text-white`}></i>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                      <p className="text-gray-600 text-sm">
                        Professional {service.title.toLowerCase()} solutions tailored to your organization's needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
