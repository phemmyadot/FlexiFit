import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const HomeScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Welcome to Your App's Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
