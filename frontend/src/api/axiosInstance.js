import axios from 'axios';

export const API_ORIGIN = 'https://api.manovaidya.org';
export const API_BASE_URL = `${API_ORIGIN}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const getAssetUrl = (path) => {
  if (!path || /^https?:\/\//i.test(path)) return path;
  const origin = API_BASE_URL.replace(/\/api\/?$/, '') || API_ORIGIN;
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
};

export default api;








  
