
export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                IT1Stop began with a simple yet powerful vision: to bridge the gap between 
                cutting-edge technology and practical business solutions. Our journey started 
                when we recognized the unique challenges faced by government agencies and 
                enterprises in adopting secure, compliant, and scalable technology solutions.
              </p>
              
              <p>
                What sets us apart is our deep understanding of both the technical complexities 
                and regulatory requirements that define modern digital transformation. We've 
                built our expertise through hands-on experience with critical systems that 
                demand the highest levels of security, availability, and performance.
              </p>
              
              <p>
                Today, we're proud to be a trusted partner to organizations that require 
                more than just technical expertise—they need a team that understands their 
                mission, their constraints, and their aspirations for the future.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver secure, innovative technology solutions that empower organizations 
                  to achieve their goals while maintaining the highest standards of compliance and security.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of comprehensive IT solutions for government and 
                  enterprise clients, setting new standards for security, reliability, and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl opacity-10 transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20IT%20consulting%20team%20meeting%20with%20government%20officials%2C%20technology%20consulting%20office%20environment%2C%20diverse%20team%20of%20IT%20professionals%20collaborating%20on%20secure%20government%20projects%2C%20modern%20office%20setting%20with%20cybersecurity%20focus%2C%20professional%20business%20atmosphere&width=500&height=400&seq=it1stop-story&orientation=landscape"
                alt="IT1Stop team collaborating on solutions"
                className="w-full rounded-xl object-cover object-top"
              />
              
              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Trusted Partnership</h4>
                <p className="text-gray-600 text-sm">
                  Building long-term relationships through reliable delivery and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
