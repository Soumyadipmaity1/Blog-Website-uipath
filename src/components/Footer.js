// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3>About</h3>
          <p>Sample about text...</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#link1">Link 1</a></li>
            <li><a href="#link2">Link 2</a></li>
          </ul>
        </div>
        <div className="category">
          <h3>Category</h3>
          <ul>
            <li><a href="#category1">Category 1</a></li>
            <li><a href="#category2">Category 2</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Weekly Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="footer-copy">&copy; 2023 Cosmos Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
