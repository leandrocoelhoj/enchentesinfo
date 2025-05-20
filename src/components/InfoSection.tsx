import React from 'react';
import FloatingElement from './FloatingElement';

interface InfoSectionProps {
  id: string;
  title: string;
  content: Array<{
    heading?: string;
    text: string;
    position: 'left' | 'right' | 'center';
  }>;
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, content }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center py-20">
      <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      
      <div className="flex flex-col space-y-12">
        {content.map((item, index) => (
          <FloatingElement 
            key={index} 
            position={item.position} 
            delay={index * 100}
          >
            {item.heading && (
              <h3 className="text-green-400 font-mono text-xl mb-3">{item.heading}</h3>
            )}
            <p className="text-white leading-relaxed">{item.text}</p>
          </FloatingElement>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;