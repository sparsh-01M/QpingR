// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = ({ bannerImage }) => {
  const heroStyle = {
    backgroundImage: bannerImage ? `url(${bannerImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh', // Half screen height
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Revolutionizing Vehicle Communication</h1>
        <p>Seamlessly connect with vehicle owners and streamline your parking experience.</p>
        <div className="cta-buttons">
          <a href="https://appstore.com/qpingr" target="_blank" rel="noopener noreferrer">
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;