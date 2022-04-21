import { useColorMode, Pressable, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import React from 'react';

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Pressable onPress={toggleColorMode}>
      {colorMode === 'light' ? (
        <Icon size="8" as={Feather} name="moon" />
      ) : (
        <Icon size="8" as={Feather} name="sun" />
      )}
    </Pressable>
  );
}

export default ToggleDarkMode;
