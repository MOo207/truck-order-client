import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import Context
import { AuthProvider } from './src/context/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';

function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
         <AppNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}

export default App;
