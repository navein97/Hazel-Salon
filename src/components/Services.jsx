import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Nail Care",
    description: "Manicure, Pedicure, and Art",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    action: "Book Nail Service"
  },
  {
    title: "Spa & Massage",
    description: "Relaxing treatments & Moroccan Bath",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    action: "Book Spa Day"
  },
  {
    title: "Makeup",
    description: "Professional makeup for all occasions",
    image: "https://images.unsplash.com/photo-1709477542149-f4e0e21d590b?auto=format&fit=crop&q=80&w=800",
    action: "Book Makeup"
  },
  {
    title: "Hair Styling",
    description: "Temporarily at S by Hazel",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    action: "Inquire About Hair",
    specialLink: "https://wa.me/96599477668"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-hazel-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-hazel-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-medium tracking-wide">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                <a 
                  href={service.specialLink || "https://wa.me/96599477668"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-hazel-300 text-hazel-800 font-medium flex items-center justify-center gap-2 hover:bg-hazel-500 hover:text-white transition-all duration-300 group-hover:bg-hazel-500 group-hover:text-white"
                >
                  {service.action} <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
