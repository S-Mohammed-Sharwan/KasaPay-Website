import React from "react";
import "./download.css";
import appDemo from "../../assets/demoimg.png"; 

const Download = () => (
  <div id="download">
    <div className="title">
      <h3>Download SwachPay App</h3>
      <h2>Get the SwachPay app from Google Play Store </h2>
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
        {/*<a href="#" className="play-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </a>*/}
        <h4 className="hero-note">Available soon on Google Play</h4>
      </div>

      <div className="demo-section">
        <img
          src={appDemo}
          alt="App demo"
        />
      </div>
    </div>
  </div>
);

export default Download;
