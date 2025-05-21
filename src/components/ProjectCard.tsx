import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariants } from '../animations';

interface Project {
  id: string;
  name: string;
  symbol: string;
  description: string;
  logo: string;
  marketCap: number;
  change: number;
  status: 'new' | 'growing' | 'trending';
  price?: number;
  volume24h?: number;
  holders?: number;
  chart?: number[];
}

interface ProjectCardProps {
  project: Project;
  onSelect: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getStatusColor = (status: 'new' | 'growing' | 'trending') => {
    switch (status) {
      case 'new': return 'bg-accent-yellow text-secondary-dark';
      case 'growing': return 'bg-accent-green text-secondary-dark';
      case 'trending': return 'bg-accent-pink text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <motion.div
      className="bg-background-card rounded-xl border border-primary-blue/20 shadow-lg backdrop-blur-sm overflow-hidden"
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      onClick={() => onSelect(project.id)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-purple to-primary-teal p-0.5 mr-3">
            <img 
              src={project.logo} 
              alt={project.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-display text-white">{project.name}</h3>
            <div className="text-primary-teal font-mono">${project.symbol}</div>
          </div>
          <div className="ml-auto">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-400">Market Cap</div>
            <div className="text-white font-medium">{formatCurrency(project.marketCap)}</div>
          </div>
          <div className={`text-lg font-medium ${project.change >= 0 ? 'text-accent-green' : 'text-accent-pink'}`}>
            {project.change >= 0 ? '+' : ''}{project.change}%
          </div>
        </div>
      </div>
      
      <div className="h-1 w-full bg-gradient-to-r from-primary-purple to-primary-teal"></div>
    </motion.div>
  );
};

export default ProjectCard;
