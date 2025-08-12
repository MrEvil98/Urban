import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(1); // Premium pre-selected

  const plans = [
    {
      name: 'Standard',
      description: 'Great for light users—washing, ironing, and ultra dry-clean bonus',
      monthlyPrice: 'Rs.500',
      annualPrice: 'Rs.6,000',
      features: [
        'Washing, ironing and folding',
        'Two dry-cleaning bonuses',
        'Free pickup and delivery',
      ],
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Premium',
      description: 'The ultimate convenience with free delivery and epic bonuses.',
      monthlyPrice: 'Rs.1,000',
      annualPrice: 'Rs.12,000',
      features: [
        'Washing, ironing and folding',
        'Two dry-cleaning bonuses',
        'Free pickup and delivery',
        'Priority support',
        'Express service included',
      ],
      buttonText: 'Get Started',
      isPopular: true,
      badge: '🔥',
    },
    {
      name: 'Classic',
      description: 'Best for frequent users needing unlimited premium care.',
      monthlyPrice: 'Rs.2,000',
      annualPrice: 'Rs.24,000',
      features: [
        'Washing, ironing and folding',
        'Two dry-cleaning bonuses',
        'Free pickup and delivery',
        'Unlimited express service',
        'Premium fabric care',
        '24/7 customer support',
      ],
      buttonText: 'Get Started',
      isPopular: false,
    },
  ];

  const handlePlanSelect = (index) => {
    if (selectedPlan === index) {
      setSelectedPlan(null); // Deselect if already selected
    } else {
      setSelectedPlan(index); // Select new plan
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="pricing">
      <style>{`
        .flip-card { perspective: 1000px; }
        .flip-inner {
          position: relative;
          width: 100%; height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipping .flip-inner { transform: rotateY(180deg); }
        .flip-front, .flip-back {
          position: absolute; inset: 0;
          backface-visibility: hidden;
        }
        .flip-back { transform: rotateY(180deg); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pricing plans that <span className="text-teal-500">fit</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Get your laundry done conveniently without breaking the bank. Our pricing plans are tailored to meet you exactly where you are.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="bg-gray-100 p-1 rounded-xl flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  billingCycle === 'annually'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const cycle = billingCycle === 'monthly' ? 'month' : 'year';

            return (
              <div
                key={index}
                onClick={() => handlePlanSelect(index)}
                className={`relative flip-card rounded-2xl sm:rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col min-h-[480px] sm:min-h-[540px] ${
                  selectedPlan === index
                    ? 'border-teal-500 shadow-2xl scale-105 ring-4 ring-teal-100'
                    : 'border-gray-200 hover:border-teal-300 shadow-xl hover:shadow-2xl'
                } ${billingCycle === 'annually' ? 'flipping' : ''}`}
              >
                {/* Most-popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {selectedPlan === index && (
                  <div className="absolute -top-3 sm:-top-4 right-3 sm:right-4 z-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                )}

                {/* Flip container */}
                <div className="flip-inner">
                  {/* Front */}
                  <div className="flip-front bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col h-full">
                    <div className="space-y-4 sm:space-y-6 flex-grow">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
                          {plan.badge && <span className="text-base sm:text-lg">{plan.badge}</span>}
                          }
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{plan.description}</p>
                      </div>

                      <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900">{price}</div>
                        <div className="text-gray-500 text-sm sm:text-base">per {cycle}</div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        {plan.features.map((f, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg mt-4 sm:mt-6 transition-all duration-200 hover:shadow-lg ${
                        selectedPlan === index
                          ? 'bg-teal-500 text-white hover:bg-teal-600'
                          : 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50'
                      }`}
                    >
                      {selectedPlan === index ? 'Selected' : plan.buttonText}
                    </button>
                  </div>

                  {/* Back (mirror for flip) */}
                  <div className="flip-back bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col h-full">
                    <div className="space-y-4 sm:space-y-6 flex-grow">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
                          {plan.badge && <span className="text-base sm:text-lg">{plan.badge}</span>}
                          }
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{plan.description}</p>
                      </div>

                      <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900">{price}</div>
                        <div className="text-gray-500 text-sm sm:text-base">per {cycle}</div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        {plan.features.map((f, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg mt-4 sm:mt-6 transition-all duration-200 hover:shadow-lg ${
                        selectedPlan === index
                          ? 'bg-teal-500 text-white hover:bg-teal-600'
                          : 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50'
                      }`}
                    >
                      {selectedPlan === index ? 'Selected' : plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;