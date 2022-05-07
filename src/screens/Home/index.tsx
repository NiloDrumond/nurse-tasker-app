import React from 'react';
import {
  Button,
  Center,
  HStack,
  Icon,
  Input,
  Text,
  View,
  VStack,
  FlatList,
} from 'native-base';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps } from '@react-navigation/stack';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
import AddButton from '@/components/AddButton';
import Prescription from './components/Prescription';

function Home({ navigation }: StackScreenProps<AppStackParamList, 'Home'>) {
  const bg = useBackgroundColor();

  const handleCreate = React.useCallback(() => {
    console.log('add');
  }, []);

  return (
    <Center flex={1} bg={bg}>
      <VStack position="relative" w="80%" h="90%" mb="20%" space={18}>
        <AddButton onPress={handleCreate} />
        <HStack
          justifyItems="space-evenly"
          alignItems="center"
          space={2}
          bg="white"
          borderRadius="16px"
          padding="16px 24px"
        >
          <Ionicons name="person" size={60} color="black" />

          <VStack justifyItems="space-evenly">
            <Text color="black" fontSize="24px">
              Renata dos Santos
            </Text>
            <Text color="black" fontSize="18px">
              CPF: 110.231.235-87
            </Text>
          </VStack>
        </HStack>

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
          <Input
            w="100%"
            placeholder="Pesquisar"
            size="lg"
            variant="filled"
            color="black"
            bg="background.box"
            paddingX="16px"
            marginBottom="8px"
            borderRadius="12px"
            InputRightElement={
              <Icon
                color="black"
                as={<Entypo name="magnifying-glass" size={24} />}
              />
            }
          />
          <FlatList data={[1, 2, 3, 4]} renderItem={() => <Prescription />} />
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
