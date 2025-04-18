import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead'; // Cambiado de SEO a SeoHead

function Pricing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    //Animation when entering the page
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "PV Solar Design",
      price: "9,9999,999",
      features: [
        "4kW Solar System",
        "Text",
        "2 days ready",
        "Basic Info",
        "Standard Inverter"
      ]
    },
    {
      name: "PV Solar Design + Battery",
      price: "9,9999,999",
      features: [
        "4kW Solar System",
        "Text",
        "2 days ready",
        "Basic Info",
        "Standard Inverter"
      ]
    },
    {
      name: "Existing System + Pv Solar Design",
      price: "9,9999,999",
      features: [
        "4kW Solar System",
        "Text",
        "2 days ready",
        "Basic Info",
        "Standard Inverter"
      ]
    }
  ];

  return (
    <>
      <SeoHead 
        title="PV Solar Designs Pricing - IR Solar Design" 
        description="Discover our affordable solar energy packages and financing options. Calculate your potential savings and ROI with our transparent pricing models."
        image="/src/assets/pricing-image.jpg" // Image for SEO >>>>>>>>>>>>>>>>>>>>>>>
      />
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900">PV Solar Design Pricing</h2>
            <p className="mt-4 text-gray-600">Choose the perfect solution for your design</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-center text-gray-900">{plan.name}</h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold">${plan.price}</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="block w-full bg-yellow-500 text-white text-center py-3 rounded-md hover:bg-yellow-600 transition duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;