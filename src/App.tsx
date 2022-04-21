import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Toast from 'react-native-toast-message';

import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Hind_300Light,
  Hind_400Regular,
  Hind_500Medium,
  Hind_600SemiBold,
  Hind_700Bold,
} from '@expo-google-fonts/hind';
import { NavigationContainer } from '@react-navigation/native';
import theme from './styles/theme';
import Routes from './routes';
import { AppProvider } from './hooks';
import { navigationRef } from './services/navigation';
import config from './styles/config';

function App() {
  const [fontsLoaded] = useFonts({
    Hind_300Light,
    Hind_400Regular,
    Hind_500Medium,
    Hind_600SemiBold,
    Hind_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <AppProvider>
          <NativeBaseProvider theme={theme} config={config}>
            <Routes />
          </NativeBaseProvider>
        </AppProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default registerRootComponent(App);
