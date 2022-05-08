import React from 'react';
import { Button, Center, Text, VStack, FlatList } from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps } from '@react-navigation/stack';
import { useUser } from '@/hooks/User/useUser';
import useSWR from 'swr';
import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import { IPrescription } from '@/modules/shared/interfaces';
import { ListRenderItemInfo, Platform } from 'react-native';
import Prescription from './components/Prescription';

const getTabHeight = (): number => {
  const isiOS = Platform.OS === 'ios';
  const tabHeight = 65;
  const notchHeight = 100;

  if (isiOS) {
    return notchHeight;
  }
  return tabHeight;
};

function Home({ navigation }: StackScreenProps<AppStackParamList, 'Home'>) {
  const { data } = useSWR<IPrescription[]>(
    config.PRESCRIPTIONS_URL,
    async (url) => {
      const response = await api.get<IPrescription[]>({ url });
      return response.body;
    },
    { refreshInterval: 5000 },
  );

  const { funcao } = useUser();
  const handleCreate = React.useCallback(() => {
    navigation.navigate('PrescriptionModal', {
      onConfirm: () => {
        console.log('ok');
      },
      title: 'Formulário de prescrição',
    });
  }, [navigation]);

  return (
    <Center flex={1} bg="coolGray.700">
      <VStack
        position="relative"
        w="90%"
        h="80%"
        mb={getTabHeight()}
        space={18}
      >
        <VStack
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
          {funcao === 'M' && (
            <Button w="full" onPress={handleCreate}>
              Criar Prescrição
            </Button>
          )}
          <FlatList
            w="100%"
            data={data}
            renderItem={({ item }: ListRenderItemInfo<IPrescription>) => (
              <Prescription prescription={item} />
            )}
          />
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
