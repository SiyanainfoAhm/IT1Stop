export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Security First',
      description: 'Every solution we build prioritizes security from the ground up, ensuring your data and systems remain protected against evolving threats.',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, fostering transparent communication and shared accountability for project success.',
      color: 'bg-teal-500'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation & Excellence',
      description: 'We leverage cutting-edge technologies and best practices to deliver solutions that exceed expectations and drive results.',
      color: 'bg-orange-500'
    },
    {
      icon: 'ri-flag-line',
      title: 'Compliance & Integrity',
      description: 'Our commitment to regulatory compliance and ethical business practices ensures reliable, trustworthy partnerships.',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to clients and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}