/**
 * Contact.tsx - Contact Page Component
 * 
 * Displays a contact form integrated with Netlify Forms for handling
 * user submissions. Includes form validation, success/error notifications,
 * and contact information.
 * 
 * Features:
 * - Netlify Forms integration
 * - Client-side form validation
 * - Custom success/error notifications
 * - Honeypot spam protection
 * - Responsive design
 * - Animated entrance effects
 * 
 * @component
 */

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SeoHead from '../components/SeoHead';

/**
 * Form data structure
 * @interface FormData
 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function Contact() {
  // State management
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  /**
   * Trigger entrance animation on component mount
   */
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Handle form submission
   * Sends form data to Netlify Forms endpoint
   * 
   * @param {React.FormEvent} e - Form submit event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    
    // Send to Netlify Forms
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...Object.fromEntries(new FormData(form))
      }).toString()
    })
      .then(() => {
        // Success - show success notification
        setNotificationType('success');
        setShowNotification(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      })
      .catch((error) => {
        // Error - show error notification
        setNotificationType('error');
        setShowNotification(true);
        console.error('Form submission error:', error);
        
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      });
  };

  /**
   * Handle input field changes
   * Updates form state as user types
   * 
   * @param {React.ChangeEvent} e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <SeoHead 
        title="Contact IR Solar Design" 
        description="Contact our solar energy experts for a free consultation. Get answers to your questions about solar installation, maintenance, and financing options."
        image="/images/contact-image.jpg"
      />
      
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
            <p className="mt-4 text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-200"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-3 px-4 text-lg rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div 
              className={`space-y-6 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:info@irsolardesigns.com" className="text-gray-600 hover:text-yellow-500 transition">
                        info@irsolardesigns.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-yellow-500 transition">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Solar Street<br />
                        Sunshine City, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  {/* Business Hours */}
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <p>Map placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success/Error Notification */}
      {showNotification && (
        <div
          className={`fixed bottom-6 right-6 rounded-lg shadow-lg p-4 transform transition-all duration-500 ${
            notificationType === 'success' 
              ? 'bg-green-50 border-l-4 border-green-500' 
              : 'bg-red-50 border-l-4 border-red-500'
          } max-w-md z-50`}
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 ${notificationType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {notificationType === 'success' ? (
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${notificationType === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                {notificationType === 'success' ? 'Message sent successfully!' : 'Error sending message'}
              </h3>
              <div className={`mt-2 text-sm ${notificationType === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                <p>
                  {notificationType === 'success' 
                    ? 'Thank you for reaching out. We will get back to you as soon as possible.' 
                    : 'There was a problem sending your message. Please try again or contact us directly.'}
                </p>
              </div>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  onClick={() => setShowNotification(false)}
                  className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    notificationType === 'success' 
                      ? 'text-green-500 hover:bg-green-100 focus:ring-green-600' 
                      : 'text-red-500 hover:bg-red-100 focus:ring-red-600'
                  }`}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;