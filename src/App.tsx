import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Toast from 'react-native-toast-message';

import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import theme from './styles/theme';
import Routes from './routes';
import { AppProvider } from './hooks';
import { navigationRef } from './services/navigation';

function App() {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <AppProvider>
          <NativeBaseProvider theme={theme}>
            <Routes />
          </NativeBaseProvider>
        </AppProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default registerRootComponent(App);
