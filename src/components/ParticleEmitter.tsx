import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ParticleEmitterProps {
  children: React.ReactNode;
  particleCount?: number;
  particleColors?: string[];
  emitOnHover?: boolean;
  emitOnClick?: boolean;
  particleSize?: number;
  particleLifetime?: number;
  particleSpeed?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  lifetime: number;
  opacity: number;
}

export const ParticleEmitter: React.FC<ParticleEmitterProps> = ({
  children,
  particleCount = 10,
  particleColors = ['#8B5CF6', '#3B82F6', '#14B8A6'],
  emitOnHover = false,
  emitOnClick = true,
  particleSize = 6,
  particleLifetime = 1000,
  particleSpeed = 3
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Function to create particles
  const createParticles = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Random angle for particle direction
      const angle = Math.random() * Math.PI * 2;
      // Random speed multiplier
      const speed = Math.random() * particleSpeed + 1;
      // Random size variation
      const size = Math.random() * particleSize + 2;
      // Random color from the provided colors
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        size,
        color,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        },
        lifetime: particleLifetime,
        opacity: 1
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
  };

  // Handle click event
  const handleClick = (e: React.MouseEvent) => {
    if (!emitOnClick) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createParticles(x, y);
  };

  // Handle hover effect
  useEffect(() => {
    if (!emitOnHover || !isHovering || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const interval = setInterval(() => {
      // Create particles at random positions within the element
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      
      createParticles(x, y);
    }, 200);
    
    return () => clearInterval(interval);
  }, [isHovering, emitOnHover]);

  // Update particle positions and lifetimes
  useEffect(() => {
    if (particles.length === 0) return;
    
    const animationFrame = requestAnimationFrame(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            lifetime: particle.lifetime - 16, // Approximately 16ms per frame at 60fps
            opacity: particle.lifetime / particleLifetime
          }))
          .filter(particle => particle.lifetime > 0)
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [particles, particleLifetime]);

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      
      {/* Render particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

export default ParticleEmitter;
