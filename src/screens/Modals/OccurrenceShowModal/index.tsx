import React from 'react';
import { Center, Text, View, VStack, FlatList, Button } from 'native-base';

import { Animated, Pressable, StyleSheet, ListRenderItem } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import CloseButton from '@/components/CloseButton';
import { IOccurrence } from '@/modules/shared/interfaces';
import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import useSWR from 'swr';
import Loading from '@/components/Loading';
import { getOccurrenceTypeText } from '@/utils/getOccurrenceTypeText';
import { useData } from '@/hooks/Data/useAuth';

function OccurrenceShowModal({
  navigation,
  route,
}: StackScreenProps<AppStackParamList, 'OccurrenceShowModal'>) {
  const { users, patients } = useData();
  const {
    params: { prescriptionId },
  } = route;
  const { current } = useCardAnimation();
  const { data } = useSWR<IOccurrence>(
    `${config.OCCURRENCES_URL}${prescriptionId}`,
    async (url) => {
      const response = await api.get<IOccurrence>({ url });
      return response.body;
    },
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          width: '80%',
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <VStack
          alignItems="center"
          space="2"
          bg="white"
          borderRadius="16px"
          padding="16px 24px"
          w="100%"
        >
          <Center position="relative" w="100%">
            <Text fontSize="lg">Ocorrência</Text>
            <CloseButton />
          </Center>
          {data ? (
            <>
              <Center w="100%">
                <Text fontSize="lg" fontWeight={700}>
                  {getOccurrenceTypeText(data.tipo)}
                </Text>
              </Center>
              {/* <Text>Paciente: {patients[data.cpf_paciente].nome}</Text> */}
              <Text>Responsável: {users[data.usuario_cadastrante].nome}</Text>
              <Text>Descrição: {data.descricao}</Text>
            </>
          ) : (
            <Loading />
          )}
        </VStack>
      </Animated.View>
    </View>
  );
}

export default OccurrenceShowModal;
