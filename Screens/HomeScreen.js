import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>I Am The Home Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('Chat')}></Button>
    </View>
  );
};

export default HomeScreen;
