import React from 'react';
import { Text, Icon, Pressable } from 'native-base';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

function BottomTabButton(props: BottomTabBarButtonProps) {
  return <Pressable {...(props as any)} flex={0} />;
}

export default BottomTabButton;
