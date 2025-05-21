import React from 'react';
import { motion } from 'framer-motion';

interface TrendingProjectsProps {
  className?: string;
}

interface ProjectCardProps {
  name: string;
  symbol: string;
  logo: string;
  description: string;
  raised: string;
  investors: number;
  trending?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  symbol,
  logo,
  description,
  raised,
  investors,
  trending = false
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {trending && (
        <div className="bg-gradient-to-r from-primary-purple to-primary-teal text-white text-xs font-semibold px-3 py-1 absolute top-3 right-3 rounded-full">
          Trending 🔥
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={logo} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="font-bold text-xl">{name}</h3>
            <p className="text-gray-500 text-sm">${symbol}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Raised</p>
            <p className="font-semibold">{raised}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Investors</p>
            <p className="font-semibold">{investors}</p>
          </div>
          <a href={`#project/${symbol.toLowerCase()}`} className="text-primary-purple font-medium hover:underline">
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const TrendingProjects: React.FC<TrendingProjectsProps> = ({ className = '' }) => {
  // Sample project data - in a real app, this would come from an API
  const projects = [
    {
      name: "Cosmic Cats",
      symbol: "CCAT",
      logo: "/images/project-logos/cosmic-cats.png",
      description: "A community-driven NFT project featuring cosmic feline adventures across the galaxy.",
      raised: "1.8 ETH",
      investors: 142,
      trending: true
    },
    {
      name: "DeFi Pulse",
      symbol: "PULSE",
      logo: "/images/project-logos/defi-pulse.png",
      description: "Next-generation DeFi analytics platform with real-time insights and trading signals.",
      raised: "3.2 ETH",
      investors: 215,
      trending: true
    },
    {
      name: "MetaVerse Explorers",
      symbol: "MEXPL",
      logo: "/images/project-logos/metaverse-explorers.png",
      description: "Building the bridge between physical and digital realities with innovative metaverse technology.",
      raised: "2.5 ETH",
      investors: 178,
      trending: true
    },
    {
      name: "Quantum Finance",
      symbol: "QFIN",
      logo: "/images/project-logos/quantum-finance.png",
      description: "Leveraging quantum computing algorithms to revolutionize decentralized finance.",
      raised: "1.2 ETH",
      investors: 97,
      trending: false
    }
  ];

  return (
    <section id="trending-projects" className={`relative py-16 overflow-hidden ${className}`}>
      {/* Enhanced Stripe-style gradient background */}
      <div className="stripe-gradient-trending"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <motion.h2 
            className="text-3xl font-bold section-header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trending Projects
          </motion.h2>
          
          <motion.a 
            href="#projects"
            className="text-primary-purple font-medium hover:underline flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              symbol={project.symbol}
              logo={project.logo}
              description={project.description}
              raised={project.raised}
              investors={project.investors}
              trending={project.trending}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
