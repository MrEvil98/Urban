import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Laundry Service
        </h1>
        <p className="text-xl mb-8 text-teal-100">
          Clean clothes delivered to your door
        </p>
        <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;