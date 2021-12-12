import React from 'react';
import StackNavigator from './StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
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
