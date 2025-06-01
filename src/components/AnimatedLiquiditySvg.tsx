import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedLiquiditySvg: React.FC = () => {
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

  // Animation variants for tokens
  const tokenVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: 0.8 + (i * 0.15),
        duration: 0.8
      }
    })
  };

  // Animation variants for ripple effect
  const rippleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.5, 1],
      opacity: [0, 0.7, 0],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
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
      {/* Liquidity Pool Circle */}
      <motion.circle
        cx="150"
        cy="120"
        r="60"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={0}
        variants={pathVariants}
      />
      
      {/* Ripple Effect */}
      <motion.circle
        cx="150"
        cy="120"
        r="40"
        stroke="#4A9FF5"
        strokeWidth="1"
        fill="transparent"
        variants={rippleVariants}
      />
      
      {/* WETH Symbol */}
      <motion.path
        d="M130 120 L130 100 L150 80 L170 100 L170 120 L150 140 L130 120 Z"
        stroke="#F5D04A"
        strokeWidth="2"
        fill="transparent"
        custom={1}
        variants={pathVariants}
      />
      
      {/* Uniswap-like Symbol */}
      <motion.path
        d="M150 120 C180 120, 180 90, 150 90 C120 90, 120 120, 150 120"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={2}
        variants={pathVariants}
      />
      
      {/* Tokens flowing in - 1 */}
      <motion.circle
        cx="70"
        cy="50"
        r="10"
        fill="#F5D04A"
        custom={0}
        variants={tokenVariants}
      />
      
      {/* Tokens flowing in - 2 */}
      <motion.circle
        cx="100"
        cy="40"
        r="8"
        fill="#4A9FF5"
        custom={1}
        variants={tokenVariants}
      />
      
      {/* Tokens flowing in - 3 */}
      <motion.circle
        cx="130"
        cy="50"
        r="6"
        fill="#F5D04A"
        custom={2}
        variants={tokenVariants}
      />
      
      {/* Flow Path */}
      <motion.path
        d="M70 50 Q110 70 150 120"
        stroke="#F5D04A"
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="transparent"
        custom={3}
        variants={pathVariants}
      />
      
      {/* 2 ETH Threshold Text Line */}
      <motion.line
        x1="200"
        y1="40"
        x2="260"
        y2="40"
        stroke="#4A9FF5"
        strokeWidth="2"
        custom={4}
        variants={pathVariants}
      />
      
      <motion.line
        x1="200"
        y1="55"
        x2="240"
        y2="55"
        stroke="#4A9FF5"
        strokeWidth="2"
        custom={5}
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default AnimatedLiquiditySvg;
