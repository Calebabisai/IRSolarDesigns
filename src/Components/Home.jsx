import React from "react";

const Home = () => {
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
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero">
                <div className="hero-content">
                    <h1 className="fade-in">Powering Your Future with Solar Energy</h1>
                    <p className="fade-in">
                        Transform your home with sustainable energy solutions that save
                        money and protect our planet
                    </p>
                    <a href="#" className="cta-button slide-up">
                        CONTACT US
                    </a>
                </div>
            </section>

            {/* Footer */}
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

export default Home;
//
