import apiClient from './apiClient';

export const login = async (credentials) => {
  const response = await apiClient.post('/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await apiClient.post('/register', userData);
  return response.data;
};

export const logout = async () => {
  await apiClient.post('/logout');
};
