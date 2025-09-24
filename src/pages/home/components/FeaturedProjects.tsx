
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Park Reservations',
      category: 'private',
      type: 'Mobile App',
      description: 'Comprehensive mobile application for Virginia\'s conservation and recreation services. Built a secure, citizen-facing mobile app for park reservations, permit applications, and environmental data access serving outdoor enthusiasts.',
      image: 'https://readdy.ai/api/search-image?query=Virginia%20state%20park%20mobile%20app%20interface%20with%20reservation%20system%2C%20environmental%20data%20dashboard%2C%20outdoor%20recreation%20mobile%20application%2C%20smartphone%20mockup%20showing%20park%20booking%20features%2C%20clean%20blue%20and%20green%20color%20scheme%2C%20nature%20conservation%20mobile%20technology&width=600&height=400&seq=dcr-virginia-mobile-featured&orientation=landscape',
      results: ['Citizens Served', 'High Uptime', 'Top Rated'],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      title: 'Mansion Admin Panel',
      category: 'private',
      type: 'Custom Software',
      description: 'Sophisticated property management system for historic mansion operations. Features comprehensive staff scheduling, visitor management, event coordination, and facility maintenance tracking.',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20estate%20management%20dashboard%20interface%20with%20staff%20scheduling%20system%2C%20visitor%20management%20portal%2C%20event%20coordination%20tools%2C%20mansion%20property%20management%20software%2C%20elegant%20design%20with%20gold%20and%20navy%20colors%2C%20premium%20property%20management%20technology&width=600&height=400&seq=mansion-admin-featured&orientation=landscape',
      results: ['Staff Managed', 'Visitors Served', 'Event Success'],
      technologies: ['Next.js', 'MongoDB', 'Redis', 'AWS']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'government', label: 'Government' },
    { key: 'private', label: 'Private Sector' }
  ];

  return (
    <section id="featured-projects" className="py-20 bg-off-white-50" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our successful implementations across government agencies and private enterprises.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'government' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category === 'government' ? 'Government' : 'Private'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.results.map((result, index) => (
                    <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {result}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/projects')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
