import React from 'react';
import {View, ImageBackground} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

type AuthScreensWrapperProps = {
  children: React.ReactNode;
};

const AuthScreensWrapper: React.FC<AuthScreensWrapperProps> = ({children}) => {
  return (
    <ImageBackground
      source={require('./../assets/images/background.jpg')}
      style={globalStyles.background}>
      <View style={globalStyles.overlay}>{children}</View>
    </ImageBackground>
  );
};

export default AuthScreensWrapper;
