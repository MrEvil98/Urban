import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full opacity-90"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Urban Folds</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-teal-500 font-semibold hover:text-teal-600 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 font-medium hover:text-teal-500 transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 font-medium hover:text-teal-500 transition-colors duration-200"
            >
              Pricing
            </button>
          </nav>

          {/* Try button - Desktop */}
          <div className="hidden md:block text-gray-600 font-medium">
            <button className="border-2 border-teal-500 text-teal-600 px-4 py-2 rounded-xl font-semibold text-md hover:bg-teal-50 transition-all duration-200">
                Try the app
              </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 border-t border-gray-200 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-teal-600 font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 font-medium py-2"
            >
              Pricing
            </button>
            <div className="pt-2 border-t border-gray-100">
              <span className="text-sm text-gray-600">+91 123 URBAN (567890)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;