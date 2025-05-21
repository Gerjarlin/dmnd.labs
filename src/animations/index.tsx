import React from 'react';
import { motion, Variants } from 'framer-motion';

// Animation variants for page transitions
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Animation variants for staggered children
export const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Animation variants for hover effects
export const hoverVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: '0 0 0 rgba(59, 130, 246, 0)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  }
};

// Animation variants for button hover effects
export const buttonVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: '0 0 0 rgba(107, 70, 193, 0)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(107, 70, 193, 0.6)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  }
};

// Animation variants for floating elements
export const floatVariants: Variants = {
  initial: {
    y: 0
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Animation variants for gradient shifts
export const gradientVariants: Variants = {
  initial: {
    backgroundPosition: '0% 50%'
  },
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Animation variants for pulse effects
export const pulseVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1
  },
  animate: {
    opacity: [1, 0.8, 1],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Animation variants for reveal effects
export const revealVariants: Variants = {
  initial: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)"
  },
  animate: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Animation variants for card hover effects
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  hover: {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  }
};

// Animation variants for staggered list items
export const listItemVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  })
};

// Animation variants for diamond logo
export const diamondLogoVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -10
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    filter: "drop-shadow(0 0 10px rgba(107, 70, 193, 0.7))",
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  }
};

// Animation variants for video game-inspired glitch effect
export const glitchVariants: Variants = {
  initial: {
    textShadow: "0 0 0 rgba(0,0,0,0)"
  },
  animate: {
    textShadow: [
      "0 0 0 rgba(0,0,0,0)",
      "-2px 0 #ff00cc, 2px 0 #00ffff",
      "0 0 0 rgba(0,0,0,0)",
      "2px 0 #ff00cc, -2px 0 #00ffff",
      "0 0 0 rgba(0,0,0,0)"
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 10
    }
  }
};

// Animation variants for loading spinner
export const spinnerVariants: Variants = {
  initial: {
    rotate: 0
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1.5,
      ease: "linear",
      repeat: Infinity
    }
  }
};

// Animation variants for notification badge
export const badgeVariants: Variants = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15
    }
  },
  exit: {
    scale: 0
  }
};

// Animation variants for modal
export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2
    }
  }
};

// Animation variants for backdrop
export const backdropVariants: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

// Animation variants for tab transitions
export const tabVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

// Animation variants for progress bar
export const progressVariants = {
  initial: {
    width: "0%"
  },
  animate: (custom: number) => ({
    width: `${custom}%`,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  })
};

export default {
  pageVariants,
  itemVariants,
  hoverVariants,
  buttonVariants,
  floatVariants,
  gradientVariants,
  pulseVariants,
  revealVariants,
  cardHoverVariants,
  listItemVariants,
  diamondLogoVariants,
  glitchVariants,
  spinnerVariants,
  badgeVariants,
  modalVariants,
  backdropVariants,
  tabVariants,
  progressVariants
};
