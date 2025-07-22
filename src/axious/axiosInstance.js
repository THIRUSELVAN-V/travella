// src/axious/axiosInstance.js
import axios from 'axios';

// Create a reusable Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptor to include token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or use cookies if needed
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
