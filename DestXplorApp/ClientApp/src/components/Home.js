import React from 'react';

import HeroSection from './HeroSection';
import PopularDestinationsSection from './Cards';
import Footer from './Footer';

const Home = () => {
  return(
      <>
        <HeroSection
          src="./images/Home.jpg"
          showButton={true}
        />
        <PopularDestinationsSection />
        <Footer />
      </>
    );
}

export default Home;
