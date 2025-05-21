import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCreatorProps {
  className?: string;
}

export const ProjectCreator: React.FC<ProjectCreatorProps> = ({ className = '' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    tokenSymbol: '',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    initialSupply: '',
    logo: null,
    whitepaper: null,
    teamInfo: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to the blockchain and submit the project
    alert('Project submitted successfully! In a production environment, this would connect to the Base blockchain.');
    // Reset form
    setCurrentStep(1);
    setFormData({
      projectName: '',
      tokenSymbol: '',
      description: '',
      website: '',
      twitter: '',
      telegram: '',
      initialSupply: '',
      logo: null,
      whitepaper: null,
      teamInfo: '',
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
              Launch Your Project
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get started with our secure, supportive launchpad on Base
            </motion.p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              <div 
                className={`flex-1 py-4 px-6 text-center font-medium ${currentStep === 1 ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-gray-500'}`}
              >
                Project Details
              </div>
              <div 
                className={`flex-1 py-4 px-6 text-center font-medium ${currentStep === 2 ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-gray-500'}`}
              >
                Token Information
              </div>
              <div 
                className={`flex-1 py-4 px-6 text-center font-medium ${currentStep === 3 ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-gray-500'}`}
              >
                Verification
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
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
                      <input
                        type="url"
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telegram" className="block text-sm font-medium text-gray-700 mb-2">Telegram</label>
                      <input
                        type="url"
                        id="telegram"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                        required
                      />
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="tokenSymbol" className="block text-sm font-medium text-gray-700 mb-2">Token Symbol</label>
                      <input
                        type="text"
                        id="tokenSymbol"
                        name="tokenSymbol"
                        value={formData.tokenSymbol}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="initialSupply" className="block text-sm font-medium text-gray-700 mb-2">Initial Supply</label>
                      <input
                        type="number"
                        id="initialSupply"
                        name="initialSupply"
                        value={formData.initialSupply}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">Project Logo</label>
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                      accept="image/*"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">Upload a square logo, minimum 200x200px</p>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="whitepaper" className="block text-sm font-medium text-gray-700 mb-2">Whitepaper (Optional)</label>
                    <input
                      type="file"
                      id="whitepaper"
                      name="whitepaper"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                      accept=".pdf,.doc,.docx"
                    />
                    <p className="mt-1 text-sm text-gray-500">PDF or DOC format, max 10MB</p>
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
                    <label htmlFor="teamInfo" className="block text-sm font-medium text-gray-700 mb-2">Team Information</label>
                    <textarea
                      id="teamInfo"
                      name="teamInfo"
                      value={formData.teamInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
                      required
                      placeholder="Please provide information about your team members, including roles and experience"
                    ></textarea>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h3 className="text-yellow-800 font-medium mb-2">Verification Requirements</h3>
                    <p className="text-yellow-700 text-sm mb-2">To complete your project submission, you will need to:</p>
                    <ul className="list-disc list-inside text-yellow-700 text-sm">
                      <li>Complete KYC verification with government ID</li>
                      <li>Verify your social media accounts</li>
                      <li>Schedule a video call with our team</li>
                      <li>Agree to our conditional doxxing policy</li>
                    </ul>
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
                        I agree to the <a href="#terms" className="text-primary-purple hover:underline">Terms and Conditions</a> and understand that my identity information may be released in case of malicious activity or rug pulls as per the <a href="#doxxing-policy" className="text-primary-purple hover:underline">Conditional Doxxing Policy</a>.
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
                      Submit Project
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

export default ProjectCreator;
