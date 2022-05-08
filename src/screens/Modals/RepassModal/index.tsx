/* eslint-disable prettier/prettier */
import React from 'react';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import {
  Flex,
  Text,
  Center,
  View,
  useColorModeValue,
  VStack,
  Button,
  HStack,
  Select,
  CheckIcon,
  TextArea,
  FlatList,
  Spacer,
  Box,
  CloseIcon
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
import useSWR from 'swr';
import { IUser } from '@/modules/shared/interfaces';
import api from '@/modules/shared/http/ApiHelper';
import config from '@/config';




function RepassModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'RepassModal'>) {
  const { onCancel, onConfirm, subtitle, title } = route.params;
  const { current } = useCardAnimation();

  const { data } = useSWR<IUser[]>(
    config.PRESCRIPTIONS_URL,
    async (url) => {
      const response = await api.get<IUser[]>({ url });
      return response.body;
    },
    { refreshInterval: 5000 },
  );

  const handleChoice = React.useCallback((choice: string) => {
    navigation.navigate('AskModal', {
      onConfirm: () => {
        console.log('ok');
        navigation.goBack();
      },
      subtitle: `Você deseja repassar sua atividade para ${choice}?`,
      title: 'Atenção!',
    });
  }, [onConfirm, navigation]);

  const handleCancel = React.useCallback(() => {
    if (onCancel) onCancel();
    navigation.goBack();
  }, [onCancel, navigation]);

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
          width: '70%',
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
        <VStack borderRadius="lg" alignItems="center" bg="white" p={4} space={3} w="100%" maxH="500px">
          <HStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="xl">
              {title}
            </Text>
            <Button colorScheme='transparent' alignSelf="right" p={0} ml="auto" onPress={handleCancel}>
              <CloseIcon />
            </Button>
          </HStack>

          <FlatList
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item}) =>
            <Box borderBottomWidth={1} borderColor="coolGray.200">
              <Button
                onPress={() => {handleChoice(item.CPF)}}
                colorScheme="transparent"
                _hover={{
                  bg: '#00000070'
                }}>
              <Text fontSize="md">{item.nome}</Text>
            </Button>
            </Box>
          }
            w="100%"
           />
        </VStack>
      </Animated.View>
    </View>
  );
}

export default RepassModal;
