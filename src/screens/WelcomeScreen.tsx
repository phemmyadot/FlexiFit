import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AuthScreensWrapper from '../components/AuthScreensWrapper';
import {globalStyles} from '../styles/globalStyles';

type WelcomeScreenProps = {};

export type RootStackParamList = {
  Login: undefined;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleGetStarted = () => {
    // Navigate to the next screen (e.g., Login or Signup)
    navigation.navigate('Login'); // Replace 'Login' with the appropriate screen name
  };

  return (
    <AuthScreensWrapper>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, globalStyles.mb60]}>
          Welcome to FlexFit
        </Text>
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.roundedButton]}
          onPress={handleGetStarted}>
          <Text style={globalStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </AuthScreensWrapper>
  );
};

export default WelcomeScreen;
