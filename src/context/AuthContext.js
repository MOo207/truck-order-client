import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load auth state from storage on app start
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedToken = await AsyncStorage.getItem('authToken');
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setAuthToken(storedToken);
        }
      } catch (error) {
        console.error('Failed to load auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthState();
  }, []);

  const login = async (userData, token) => {
    setUser(userData);
    setAuthToken(token);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    await AsyncStorage.setItem('authToken', token);
  };

  const logout = async () => {
    setUser(null);
    setAuthToken(null);
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
