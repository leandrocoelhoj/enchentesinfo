import React from 'react';
import InfoSection from '../components/InfoSection';
import FloatingElement from '../components/FloatingElement';
import { preventionContent } from '../data/floodData';

const Platforms: React.FC = () => {
  return (
    <div className="pt-16">
      <InfoSection
        id="prevention"
        title="Guia de Prevenção Doméstica"
        content={preventionContent}
      />

      <section className="py-20">
        <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-12">
          Práticas e Tecnologias Sociais
        </h2>

        <div className="flex flex-col space-y-12">
          {preventionContent.slice(1).map((item, idx) => (
            <FloatingElement
              key={item.heading}
              position={item.position}
              delay={(idx + 1) * 0.2}
            >
              <h3 className="text-green-400 font-mono text-xl mb-3">{item.heading}</h3>
              <p className="text-white text-sm leading-relaxed">{item.text}</p>
            </FloatingElement>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Platforms;