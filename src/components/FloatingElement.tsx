import React from 'react';
import AnimatedSection from './AnimatedSection';

interface FloatingElementProps {
  children: React.ReactNode;
  position: 'left' | 'right' | 'center';
  delay?: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  position, 
  delay = 0,
  className = ''
}) => {
  const positionClasses = {
    left: 'ml-8 md:ml-16',
    right: 'mr-8 md:mr-16 self-end',
    center: 'mx-auto',
  };

  return (
    <AnimatedSection 
      delay={delay}
      className={`
        relative 
        max-w-4xl
        ${positionClasses[position]}
        ${className}
      `}
    >
      <div className="absolute -inset-1 bg-green-500/20 blur-md rounded-lg"></div>
      <div className="relative bg-gray-900/90 border border-green-500/30 p-6 rounded-lg z-10">
        {children}
      </div>
    </AnimatedSection>
  );
};

export default FloatingElement;