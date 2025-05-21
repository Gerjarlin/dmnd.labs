import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
  glitch?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 'md',
  className = '',
  animated = true,
  glitch = false
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Get size class based on size prop
  const getSizeClass = () => {
    switch(size) {
      case 'sm': return 'h-6';
      case 'md': return 'h-8';
      case 'lg': return 'h-12';
      case 'xl': return 'h-16';
      default: return 'h-8';
    }
  };
  
  // Glitch effect
  useEffect(() => {
    if (!glitch) return;
    
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, Math.random() * 5000 + 3000);
    
    return () => clearInterval(glitchInterval);
  }, [glitch]);
  
  // Animation variants
  const logoVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8
    },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: animated ? { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    } : {}
  };
  
  // Diamond animation variants
  const diamondVariants = {
    initial: {
      rotate: 0
    },
    animate: animated ? {
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }
    } : {}
  };
  
  // Text animation variants
  const textVariants = {
    initial: {
      opacity: 0,
      x: -10
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      className={`flex items-center ${className}`}
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="relative">
        <motion.div
          className={`${getSizeClass()}`}
          variants={diamondVariants}
          initial="initial"
          animate="animate"
        >
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M20 5L5 15L20 35L35 15L20 5Z" 
              fill="url(#diamond-gradient)" 
              fillOpacity={isGlitching ? "0.8" : "0.2"}
              style={isGlitching ? { transform: 'translateX(1px)' } : {}}
            />
            <path 
              d="M20 5L5 15L20 35L35 15L20 5Z" 
              stroke="url(#diamond-stroke)" 
              strokeWidth="1.5"
              style={isGlitching ? { transform: 'translateX(-1px)', stroke: '#3B82F6' } : {}}
            />
            <defs>
              <linearGradient id="diamond-gradient" x1="5" y1="15" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#8B5CF6"/>
                <stop offset="0.5" stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#14B8A6"/>
              </linearGradient>
              <linearGradient id="diamond-stroke" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#8B5CF6"/>
                <stop offset="1" stopColor="#14B8A6"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary-purple/20 rounded-full blur-xl -z-10"></div>
      </div>
      
      <motion.div
        className="ml-2 font-display font-bold"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <span className="text-gray-800">dmnd</span>
        <span className="text-primary-teal">.labs</span>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
