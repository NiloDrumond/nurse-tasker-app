import React from 'react';
import { Button, Center, Text, VStack, FlatList } from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps } from '@react-navigation/stack';
import { useUser } from '@/hooks/User/useUser';
import Prescription from './components/Prescription';

function Home({ navigation }: StackScreenProps<AppStackParamList, 'Home'>) {
  const { role } = useUser();
  const handleCreate = React.useCallback(() => {
    console.log('add');
  }, []);

  return (
    <Center flex={1} bg="coolGray.700">
      <VStack position="relative" w="90%" h="90%" mb="20%" space={18}>
        <VStack
          justifyItems="space-evenly"
          alignItems="center"
          space="2"
          bg="white"
          borderRadius="16px"
          padding="16px 24px"
          flex={1}
        >
          <Text fontSize="2xl" color="black">
            Minhas Prescrições
          </Text>
          {role === 'doctor' && (
            <Button w="full" onPress={handleCreate}>
              Criar Prescrição
            </Button>
          )}
          <FlatList data={[1, 2, 3, 4]} renderItem={() => <Prescription />} />
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
