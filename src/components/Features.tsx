import React from 'react';
import { Sun, Battery, Leaf, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Sun className="h-8 w-8" />,
    title: 'Solar Installation',
    description: 'Professional installation of high-efficiency solar panels for your home or business'
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: 'Energy Storage',
    description: 'Advanced battery solutions to store excess energy for when you need it most'
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Eco-Friendly',
    description: 'Reduce your carbon footprint and contribute to a sustainable future'
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Cost Savings',
    description: 'Significant reduction in energy bills with long-term financial benefits'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solar solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-yellow-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;