import React from 'react';
import { NativeBaseProvider } from 'native-base';

import { registerRootComponent } from 'expo';
import theme from './styles/theme';
import Routes from './routes';
import { AppProvider } from './hooks';

function App() {
  return (
    <AppProvider>
      <NativeBaseProvider theme={theme}>
        <Routes />
      </NativeBaseProvider>
    </AppProvider>
  );
}

export default registerRootComponent(App);
