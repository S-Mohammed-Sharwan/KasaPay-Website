import React from 'react';
import './hero.css';

const Hero = ({ onNavItemClick }) => {
  return (
    <div id="home" className="hero container">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Welcome to SwachPay</h1>
          <p className="hero-subtitle">
            Mangalore's Trusted Payment Solution for Waste Collection Teams
          </p>
          
          <p>
            Your trusted partner for secure and efficient payments.
            Streamline Bill Payments with our secure and efficient platform. 
            Trusted by 20,000+ users across Mangalore and India.
          </p>
          <p className='hero-suptitle'> Powered by HasiruDala</p>

          {/* Button instead of li */}
          <button className="btn" onClick={onNavItemClick}>
            <a href="#about">Get Started</a>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>20K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat">
            <h3>Mangalore</h3>
            <p>Primary Location</p>
          </div>
          <div className="stat">
            <h3>In-App Chat</h3>
            <p>Support Available</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;
