import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hazel-900/10 to-hazel-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card px-4 py-2 rounded-full flex items-center gap-2 mb-6"
          >
            <div className="flex text-hazel-600">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <Star size={14} fill="currentColor" className="opacity-50" />
            </div>
            <span className="text-sm font-medium text-gray-800">Rated 4.8/5 by 547+ Clients</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight text-shadow">
            Hazel Salon
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-lg mx-auto text-shadow">
            Kuwait's Premier Beauty Destination
          </p>

          <motion.a
            href="https://wa.me/96599477668"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2"
          >
            Book Appointment <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
