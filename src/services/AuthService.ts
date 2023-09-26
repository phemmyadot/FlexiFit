import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';

import {setUser} from '../redux/slices/authSlice';

export const signIn = async (username: string, password: string) => {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (username: string, password: string) => {
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: {},
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const confirmSignUp = async (username: string, code: string) => {
  try {
    const user = await Auth.confirmSignUp(username, code);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    throw error;
  }
};

export const resendSignUp = async (username: string) => {
  try {
    await Auth.resendSignUp(username);
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (username: string) => {
  try {
    await Auth.forgotPassword(username);
  } catch (error) {
    throw error;
  }
};

export const forgotPasswordSubmit = async (
  username: string,
  code: string,
  password: string,
) => {
  try {
    await Auth.forgotPasswordSubmit(username, code, password);
  } catch (error) {
    throw error;
  }
};

export const getUser = async (): Promise<void> => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    setUser(currentUser);
  } catch (error) {
    console.error(error);
    console.log('Not signed in');
  }
};

export const facebookSignIn = async () => {
  try {
    const user = await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const googleSignIn = async () => {
  try {
    const user = await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
