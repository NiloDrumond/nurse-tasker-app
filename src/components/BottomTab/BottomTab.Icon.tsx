import React from 'react';
import { Flex, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

type BottomTabIconProps = {
  // focused: boolean;
  color: string;
  size: number;
  screen: string;
};

function BottomTabIcon({ screen, size, color }: BottomTabIconProps) {
  switch (screen) {
    case 'Feed':
      return <Icon size={size} as={Feather} color={color} name="search" />;
    case 'Home':
      return <Icon size={size} as={Feather} color={color} name="home" />;
    case 'Profile':
      return <Icon size={size} as={Feather} color={color} name="user" />;
    default:
      return null;
  }
}

export default BottomTabIcon;
