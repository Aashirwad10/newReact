import React from 'react';
import '../styles/SearchBox.css'; 

const SearchBox = () => {
  return (
    <div className="rectangle-box">
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search for recipes here" 
        />
        <button className="search-icon">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
