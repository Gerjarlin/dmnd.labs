import React from 'react';
import { motion } from 'framer-motion';

interface SecurityFeaturesProps {
  className?: string;
}

export const SecurityFeatures: React.FC<SecurityFeaturesProps> = ({ className = '' }) => {
  return (
    <section id="security" className={`relative py-20 overflow-hidden ${className}`}>
      {/* Enhanced Stripe-style gradient background */}
      <div className="stripe-gradient-security"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 section-header inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unparalleled Security
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Protecting investors with the most comprehensive anti-rug pull measures in the industry
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="feature-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary-purple to-primary-teal rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">KYC Verification</h3>
            
            <p className="text-gray-700">
              All project creators must complete our comprehensive identity verification process, including government ID and proof of address verification. This creates accountability and ensures that real people stand behind each project.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#kyc-details" className="text-primary-purple font-medium hover:underline flex items-center">
                Learn more about our KYC process
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="feature-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-primary-purple to-primary-teal rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Social Media Verification</h3>
            
            <p className="text-gray-700">
              Project teams must verify their identities through established social media accounts, ensuring public accountability and transparency. This creates a public record of project ownership that can't be easily erased.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#social-verification" className="text-primary-purple font-medium hover:underline flex items-center">
                View our verification requirements
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="feature-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-primary-purple to-primary-teal rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Video Verification</h3>
            
            <p className="text-gray-700">
              All project creators must complete a live video call with our team to verify their identity and discuss their project in detail. This adds another layer of security and helps us assess the team's commitment and vision.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#video-verification" className="text-primary-purple font-medium hover:underline flex items-center">
                Schedule your verification call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="feature-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary-purple to-primary-teal rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Conditional Doxxing</h3>
            
            <p className="text-gray-700">
              In case of malicious activity or rug pulls, we reserve the right to release creator information to protect our community. This powerful deterrent ensures project creators have skin in the game and think twice before attempting fraud.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#doxxing-policy" className="text-primary-purple font-medium hover:underline flex items-center">
                Read our full security policy
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#security-details">
              <button className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                Learn More About Our Security
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
