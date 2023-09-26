import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {RootState, store} from './src/redux/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import ErrorBoundary from './src/components/ErrorBoundary';
import awsconfig from './src/aws-exports';
import {Amplify, Hub} from 'aws-amplify';
import {setUser} from './src/redux/slices/authSlice';
import {getUser} from './src/services/AuthService';
import Loader from './src/components/Loader';

Amplify.configure(awsconfig);
const App = () => {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
