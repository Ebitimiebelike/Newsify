import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search-section">
      <div className="container">
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search for news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            🔍 Search
          </button>
          {query && (
            <button type="button" className="clear-btn" onClick={handleClear}>
              ✕
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
