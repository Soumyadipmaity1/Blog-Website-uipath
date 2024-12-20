// src/Postcard.js
import React from 'react';
import './PostCard.css';

const Postcard = ({ image, title, author, date, link }) => {
  return (
    <a href={link} className="postcard" target="_blank" rel="noopener noreferrer">
      <div className="postcard-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="postcard-content">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </a>
  );
};

export default Postcard;
