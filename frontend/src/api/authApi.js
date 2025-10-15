import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const api = axios.create({
  baseURL: API_URL,
});

// Register user
export const register = async (userData) => {
  const response = await api.post('/register', userData);
  return response.data;
};

// Login user
export const login = async (userData) => {
  const response = await api.post('/login', userData);
  return response.data;
};

// Verify 2FA code
export const verifyCode = async (verificationData) => {
  const response = await api.post('/verify', verificationData);
  return response.data;
};

// Get user profile
export const getProfile = async () => {
  const response = await api.get('/profile');
  return response.data;
};

export default api;