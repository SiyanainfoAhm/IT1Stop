
export default function AboutHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20technology%20company%20office%20environment%20with%20modern%20workspace%2C%20team%20collaboration%2C%20government%20partnership%20imagery%2C%20secure%20technology%20infrastructure%2C%20blue%20and%20orange%20accent%20lighting%2C%20corporate%20professional%20atmosphere&width=1920&height=800&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
          About IT1Stop
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-95">
          Your trusted partner for secure, compliant, and innovative technology solutions 
          designed for government agencies and enterprise organizations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-orange-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Security First</h3>
            <p className="text-sm opacity-90">Enterprise-grade security and compliance standards</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-government-line text-2xl text-teal-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Government Ready</h3>
            <p className="text-sm opacity-90">Experienced in federal and state requirements</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-award-line text-2xl text-blue-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
            <p className="text-sm opacity-90">Delivering successful solutions across industries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
