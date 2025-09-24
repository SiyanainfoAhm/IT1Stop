
import { useState } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "1Stop.ai transformed our legacy healthcare system into a modern, secure platform that serves over 2 million citizens. Their understanding of government compliance requirements and technical expertise made the difference.",
      author: "Sarah Johnson",
      title: "Chief Technology Officer",
      organization: "Department of Health & Human Services",
      category: "Government",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20government%20CTO%20woman%20executive%20portrait%2C%20confident%20female%20technology%20leader%2C%20business%20suit%2C%20government%20office%20background%2C%20professional%20headshot%20style%2C%20clean%20corporate%20photography&width=80&height=80&seq=testimonial-1&orientation=squarish"
    },
    {
      quote: "The mobile banking app they developed exceeded all our expectations. Zero security incidents, 500K+ downloads, and 40% faster transaction processing. Their team's attention to detail and security focus is unmatched.",
      author: "Michael Chen",
      title: "Head of Digital Innovation",
      organization: "First National Bank",
      category: "Enterprise",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20bank%20executive%20male%20portrait%2C%20confident%20Asian%20business%20leader%2C%20corporate%20suit%2C%20financial%20services%20background%2C%20executive%20headshot%20photography%2C%20professional%20business%20portrait&width=80&height=80&seq=testimonial-2&orientation=squarish"
    },
    {
      quote: "Our smart city initiative wouldn't have been possible without 1Stop.ai. They delivered an integrated IoT platform that reduced traffic congestion by 30% and improved citizen services across the board.",
      author: "Emily Rodriguez",
      title: "Director of Smart City Operations",
      organization: "City of Austin",
      category: "Government",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20city%20government%20director%20female%20portrait%2C%20confident%20Hispanic%20woman%20executive%2C%20business%20attire%2C%20municipal%20office%20background%2C%20government%20official%20headshot%20style&width=80&height=80&seq=testimonial-3&orientation=squarish"
    },
    {
      quote: "Working with 1Stop.ai on our e-commerce marketplace was exceptional. They delivered a scalable solution that increased our sales by 200% and supports over 10,000 vendors seamlessly.",
      author: "David Park",
      title: "VP of Technology",
      organization: "Global Commerce Solutions",
      category: "Enterprise",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20technology%20VP%20male%20portrait%2C%20confident%20Korean%20business%20executive%2C%20modern%20office%20setting%2C%20corporate%20technology%20leader%2C%20professional%20business%20headshot%20photography&width=80&height=80&seq=testimonial-4&orientation=squarish"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from government officials and enterprise leaders who trust us 
            with their most critical IT initiatives.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <i className="ri-double-quotes-l text-4xl text-blue-400 mb-6 block"></i>
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-lg">
                  {testimonials[activeTestimonial].author}
                </div>
                <div className="text-gray-300">
                  {testimonials[activeTestimonial].title}
                </div>
                <div className="text-blue-400">
                  {testimonials[activeTestimonial].organization}
                </div>
              </div>
              <div className="ml-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  testimonials[activeTestimonial].category === 'Government'
                    ? 'bg-green-600 text-green-100'
                    : 'bg-blue-600 text-blue-100'
                }`}>
                  {testimonials[activeTestimonial].category}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === activeTestimonial
                    ? 'bg-blue-400'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveTestimonial((prev) => 
              prev === 0 ? testimonials.length - 1 : prev - 1
            )}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button
            onClick={() => setActiveTestimonial((prev) => 
              prev === testimonials.length - 1 ? 0 : prev + 1
            )}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>

        {/* All Testimonials Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-blue-600 transform scale-105'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-300">{testimonial.organization}</div>
                </div>
              </div>
              <p className="text-sm line-clamp-3">
                "{testimonial.quote.substring(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
