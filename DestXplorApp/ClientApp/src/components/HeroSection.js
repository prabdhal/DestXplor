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
    <div className="container-hero">
      <img
        className="img-fluid"
        src={props.src}
        alt="hero image" />
      {showButton(props.showButton)}
    </div>
  );
}

export default HeroSection;