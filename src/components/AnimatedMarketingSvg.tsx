import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedMarketingSvg: React.FC = () => {
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

  // Animation variants for elements
  const elementVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: 0.5 + (i * 0.2),
        duration: 0.6
      }
    })
  };

  // Animation variants for pulse effect
  const pulseVariants = {
    hidden: { scale: 1, opacity: 0.7 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.5
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
      {/* X Spaces Microphone */}
      <motion.circle
        cx="80"
        cy="70"
        r="25"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={0}
        variants={pathVariants}
      />
      
      <motion.path
        d="M80 55 L80 85 M70 65 L90 65 M70 75 L90 75"
        stroke="#4A9FF5"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
        custom={1}
        variants={pathVariants}
      />
      
      {/* Pulse Circles for Microphone */}
      <motion.circle
        cx="80"
        cy="70"
        r="35"
        stroke="#4A9FF5"
        strokeWidth="1"
        fill="transparent"
        variants={pulseVariants}
      />
      
      {/* YouTube Video Button */}
      <motion.rect
        x="150"
        y="50"
        width="60"
        height="40"
        rx="10"
        stroke="#F5D04A"
        strokeWidth="2"
        fill="transparent"
        custom={2}
        variants={pathVariants}
      />
      
      <motion.polygon
        points="170,60 170,80 190,70"
        stroke="#F5D04A"
        strokeWidth="2"
        fill="transparent"
        custom={3}
        variants={pathVariants}
      />
      
      {/* Diamond Bot */}
      <motion.path
        d="M70 140 L90 140 L100 160 L60 160 L70 140 Z"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={4}
        variants={pathVariants}
      />
      
      <motion.circle
        cx="80"
        cy="130"
        r="15"
        stroke="#4A9FF5"
        strokeWidth="2"
        fill="transparent"
        custom={5}
        variants={pathVariants}
      />
      
      <motion.circle
        cx="75"
        cy="125"
        r="3"
        fill="#4A9FF5"
        custom={0}
        variants={elementVariants}
      />
      
      <motion.circle
        cx="85"
        cy="125"
        r="3"
        fill="#4A9FF5"
        custom={1}
        variants={elementVariants}
      />
      
      {/* Creative Tools */}
      <motion.path
        d="M220 120 L240 120 L240 160 L200 160 L200 140"
        stroke="#F5D04A"
        strokeWidth="2"
        fill="transparent"
        custom={6}
        variants={pathVariants}
      />
      
      <motion.path
        d="M200 120 L220 120 L220 140 L200 140 Z"
        stroke="#F5D04A"
        strokeWidth="2"
        fill="transparent"
        custom={7}
        variants={pathVariants}
      />
      
      <motion.line
        x1="210"
        y1="130"
        x2="230"
        y2="130"
        stroke="#F5D04A"
        strokeWidth="2"
        custom={8}
        variants={pathVariants}
      />
      
      <motion.line
        x1="210"
        y1="140"
        x2="230"
        y2="140"
        stroke="#F5D04A"
        strokeWidth="2"
        custom={9}
        variants={pathVariants}
      />
      
      <motion.line
        x1="210"
        y1="150"
        x2="230"
        y2="150"
        stroke="#F5D04A"
        strokeWidth="2"
        custom={10}
        variants={pathVariants}
      />
      
      {/* Connection Lines */}
      <motion.path
        d="M105 70 Q130 70 145 70"
        stroke="#4A9FF5"
        strokeDasharray="4 4"
        strokeWidth="1"
        fill="transparent"
        custom={11}
        variants={pathVariants}
      />
      
      <motion.path
        d="M105 140 Q130 120 150 120"
        stroke="#4A9FF5"
        strokeDasharray="4 4"
        strokeWidth="1"
        fill="transparent"
        custom={12}
        variants={pathVariants}
      />
      
      <motion.path
        d="M195 120 Q210 100 220 90"
        stroke="#F5D04A"
        strokeDasharray="4 4"
        strokeWidth="1"
        fill="transparent"
        custom={13}
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default AnimatedMarketingSvg;
