
export default function Hero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20multiple%20screens%20showing%20code%2C%20cloud%20infrastructure%20diagrams%2C%20mobile%20app%20interfaces%2C%20cybersecurity%20dashboards%2C%20professional%20developers%20working%2C%20clean%20office%20environment%2C%20blue%20and%20orange%20accent%20lighting%2C%20high-tech%20atmosphere&width=1920&height=800&seq=home-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
          Secure IT Solutions for Government & Enterprise
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-95">
          From cloud migration to AI implementation, we deliver cutting-edge technology solutions 
          that meet the highest security and compliance standards.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-lg cursor-pointer whitespace-nowrap"
          >
            Start Your Project
          </a>
          <a 
            href="/services" 
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-lg cursor-pointer whitespace-nowrap"
          >
            Explore Services
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-orange-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Security First</h3>
            <p className="text-sm opacity-90">Government-grade security and compliance standards</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-rocket-line text-2xl text-teal-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
            <p className="text-sm opacity-90">Agile development with accelerated timelines</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-line text-2xl text-blue-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm opacity-90">Round-the-clock technical support and monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
