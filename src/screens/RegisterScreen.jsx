import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, Button, TextInput } from 'react-native';
import { register } from '../api/auth';

export const RegisterScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await register(data);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default RegisterScreen;
