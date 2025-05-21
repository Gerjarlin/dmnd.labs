import React from 'react';
import { motion } from 'framer-motion';

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
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExplanatoryGraphic;
