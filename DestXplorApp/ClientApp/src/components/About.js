import React from 'react';

import HeroSection from './HeroSection';
import Footer from './Footer';
import AboutDescription from './AboutSection';

const About = () => {
  return (
    <>
      <HeroSection
        src="./images/About.jpg"
        showButton={false}
      />
      <AboutDescription />
    </>
    );
}

export default About;