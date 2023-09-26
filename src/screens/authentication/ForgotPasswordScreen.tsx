import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AuthScreensWrapper from '../../components/AuthScreensWrapper';
import {globalStyles} from '../../styles/globalStyles';
import Colors from '../../styles/colorStyles';

type ForgotPasswordScreenProps = {};

type RootStackParamList = {Login: undefined};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleForgotPassword = () => {
    // Add logic for handling forgot password
  };

  return (
    <AuthScreensWrapper>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, globalStyles.mb60]}>
          Forgot Password
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          placeholderTextColor={Colors.light}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.longButton]}
          onPress={handleForgotPassword}>
          <Text style={globalStyles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <View style={globalStyles.links}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={globalStyles.linkText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreensWrapper>
  );
};

export default ForgotPasswordScreen;
