import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>SOULMATE</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default App;
