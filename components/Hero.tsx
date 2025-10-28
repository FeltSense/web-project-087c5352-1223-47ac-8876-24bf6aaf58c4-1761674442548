export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
  {/* Diagonal Split Container */}
  <div className="relative min-h-screen flex items-stretch">
    
    {/* Left Content Side */}
    <div className="relative w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-16 py-24 bg-slate-50 z-10">
      <div className="max-w-xl">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          <span className="text-sm font-medium text-slate-700">Trusted Real Estate Partner</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Find Your Perfect Property with Confidence
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Access thousands of listings with advanced search tools, connect with experienced local agents, and explore properties through immersive virtual tours.
        </p>

        {/* Key Value Props */}
        <div className="space-y-4 mb-10">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-slate-900 font-semibold">Extensive Property Database</p>
              <p className="text-slate-600 text-sm">Advanced search filters to find exactly what you need</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-slate-900 font-semibold">Expert Local Agents</p>
              <p className="text-slate-600 text-sm">Market expertise and personalized guidance throughout</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-slate-900 font-semibold">Virtual Tours & HD Imagery</p>
              <p className="text-slate-600 text-sm">Explore properties remotely with stunning visuals</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
            Browse Properties
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-colors">
            Speak with an Agent
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-200">
          <div>
            <div className="text-2xl font-bold text-slate-900">15,000+</div>
            <div className="text-sm text-slate-600">Active Listings</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">200+</div>
            <div className="text-sm text-slate-600">Local Agents</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">98%</div>
            <div className="text-sm text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>

    {/* Diagonal Divider */}
    <div className="hidden lg:block absolute top-0 left-1/2 w-24 h-full bg-slate-50 transform -skew-x-6 origin-top-left z-20" style={{ marginLeft: '-3rem' }}></div>

    {/* Right Image Side */}
    <div className="hidden lg:block relative w-1/2 bg-slate-200">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-900/20"></div>
      <img 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        alt="Luxury modern home exterior with professional landscaping"
        className="w-full h-full object-cover"
      />
      
      {/* Floating Property Card */}
      <div className="absolute bottom-12 right-12 bg-white rounded-xl shadow-lg p-6 max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-sm font-medium text-slate-500 mb-1">Featured Property</div>
            <div className="text-2xl font-bold text-slate-900">$1,250,000</div>
          </div>
          <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
            New Listing
          </div>
        </div>
        <div className="text-slate-700 font-medium mb-2">Modern Family Home</div>
        <div className="flex items-center text-sm text-slate-600 gap-4">
          <span>4 Beds</span>
          <span>•</span>
          <span>3.5 Baths</span>
          <span>•</span>
          <span>3,200 sq ft</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}