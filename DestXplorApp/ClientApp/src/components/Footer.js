import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {

  return (
    <footer class="container-fluid bg-dark py-5 mx-auto">
      <div className="container row py-5 mx-auto text-light" style={{ textAlign: "center" }}>
        <div className="col-3">
          <h5>Company</h5>
          <hr className="bg-light mx-5" />
          <p><Link to="/about">Blog</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/about">Careers</Link></p>
          <p><Link to="/about">How we work</Link></p>
        </div>
        <div className="col-3">
          <h5>Destinations</h5>
          <hr className="bg-light mx-5" />
          <p><Link to="/destinations">Mexico</Link></p>
          <p><Link to="/destinations">Amsterdam</Link></p>
          <p><Link to="/destinations">Tokyo</Link></p>
          <p><Link to="/destinations">France</Link></p>
        </div>
        <div className="col-3">
          <h5>Contact Us</h5>
          <hr className="bg-light mx-5" />
          <p><Link to="/contact">Help/FAQ</Link></p>
          <p><Link to="/contact">Email</Link></p>
          <p><Link to="/contact">Location</Link></p>
          <p><Link to="/contact">Phone number</Link></p>
        </div>
        <div className="col-3">
          <h5>Social Media</h5>
          <hr className="bg-light mx-2" />
          <div className="justify-content-even">
            <i className="fab fa-linkedin fa-3x mx-2"></i>
            <i className="fab fa-twitter-square fa-3x mx-2"></i>
            <i className="fab fa-facebook-square fa-3x mx-2"></i>
            <i className="fab fa-instagram-square fa-3x mx-2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;