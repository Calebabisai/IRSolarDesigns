import React from 'react';
import { Sun, Leaf, DollarSign, Battery } from 'lucide-react';

type BenefitsProps = {
  isDarkMode: boolean;
};

const Benefits: React.FC<BenefitsProps> = ({ isDarkMode }) => {
  const benefits = [
    {
      icon: <Sun className="h-12 w-12" />,
      title: "Clean Energy",
      description: "Solar power is a 100% clean, renewable energy source that reduces our reliance on fossil fuels"
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Environmental Impact",
      description: "Reduce your carbon footprint and help combat climate change"
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Cost Savings",
      description: "Save up to 70% on your electricity bills with solar energy"
    },
    {
      icon: <Battery className="h-12 w-12" />,
      title: "Energy Independence",
      description: "Generate your own electricity and reduce dependence on the grid"
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