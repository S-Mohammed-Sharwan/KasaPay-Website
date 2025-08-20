import React from 'react'
import './about.css'

const about = () => {
  return (
    <div id="about" className="about">
      <div className="about-left">
        <img src="" alt="" />
      </div>
      <div className="about-right">
        <h3>About KasaPay</h3>
        <h2>Simplifying Waste Collection Payments</h2>
        <p>
          KasaPay is a specialized payment platform designed specifically for
          waste collection teams in India. Our mission is to simplify and secure
          the bill payment process for both collection agents and consumers.
        </p>
        <p>
          Operating primarily in Mangalore, Karnataka, we have successfully
          served over 20,000 users with reliable and user-friendly payment
          solutions. Our platform bridges the gap between traditional waste
          collection methods and modern digital payment systems.
        </p>
      </div>
      <div className="about-highlights">
        <div className="highlight-box">Secure Transactions</div>
        <div className="highlight-box">Real-time Processing</div>
        <div className="highlight-box">User-Friendly Interface</div>
        <div className="highlight-box">Detailed Analytics</div>
      </div>
    </div>
  );
}

export default about
