import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div id="features">
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile-First Design</h3>
            <p>Optimized for collectors on the move.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-rupee-sign"></i>
            </div>
            <h3>Multiple Payment Options</h3>
            <p>UPI, cards, netbanking and wallets.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <h3>Digital Receipts</h3>
            <p>Automatic SMS &amp; email receipts.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Track collection performance with detailed analytics.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3>Real-time Sync</h3>
            <p>All transactions sync across devices instantly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
