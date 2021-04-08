import React from 'react';
import { Link } from 'react-router-dom'

import './HeroSection.css';

const HeroSection = (props) => {

  const showButton = (show) => {
    if (show) {
      return (
        <Link to="/destinations">
          <button className="btn-hero">Travel Now</button>
        </Link>
      );
    } else {
      return ``;
    }
  }
    
  return (
    <header class="masthead" style={{ backgroundImage: `url(${props.src})` }} >
      <div class="overlay"></div>
      {showButton(props.showButton)}
      <div class="filler"></div>
    </header>
  );
}

export default HeroSection;