import React, { useState, useEffect } from 'react';
import {
  RefreshCw,
  Zap,
  Shirt,
  Droplet,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  const services = [
    {
      title: 'Wash and Fold',
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete wash, dry, and fold service with premium care',
    },
    {
      title: 'Deep Stain Removal',
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Advanced stain removal techniques for tough spots',
    },
    {
      title: 'Dry Cleaning',
      icon: <Shirt className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional dry cleaning for delicate fabrics',
    },
    {
      title: 'Express Service',
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Same-day service for urgent laundry needs',
    },
    {
      title: 'Eco-Friendly Wash',
      icon: <Droplet className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Environmentally safe cleaning products and methods',
    },
    {
      title: 'Premium Care',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: 'https://images.pexels.com/photos/7262948/pexels-photo-7262948.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Special handling for luxury and designer items',
    },
  ];

  // Responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our neat <span className="text-teal-500">services,</span>
                <br /> just <span className="text-teal-600">for you</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                At Urban Folds, we're dedicated to making laundry day a breeze.
                From everyday laundry to specialized care, we've got you covered.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-500 transition-all duration-200 hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-teal-600 transition-all duration-200 hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex space-x-2 ml-4">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      idx === currentSlide ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Services Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div key={slideIdx} className="w-full flex-shrink-0">
                  <div className={`grid gap-4 sm:gap-6 ${itemsPerSlide === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {services
                      .slice(slideIdx * itemsPerSlide, (slideIdx + 1) * itemsPerSlide)
                      .map((service) => (
                        <div
                          key={service.title}
                          className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                        >
                          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 min-h-[100px] sm:min-h-[112px] flex flex-col justify-center">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                    {service.icon}
                                  </div>
                                  <div className="min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{service.title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;