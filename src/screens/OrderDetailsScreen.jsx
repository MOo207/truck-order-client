import React from 'react';
import { useQuery } from 'react-query';
import { View, Text } from 'react-native';
import apiClient from '../api/apiClient';

export const OrderDetailsScreen = ({ route }) => {
  const { orderId } = route.params;

  const fetchOrderDetails = async () => {
    const response = await apiClient.get(`/orders/${orderId}`);
    return response.data;
  };

  const { data: order, isLoading } = useQuery(['orderDetails', orderId], fetchOrderDetails);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Order Details</Text>
      <Text>Order ID: {order.id}</Text>
      <Text>Pickup Location: {order.pickup_location}</Text>
      <Text>Delivery Location: {order.delivery_location}</Text>
      <Text>Size: {order.size}</Text>
      <Text>Weight: {order.weight}</Text>
      <Text>Status: {order.status}</Text>
    </View>
  );
};

export default OrderDetailsScreen;