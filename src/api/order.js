import apiClient from './apiClient';

export const createOrder = async (orderData) => {
  const response = await apiClient.post('/orders', orderData);
  return response.data;
};

export const fetchOrders = async () => {
  const response = await apiClient.get('/orders');
  return response.data;
};
