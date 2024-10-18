import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
      );
      setArticles(response.data.articles);
    } catch (err) {
      setError('Failed to fetch news: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search News</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
