export default function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, assess current systems, and develop a comprehensive project roadmap.',
      icon: 'ri-search-line',
      color: 'bg-blue-500'
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Our team creates detailed system architecture and user experience designs that meet accessibility standards.',
      icon: 'ri-draft-line',
      color: 'bg-teal-500'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile development process with continuous integration, security testing, and quality assurance.',
      icon: 'ri-code-line',
      color: 'bg-orange-500'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment to production with comprehensive training and ongoing technical support.',
      icon: 'ri-rocket-line',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery while maintaining the highest security and quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden xl:block absolute top-20 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                
                <div className="text-4xl font-bold text-gray-300 text-center mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2-4 weeks</div>
              <div className="text-gray-600">Average project kickoff</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-gray-600">On-time delivery rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Post-launch support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}