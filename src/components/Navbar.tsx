import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isHome?: boolean;
}

function Navbar({ isHome: isHomeProp = false }: NavbarProps) {
  const location = useLocation();
  const isHome = isHomeProp || location.pathname === '/';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Cerrar sidebar al cambiar de ruta
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Navbar */}
      <nav className={`${isHome ? 'bg-transparent absolute' : 'bg-white relative'} shadow-md w-full z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* En móvil: botón de menú a la izquierda */}
            <div className="flex items-center md:hidden order-first">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className={`p-2 rounded-md ${isHome ? 'text-white' : 'text-gray-700'} hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            
            {/* Logo - centrado en móvil, a la izquierda en escritorio */}
            <div className="flex justify-center md:justify-start flex-1 md:flex-none">
              <Link to="/" className="flex items-center">
                <div className="relative overflow-visible" style={{ marginTop: '-10px' }}>
                  <img
                    src={isHome ? "/src/assets/IRLOGO_WHITE.PNG" : "/src/assets/IRLOGO.PNG"}
                    alt="Logo IRSolarDesigns"
                    className="h-20 md:h-24 w-auto object-contain transform hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </Link>
            </div>
            
            {/* Menú de escritorio - oculto en móvil */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" isActive={location.pathname === '/'} isHome={isHome}>
                Home
              </NavLink>
              <NavLink to="/services" isActive={location.pathname === '/services'} isHome={isHome}>
                Services
              </NavLink>
              <NavLink to="/pricing" isActive={location.pathname === '/pricing'} isHome={isHome}>
                Pricing
              </NavLink>
              <NavLink to="/contact" isActive={location.pathname === '/contact'} isHome={isHome}>
                Contact
              </NavLink>
            </div>
            
            {/* Espacio vacío en móvil para equilibrar el diseño */}
            <div className="flex items-center md:hidden order-last">
              <div className="w-10"></div> {/* Espacio equivalente al botón de menú */}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar para móvil - con cabecera gris oscuro y cuerpo blanco */}
      <div 
        className={`fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Cabecera del sidebar con logo y botón de cierre - mantiene bg-gray-900 */}
        <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700">
          <div className="flex items-center">
            <img 
              src="/src/assets/IRLOGO_WHITE.PNG" 
              alt="Logo IRSolarDesigns" 
              className="h-12 w-auto mr-2" 
            />
            <h2 className="text-xl font-bold text-white">Menu</h2>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-full text-white hover:bg-gray-800 focus:outline-none transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Contenido del sidebar con botones amarillos sobre fondo blanco */}
        <div className="flex flex-col p-4 mt-2">
          <Link 
            to="/" 
            className={`px-4 py-3 rounded-lg mb-3 transition-colors font-medium text-center ${
              location.pathname === '/' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-white'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            to="/services" 
            className={`px-4 py-3 rounded-lg mb-3 transition-colors font-medium text-center ${
              location.pathname === '/services' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-white'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Services
          </Link>
          
          <Link 
            to="/pricing" 
            className={`px-4 py-3 rounded-lg mb-3 transition-colors font-medium text-center ${
              location.pathname === '/pricing' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-white'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Pricing
          </Link>
          
          <Link 
            to="/contact" 
            className={`px-4 py-3 rounded-lg mb-3 transition-colors font-medium text-center ${
              location.pathname === '/contact' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-white'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Contact
          </Link>
          
          {/* Footer del sidebar */}
          <div className="mt-auto pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p className="mb-1">IR Solar Designs</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar el sidebar al hacer clic fuera */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

// Componente para los enlaces de navegación con indicador activo
function NavLink({ to, children, isActive, isHome }: { to: string; children: React.ReactNode; isActive: boolean; isHome: boolean }) {
  return (
    <div className="relative group">
      <Link 
        to={to} 
        className={`px-3 py-2 inline-block ${isHome ? 'text-white' : 'text-gray-700'} hover:text-yellow-500 transition-colors`}
      >
        {children}
      </Link>
      {/* Indicador de enlace activo */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform transition-all duration-300 
          ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 opacity-70'}`}
      ></div>
    </div>
  );
}

export default Navbar;