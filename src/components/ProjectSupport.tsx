import React from 'react';
import { motion } from 'framer-motion';

interface ProjectSupportProps {
  className?: string;
}

export const ProjectSupport: React.FC<ProjectSupportProps> = ({ className = '' }) => {
  return (
    <section id="support" className={`relative py-20 overflow-hidden ${className}`}>
      {/* Enhanced Stripe-style gradient background */}
      <div className="stripe-gradient-support"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 section-header inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Support
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering project creators with the tools and resources they need to succeed
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
            <div className="bg-gradient-to-r from-primary-teal to-primary-blue rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">X Spaces Integration</h3>
            
            <p className="text-gray-700">
              Get featured on community Spaces calls to introduce your project to our active investor community. Our team will host and moderate these sessions, helping you effectively communicate your vision and answer questions from potential investors.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#spaces-schedule" className="text-primary-teal font-medium hover:underline flex items-center">
                View upcoming Spaces schedule
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
            <div className="bg-gradient-to-r from-primary-teal to-primary-blue rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">YouTube Channel Features</h3>
            
            <p className="text-gray-700">
              Get interviewed on our YouTube channel to showcase your project to thousands of potential investors. Our professional team will help you prepare and present your project in the best possible light, with high-quality production values.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="https://www.youtube.com/@RyanCohn" target="_blank" rel="noopener noreferrer" className="text-primary-teal font-medium hover:underline flex items-center">
                Check out our YouTube channel
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
            <div className="bg-gradient-to-r from-primary-teal to-primary-blue rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Diamond Bot Integration</h3>
            
            <p className="text-gray-700">
              Access our powerful Diamond bot to run competitions, giveaways, and distribute content across multiple platforms. This automated tool helps you engage with your community and grow your project's reach with minimal effort.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#diamond-bot" className="text-primary-teal font-medium hover:underline flex items-center">
                Learn about Diamond bot features
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
            <div className="bg-gradient-to-r from-primary-teal to-primary-blue rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Creative Services Network</h3>
            
            <p className="text-gray-700">
              Get connected with affordable, high-quality designers and developers to enhance your project's presentation. Our vetted network of professionals can help with everything from logo design to website development.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="#creative-services" className="text-primary-teal font-medium hover:underline flex items-center">
                Browse our creative network
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
            <a href="#support-details">
              <button className="bg-gradient-to-r from-primary-teal to-primary-blue text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                Explore Our Support Services
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSupport;
