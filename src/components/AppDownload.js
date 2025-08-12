import React from 'react';
import { Play, Apple } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-teal-600 to-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The smartest way to get your laundry
            </h2>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
              Let Urban Folds take the hassle out of laundry. Download the app today and enjoy clean clothes with zero stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-200 shadow-lg">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Google Play</span>
              </button>

              <button className="bg-black text-white px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-200 shadow-lg">
                <Apple className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>App Store</span>
              </button>
            </div>
          </div>

          {/* Right - Phones */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex space-x-2 sm:space-x-3">
              {/* Phone 1 */}
              <div className="relative w-[140px] sm:w-[180px] h-[280px] sm:h-[360px] bg-black rounded-2xl sm:rounded-3xl p-1 shadow-xl transform rotate-12">
                <div className="w-full h-full bg-white rounded-[1.2rem] sm:rounded-[1.5rem] flex flex-col overflow-hidden">
                  <div className="flex justify-between items-center px-2 pt-1 pb-0.5 text-[8px] sm:text-[10px] font-semibold">
                    <span>9:41</span>
                    <div className="flex space-x-0.5">
                      <svg width="12" height="6" viewBox="0 0 16 10" fill="none">
                        <rect x="0" y="6" width="2" height="4" rx="1" fill="black"/>
                        <rect x="3" y="4" width="2" height="6" rx="1" fill="black"/>
                        <rect x="6" y="2" width="2" height="8" rx="1" fill="black"/>
                        <rect x="9" y="0" width="2" height="10" rx="1" fill="black"/>
                      </svg>
                      <svg width="12" height="6" viewBox="0 0 16 10" fill="none">
                        <path d="M1 7.5L5.5 3C6.33 2.17 7.67 2.17 8.5 3L13 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M4 5L6.5 2.5C7.17 1.83 8.83 1.83 9.5 2.5L12 5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <svg width="14" height="6" viewBox="0 0 20 10" fill="none">
                        <rect x="0" y="1" width="15" height="6" rx="1.5" stroke="black"/>
                        <rect x="1" y="2" width="10" height="4" rx="1" fill="black"/>
                        <rect x="16" y="2.5" width="1.5" height="3" rx="0.5" fill="black"/>
                      </svg>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1598275277521-1885382d523a?q=80&w=687&auto=format&fit=crop"
                    alt="Laundry preview"
                    className="flex-1 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex-none flex justify-around items-center bg-white border-t border-gray-200 py-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-gray-200 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="relative w-[140px] sm:w-[180px] h-[280px] sm:h-[360px] bg-black rounded-2xl sm:rounded-3xl p-1 shadow-xl transform -rotate-6">
                <div className="w-full h-full bg-white rounded-[1.2rem] sm:rounded-[1.5rem] flex flex-col overflow-hidden">
                  <div className="flex justify-between items-center px-2 pt-1 pb-0.5 text-[8px] sm:text-[10px] font-semibold">
                    <span>9:41</span>
                    <div className="flex space-x-0.5">
                      <svg width="12" height="6" viewBox="0 0 16 10" fill="none">
                        <rect x="0" y="6" width="2" height="4" rx="1" fill="black"/>
                        <rect x="3" y="4" width="2" height="6" rx="1" fill="black"/>
                        <rect x="6" y="2" width="2" height="8" rx="1" fill="black"/>
                        <rect x="9" y="0" width="2" height="10" rx="1" fill="black"/>
                      </svg>
                      <svg width="12" height="6" viewBox="0 0 16 10" fill="none">
                        <path d="M1 7.5L5.5 3C6.33 2.17 7.67 2.17 8.5 3L13 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M4 5L6.5 2.5C7.17 1.83 8.83 1.83 9.5 2.5L12 5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <svg width="14" height="6" viewBox="0 0 20 10" fill="none">
                        <rect x="0" y="1" width="15" height="6" rx="1.5" stroke="black"/>
                        <rect x="1" y="2" width="10" height="4" rx="1" fill="black"/>
                        <rect x="16" y="2.5" width="1.5" height="3" rx="0.5" fill="black"/>
                      </svg>
                    </div>
                  </div>
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/02/07/91/83/1000_F_207918346_xglZvBPOC8coumFOInWm2TrN8DjHE0I2.jpg"
                    alt="Laundry preview"
                    className="flex-1 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex-none flex justify-around items-center bg-white border-t border-gray-200 py-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-gray-200 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;