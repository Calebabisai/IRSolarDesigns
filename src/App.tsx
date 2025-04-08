import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SeoHead from './components/SeoHead'; // Cambiado de SEO a SeoHead

// Este componente se encarga de renderizar el Navbar solo cuando no estamos en Home
function NavbarWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // No renderizamos el Navbar aquí si estamos en la página principal (Home)
  return !isHomePage ? <Navbar /> : null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <SeoHead /> {/* Componente de SEO global - cambiado a SeoHead */}
          <NavbarWrapper />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;