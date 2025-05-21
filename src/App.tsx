import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingProjects from './components/TrendingProjects';
import SecurityFeatures from './components/SecurityFeatures';
import ProjectSupport from './components/ProjectSupport';
import HowItWorks from './components/HowItWorks';
import ProjectCreator from './components/ProjectCreator';
import DiamondConnection from './components/DiamondConnection';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <TrendingProjects className="bg-gray-50" />
        
        <HowItWorks />
        
        <SecurityFeatures className="bg-gray-50" />
        
        <ProjectSupport />
        
        <DiamondConnection className="bg-gray-50" />
        
        <ProjectCreator />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
