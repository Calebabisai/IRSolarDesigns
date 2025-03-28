import React from "react";

function PricingPage() {
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
        <h1>Pricing Plans</h1>
        <p>Flexible solutions for every budget</p>
      </section>

      <section className="pricing-grid">
        <div className="pricing-card fade-in">
          <h2>Basic Package</h2>
          <div className="price">From $8,999</div>
          <ul>
            <li>4kW Solar System</li>
            <li>10 Solar Panels</li>
            <li>Basic Inverter</li>
            <li>5-Year Warranty</li>
            <li>Standard Installation</li>
          </ul>
          <a href="contact.html" className="cta-button">Get Started</a>
        </div>
        <div className="pricing-card featured fade-in">
          <h2>Premium Package</h2>
          <div className="price">From $12,999</div>
          <ul>
            <li>8kW Solar System</li>
            <li>20 Solar Panels</li>
            <li>Premium Inverter</li>
            <li>10-Year Warranty</li>
            <li>Priority Installation</li>
            <li>Energy Monitoring System</li>
          </ul>
          <a href="contact.html" className="cta-button">Get Started</a>
        </div>
        <div className="pricing-card fade-in">
          <h2>Ultimate Package</h2>
          <div className="price">From $16,999</div>
          <ul>
            <li>12kW Solar System</li>
            <li>30 Solar Panels</li>
            <li>Premium Inverter</li>
            <li>Battery Storage</li>
            <li>15-Year Warranty</li>
            <li>Priority Installation</li>
            <li>Advanced Monitoring</li>
          </ul>
          <a href="contact.html" className="cta-button">Get Started</a>
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

export default PricingPage;
