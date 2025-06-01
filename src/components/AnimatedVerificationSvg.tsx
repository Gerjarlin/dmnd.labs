import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedVerificationSvg: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Animation variants for drawing SVG paths
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: i * 0.2
        },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

  // Animation variants for checkmark
  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: 1.2,
        duration: 0.6
      }
    }
  };

  return (
    <motion.svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      className="max-w-full h-auto"
    >
      {/* ID Card Outline */}
      <motion.rect
        x="50"
        y="40"
        width="200"
        height="120"
        rx="10"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={0}
        variants={pathVariants}
      />
      
      {/* Photo Area */}
      <motion.rect
        x="70"
        y="60"
        width="60"
        height="80"
        rx="5"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={1}
        variants={pathVariants}
      />
      
      {/* Text Lines */}
      <motion.line
        x1="150"
        y1="70"
        x2="230"
        y2="70"
        stroke="#4A9FF5"
        strokeWidth="2"
        custom={2}
        variants={pathVariants}
      />
      
      <motion.line
        x1="150"
        y1="90"
        x2="210"
        y2="90"
        stroke="#4A9FF5"
        strokeWidth="2"
        custom={3}
        variants={pathVariants}
      />
      
      <motion.line
        x1="150"
        y1="110"
        x2="230"
        y2="110"
        stroke="#4A9FF5"
        strokeWidth="2"
        custom={4}
        variants={pathVariants}
      />
      
      {/* Verification Checkmark Circle */}
      <motion.circle
        cx="220"
        cy="140"
        r="25"
        stroke="#F5D04A"
        strokeWidth="2"
        fill="transparent"
        custom={5}
        variants={pathVariants}
      />
      
      {/* Checkmark */}
      <motion.path
        d="M210 140L218 148L230 133"
        stroke="#F5D04A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
        variants={checkmarkVariants}
      />
    </motion.svg>
  );
};

export default AnimatedVerificationSvg;
