// src/components/PostGrid.js
import React from 'react';
import PostCard from './postcard';
import './PostGrid.css';

const posts = [
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'John Smith',
    date: 'August 25, 2023',
  },
  // Add more post objects here...
];

const PostGrid = () => {
  return (
    <div className="post-grid">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          image={post.image}
          title={post.title}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostGrid;
