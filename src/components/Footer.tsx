import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-50 border-t border-gray-100 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-teal">dmnd.labs</h3>
              <span className="ml-2 diamond-brand-badge">
                <img src="/images/diamond-icon.svg" alt="Diamond" />
                <span>by Diamond</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">The premium launchpad on Base blockchain with unparalleled security and comprehensive project support.</p>
            <div className="flex space-x-4">
              <a 
                href="https://notpepesbitch.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-purple transition-colors duration-200"
                aria-label="Diamond Website"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a 
                href="https://x.com/Not_Pepes_Bitch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-purple transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://t.me/diamond_base_chain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-purple transition-colors duration-200"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@RyanCohn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-purple transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Browse Projects</a></li>
              <li><a href="#launch" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Launch a Project</a></li>
              <li><a href="#docs" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Documentation</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#security" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Security Features</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Project Support</a></li>
              <li><a href="#tokenomics" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Tokenomics Guide</a></li>
              <li><a href="#tutorials" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="https://notpepesbitch.xyz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Diamond Website</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">About Us</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-primary-purple transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 dmnd.labs. A <a href="https://notpepesbitch.xyz/" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">Diamond</a> project. All rights reserved.</p>
            
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">Powered by</span>
              <a href="https://base.org/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-purple transition-colors duration-200">
                <svg className="h-5 w-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
