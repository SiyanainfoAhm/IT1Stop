
export default function ClientLogos() {
  const clients = [
    {
      name: 'Department of Defense',
      category: 'government',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20government%20agency%20shield%20logo%20design%2C%20department%20of%20defense%20emblem%2C%20official%20government%20seal%2C%20clean%20minimalist%20design%2C%20blue%20and%20gold%20colors%2C%20formal%20government%20branding%2C%20official%20seal%20style&width=200&height=100&seq=client-1&orientation=landscape'
    },
    {
      name: 'Microsoft',
      category: 'enterprise',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20Microsoft%20company%20logo%2C%20clean%20corporate%20branding%2C%20blue%20and%20white%20colors%2C%20professional%20technology%20company%20logo%2C%20enterprise%20software%20brand%2C%20minimalist%20design&width=200&height=100&seq=client-2&orientation=landscape'
    },
    {
      name: 'Health & Human Services',
      category: 'government',
      logo: 'https://readdy.ai/api/search-image?query=Health%20and%20Human%20Services%20government%20logo%2C%20medical%20cross%20symbol%2C%20official%20healthcare%20department%20emblem%2C%20professional%20government%20healthcare%20branding%2C%20blue%20and%20white%20colors&width=200&height=100&seq=client-3&orientation=landscape'
    },
    {
      name: 'JPMorgan Chase',
      category: 'enterprise',
      logo: 'https://readdy.ai/api/search-image?query=JPMorgan%20Chase%20bank%20logo%2C%20professional%20financial%20services%20branding%2C%20corporate%20banking%20logo%2C%20blue%20and%20white%20colors%2C%20enterprise%20finance%20company%20brand&width=200&height=100&seq=client-4&orientation=landscape'
    },
    {
      name: 'Department of Education',
      category: 'government',
      logo: 'https://readdy.ai/api/search-image?query=Department%20of%20Education%20government%20logo%2C%20educational%20institution%20emblem%2C%20official%20government%20education%20seal%2C%20professional%20academic%20branding%2C%20blue%20and%20gold%20colors&width=200&height=100&seq=client-5&orientation=landscape'
    },
    {
      name: 'Amazon Web Services',
      category: 'enterprise',
      logo: 'https://readdy.ai/api/search-image?query=Amazon%20Web%20Services%20AWS%20logo%2C%20cloud%20computing%20company%20branding%2C%20orange%20and%20white%20colors%2C%20professional%20technology%20services%20logo%2C%20enterprise%20cloud%20provider%20brand&width=200&height=100&seq=client-6&orientation=landscape'
    },
    {
      name: 'Veterans Affairs',
      category: 'government',
      logo: 'https://readdy.ai/api/search-image?query=Veterans%20Affairs%20government%20logo%2C%20military%20service%20emblem%2C%20official%20VA%20seal%2C%20professional%20government%20veterans%20services%20branding%2C%20blue%20and%20red%20colors&width=200&height=100&seq=client-7&orientation=landscape'
    },
    {
      name: 'IBM',
      category: 'enterprise',
      logo: 'https://readdy.ai/api/search-image?query=IBM%20company%20logo%2C%20professional%20technology%20corporation%20branding%2C%20blue%20and%20white%20colors%2C%20enterprise%20software%20and%20consulting%20logo%2C%20minimalist%20corporate%20design&width=200&height=100&seq=client-8&orientation=landscape'
    }
  ];

  const governmentClients = clients.filter(client => client.category === 'government');
  const enterpriseClients = clients.filter(client => client.category === 'enterprise');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with government agencies and Fortune 500 companies to deliver 
            mission-critical IT solutions.
          </p>
        </div>

        {/* Government Clients */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Government Agencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {governmentClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Clients */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Enterprise Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {enterpriseClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
