export default function ContactHero() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 58, 88, 0.9), rgba(23, 162, 184, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20team%2C%20modern%20office%20call%20center%2C%20diverse%20team%20members%20wearing%20headsets%2C%20helping%20customers%2C%20clean%20corporate%20environment%2C%20technology%20support%2C%20government%20contracting%20office&width=1920&height=600&seq=contact-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
          Get in Touch
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-95">
          Ready to discuss your project? Our team is here to help you navigate your 
          technology challenges and deliver solutions that exceed expectations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex items-center justify-center space-x-3">
            <i className="ri-time-line text-2xl text-orange-400"></i>
            <span className="text-lg">24/7 Support Available</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <i className="ri-timer-line text-2xl text-orange-400"></i>
            <span className="text-lg">2-Hour Response Time</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <i className="ri-shield-check-line text-2xl text-orange-400"></i>
            <span className="text-lg">Security Clearance Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}