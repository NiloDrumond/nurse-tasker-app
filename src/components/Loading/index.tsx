import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { Center, Text } from 'native-base';
import { LoadingProps } from './Loading.types';

const Loading: React.FC<LoadingProps> = ({
  fullScreen,
  text = 'Carregando...',
}: LoadingProps) => {
  if (fullScreen) {
    return (
      <Center>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Text fontSize="lg" mb="4" color="blue.600">
          {text}
        </Text>
        <ActivityIndicator size="large" color="#0DB2D6" />
      </Center>
    );
  }
  return (
    <Center>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Text fontSize="lg" mb="4" color="blue.600">
        {text}
      </Text>
      <ActivityIndicator size="large" color="#0DB2D6" />
    </Center>
  );
};

export default Loading;
