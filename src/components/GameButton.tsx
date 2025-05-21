import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  disabled?: boolean;
}

// Inline DiamondIcon component to fix import issues
const DiamondIcon = ({ className = '' }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2L2 8L12 22L22 8L12 2Z" 
        fill="currentColor" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M2 8H22" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M7 8L12 2L17 8" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export const GameButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  disabled = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-blue border-white';
      case 'secondary':
        return 'bg-accent-purple border-white';
      case 'success':
        return 'bg-accent-green border-white';
      case 'danger':
        return 'bg-accent-red border-white';
      default:
        return 'bg-primary-blue border-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`relative ${getSizeStyles()} font-bold text-white rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg ${getVariantStyles()} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <DiamondIcon className="w-5 h-5" />}
        {children}
      </span>
      <motion.span
        className="absolute inset-0 rounded-md opacity-0 z-0"
        style={{
          background: `linear-gradient(45deg, var(--accent-purple), var(--primary-blue), var(--accent-green))`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
      />
    </motion.button>
  );
};
