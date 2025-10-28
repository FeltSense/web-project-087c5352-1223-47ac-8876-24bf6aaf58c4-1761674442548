export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Comprehensive Real Estate Services
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        PrimeHaven Realty delivers exceptional service through cutting-edge technology, 
        local market expertise, and a commitment to making your property journey seamless and successful.
      </p>
    </div>

    {/* Services List - Icon Left Layout */}
    <div className="space-y-6">
      {/* Service 1 */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Extensive Property Database with Advanced Search
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access thousands of listings through our sophisticated search platform. Filter by location, price range, 
              property type, amenities, and more. Our intelligent algorithms match you with properties that meet your 
              exact criteria, saving you time and ensuring you never miss the perfect opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Experienced Local Agents with Market Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team of seasoned real estate professionals brings deep knowledge of local neighborhoods, market trends, 
              and property values. With years of experience navigating complex transactions, our agents provide strategic 
              guidance, expert negotiation, and personalized service tailored to your unique goals.
            </p>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Virtual Tours and High-Quality Property Imagery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experience properties from anywhere with our immersive 3D virtual tours and professional photography. 
              High-resolution images, detailed floor plans, and interactive walkthroughs give you a comprehensive view 
              of each property, allowing you to explore every detail before scheduling an in-person visit.
            </p>
          </div>
        </div>
      </div>

      {/* Service 4 */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Proven Track Record with Completed Projects
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Trust in our demonstrated success with hundreds of satisfied clients and completed transactions. 
              Our portfolio showcases residential sales, commercial properties, and investment opportunities across 
              diverse markets. We deliver results through strategic marketing, skilled negotiation, and unwavering 
              commitment to client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <p className="text-gray-600 mb-6">
        Ready to find your perfect property or sell your home?
      </p>
      <button className="inline-flex items-center px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200 shadow-sm">
        Get Started Today
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</section>
  );
}