export default function TeamSection() {
  const leadership = [
    {
      name: 'Michael Chen',
      role: 'Chief Executive Officer',
      bio: 'Former federal IT director with 15+ years leading digital transformation initiatives across government agencies.',
      specialties: ['Government Relations', 'Strategic Planning', 'Digital Transformation'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20CEO%20headshot%2C%20business%20suit%2C%20confident%20smile%2C%20corporate%20executive%20portrait%2C%20clean%20background%2C%20professional%20lighting%2C%20government%20contractor%20leader&width=300&height=300&seq=ceo-headshot&orientation=squarish'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Software architect and security expert specializing in enterprise-scale systems and government compliance standards.',
      specialties: ['System Architecture', 'Cybersecurity', 'Compliance Management'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20CTO%20headshot%2C%20business%20attire%2C%20confident%20expression%2C%20technology%20executive%20portrait%2C%20clean%20background%2C%20professional%20lighting%2C%20diverse%20leadership&width=300&height=300&seq=cto-headshot&orientation=squarish'
    },
    {
      name: 'David Park',
      role: 'Chief Operations Officer',
      bio: 'Operations leader with extensive experience in project management and quality assurance for mission-critical systems.',
      specialties: ['Project Management', 'Quality Assurance', 'Process Optimization'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20COO%20headshot%2C%20business%20suit%2C%20professional%20smile%2C%20operations%20executive%20portrait%2C%20clean%20background%2C%20professional%20lighting%2C%20experienced%20leader&width=300&height=300&seq=coo-headshot&orientation=squarish'
    }
  ];

  const stats = [
    { number: '75+', label: 'Team Members' },
    { number: '40%', label: 'Security Clearance' },
    { number: '85%', label: 'Advanced Degrees' },
    { number: '12', label: 'Average Years Experience' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings decades of expertise in government technology, 
            enterprise solutions, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {leadership.map((leader) => (
            <div key={leader.name} className="text-center">
              <img
                src={leader.image}
                alt={`${leader.name} - ${leader.role}`}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
              <p className="text-teal-600 font-semibold mb-4">{leader.role}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{leader.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {leader.specialties.map((specialty) => (
                  <span key={specialty} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Team by the Numbers</h3>
            <p className="text-xl opacity-90">
              A diverse, highly qualified team committed to excellence in government and enterprise IT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-orange-300 mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}