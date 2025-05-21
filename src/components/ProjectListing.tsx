import React from 'react';
import { motion } from 'framer-motion';
import { GameButton } from './GameButton';
import { GameCard } from './GameCard';

interface ProjectListingProps {
  onProjectSelect: (projectId: string) => void;
}

export const ProjectListing: React.FC<ProjectListingProps> = ({ onProjectSelect }) => {
  // Sample project data
  const projects = [
    {
      id: '1',
      name: 'Moon Rocket',
      symbol: 'MOON',
      description: 'To the moon and beyond! The ultimate meme coin for space enthusiasts.',
      marketCap: '$12,450',
      growth: '+24%',
      status: 'new',
      logo: '🚀'
    },
    {
      id: '2',
      name: 'Pixel Pup',
      symbol: 'PUPX',
      description: 'The first pixel art dog-themed token on Base. Much wow, very pixel.',
      marketCap: '$45,230',
      growth: '+12%',
      status: 'growing',
      logo: '🐕'
    },
    {
      id: '3',
      name: 'Diamond Hands',
      symbol: 'DHAND',
      description: 'For those who never sell. HODL forever with the strongest community.',
      marketCap: '$78,120',
      growth: '+36%',
      status: 'trending',
      logo: '💎'
    },
    {
      id: '4',
      name: 'Cyber Cat',
      symbol: 'CCAT',
      description: 'The future is meow. Join the cybernetic feline revolution.',
      marketCap: '$32,890',
      growth: '+8%',
      status: 'new',
      logo: '🐱'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="px-2 py-1 bg-accent-purple text-white text-xs rounded-full">New</span>;
      case 'growing':
        return <span className="px-2 py-1 bg-accent-green text-white text-xs rounded-full">Growing</span>;
      case 'trending':
        return <span className="px-2 py-1 bg-accent-yellow text-black text-xs rounded-full">Trending</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-pixel text-white">Explore Projects</h2>
        <div className="flex space-x-2">
          <select className="game-select">
            <option>All Projects</option>
            <option>New Launches</option>
            <option>Trending</option>
            <option>Verified Only</option>
          </select>
          <GameButton variant="secondary" size="sm">
            Filter
          </GameButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GameCard
              title={project.name}
              variant={project.status === 'trending' ? 'featured' : 'project'}
              className="h-full"
              onClick={() => onProjectSelect(project.id)}
            >
              <div className="flex items-start mb-3">
                <div className="text-4xl mr-3">{project.logo}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-yellow font-bold">${project.symbol}</span>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-white text-sm mt-1">{project.description}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-white border-opacity-10">
                <div>
                  <div className="text-sm text-white opacity-70">Market Cap</div>
                  <div className="text-white font-bold">{project.marketCap}</div>
                </div>
                <div className="text-accent-green font-bold">{project.growth}</div>
              </div>
              
              <div className="mt-4">
                <GameButton 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                  onClick={() => onProjectSelect(project.id)}
                >
                  Trade Now
                </GameButton>
              </div>
            </GameCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
