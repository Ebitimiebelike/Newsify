import React from 'react';

const categories = [
  { id: 'general', name: 'General' },
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'health', name: 'Health' },
  { id: 'science', name: 'Science' }
];

function Header({ currentCategory, onCategoryChange }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>📰 Newsify</h1>
          <p>Your Daily News Source</p>
        </div>
        
        <nav className="categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${currentCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
