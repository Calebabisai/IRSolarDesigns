document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations only once
    const initializeAnimations = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        elements.forEach((element) => {
            element.classList.add('animated');
        });
    };

    // Handle scroll-based color changes
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const body = document.body;
        
        // Toggle dark mode based on scroll position
        if (scrollPosition > windowHeight * 0.5) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Initialize animations once on load
    initializeAnimations();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});