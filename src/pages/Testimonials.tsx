import React from 'react';
import TestimonialForm from '../components/TestimonialForm';
import AnimatedSection from '../components/AnimatedSection';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="min-h-screen flex flex-col justify-center py-20 px-4">
        <AnimatedSection>
          <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-12">
            Compartilhe sua História
          </h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
            Você já vivênciou alagamentos? Compartilhe sua história, insights ou deixe sugestões que possam ajudar outras pessoas na preparação e resposta efficiente contra alagamentos.
          </p>
          
          <TestimonialForm />
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Testimonials;