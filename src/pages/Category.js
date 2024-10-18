import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/Category.css';

const Category = () => {
    const { category } = useParams(); // Get category from URL params
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Access your API key from .env file

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
                );
                setArticles(response.data.articles);
            } catch (err) {
                setError('Failed to fetch news: ' + err.message);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            fetchNews();
        }
    }, [category, apiKey]); // Include apiKey in the dependency array

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="category-container"> {/* Add this className */}
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index} className="article-item">
                        {/* Show the image if available */}
                        {article.urlToImage && (
                            <img 
                                src={article.urlToImage} 
                                alt={article.title} 
                                className="article-image"
                            />
                        )}
                        <div className="article-details">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                            <p>{article.description}</p> {/* Optionally show description */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
