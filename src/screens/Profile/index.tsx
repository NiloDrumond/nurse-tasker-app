import React from 'react';
import { Button, Center, HStack, Text, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps } from '@react-navigation/stack';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
import { useUser } from '@/hooks/User/useUser';
import { getRoleText } from '@/utils/getRoleText';
import { useAuth } from '@/hooks/Auth/useAuth';

function Profile({
  navigation,
}: StackScreenProps<AppStackParamList, 'Profile'>) {
  const bg = useBackgroundColor();
  const { signOut } = useAuth();
  const { nome, CPF, funcao } = useUser();

  return (
    <Center flex={1} bg={bg}>
      <VStack
        position="relative"
        justifyContent="center"
        w="80%"
        h="90%"
        mb="20%"
        space={18}
      >
        <HStack
          alignItems="center"
          space={2}
          bg="white"
          borderRadius="16px"
          padding="16px 24px"
        >
          <Ionicons name="person" size={60} color="black" />

          <VStack>
            <Text color="black" fontSize="24px">
              {nome}
            </Text>
            <Text color="black" fontSize="18px">
              CPF: {CPF}
            </Text>
            <Text>Cargo: {getRoleText(funcao)}</Text>
          </VStack>
        </HStack>
        <Button onPress={signOut} mt={2} colorScheme="red">
          Logout
        </Button>
      </VStack>
    </Center>
  );
}

export default Profile;
