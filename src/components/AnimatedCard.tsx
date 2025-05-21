import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'highlight';
  className?: string;
  onClick?: () => void;
  float?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  float = false
}) => {
  // Get variant class based on variant prop
  const getVariantClass = () => {
    switch(variant) {
      case 'premium':
        return 'bg-white border-gray-200 shadow-lg';
      case 'highlight':
        return 'bg-gradient-to-br from-primary-purple/5 to-primary-teal/5 border-primary-purple/20';
      case 'default':
      default:
        return 'bg-white border-gray-200 shadow-sm';
    }
  };

  // Animation variants
  const cardVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: float ? { 
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    } : {}
  };

  return (
    <motion.div
      className={`rounded-xl border ${getVariantClass()} ${className}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
