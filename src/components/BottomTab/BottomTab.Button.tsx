import React from 'react';
import { Text, Icon, Pressable } from 'native-base';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

function BottomTabButton(props: BottomTabBarButtonProps) {
  return <Pressable {...(props as any)} flexDir="column" flex={0} />;
}

export default BottomTabButton;
