import React from "react";

function ServicesPage() {
  return (
    <div>
      <nav id="navbar">
        <div className="nav-content">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sun-icon"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <span>IRSolarDesign</span>
          </div>
          <div className="nav-links">
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="pricing.html">Pricing</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </nav>

      <section className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive solar solutions tailored to your needs</p>
      </section>

      <section className="services-grid">
        <div className="service-card fade-in">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Residential Solar"
          />
          <h2>Residential Solar</h2>
          <p>Custom solar solutions for homes of all sizes. Includes system design, installation, and maintenance.</p>
          <ul>
            <li>Custom System Design</li>
            <li>Professional Installation</li>
            <li>24/7 Monitoring</li>
            <li>Maintenance Services</li>
          </ul>
        </div>
        <div className="service-card fade-in">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Commercial Solar"
          />
          <h2>Commercial Solar</h2>
          <p>Large-scale solar solutions for businesses and industrial facilities.</p>
          <ul>
            <li>ROI Analysis</li>
            <li>Custom Business Solutions</li>
            <li>Tax Incentive Guidance</li>
            <li>Performance Monitoring</li>
          </ul>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 (555) 999-9999</p>
            <p>✉️ info@irsolardesign.com</p>
            <p>📍 123 Solar Street, Sunshine City, SC 12345</p>
          </div>
          <div className="footer-section">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 IRSolarDesign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
