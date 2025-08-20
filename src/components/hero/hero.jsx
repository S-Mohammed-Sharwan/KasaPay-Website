import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Welcome to KasaPay</h1>
          <p className="hero-subtitle">Mangalore's Trusted Payment Solution for waste Collection Teams</p>
          <p>
            Your trusted partner for secure and efficient payments.
            Streamline Bill Payments with our secure and efficient platform. 
            Trusted by 20,000+ users across Mangalore and India.
          </p>
          <button className="btn">
            Get Started
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
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
