import React from 'react';

import HeroSection from './HeroSection';
import PopularDestinationsSection from './Cards';
import Footer from './Footer';

const Home = () => {
  return(
      <>
        <HeroSection />
        <PopularDestinationsSection />
        <Footer />
      </>
    );
}

export default Home;
