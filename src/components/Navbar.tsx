import React from 'react';
import { Link } from 'react-router-dom';
import { Sun } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">IRSolarDesign</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-yellow-500">Home</Link>
            <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-yellow-500">Services</Link>
            <Link to="/pricing" className="px-3 py-2 text-gray-700 hover:text-yellow-500">Pricing</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-yellow-500">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;