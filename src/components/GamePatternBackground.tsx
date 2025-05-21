import React from 'react';
import { motion } from 'framer-motion';

interface GamePatternBackgroundProps {
  className?: string;
  color?: string;
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

export const GamePatternBackground: React.FC<GamePatternBackgroundProps> = ({
  className = '',
  color = 'rgba(139, 92, 246, 0.05)',
  density = 'medium',
  animated = true
}) => {
  // Determine grid size based on density
  const getGridSize = () => {
    switch(density) {
      case 'low': return 60;
      case 'medium': return 40;
      case 'high': return 20;
      default: return 40;
    }
  };

  const gridSize = getGridSize();
  
  // Animation variants
  const containerVariants = {
    animate: animated ? {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    } : {}
  };

  return (
    <motion.div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px),
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `
      }}
      animate="animate"
      variants={containerVariants}
    />
  );
};

export default GamePatternBackground;
