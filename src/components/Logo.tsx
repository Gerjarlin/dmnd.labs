import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md'
}) => {
  // Get the appropriate size class based on the size prop
  const getSizeClass = () => {
    switch(size) {
      case 'sm': return 'w-8 h-8';
      case 'md': return 'w-12 h-12';
      case 'lg': return 'w-16 h-16';
      case 'xl': return 'w-24 h-24';
      default: return 'w-12 h-12';
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        className={`${getSizeClass()} relative`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50 10L10 30L50 90L90 30L50 10Z" 
            fill="url(#gradient)" 
            stroke="url(#strokeGradient)" 
            strokeWidth="2"
          />
          <path 
            d="M10 30L90 30" 
            stroke="url(#strokeGradient)" 
            strokeWidth="2"
          />
          <path 
            d="M50 10L30 30" 
            stroke="url(#strokeGradient)" 
            strokeWidth="2"
          />
          <path 
            d="M50 10L70 30" 
            stroke="url(#strokeGradient)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient" x1="10" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#6B46C1"/>
              <stop offset="0.5" stopColor="#3B82F6"/>
              <stop offset="1" stopColor="#14B8A6"/>
            </linearGradient>
            <linearGradient id="strokeGradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#22D3EE"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <div className="ml-2 text-xl md:text-2xl font-display font-medium">
        <span className="text-white">dmnd</span>
        <span className="text-primary-teal">.</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-teal">labs</span>
      </div>
    </div>
  );
};

export default Logo;
