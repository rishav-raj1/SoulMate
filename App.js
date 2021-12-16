import React from 'react';
import StackNavigator from './StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './Navigation/useAuth';
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
