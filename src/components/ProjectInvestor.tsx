import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectInvestorProps {
  className?: string;
}

export const ProjectInvestor: React.FC<ProjectInvestorProps> = ({ className = '' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    investmentAmount: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? e.target.checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to the blockchain and process the investment
    alert('Investment submitted successfully! In a production environment, this would connect to the Base blockchain.');
    // Reset form
    setCurrentStep(1);
    setFormData({
      investmentAmount: '',
      agreeToTerms: false
    });
  };

  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      <div className="stripe-gradient-hero"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Invest in Verified Projects
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Support innovative projects with confidence on Base
            </motion.p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              <div 
                className={`flex-1 py-4 px-6 text-center font-medium ${currentStep === 1 ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-gray-500'}`}
              >
                Select Project
              </div>
              <div 
                className={`flex-1 py-4 px-6 text-center font-medium ${currentStep === 2 ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-gray-500'}`}
              >
                Investment Details
              </div>
              <div 
                className={`flex-1 py-4 px-6 text-center font-medium ${currentStep === 3 ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-gray-500'}`}
              >
                Confirmation
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Selected Project: Cosmic Cats
                    </h3>
                    
                    <div className="flex items-center mb-4">
                      <img src="/images/project-logos/cosmic-cats.png" alt="Cosmic Cats" className="w-16 h-16 rounded-full mr-4" />
                      <div>
                        <p className="font-bold">Cosmic Cats</p>
                        <p className="text-gray-500 text-sm">$CCAT</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      A community-driven NFT project featuring cosmic feline adventures across the galaxy.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Current Raise</p>
                        <p className="font-semibold">1.8 ETH</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Investors</p>
                        <p className="font-semibold">142</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (ETH)</label>
                    <input
                      type="number"
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                      required
                      step="0.01"
                      min="0.01"
                    />
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h3 className="text-yellow-800 font-medium mb-2">Investment Information</h3>
                    <ul className="list-disc list-inside text-yellow-700 text-sm">
                      <li>All investments are secured by our anti-rug pull measures</li>
                      <li>Project creators have been verified through our KYC process</li>
                      <li>Automatic WETH pair creation at 2 ETH threshold</li>
                      <li>Trading fees are split 50/50 between project and platform</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white text-gray-700 border border-gray-300 font-medium py-2 px-6 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      Back
                    </button>
                    
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Confirm Your Investment
                    </h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-700">Project:</p>
                        <p className="font-semibold">Cosmic Cats ($CCAT)</p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-700">Investment Amount:</p>
                        <p className="font-semibold">{formData.investmentAmount} ETH</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-700">Estimated Tokens:</p>
                        <p className="font-semibold">{parseFloat(formData.investmentAmount) * 10000} CCAT</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 mr-2"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I understand that cryptocurrency investments involve risk and I have read the <a href="#terms" className="text-primary-purple hover:underline">Terms and Conditions</a>.
                      </span>
                    </label>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white text-gray-700 border border-gray-300 font-medium py-2 px-6 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      Back
                    </button>
                    
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary-purple to-primary-teal text-white font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      Confirm Investment
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInvestor;
