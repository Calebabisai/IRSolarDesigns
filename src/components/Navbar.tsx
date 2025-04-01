import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isHome?: boolean;
}

function Navbar({ isHome: isHomeProp = false }: NavbarProps) {
  const location = useLocation();
  // Determina si estamos en la página de inicio basado en la URL actual
  const isHome = isHomeProp || location.pathname === '/';

  return (
    <nav className={`${isHome ? 'bg-transparent absolute' : 'bg-white relative'} shadow-md w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative overflow-visible" style={{ marginTop: '-10px' }}>
                <img
                  // Usa el logo alternativo en Home y el regular en otras páginas
                  src={isHome ? "/src/assets/IRLOGO_WHITE.PNG" : "/src/assets/IRLOGO.PNG"}
                  alt="Logo IRSolarDesign"
                  className="h-24 w-auto object-contain transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className={`px-3 py-2 ${isHome ? 'text-white' : 'text-gray-700'} hover:text-yellow-500`}>Home</Link>
            <Link to="/services" className={`px-3 py-2 ${isHome ? 'text-white' : 'text-gray-700'} hover:text-yellow-500`}>Services</Link>
            <Link to="/pricing" className={`px-3 py-2 ${isHome ? 'text-white' : 'text-gray-700'} hover:text-yellow-500`}>Pricing</Link>
            <Link to="/contact" className={`px-3 py-2 ${isHome ? 'text-white' : 'text-gray-700'} hover:text-yellow-500`}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;