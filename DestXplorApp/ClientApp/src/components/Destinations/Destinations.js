import React from 'react';

import HeroSection from '../HeroSection';
import DestinationSection from './DestinationCards';

const Destinations = () => {
  return (
    <>
      <HeroSection
        src="./images/Destination.jpg"
        hideButton={false}
      />
      <DestinationSection />
    </>
  );
}

export default Destinations;