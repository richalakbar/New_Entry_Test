import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // or any other logic to retrieve the token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  get(resource) {
    return apiClient.get(resource);
  },
  post(resource, data) {
    return apiClient.post(resource, data);
  },
  // Add more methods as needed (put, delete, etc.)
};
