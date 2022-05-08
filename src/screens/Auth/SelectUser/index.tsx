import React from 'react';
import { ListRenderItem, TouchableHighlight } from 'react-native';
import { useAuth } from '@/hooks/Auth/useAuth';
import { IUser } from '@/modules/shared/interfaces';
import { Center, VStack, FlatList, Text, HStack, Icon } from 'native-base';
import { getRoleText } from '@/utils/getRoleText';
import { Feather } from '@expo/vector-icons';

const SelectUser: React.FC = () => {
  const { users, selectUser } = useAuth();

  const renderItem: ListRenderItem<IUser> = React.useCallback(
    ({ item }) => {
      return (
        <TouchableHighlight key={item.cpf} onPress={() => selectUser(item)}>
          <HStack
            mb={2}
            alignItems="center"
            space="0"
            bg="background.box"
            padding="16px 24px"
            borderRadius="md"
            overflow="hidden"
          >
            <Icon as={Feather} name="user" size={12} mr={4} />

            <VStack>
              <Text fontWeight={600}>{item.nome}</Text>
              <Text>{item.cpf}</Text>
              <Text>{getRoleText(item.funcao)}</Text>
            </VStack>
          </HStack>
        </TouchableHighlight>
      );
    },
    [selectUser],
  );

  return (
    <Center bg="coolGray.700" flex={1}>
      <VStack
        w="80%"
        maxH="80%"
        justifyItems="space-evenly"
        alignItems="center"
        space="2"
        bg="white"
        borderRadius="16px"
        padding="16px 24px"
        flex={1}
      >
        <Text mb={2} fontWeight={600} fontSize="xl" color="black">
          Escolha um usuário para testar
        </Text>
        <FlatList w="80%" data={users} renderItem={renderItem} />
      </VStack>
    </Center>
  );
};

export default SelectUser;
