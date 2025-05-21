import React from 'react';
import { motion } from 'framer-motion';
import ExplanatoryGraphic from './ExplanatoryGraphic';

interface HowItWorksProps {
  className?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ className = '' }) => {
  return (
    <section id="how-it-works" className={`relative py-20 overflow-hidden ${className}`}>
      <div className="stripe-gradient-diamond"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 section-header inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How dmnd.labs Works
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A premium launchpad experience for both project creators and investors
          </motion.p>
        </div>
        
        <ExplanatoryGraphic 
          title="Secure Project Verification"
          description="Our multi-layered verification process ensures that only legitimate projects make it onto the platform. Project creators undergo comprehensive KYC, social media verification, and video interviews to establish their identity and credibility."
          imageSrc="/images/verification-graphic.svg"
          imageAlt="Secure verification process illustration"
          className="mb-16"
        />
        
        <ExplanatoryGraphic 
          title="Automatic Liquidity Generation"
          description="When your project reaches the 2 ETH threshold in the bonding curve, we automatically create a WETH trading pair on Uniswap, providing instant liquidity and trading opportunities for your token."
          imageSrc="/images/liquidity-graphic.svg"
          imageAlt="Automatic liquidity generation illustration"
          reverse={true}
          className="mb-16"
        />
        
        <ExplanatoryGraphic 
          title="Comprehensive Marketing Support"
          description="Launch with confidence knowing you have access to our full suite of marketing tools, including X Spaces features, YouTube interviews, Diamond bot integration, and our network of creative professionals."
          imageSrc="/images/marketing-graphic.svg"
          imageAlt="Marketing support illustration"
          className="mb-16"
        />
        
        <div className="text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#launch">
              <button className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                Launch Your Project Now
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
