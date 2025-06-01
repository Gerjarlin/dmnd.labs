import React from 'react';
import { motion } from 'framer-motion';
import AnimatedVerificationSvg from './AnimatedVerificationSvg';
import AnimatedLiquiditySvg from './AnimatedLiquiditySvg';
import AnimatedMarketingSvg from './AnimatedMarketingSvg';

interface ExplanatoryGraphicProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}

export const ExplanatoryGraphic: React.FC<ExplanatoryGraphicProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  className = ''
}) => {
  // Determine which SVG component to render based on the title
  const renderSvgComponent = () => {
    if (title.includes("Verification")) {
      return <AnimatedVerificationSvg />;
    } else if (title.includes("Liquidity")) {
      return <AnimatedLiquiditySvg />;
    } else if (title.includes("Marketing")) {
      return <AnimatedMarketingSvg />;
    }
    return <img 
      src={imageSrc} 
      alt={imageAlt} 
      className="w-full h-auto object-cover"
    />;
  };

  return (
    <div className={`py-16 ${className}`}>
      <div className={`container mx-auto px-4`}>
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="text-lg text-gray-700">{description}</p>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-teal/20 rounded-xl transform rotate-3"></div>
              <div className="relative z-10 rounded-xl shadow-lg w-full overflow-hidden p-6 bg-white">
                {renderSvgComponent()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExplanatoryGraphic;
