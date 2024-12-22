import React from 'react';
import './SearhBar.css'

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search blog posts..."
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;