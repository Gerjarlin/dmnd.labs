import React from 'react';
import { motion } from 'framer-motion';

interface DiamondConnectionProps {
  className?: string;
}

export const DiamondConnection: React.FC<DiamondConnectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      <div className="stripe-gradient-diamond"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center">
                <a href="https://notpepesbitch.xyz/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/dmnd-logo.png" 
                    alt="Diamond Logo" 
                    className="h-32 w-auto"
                  />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Powered by Diamond</h3>
              <p className="text-gray-700 mb-4">
                dmnd.labs is a Diamond project, bringing the same quality, innovation, and community focus that made Diamond a success to the launchpad space. As part of the Diamond ecosystem, dmnd.labs benefits from established networks, proven expertise, and a passionate community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://notpepesbitch.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
                >
                  <span>Visit Diamond Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://t.me/diamond_base_chain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 border border-gray-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center"
                >
                  <span>Join Diamond Community</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondConnection;
