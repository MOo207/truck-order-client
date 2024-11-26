import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, Button, TextInput } from 'react-native';
import { login } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

export const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const { login: loginUser } = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      loginUser(response.user, response.token);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
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
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;