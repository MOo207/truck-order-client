import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to each request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
