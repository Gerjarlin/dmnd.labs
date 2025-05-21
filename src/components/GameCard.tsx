import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'project' | 'featured';
  className?: string;
  onClick?: () => void;
}

export const GameCard: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'project':
        return 'border-accent-green';
      case 'featured':
        return 'border-accent-yellow';
      default:
        return 'border-primary-blue';
    }
  };

  return (
    <motion.div
      className={`game-card ${getVariantStyles()} ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-pixel text-white">{title}</h3>
        <div className="w-3 h-3 rounded-full bg-accent-green"></div>
      </div>
      <div>{children}</div>
    </motion.div>
  );
};
