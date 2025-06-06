import React from 'react';
import { motion } from 'framer-motion';
import HeroGradient from './HeroGradient';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative overflow-hidden py-20 ${className}`}>
      <HeroGradient />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Premium Base Launchpad
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Launch your project with unparalleled security for investors and comprehensive support for developers
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#projects">
              <button className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto">
                Explore Projects
              </button>
            </a>
            <a href="/#/launch">
              <button className="bg-white text-gray-800 border border-gray-200 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
                Launch Your Project
              </button>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-600">Projects Launched</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">$10M+</div>
            <div className="text-gray-600">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">0</div>
            <div className="text-gray-600">Rug Pulls</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
