import React from 'react';
import {  Check, DollarSign, Zap, Headset } from 'lucide-react';

type BenefitsProps = {
  isDarkMode: boolean;
};

const Benefits: React.FC<BenefitsProps> = ({ isDarkMode }) => {
  const benefits = [
    {
      icon: <Headset className="h-12 w-12" />,
      title: "Exceptional Customer Support",
      description: "We take pride in offering outstanding assistance to our clients. Our team is committed to providing fast, clear, and professional responses ensuring that your questions and needs are addressed as quickly as possible."
    },
    {
      icon: <Check className="h-12 w-12" />,
      title: "Permit Aprovals",
      description: "Our designs get approved quickly thanks to our deep experience working with AHJs. With a high approval rate, we help you avoid delays and keep your project on schedule."
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Best Prices",
      description: "We adjust our prices based on the size of the project, always ensuring the best cost‑benefit ratio. We have the most competitive prices in the entire market"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Fast Delivery",
      description: "Our streamlined process ensures you get your designs faster, helping you move to installation without delays. We consistently deliver permit plans in 50% less time than the market standard. "
    }
  ];

  return (
    <div className={`py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          Why Choose IR Solar Designs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                opacity: 0
              }}
            >
              <div className={`flex justify-center mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {benefit.title}
              </h3>
              <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;