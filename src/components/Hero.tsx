import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      {/* Enhanced Stripe-style gradient background */}
      <div className="stripe-gradient-hero"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-800 leading-tight">
              The Premium Base Launchpad
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Launch your project with unparalleled security for investors and comprehensive support for developers
            </p>
          </motion.div>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#projects">
              <button className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto">
                Explore Projects
              </button>
            </a>
            <a href="/launch">
              <button className="bg-white text-gray-800 border border-gray-200 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
                Launch Your Project
              </button>
            </a>
          </motion.div>
          
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">100+</p>
              <p className="text-gray-600">Projects Launched</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">$10M+</p>
              <p className="text-gray-600">Total Value Locked</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">0</p>
              <p className="text-gray-600">Rug Pulls</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
