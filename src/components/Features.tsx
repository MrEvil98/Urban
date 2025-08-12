import React from 'react';
import { Heart, Truck, Sparkles, Droplet } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Gentle fabric care",
      description: "Our service is gentle on fabrics, yet tough on dirt and stains, ensuring long-lasting results.",
      color: "text-teal-500"
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Reliable services",
      description: "We guarantee fast and reliable delivery straight to your door, so you never have to worry about timing.",
      color: "text-blue-500"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Premium freshness",
      description: "Our advanced detergent method leaves clothes smelling fresh and feeling smooth and cozy experience.",
      color: "text-teal-500"
    },
    {
      icon: <Droplet className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Eco-friendly wash",
      description: "Our products are safe for your family and the environment, so you get peace of mind with every wash.",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-white px-3 py-1 rounded-lg border-2 border-teal-300 shadow-sm mb-4">
            <p className="text-gray-500 font-medium text-xs sm:text-sm uppercase tracking-wide">
              WHY URBAN FOLDS?
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Fresh clothes, zero effort
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Clean clothes hanging"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl sm:rounded-3xl shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Right Features Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center sm:text-left space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex ${feature.color} mb-2 sm:mb-4 justify-center sm:justify-start`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;