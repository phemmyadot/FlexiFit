import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AuthScreensWrapper from '../../components/AuthScreensWrapper';
import {globalStyles} from '../../styles/globalStyles';
import Colors from '../../styles/colorStyles';

type ResetPasswordScreenProps = {};

type RootStackParamList = {Login: undefined};

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleResetPassword = () => {
    // Add logic for resetting password
  };

  return (
    <AuthScreensWrapper>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, globalStyles.mb60]}>
          Reset Password
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="New Password"
          secureTextEntry
          placeholderTextColor={Colors.light}
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor={Colors.light}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.longButton]}
          onPress={handleResetPassword}>
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

export default ResetPasswordScreen;
