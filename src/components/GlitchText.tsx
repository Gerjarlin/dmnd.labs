import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  as: Component = 'span',
  className = ''
}) => {
  // Since we're removing the glitch effect as requested by the user,
  // this component now just renders the text normally with the specified element type
  return (
    <Component className={className}>
      {text}
    </Component>
  );
};

export default GlitchText;
