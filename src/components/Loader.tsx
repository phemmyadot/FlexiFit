import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Colors from '../styles/colorStyles';

const Loader = () => {
  return (
    <View style={globalStyles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default Loader;
