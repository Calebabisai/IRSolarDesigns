import React from "react";

function ContactPage() {
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
        <h1>Contact Us</h1>
        <p>Get in touch for a free consultation</p>
      </section>

      <section className="contact-grid">
        <div className="contact-form fade-in">
          <h2>Send us a message</h2>
          <form id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info fade-in">
          <h2>Our Office</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Solar Street</p>
            <p>Sunshine City, SC 12345</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@irsolardesign.com</p>
          </div>
          <div className="info-item">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 (555) 123-4567</p>
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
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
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

export default ContactPage;
