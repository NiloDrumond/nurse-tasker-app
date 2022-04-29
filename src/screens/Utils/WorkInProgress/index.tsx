import React from 'react';
import { Text, Icon, Center } from 'native-base';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
import { Ionicons } from '@expo/vector-icons';

function WorkInProgress() {
  const bg = useBackgroundColor();
  return (
    <Center flex={1} bg={bg}>
      <Text fontSize="2xl">Em construção</Text>
      <Icon size="xl" as={Ionicons} name="hammer" />
    </Center>
  );
}

export default WorkInProgress;
