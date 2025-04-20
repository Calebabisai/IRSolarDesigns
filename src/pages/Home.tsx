import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SeoHead from '../components/SeoHead'; 
import Benefits from '../components/Benefits';
import homeImage from '../assets/Homeimage.jpg';
import casa1Image from '../assets/CASA1.jpg';
import casa2Image from '../assets/CASA2.webp';
import casa3Image from '../assets/CASA3.webp';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Removed unused isVisible state and its effect

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsDarkMode(scrollPosition > 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animacion de retraso imagen de fondo 
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SeoHead 
        title="IR Solar Designs - Powering Your Future with Solar Energy" 
        description="Transform your home with sustainable energy solutions that save money and protect our planet. IR Solar Designs offers premium solar installations."
        image={homeImage} // Cambiado de ruta relativa a variable importada
      />
      <div className={`transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Hero Section with Navbar */}
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-cover bg-center z-0 overflow-hidden">
            <img 
              src={homeImage} 
              alt="Background" 
              className={`w-full h-full object-cover transition-all duration-1500 ease-in-out ${
                imageLoaded 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-1500 ${
              imageLoaded ? 'bg-opacity-50' : 'bg-opacity-100'
            }`}></div>
          </div>
          
          {/* Navbar inside the Hero section */}
          <Navbar isHome={true} />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Designing to power your future with solar energy
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

        {/* Benefits Section - ahora usando el componente separado */}
        <Benefits isDarkMode={isDarkMode} />

        {/* Image Gallery */}
        <div className={`py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
              Solar Energy with style, without compromising performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <img 
                  src={casa1Image} 
                  alt="Solar Installation" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <img 
                  src={casa2Image} 
                  alt="Residential Solar" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <img 
                  src={casa3Image} 
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

          .duration-1500 {
            transition-duration: 1500ms;
          }
        `}</style>
      </div>
    </>
  );
}

export default Home;