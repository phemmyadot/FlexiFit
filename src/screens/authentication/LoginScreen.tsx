import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import AuthScreensWrapper from '../../components/AuthScreensWrapper';
import {globalStyles} from '../../styles/globalStyles';
import Colors from '../../styles/colorStyles';
import {signIn} from '../../services/AuthService';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/slices/authSlice';

type LoginScreenProps = {};

export type RootStackParamList = {
  ForgotPassword: undefined;
  Signup: undefined;
};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailLogin = async () => {
    try {
      const user = await signIn(username, password);
      dispatch(setUser(user)); // Dispatch action to set user in Redux state
    } catch (error) {
      console.error(error);
    }
  };
  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Add logic for social login with 'provider'
  };

  const handleBiometricLogin = () => {
    // Add logic for biometric login
  };

  return (
    <AuthScreensWrapper>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, globalStyles.mb60]}>
          Welcome Back!
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          placeholderTextColor={Colors.light}
          keyboardType="email-address"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={Colors.light}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.longButton]}
          onPress={handleEmailLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.biometricButton}
          onPress={handleBiometricLogin}>
          <Text style={globalStyles.buttonText}>
            Login with Face ID / Fingerprint
          </Text>
        </TouchableOpacity>
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={[globalStyles.button, styles.socialButton]}
            onPress={() => handleSocialLogin('Google')}>
            <Text style={globalStyles.buttonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.button, styles.socialButton]}
            onPress={() => handleSocialLogin('Facebook')}>
            <Text style={globalStyles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={[globalStyles.links, globalStyles.spaceBetween]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={globalStyles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={globalStyles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreensWrapper>
  );
};

const styles = StyleSheet.create({
  biometricButton: {
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
    rowGap: 20,
    columnGap: 20,
  },
  socialButton: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default LoginScreen;
