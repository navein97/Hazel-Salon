import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

import img1 from '../assets/gallery1.png';
import img2 from '../assets/gallery2.png';
import img3 from '../assets/gallery3.png';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.png';

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Follow Our Art</h2>
          <p className="text-gray-500 mb-8">@hazelsalon_</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden relative group ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/hazelsalon_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} />
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
