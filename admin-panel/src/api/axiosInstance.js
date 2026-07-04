import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5003/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const getAssetUrl = (path) => {
  if (!path || /^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL.replace(/\/api\/?$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
};

export default api;
