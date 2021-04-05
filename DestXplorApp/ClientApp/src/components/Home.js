import React, { Component } from 'react';

import HeroSection from './HeroSection';
import PopularDestinationsSection from './Cards';
import Footer from './Footer';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
        <HeroSection />
        <PopularDestinationsSection />
        <Footer />
      </>
    );
  }
}
