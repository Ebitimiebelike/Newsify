import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import SearchBar from './components/SearchBar';

// IMPORTANT: Get your free API key from https://newsapi.org/
const API_KEY = '6439743b461621a3c786579d77287632'; // Replace with your actual API key
const BASE_URL = 'https://newsapi.org/v2';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async (query = '') => {
    setLoading(true);
    setError(null);

    try {
      let url;
      if (query) {
        // Search endpoint
        url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&language=en&pageSize=20&apiKey=${API_KEY}`;
      } else {
        // Top headlines by category
        url = `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${API_KEY}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok') {
        setNews(data.articles);
      } else {
        setError(data.message || 'Failed to fetch news');
      }
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      fetchNews(query);
    } else {
      fetchNews();
    }
  };

  return (
    <div className="App">
      <Header 
        currentCategory={category} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <SearchBar onSearch={handleSearch} />

      <main className="main-content">
        <div className="container">
          {searchQuery && (
            <h2 className="section-title">
              Search results for "{searchQuery}"
            </h2>
          )}
          {!searchQuery && (
            <h2 className="section-title">
              {category.charAt(0).toUpperCase() + category.slice(1)} News
            </h2>
          )}

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading news...</p>
            </div>
          )}

          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && news.length === 0 && (
            <div className="no-results">
              <p>No news articles found.</p>
            </div>
          )}

          <div className="news-grid">
            {!loading && !error && news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Newsify. Powered by NewsAPI.org</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
