import React from 'react';
import InfoSection from '../components/InfoSection';
import { causesContent } from '../data/floodData';

const Causes: React.FC = () => {
  return (
    <div className="pt-16">
      <InfoSection
        id="causes"
        title="O que causa alagamentos?"
        content={causesContent}
      />
    </div>
  );
};

export default Causes;