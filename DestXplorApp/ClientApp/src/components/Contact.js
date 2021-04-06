import React from 'react';

import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <HeroSection
        src="./images/Contact.jpg"
        hideButton={false}
      />
      <ContactSection />
    </>
  );
}

export default Contact;