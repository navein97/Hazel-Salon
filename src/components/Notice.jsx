import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Phone } from 'lucide-react';

const Notice = () => {
  return (
    <section className="py-8 px-4 -mt-20 relative z-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-rose-500 shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="bg-rose-100 p-3 rounded-full shrink-0">
              <AlertCircle className="text-rose-600" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Important Notice: Hair Department Relocation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dear Customers, please note that the <span className="font-semibold text-rose-600">Hair Department</span> has been temporarily relocated to <span className="font-semibold">S by Hazel</span> in Sabah Al Salem due to maintenance work.
              </p>
              <p className="text-gray-600 text-sm">
                *Nail, Massage, and Moroccan Bath services continue to operate as usual at Hazel Salon.
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <a 
                href="https://wa.me/96599477668"
                className="flex items-center justify-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-colors shadow-md w-full md:w-auto font-medium"
              >
                <Phone size={18} />
                <span>Call for Hair Dept</span>
              </a>
              <div className="text-center mt-2 text-xs text-gray-500">+965 9947 7668</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Notice;
