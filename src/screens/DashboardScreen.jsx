import React from 'react';
import { useQuery } from 'react-query';
import { View, Text, FlatList, Button } from 'react-native';
import { fetchOrders } from '../api/order';

export const DashboardScreen = ({ navigation }) => {
  const { data: orders, isLoading } = useQuery('orders', fetchOrders);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}>
            <Text>Order ID: {item.id}</Text>
            <Text>Pickup: {item.pickup_location}</Text>
            <Text>Delivery: {item.delivery_location}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}
            />
          </View>
        )}
      />
      <Button title="Request a Truck" onPress={() => navigation.navigate('TruckRequest')} />
    </View>
  );
};

export default DashboardScreen;