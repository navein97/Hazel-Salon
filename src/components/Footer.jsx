import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-hazel-200 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-hazel-100 p-4 rounded-full mb-4 text-hazel-700">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Block 1, Street 104<br />
              Building 284<br />
              Sabah Al Salem, 44001<br />
              Kuwait
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-hazel-100 p-4 rounded-full mb-4 text-hazel-700">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
            <p className="text-gray-600">
              Everyday<br />
              10:00 AM - 9:00 PM
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-hazel-100 p-4 rounded-full mb-4 text-hazel-700">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
            <a 
              href="https://wa.me/96599477668" 
              className="text-xl font-medium text-hazel-600 hover:text-hazel-800 transition-colors mb-2"
            >
              +965 9947 7668
            </a>
            <p className="text-sm text-gray-500">
              (WhatsApp Only)
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-hazel-50 rounded-2xl overflow-hidden mb-12 relative grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.646548765432!2d48.066666!3d29.283333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE3JzAwLjAiTiA0OMKwMDQnMDAuMCJF!5e0!3m2!1sen!2skw!4v1620000000000!5m2!1sen!2skw" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Hazel Salon Location"
          ></iframe>
        </div>

        <div className="text-center border-t border-gray-100 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hazel Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
