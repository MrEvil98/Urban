import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: 'Fast, reliable, and perfectly clean every time. Urban Folds makes life easier!',
      author: 'Syed Wasif',
      role: 'Verified Customer',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      quote: 'I love how they handle my delicate wears. Delivery is very swift and customer service is lovely.',
      author: 'Sharib Khan',
      role: 'Verified Customer',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      quote: 'The convenience is unmatched. I can schedule pickups anytime and track my orders easily.',
      author: 'Rubeel Taj',
      role: 'Verified Customer',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      quote: 'Urban Folds rescued me during exam week—same-day service saved my favorite blazer!',
      author: 'Yasir Khan',
      role: 'Verified Customer',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      quote: 'Eco-friendly detergents and zero plastic waste? Count me in for life.',
      author: 'Noman Shah',
      role: 'Sustainability Advocate',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      quote: 'The mobile app is so intuitive I booked a pickup while stuck in traffic. Genius.',
      author: 'Chidi',
      role: 'Tech Enthusiast',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const goTo = (index) => setCurrentTestimonial(index);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block bg-white px-3 py-1 rounded-lg border-2 border-teal-300 shadow-sm">
                <p className="text-gray-500 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  TESTIMONIALS
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What our <br />
                customers have <br />
                to say
              </h2>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 hover:text-teal-500 transition-all duration-200 hover:shadow-2xl"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-500 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-teal-600 transition-all duration-200 hover:shadow-2xl"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                    i === currentTestimonial ? 'bg-teal-500 scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            <div
              key={currentTestimonial}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 min-h-[350px] sm:min-h-[400px] flex flex-col justify-between animate-fade-in"
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center">
                <blockquote className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base mb-2">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;