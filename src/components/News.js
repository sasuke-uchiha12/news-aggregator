import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/News.css'; // Importing CSS for styling

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'b993894b90d64149835331c643feeeee'; // Your actual News API key
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news: ' + err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
