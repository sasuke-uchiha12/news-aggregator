// src/api.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const BASE_URL = 'https://generativelanguage.googleapis.com/v1betaa/models/gemini-1.5-flash-latest:generateContent?key=';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
