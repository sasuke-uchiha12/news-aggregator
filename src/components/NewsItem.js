// src/components/NewsItem.js
import React from 'react';

const NewsItem = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
);

export default NewsItem;
