// App.jsx
import React from 'react';
import './Styles/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PricingPage from './Components/PricingPage';
import ContactPage from './Components/ContactPage';
import ServicePage from './Components/ServicePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={PricingPage} />
        <Route path="/contact" element={ContactPage} />
        <Route path="/services" element={ServicePage} />
      </Routes>
    </Router>
  );
};

export default App;
