import React from 'react';
import { IconButton, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

type AddButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

function AddButton({ onPress }: AddButtonProps) {
  return (
    <IconButton
      onPress={onPress}
      position="absolute"
      right="-24px"
      bottom={2}
      borderRadius="50%"
      zIndex={2}
      bg="teal.800"
      icon={<Icon color="white" size={8} as={Feather} name="plus" />}
    />
  );
}

export default AddButton;
