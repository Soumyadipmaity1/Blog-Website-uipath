// src/App.js
import React, { useState } from 'react';
import Postcard from './postcard';
import './App.css';

const postcards = [
  {
    image: '/images/Fig1.jpeg',
    title: 'The Impact of Technology on the Workplace',
    author: 'John Smith',
    date: 'August 25, 2023',
    link: '#',
  },
  {
    image: '/images/Fig2.jpeg',
    title: 'How Technology is Changing',
    author: 'Jane Doe',
    date: 'September 10, 2023',
    link: '#',
  },
  {
    image: '/images/Fig3.jpeg',
    title: 'Advancements in AI and Machine Learning',
    author: 'Alex Johnson',
    date: 'July 15, 2023',
    link: '#',
  },
  {
    image: '/images/Fig4.jpeg',
    title: 'The Future of Remote Work',
    author: 'Emily Davis',
    date: 'June 20, 2023',
    link: '#',
  },
  {
    image: '/images/Fig5.jpeg',
    title: 'Cybersecurity in the Modern Age',
    author: 'Michael Brown',
    date: 'May 30, 2023',
    link: '#',
  },
  {
    image: '/images/Fig6.jpeg',
    title: 'The Rise of Quantum Computing',
    author: 'Jessica Williams',
    date: 'April 12, 2023',
    link: '#',
  },
  {
    image: '/images/Fig7.jpeg',
    title: 'Blockchain Beyond Cryptocurrency',
    author: 'David Miller',
    date: 'March 22, 2023',
    link: '#',
  },
  {
    image: '/images/Fig8.jpeg',
    title: '5G Technology and Its Impacts',
    author: 'Sarah Wilson',
    date: 'February 14, 2023',
    link: '#',
  },
  {
    image: '/images/Fig9.jpeg',
    title: 'Augmented Reality in Everyday Life',
    author: 'James Taylor',
    date: 'January 5, 2023',
    link: '#',
  },
];

const categories = [
  'All',
  'Technology',
  'AI',
  'Workplace',
  'Cybersecurity',
  'Quantum Computing',
  'Blockchain',
  '5G',
  'AR',
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPostcards = selectedCategory === 'All'
    ? postcards
    : postcards.filter(postcard => postcard.category === selectedCategory);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cosmos Blog</h1>
      </header>
      
      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="postcard-container">
        {filteredPostcards.map((postcard, index) => (
          <Postcard key={index} {...postcard} />
        ))}
      </div>
      
      <footer className="App-footer">
        <div className="footer-section">
          <h2>About</h2>
          <p>This is a Blog website...</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#link1">Link 1</a></li>
            <li><a href="#link2">Link 2</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Category</h2>
          <ul>
            <li><a href="#category1">Category 1</a></li>
            <li><a href="#category2">Category 2</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h2>Weekly Newsletter</h2>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Cosmos Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
