import React from 'react';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Code,
} from 'native-base';

import { registerRootComponent } from 'expo';
import NativeBaseIcon from './components/NativeBaseIcon';
import theme from './styles/theme';
import ToggleDarkMode from './components/DarkModeToggle';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.tsx</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize="xl">
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);
