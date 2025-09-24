
import { useState } from 'react';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Park Reservations',
      category: 'government',
      type: 'Mobile Application',
      client: 'Virginia Department of Conservation',
      description: 'Comprehensive mobile application for Virginia\'s conservation and recreation services. Built a secure, citizen-facing mobile app for park reservations, permit applications, and environmental data access.',
      image: 'https://readdy.ai/api/search-image?query=Virginia%20state%20park%20mobile%20app%20interface%20with%20reservation%20system%2C%20environmental%20data%20dashboard%2C%20outdoor%20recreation%20mobile%20application%2C%20smartphone%20mockup%20showing%20park%20booking%20features%2C%20clean%20blue%20and%20green%20color%20scheme%2C%20nature%20conservation%20mobile%20technology&width=600&height=400&seq=dcr-virginia-mobile&orientation=landscape',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      features: ['Real-time Reservations', 'Offline Capability', 'Push Notifications', 'Accessibility Compliant'],
      achievements: [
        'High User Satisfaction',
        'Improved Accessibility',
        'Streamlined Operations'
      ]
    },
    {
      id: 2,
      title: 'Mansion Admin Panel',
      category: 'private',
      type: 'Web Application',
      client: 'Historic Property Management',
      description: 'Sophisticated property management system for historic mansion operations. Features comprehensive staff scheduling, visitor management, event coordination, and facility maintenance tracking.',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20estate%20management%20dashboard%20interface%20with%20staff%20scheduling%20system%2C%20visitor%20management%20portal%2C%20event%20coordination%20tools%2C%20mansion%20property%20management%20software%2C%20elegant%20design%20with%20gold%20and%20navy%20colors%2C%20premium%20property%20management%20technology&width=600&height=400&seq=mansion-admin&orientation=landscape',
      technologies: ['Next.js', 'MongoDB', 'Redis', 'AWS'],
      features: ['Staff Management', 'Event Coordination', 'Visitor Tracking', 'Maintenance Scheduling'],
      achievements: [
        'Efficient Operations',
        'Enhanced Security',
        'Streamlined Workflow'
      ]
    },
    {
      id: 3,
      title: 'Cloud Migration Platform',
      category: 'private',
      type: 'Enterprise Solution',
      client: 'Fortune 500 Manufacturing Company',
      description: 'Large-scale cloud migration and modernization initiative for enterprise manufacturing operations. Migrated legacy systems to AWS cloud infrastructure with enhanced security and scalability.',
      image: 'https://readdy.ai/api/search-image?query=Enterprise%20cloud%20migration%20dashboard%20showing%20AWS%20infrastructure%2C%20data%20center%20migration%20progress%2C%20cloud%20architecture%20diagrams%2C%20enterprise%20technology%20transformation%2C%20blue%20and%20orange%20color%20scheme%2C%20professional%20cloud%20computing%20interface&width=600&height=400&seq=cloud-migration&orientation=landscape',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      features: ['Infrastructure Automation', 'Zero-Downtime Migration', 'Cost Optimization', 'Security Hardening'],
      achievements: [
        'Cost Reduction Achieved',
        'Performance Improvement',
        'Enhanced Security Posture'
      ]
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard',
      category: 'private',
      type: 'AI Platform',
      client: 'Major Retail Chain',
      description: 'AI-powered analytics platform providing real-time insights for retail operations. Machine learning models analyze customer behavior, inventory optimization, and sales forecasting.',
      image: 'https://readdy.ai/api/search-image?query=AI%20powered%20retail%20analytics%20dashboard%20with%20machine%20learning%20insights%2C%20customer%20behavior%20analysis%2C%20sales%20forecasting%20charts%2C%20modern%20data%20visualization%20interface%2C%20teal%20and%20blue%20color%20scheme%2C%20artificial%20intelligence%20retail%20technology&width=600&height=400&seq=ai-analytics&orientation=landscape',
      technologies: ['Python', 'TensorFlow', 'React', 'Apache Spark'],
      features: ['Predictive Analytics', 'Real-time Processing', 'Customer Insights', 'Inventory Optimization'],
      achievements: [
        'Revenue Growth',
        'Operational Efficiency',
        'Customer Satisfaction'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity Monitoring',
      category: 'private',
      type: 'Security Platform',
      client: 'Regional Financial Institution',
      description: 'Comprehensive cybersecurity monitoring solution for financial services. Real-time threat detection, incident response automation, and compliance reporting for banking regulations.',
      image: 'https://readdy.ai/api/search-image?query=Financial%20cybersecurity%20monitoring%20dashboard%20with%20threat%20detection%2C%20security%20incident%20response%2C%20banking%20compliance%20interface%2C%20network%20security%20visualization%2C%20red%20and%20blue%20color%20scheme%2C%20financial%20security%20technology&width=600&height=400&seq=cybersecurity-monitoring&orientation=landscape',
      technologies: ['Splunk', 'Python', 'Elasticsearch', 'AWS'],
      features: ['Threat Detection', 'Incident Response', 'Compliance Reporting', 'Real-time Monitoring'],
      achievements: [
        'Security Compliance',
        'Threat Mitigation',
        'Regulatory Adherence'
      ]
    },
    {
      id: 6,
      title: 'Power Platform Automation',
      category: 'private',
      type: 'Business Automation',
      client: 'Healthcare Organization',
      description: 'Microsoft Power Platform solution automating internal workflows for healthcare administration. Streamlined patient onboarding, staff scheduling, and reporting processes.',
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Power%20Platform%20healthcare%20automation%20interface%20showing%20workflow%20automation%2C%20patient%20management%2C%20staff%20scheduling%20system%2C%20healthcare%20administration%20dashboard%2C%20purple%20and%20blue%20color%20scheme%2C%20medical%20workflow%20technology&width=600&height=400&seq=power-platform&orientation=landscape',
      technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Azure'],
      features: ['Workflow Automation', 'Document Management', 'Staff Scheduling', 'Reporting Dashboards'],
      achievements: [
        'Process Efficiency',
        'Time Savings',
        'Improved Accuracy'
      ]
    },
    {
      id: 7,
      title: 'Data Science Insights',
      category: 'private',
      type: 'Analytics Platform',
      client: 'Insurance Provider',
      description: 'Advanced data science platform for predictive risk modeling and customer analytics. Machine learning algorithms analyze claim patterns and optimize pricing strategies.',
      image: 'https://readdy.ai/api/search-image?query=Insurance%20data%20science%20platform%20with%20predictive%20modeling%2C%20risk%20analysis%20charts%2C%20customer%20analytics%20dashboard%2C%20actuarial%20data%20visualization%2C%20green%20and%20teal%20color%20scheme%2C%20insurance%20technology%20interface&width=600&height=400&seq=data-science&orientation=landscape',
      technologies: ['Python', 'R', 'Jupyter', 'Tableau'],
      features: ['Predictive Modeling', 'Risk Assessment', 'Customer Segmentation', 'Pricing Optimization'],
      achievements: [
        'Risk Reduction',
        'Pricing Accuracy',
        'Customer Insights'
      ]
    },
    {
      id: 8,
      title: 'Government Portal',
      category: 'government',
      type: 'Secure Portal',
      client: 'Federal Agency',
      description: 'Secure government portal with multi-factor authentication and role-based access control. Provides citizens with access to government services and document processing.',
      image: 'https://readdy.ai/api/search-image?query=Government%20secure%20portal%20interface%20with%20multi-factor%20authentication%2C%20citizen%20services%20dashboard%2C%20federal%20agency%20website%2C%20secure%20government%20technology%2C%20blue%20and%20gold%20color%20scheme%2C%20official%20government%20portal%20design&width=600&height=400&seq=government-portal&orientation=landscape',
      technologies: ['Angular', 'Java Spring', 'Oracle', 'AWS GovCloud'],
      features: ['Multi-factor Authentication', 'Role-based Access', 'Document Processing', 'Citizen Services'],
      achievements: [
        'Security Compliance',
        'User Accessibility',
        'Service Efficiency'
      ]
    },
    {
      id: 9,
      title: 'Healthcare Management System',
      category: 'private',
      type: 'Enterprise Software',
      client: 'Regional Healthcare Network',
      description: 'HIPAA-compliant healthcare management system with patient records, appointment scheduling, and integrated billing solutions for multi-location healthcare providers.',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20interface%20with%20patient%20records%20dashboard%2C%20medical%20appointment%20scheduling%2C%20HIPAA%20compliant%20design%2C%20hospital%20management%20software%2C%20clean%20medical%20interface%20with%20teal%20and%20white%20colors%2C%20healthcare%20technology%20platform&width=600&height=400&seq=healthcare-management&orientation=landscape',
      technologies: ['Vue.js', 'PHP Laravel', 'MySQL', 'Docker'],
      features: ['Patient Management', 'Appointment Scheduling', 'Billing Integration', 'HIPAA Compliance'],
      achievements: [
        'HIPAA Compliant',
        'Enhanced Patient Care',
        'Operational Efficiency'
      ]
    },
    {
      id: 10,
      title: 'Smart City IoT Platform',
      category: 'government',
      type: 'IoT Platform',
      client: 'City Municipality',
      description: 'IoT-enabled smart city platform for traffic management, environmental monitoring, and public safety coordination across urban infrastructure systems.',
      image: 'https://readdy.ai/api/search-image?query=Smart%20city%20IoT%20dashboard%20with%20traffic%20monitoring%2C%20environmental%20sensors%20data%2C%20urban%20management%20interface%2C%20smart%20city%20technology%20platform%2C%20modern%20municipal%20software%20design%20with%20green%20and%20blue%20colors%2C%20city%20management%20system&width=600&height=400&seq=smart-city-iot&orientation=landscape',
      technologies: ['Node.js', 'InfluxDB', 'Grafana', 'MQTT'],
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Alert Systems', 'Public Dashboard'],
      achievements: [
        'Improved Safety',
        'Environmental Benefits',
        'Smart Operations'
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'government', label: 'Government', count: projects.filter(p => p.category === 'government').length },
    { key: 'private', label: 'Private Sector', count: projects.filter(p => p.category === 'private').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {filter.label}
                <span className={`ml-2 text-sm ${
                  activeFilter === filter.key ? 'text-blue-200' : 'text-gray-400'
                }`}>
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                    project.category === 'government'
                      ? 'bg-green-500/20 text-green-100 border border-green-400/30'
                      : 'bg-blue-500/20 text-blue-100 border border-blue-400/30'
                  }`}>
                    {project.category === 'government' ? 'Government' : 'Private'}
                  </span>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm font-medium">{project.client}</p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2 text-base"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-folder-open-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter to see more projects.</p>
          </div>
        )}
      </div>
    </section>
  );
}
