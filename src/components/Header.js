// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Cosmos</div>
      <nav>
        <ul>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#post">Post</a></li>
        </ul>
      </nav>
      <div className="theme-toggle">🌙</div>
    </header>
  );
};

export default Header;
