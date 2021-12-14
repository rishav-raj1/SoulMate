import React from 'react';
import StackNavigator from './StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './Navigation/AuthProvider';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//   },
//});

export default App;
