import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AuthScreensWrapper from '../../components/AuthScreensWrapper';
import {globalStyles} from '../../styles/globalStyles';
import Colors from '../../styles/colorStyles';

type SignupScreenProps = {};

type RootStackParamList = {Login: undefined};

const SignupScreen: React.FC<SignupScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleSignup = () => {
    // Add logic for handling signup
  };

  return (
    <AuthScreensWrapper>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, globalStyles.mb60]}>Sign Up</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          placeholderTextColor={Colors.light}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={Colors.light}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.longButton]}
          onPress={handleSignup}>
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={globalStyles.links}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={globalStyles.linkText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreensWrapper>
  );
};

export default SignupScreen;
