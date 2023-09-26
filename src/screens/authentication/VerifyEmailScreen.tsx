import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AuthScreensWrapper from '../../components/AuthScreensWrapper';
import {globalStyles} from '../../styles/globalStyles';
import Colors from '../../styles/colorStyles';

type VerifyEmailScreenProps = {};

type RootStackParamList = {Login: undefined};

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleVerifyEmail = () => {
    // Add logic for verifying email
  };

  return (
    <AuthScreensWrapper>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, globalStyles.mb60]}>
          Verify Email
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Verification Code"
          placeholderTextColor={Colors.light}
          keyboardType="numeric"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.longButton]}
          onPress={handleVerifyEmail}>
          <Text style={globalStyles.buttonText}>Verify</Text>
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

export default VerifyEmailScreen;
