import React from 'react';
import { motion } from 'framer-motion';
import WalletConnection from './WalletConnection';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <header className={`sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-teal">dmnd.labs</span>
              </motion.div>
            </a>
            
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a href="/" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="#projects" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Projects</a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="#launch" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Launch</a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#docs" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Docs</a>
              </motion.div>
            </nav>
          </div>
          
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WalletConnection />
            </motion.div>
            
            <div className="md:hidden ml-4">
              <button className="text-gray-700 hover:text-primary-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
