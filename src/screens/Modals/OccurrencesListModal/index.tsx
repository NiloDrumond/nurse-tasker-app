import React from 'react';
import {
  Center,
  Text,
  HStack,
  Icon,
  Input,
  View,
  VStack,
  FlatList,
  Button,
} from 'native-base';

import { Animated, Pressable, StyleSheet, ListRenderItem } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import CloseButton from '@/components/CloseButton';
import { IOccurrence } from '@/modules/shared/interfaces';
import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import useSWR from 'swr';
import OccurrencesListModalItem from './OccurrencesListModal.Item';

function OccurrencesListModal({
  navigation,
  route,
}: StackScreenProps<AppStackParamList, 'OccurrencesListModal'>) {
  const {
    params: { prescriptionId },
  } = route;
  const { current } = useCardAnimation();
  const { data } = useSWR<IOccurrence[]>(
    config.OCCURRENCES_URL,
    async (url) => {
      const response = await api.get<IOccurrence[]>({ url });
      return response.body;
    },
    { refreshInterval: 5000 },
  );

  const handleCreate = React.useCallback(() => {
    navigation.navigate('OccurrenceModal', {
      onConfirm: () => {
        console.log('ok');
      },
      prescriptionId,
      title: 'Formulário de ocorrência',
    });
  }, [navigation, prescriptionId]);

  const renderItem: ListRenderItem<IOccurrence> = React.useCallback(
    ({ item }) => {
      return (
        <OccurrencesListModalItem key={item.id_ocorrencia} occurrence={item} />
      );
    },
    [],
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '100vh',
        overflow: 'hidden',
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
          maxWidth: '80%',
          maxHeight: '90%',
          // maxWidth: 400,
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
        <Center flex={1}>
          <VStack position="relative" maxHeight="100%" space={18}>
            <VStack
              alignItems="center"
              space="2"
              bg="white"
              borderRadius="16px"
              padding="16px 24px"
              flex={1}
            >
              <Center w="100%" position="relative">
                <Text fontSize="2xl" color="black">
                  Ocorrências
                </Text>
                <CloseButton />
              </Center>
              <Button w="100%" onPress={handleCreate}>
                Criar Ocorrência
              </Button>
              <FlatList data={data} renderItem={renderItem} />
            </VStack>
          </VStack>
        </Center>
      </Animated.View>
    </View>
  );
}

export default OccurrencesListModal;
