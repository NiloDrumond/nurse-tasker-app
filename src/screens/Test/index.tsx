import React from 'react';
import { Center, Text } from 'native-base';

function Test() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.800' }}
      _light={{ bg: 'primary.200' }}
    >
      <Text>Autenticado</Text>
    </Center>
  );
}

export default Test;
