import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo2.png";
import "./navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Dark nav on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 10) {
        navRef.current.classList.add("dark-nav");
      } else {
        navRef.current.classList.remove("dark-nav");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close after clicking
  const onNavItemClick = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav ref={navRef}>
        {/* Brand */}
        <div className="nav-brand">
          <a href="#">
            <img src={logo} alt="SwachPay Logo" className="nav-logo" />
            <span className="brand-text">SwachPay</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul id="primary-navigation" className={menuOpen ? "active" : ""}>
          <li onClick={onNavItemClick}>
            <a href="#">Home</a>
          </li>
          <li onClick={onNavItemClick}>
            <a href="#about">About us</a>
          </li>
          <li onClick={onNavItemClick}>
            <a href="#features">Features</a>
          </li>
          <li onClick={onNavItemClick}>
            <a href="#download">Download</a>
          </li>
          <li onClick={onNavItemClick}>
            <a href="#contact" className="btn">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
