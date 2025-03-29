import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Leaf, DollarSign, Battery } from 'lucide-react';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsDarkMode(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={`transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center z-0">
          <img 
            src="/src/assets/Homeimage.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Powering Your Future with Solar Energy
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-slide-up">
            Transform your home with sustainable energy solutions that save money and protect our planet
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105 animate-bounce"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Why Choose Solar Energy?
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

      {/* Image Gallery */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Solar Energy in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Solar Installation" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Residential Solar" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1542336291-d85a3648dae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Solar Technology" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Home;