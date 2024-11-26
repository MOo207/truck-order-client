import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, Button, TextInput } from 'react-native';
import { createOrder } from '../api/orders';

export const TruckRequestScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createOrder(data);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Order creation failed', error);
    }
  };

  return (
    <View>
      <Text>Request a Truck</Text>
      <Controller
        control={control}
        name="pickup_location"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Pickup Location"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="delivery_location"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Delivery Location"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="size"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Truck Size"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="weight"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Weight"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="pickup_time"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Pickup Time"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button title="Submit Request" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default TruckRequestScreen;