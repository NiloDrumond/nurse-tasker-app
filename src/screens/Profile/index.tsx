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
import Prescription from '../Home/components/Prescription/index';

function Profile({ navigation }: StackScreenProps<AppStackParamList, 'Home'>) {
  const bg = useBackgroundColor();

  const handleCreate = React.useCallback(() => {
    console.log('add');
  }, []);

  return (
    <Center flex={1} bg={bg}>
      <VStack position="relative" justifyContent="center" w="80%" h="90%" mb="20%" space={18}>
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
            <Text>Cargo: Médico</Text>
          </VStack>
        </HStack>
        <Button mt={2} colorScheme="red">
          Logout
        </Button>
      </VStack>
    </Center>
  );
}

export default Profile;
