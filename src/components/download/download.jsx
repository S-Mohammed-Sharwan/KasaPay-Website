import React from 'react';
import './download.css';

const Download = () => (
  <div id="download">
    <div className="title">
          <h3>Download KasaPay App</h3>
          <h2>Get the KasaPay app from Google Play Store </h2>
    </div>
    <div className="download">
      <div className="text-section">        
        <h2>
          <b>Available on Google Play Store</b>
        </h2>
        <ul className="features">
          <li>✅ Easy installation</li>
          <li>✅ Regular updates</li>
          <li>✅ Secure transactions</li>
          <li>✅ Offline capability</li>
        </ul>
        <a href="#" className="play-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </a>
      </div>

      <div className="demo-section">
        <img
          src="https://dummyimage.com/200x400/cccccc/000000&text=App+Demo"
          alt="App demo"
        />
      </div>
    </div>
  </div>
);

export default Download;
