import React from 'react';
import { Center, Text } from 'native-base';

function Home() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'coolGray.700' }}
      _light={{ bg: 'primary.200' }}
    >
      <Text>Casinha</Text>
    </Center>
  );
}

export default Home;
