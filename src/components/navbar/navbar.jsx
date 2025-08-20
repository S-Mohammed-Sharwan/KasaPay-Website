import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close on ESC key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Toggle dark background on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 10) {
        navRef.current.classList.add('dark-nav');
      } else {
        navRef.current.classList.remove('dark-nav');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu after clicking a link
  const onNavItemClick = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${menuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav ref={navRef}>
        <div className="nav-brand">
          <span><a href="#">KasaPay</a></span>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul id="primary-navigation" className={menuOpen ? 'active' : ''}>
          <li onClick={onNavItemClick}><a href="#">Home</a></li>
          <li onClick={onNavItemClick}><a href="#about">About us</a></li>
          <li onClick={onNavItemClick}><a href="#features">Features</a></li>
          <li onClick={onNavItemClick}><a href="#download">Download</a></li>
          <li onClick={onNavItemClick}><button className="btn">Contact us</button></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
