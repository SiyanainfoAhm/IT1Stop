
export default function ProjectsStats() {
  const stats = [
    {
      icon: 'ri-check-double-line',
      title: 'Professional Project Delivery',
      description: 'Consistent delivery of high-quality solutions across diverse industries and government sectors.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Satisfied Client Reviews',
      description: 'Strong client relationships built on trust, quality delivery, and ongoing support.'
    },
    {
      icon: 'ri-government-line',
      title: 'Government Experience',
      description: 'Extensive experience working with federal, state, and local government agencies.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Ongoing Support Available',
      description: 'Comprehensive maintenance and support services to ensure long-term success.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Proven expertise in delivering secure, scalable, and compliant technology solutions 
            for government agencies and enterprise clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <i className={`${stat.icon} text-3xl text-orange-400`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                {stat.title}
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
