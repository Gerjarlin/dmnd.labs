import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white shadow-sm py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-primary-teal bg-clip-text text-transparent">
              dmnd.labs
            </a>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#projects" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Projects</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="/#/launch" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Launch</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#docs" className="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200">Docs</a>
            </motion.div>
          </nav>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center"
          >
            <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Connect Wallet
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
