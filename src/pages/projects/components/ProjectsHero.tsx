
export default function ProjectsHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20technology%20project%20showcase%20background%20with%20digital%20innovation%20elements%2C%20government%20building%20silhouettes%2C%20modern%20software%20development%20workspace%2C%20clean%20tech%20environment%2C%20blue%20and%20teal%20gradient%20overlay%2C%20professional%20corporate%20atmosphere&width=1920&height=800&seq=projects-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
          Our Project Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-95">
          Transforming government agencies and private enterprises through innovative digital solutions. 
          Explore our successful implementations across diverse sectors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-government-line text-2xl text-orange-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Government Ready</h3>
            <p className="text-sm opacity-90">Federal and state compliance standards</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-teal-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Security Compliant</h3>
            <p className="text-sm opacity-90">Enterprise-grade security implementations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-2xl text-blue-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
            <p className="text-sm opacity-90">Proven track record of successful project completion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
