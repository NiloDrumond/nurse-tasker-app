import React from 'react';
import { Text, Icon } from 'native-base';

type BottomTabLabelProps = {
  focused: boolean;
  color: string;
  screen: string;
};

function getScreenName(screen: string) {
  switch (screen) {
    case 'Feed':
      return 'Feed';
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'Perfil';
    default:
      return '';
  }
}

function BottomTabLabel({ focused, screen, color }: BottomTabLabelProps) {
  return focused ? (
    <Text color={color}>{getScreenName(screen)}</Text>
  ) : (
    <Text> </Text>
  );
}

export default BottomTabLabel;
