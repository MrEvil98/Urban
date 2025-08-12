import React from 'react';
import { Download, Calendar, Shield, Coffee } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { 
      number: 1, 
      icon: Download, 
      title: 'Download the Urban Folds app', 
      description: 'Sign up in seconds and explore effortless laundry solutions.' 
    },
    { 
      number: 2, 
      icon: Calendar, 
      title: 'Schedule your pickup', 
      description: 'Pick a time that works for you, and we\'ll handle the rest.' 
    },
    { 
      number: 3, 
      icon: Shield,   
      title: 'Stay in control', 
      description: 'Track your orders and manage preferences anytime, anywhere.' 
    },
    { 
      number: 4, 
      icon: Coffee,   
      title: 'We work, you relax', 
      description: 'Enjoy perfectly cleaned clothes delivered to your doorstep.' 
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-white px-3 py-1 rounded-lg border-2 border-teal-300 shadow-sm mb-4">
            <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
              HOW IT WORKS
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Convenience at your fingertips
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end lg:pr-12 xl:pr-20">
            <div className="relative w-[200px] sm:w-[250px] h-[400px] sm:h-[500px] bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1 sm:p-[6px] shadow-2xl">
              <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] flex flex-col overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-3 sm:px-4 pt-2 pb-1 text-xs font-semibold shrink-0">
                  <span>9:41</span>
                  <div className="flex space-x-1">
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

                {/* Content */}
                <div className="flex-1 flex flex-col px-3 sm:px-4 pt-1 space-y-3 sm:space-y-5 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img 
                        src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="avatar" 
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold">Hey, Sharib</span>
                    </div>
                    <div className="text-gray-900">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M3 6h14M5 12h12M7 18h10" />
                      </svg>
                    </div>
                  </div>

                  <button className="mt-1 bg-[#0d6e63] text-white text-xs font-semibold px-3 py-1.5 rounded-md w-[100px] sm:w-[120px] focus:outline-none cursor-default">
                    Schedule Pickup
                  </button>

                  {/* Discount Banner */}
                  <div className="relative rounded-xl overflow-hidden h-16 sm:h-24">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                      alt="discount bg"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                      <p className="text-xs sm:text-sm font-bold">Discount deals up to 40% off</p>
                      <button className="mt-1 bg-[#0d6e63] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full focus:outline-none cursor-default">
                        Claim
                      </button>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="w-full max-w-xs mx-auto">
                    <h4 className="text-xs sm:text-sm font-bold mb-1.5">Choose a Service</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Washing', icon: 'https://cdn-icons-png.flaticon.com/512/3322/3322056.png' },
                        { label: 'Iron', icon: 'https://cdn-icons-png.flaticon.com/512/6981/6981014.png' },
                        { label: 'Dry Cleaning', icon: 'https://cdn-icons-png.flaticon.com/512/3085/3085554.png' },
                        { label: 'Folding', icon: 'https://cdn-icons-png.flaticon.com/512/6966/6966735.png' },
                      ].map(({ label, icon }) => (
                        <div
                          key={label}
                          className="bg-gray-100 rounded-lg p-2 flex flex-col items-center"
                        >
                          <img
                            src={icon}
                            alt={label}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                            loading="lazy"
                          />
                          <span className="text-[9px] sm:text-[10px] font-semibold mt-1">{label}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-2 w-full text-center text-xs font-semibold text-gray-500">
                      See All
                    </button>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="flex-none flex justify-around items-center bg-white border-t border-gray-200 py-1">
                  {[
                    {
                      label: 'Home',
                      active: true,
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 mb-px">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'History',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 mb-px">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'Basket',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 mb-px">
                          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.7 4H4V2h3.1l1.1 2h13.9c.6 0 1 .4 1 1s-.4 1-1 1H6.8l-1.1-2H5.7zM6 11h12l-1.4 7H7.4L6 11z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'Profile',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 mb-px">
                          <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
                        </svg>
                      ),
                    },
                  ].map(({ label, icon, active }) => (
                    <button
                      key={label}
                      className={`flex flex-col items-center text-[9px] sm:text-[10px] font-semibold rounded-t px-1 transition-colors ${
                        active ? 'text-white bg-[#0d6e63]' : 'text-gray-500'
                      }`}
                    >
                      {icon}
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                {/* Circle + optional line */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {step.number}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 h-8 sm:h-10 bg-teal-300 mt-2" />
                  )}
                </div>

                {/* Text block */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;