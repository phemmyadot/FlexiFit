import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator';
import {useSelector} from 'react-redux';
import HomeScreen from '../screens/home/HomeScreen';
import {RootState} from '../redux/store/store';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
