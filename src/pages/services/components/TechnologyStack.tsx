export default function TechnologyStack() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: 'ri-reactjs-line', color: 'text-blue-500' },
        { name: 'Angular', icon: 'ri-angularjs-line', color: 'text-red-500' },
        { name: 'Vue.js', icon: 'ri-vuejs-line', color: 'text-green-500' },
        { name: 'TypeScript', icon: 'ri-code-line', color: 'text-blue-600' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-600' },
        { name: 'Python', icon: 'ri-code-s-slash-line', color: 'text-yellow-500' },
        { name: 'Java', icon: 'ri-cup-line', color: 'text-orange-600' },
        { name: '.NET', icon: 'ri-microsoft-line', color: 'text-blue-700' }
      ]
    },
    {
      category: 'Mobile',
      technologies: [
        { name: 'React Native', icon: 'ri-smartphone-line', color: 'text-blue-500' },
        { name: 'Flutter', icon: 'ri-flutter-line', color: 'text-blue-400' },
        { name: 'Swift', icon: 'ri-apple-line', color: 'text-gray-700' },
        { name: 'Kotlin', icon: 'ri-android-line', color: 'text-green-500' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: 'ri-amazon-line', color: 'text-orange-500' },
        { name: 'Azure', icon: 'ri-microsoft-line', color: 'text-blue-600' },
        { name: 'Docker', icon: 'ri-ship-line', color: 'text-blue-500' },
        { name: 'Kubernetes', icon: 'ri-kubernetes-line', color: 'text-blue-700' }
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'PostgreSQL', icon: 'ri-database-line', color: 'text-blue-600' },
        { name: 'MongoDB', icon: 'ri-leaf-line', color: 'text-green-600' },
        { name: 'Redis', icon: 'ri-database-2-line', color: 'text-red-500' },
        { name: 'MySQL', icon: 'ri-database-line', color: 'text-blue-500' }
      ]
    },
    {
      category: 'Security',
      technologies: [
        { name: 'OAuth', icon: 'ri-shield-keyhole-line', color: 'text-green-500' },
        { name: 'JWT', icon: 'ri-key-line', color: 'text-orange-500' },
        { name: 'SSL/TLS', icon: 'ri-lock-line', color: 'text-red-500' },
        { name: 'SAML', icon: 'ri-shield-check-line', color: 'text-blue-500' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      icon: 'ri-shield-check-fill',
      color: 'bg-green-500'
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk Authorization',
      icon: 'ri-government-fill',
      color: 'bg-blue-500'
    },
    {
      name: 'SOC 2',
      description: 'Security & Compliance',
      icon: 'ri-secure-payment-fill',
      color: 'bg-purple-500'
    },
    {
      name: 'WCAG 2.1 AA',
      description: 'Accessibility Compliance',
      icon: 'ri-accessibility-fill',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to deliver robust, 
            scalable solutions that meet government and enterprise standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category) => (
            <div key={category.category} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-center text-orange-400">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <i className={`${tech.icon} text-xl ${tech.color}`}></i>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Certifications & Compliance</h3>
            <p className="text-lg text-gray-300">
              Our commitment to security and compliance standards ensures your projects meet the highest requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${cert.icon} text-3xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}