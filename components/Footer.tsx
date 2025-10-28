export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="grid md:grid-cols-2 gap-12 mb-12">
      {/* Left Side - CTA Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">PrimeHaven Realty</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Your trusted partner in finding the perfect property. Excellence in real estate since 1995.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span className="text-gray-300">1250 Commerce Boulevard, Suite 400<br/>Metropolitan City, MC 10025</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span className="text-gray-300">(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span className="text-gray-300">info@primehavenrealty.com</span>
          </div>
        </div>
        <div className="pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Right Side - Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buy Property</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell Property</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rent Property</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Property Management</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investment Advisory</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Insights</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buyer's Guide</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seller's Guide</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-700 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          &copy; 2025 PrimeHaven Realty. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}