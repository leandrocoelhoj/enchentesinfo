import React from 'react';
import InfoSection from '../components/InfoSection';
import { preventionContent } from '../data/floodData';

const Prevention: React.FC = () => {
  return (
    <div className="pt-16">
      <InfoSection
        id="prevention"
        title="Material de apoio para prevenção"
        content={preventionContent}
      />
    </div>
  );
};

export default Prevention;