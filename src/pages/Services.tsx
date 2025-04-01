import { Sun, Home, Battery, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Solar Panel Installation",
      description: "Professional installation of high-efficiency solar panels for your home or business"
    },
    {
      icon: <Home className="h-12 w-12 text-yellow-500" />,
      title: "Home Energy Assessment",
      description: "Comprehensive evaluation of your property's energy usage and solar potential"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Battery Storage Solutions",
      description: "Advanced battery systems to store excess solar energy for use when needed"
    },
    {
      icon: <LineChart className="h-12 w-12 text-yellow-500" />,
      title: "Energy Monitoring",
      description: "Real-time monitoring and analysis of your solar energy production and consumption"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;