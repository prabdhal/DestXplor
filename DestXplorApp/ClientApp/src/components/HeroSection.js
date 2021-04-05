import React from 'react';
import { Link } from 'react-router-dom'

import './HeroSection.css';

const HeroSection = () => {
  return (
    <div class="container-hero">
      <img className="img-fluid" src="./images/img-1.jpg" alt="hero image" />
      <Link to="/destinations">
        <button className="btn-hero">Travel Now</button>
      </Link>
    </div>
  );
}

export default HeroSection;