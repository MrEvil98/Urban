import React from 'react';
import { CheckCircle, Droplet, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 overflow-hidden min-h-screen flex items-center pt-16 lg:pt-20" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Laundry <br />
                made <span className="bg-gradient-to-r from-teal-200 to-cyan-200 px-2 sm:px-3 py-1 rounded-xl sm:rounded-2xl">simple,</span><br />
                just for you
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Get fresh, clean clothes with zero effort. We pick up, clean, and deliver—right to your doorstep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-teal-500 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
              >
                Try the app
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image with Notifications */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 p-4 sm:p-6 lg:p-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1683134381076-a66aa1c2f06e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Happy woman with laundry basket"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl"
                loading="eager"
              />
              
              {/* Floating Notifications - Responsive positioning */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl max-w-[200px] sm:max-w-xs border border-gray-100">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Order received</p>
                    <p className="text-gray-600 text-xs sm:text-sm">We've got your laundry!</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-24 sm:top-32 lg:top-40 left-3 sm:left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl max-w-[200px] sm:max-w-xs border border-gray-100">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Done washing</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Order is squeaky clean!</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 sm:bottom-6 right-4 sm:right-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl max-w-[200px] sm:max-w-xs border border-gray-100">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Delivered in 24hrs</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Back in your hands nice and fresh!</p>
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

export default Hero;