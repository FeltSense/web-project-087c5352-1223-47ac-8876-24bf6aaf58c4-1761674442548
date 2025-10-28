export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Homeowners & Investors
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Hear from clients who found their perfect property with PrimeHaven Realty
      </p>
    </div>

    {/* Featured Large Quote */}
    <div className="mb-16">
      <div className="bg-slate-50 rounded-2xl p-12 md:p-16 shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto">
          <svg className="w-12 h-12 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed mb-8">
            "PrimeHaven Realty made our first home purchase completely stress-free. Their agent walked us through every step, negotiated $15,000 off the asking price, and connected us with an excellent mortgage broker. We closed in just 28 days."
          </blockquote>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-semibold text-xl mr-4">
              MJ
            </div>
            <div>
              <div className="font-semibold text-slate-900 text-lg">Michael & Jennifer Torres</div>
              <div className="text-slate-600">First-Time Homebuyers, Westfield</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Grid of Additional Testimonials */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Sold our investment property for 8% above market value. Their staging recommendations and professional photography made all the difference. Listed on Thursday, had multiple offers by Monday."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-semibold mr-3">
            RK
          </div>
          <div>
            <div className="font-semibold text-slate-900">Robert Kim</div>
            <div className="text-sm text-slate-600">Property Investor</div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "After relocating for work, PrimeHaven found us the perfect family home in our target school district within two weeks. Their local market knowledge is unmatched."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-semibold mr-3">
            SP
          </div>
          <div>
            <div className="font-semibold text-slate-900">Sarah Patterson</div>
            <div className="text-sm text-slate-600">Corporate Executive</div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Downsizing was emotional, but their team handled everything with care and professionalism. They coordinated movers, cleaners, and even helped donate furniture. True full-service experience."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-semibold mr-3">
            DM
          </div>
          <div>
            <div className="font-semibold text-slate-900">David Martinez</div>
            <div className="text-sm text-slate-600">Retired Educator</div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Stats */}
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
          <div className="text-slate-600">Happy Clients</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
          <div className="text-slate-600">Average Rating</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
          <div className="text-slate-600">Satisfaction Rate</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">$2.5B+</div>
          <div className="text-slate-600">Properties Sold</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}