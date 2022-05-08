import React from 'react';
import { ListRenderItem, TouchableHighlight } from 'react-native';
import { useAuth } from '@/hooks/Auth/useAuth';
import { IUser } from '@/modules/shared/interfaces';
import { Center, VStack, FlatList, Text, HStack, Icon } from 'native-base';
import { getRoleText } from '@/utils/getRoleText';
import { Feather } from '@expo/vector-icons';
import Loading from '@/components/Loading';

const SelectUser: React.FC = () => {
  const { users, selectUser, isLoading } = useAuth();

  const renderItem: ListRenderItem<IUser> = React.useCallback(
    ({ item }) => {
      return (
        <TouchableHighlight key={item.CPF} onPress={() => selectUser(item)}>
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
              <Text>{item.CPF}</Text>
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
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList w="80%" data={users} renderItem={renderItem} />
        )}
      </VStack>
    </Center>
  );
};

export default SelectUser;
