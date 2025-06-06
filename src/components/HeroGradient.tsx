import React from 'react';

const HeroGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10%] bg-gradient-to-r from-primary-purple/10 to-primary-teal/10 blur-3xl rounded-full transform rotate-12 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute -inset-[20%] bg-gradient-to-r from-primary-teal/5 to-primary-purple/5 blur-3xl rounded-full transform -rotate-12 animate-pulse" style={{ animationDuration: '12s' }}></div>
    </div>
  );
};

export default HeroGradient;
