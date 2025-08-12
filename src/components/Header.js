import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-teal-600">Urban Folds</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">About</a>
            <a href="#" className="text-gray-700 hover:text-teal-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;