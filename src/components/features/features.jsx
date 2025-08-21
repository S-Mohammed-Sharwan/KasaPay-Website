import React from 'react'
import './features.css'
const features = () => {
  return (
    <div id="features">
      <section class="features-section">
        <h2 class="section-title">KEY FEATURES</h2>
        <div class="features-grid">
          <div class="feature-box">
            <div class="feature-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile-First Design</h3>
            <p>Optimized for collectors on the move.</p>
          </div>

          <div class="feature-box">
            <div class="feature-icon">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <h3>Multiple Payment Options</h3>
            <p>UPI, cards, netbanking and wallets.</p>
          </div>

          <div class="feature-box">
            <div class="feature-icon">
              <i class="fas fa-receipt"></i>
            </div>
            <h3>Digital Receipts</h3>
            <p>Automatic SMS &amp; email receipts.</p>
          </div>

          <div class="feature-box">
            <div class="feature-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Track collection performance with detailed analytics.</p>
          </div>

          <div class="feature-box">
            <div class="feature-icon">
              <i class="fas fa-sync"></i>
            </div>
            <h3>Real-time Sync</h3>
            <p>All transactions sync across devices instantly.</p>
          </div>

          <div class="feature-box">
            <div class="feature-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Dedicated support for field teams.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default features
