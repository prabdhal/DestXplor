import React, { Component } from 'react';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <div class="container-hero">
      <img className="img-fluid" src="img-1.jpg" alt="hero image" />
      <button className="btn-hero">Travel Now</button>
    </div>
  );
}

export default HeroSection;