import React, { useEffect, useRef, useState, useMemo } from "react";
import "./about.css";
import aboutimg1 from "../../assets/img1.jpg";
import aboutimg2 from "../../assets/img2.jpg";
import aboutimg3 from "../../assets/img3.jpg";
import aboutimg4 from "../../assets/img4.jpg";

const About = () => {
  const images = useMemo(() => [aboutimg1, aboutimg2, aboutimg3, aboutimg4], []);
  const INTERVAL_MS = 3000;

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
  };
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="about" className="about">
      {/* Row 0: Intro text (spans full width) */}
      <div className="about-right">
        <h3>About KasaPay</h3>
        <h2>Simplifying Waste Collection Payments</h2>
        <p>
          KasaPay is a specialized payment platform designed specifically for waste
          collection teams in India. Our mission is to simplify and secure the bill
          payment process for both collection agents and consumers.
        </p>
        <p>
          Operating primarily in Mangalore, Karnataka, we have successfully served
          over 20,000 users with reliable and user-friendly payment solutions. Our
          platform bridges the gap between traditional waste collection methods and
          modern digital payment systems.
        </p>
      </div>

      {/* Row 1: Highlights (full width above the two-column row) */}
      <div className="about-highlights">
        <div className="highlight-box">Secure Transactions</div>
        <div className="highlight-box">Real-time Processing</div>
        <div className="highlight-box">User-Friendly Interface</div>
        <div className="highlight-box">Detailed Analytics</div>
      </div>

      {/* Row 2: Left = facts, Right = carousel */}
      <section className="facts two-col-left">
        <h3 className="facts-title">Did You Know?</h3>
        <ul className="facts-list">
          <li>
            <span className="fact-label">Municipal Solid Waste</span>
            <span className="fact-value">~320 tons generated • ~245 tons collected</span>
          </li>
          <li>
            <span className="fact-label">Sanitary Waste</span>
            <span className="fact-value">5–10 tons</span>
          </li>
          <li>
            <span className="fact-label">Biomedical Waste</span>
            <span className="fact-value">~14.5 tons</span>
          </li>
          <li>
            <span className="fact-label">E‑waste</span>
            <span className="fact-value">~2 tons</span>
          </li>
        </ul>
      </section>

      <div className="about-imgs two-col-right">
        <div
          className="carousel-card"
          onMouseEnter={stop}
          onMouseLeave={start}
          aria-label="About images carousel"
        >
          <div className="carousel-viewport">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`About ${i + 1}`}
                className={`carousel-slide ${i === index ? "active" : ""}`}
                loading="lazy"
              />
            ))}
          </div>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setIndex(i);
                  start();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
