import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  // Get variant class based on variant prop
  const getVariantClass = () => {
    switch(variant) {
      case 'primary':
        return 'bg-gradient-to-r from-primary-purple to-primary-teal text-white border-transparent';
      case 'secondary':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'outline':
        return 'bg-transparent border-primary-purple/30 text-primary-purple hover:bg-primary-purple/5';
      case 'ghost':
        return 'bg-transparent border-transparent text-gray-600 hover:bg-gray-100';
      default:
        return 'bg-gradient-to-r from-primary-purple to-primary-teal text-white border-transparent';
    }
  };
  
  // Get size class based on size prop
  const getSizeClass = () => {
    switch(size) {
      case 'sm':
        return 'text-sm py-1.5 px-3';
      case 'lg':
        return 'text-lg py-3 px-6';
      case 'md':
      default:
        return 'text-base py-2 px-4';
    }
  };
  
  // Animation variants
  const buttonVariants = {
    initial: { 
      opacity: 0,
      y: 10
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.button
      className={`rounded-lg border font-medium transition-colors duration-200 ${getVariantClass()} ${getSizeClass()} ${glow ? 'shadow-glow' : ''} ${className}`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
