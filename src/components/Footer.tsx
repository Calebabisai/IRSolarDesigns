import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <span>(000) 000-0000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <span>info@irsolardesign.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                <span>NARNIA 123, NARNIA, CA 91314</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-500 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-500 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-500 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} IR Solar Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;