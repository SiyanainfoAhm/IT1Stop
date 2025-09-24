export default function LocationMap() {
  return (
    <div className="bg-neutral-50 section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Our Location
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Strategically located in Washington, DC for optimal government contract support and enterprise client access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.986!2d-77.0368707!3d38.9071923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sWhite%20House!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Headquarters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-teal-500 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <p className="font-medium text-navy-900">Digital Solutions Inc.</p>
                    <p className="text-neutral-600">1234 Technology Boulevard</p>
                    <p className="text-neutral-600">Suite 500</p>
                    <p className="text-neutral-600">Washington, DC 20001</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-teal-500 text-xl"></i>
                  <span className="text-navy-900">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-teal-500 text-xl"></i>
                  <span className="text-navy-900">contact@digitalsolutions.com</span>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">
                <i className="ri-car-line mr-2"></i>
                Parking & Access
              </h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Free visitor parking available</li>
                <li>• Metro accessible (Red Line)</li>
                <li>• Security checkpoint required</li>
                <li>• SCIF facility on 5th floor</li>
                <li>• Wheelchair accessible entrance</li>
              </ul>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">
                <i className="ri-calendar-line mr-2"></i>
                Schedule a Visit
              </h3>
              <p className="text-teal-800 text-sm mb-4">
                For security purposes, all visits must be scheduled in advance. Government personnel welcome.
              </p>
              <button className="whitespace-nowrap cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-teal transform hover:scale-105 text-sm">
                <i className="ri-calendar-check-line mr-2"></i>
                Schedule Visit
              </button>
            </div>
          </div>
        </div>

        {/* Additional Locations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-soft p-6 text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-building-line text-2xl text-accent-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Regional Office</h3>
            <p className="text-neutral-600 text-sm">
              Atlanta, GA<br />
              Serving Southeast region
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-soft p-6 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-rocket-line text-2xl text-teal-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Innovation Lab</h3>
            <p className="text-neutral-600 text-sm">
              Austin, TX<br />
              R&D and prototyping
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-soft p-6 text-center">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-navy-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Security Center</h3>
            <p className="text-neutral-600 text-sm">
              Colorado Springs, CO<br />
              Classified projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}