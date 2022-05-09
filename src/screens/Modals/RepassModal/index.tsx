/* eslint-disable prettier/prettier */
import React from 'react';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import {
  Text,
  View,
  VStack,
  Button,
  HStack,
  FlatList,
  Box,
  CloseIcon,
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useData } from '@/hooks/Data/useAuth';
import { useUser } from '@/hooks/User/useUser';
import CloseButton from '@/components/CloseButton';
import handleError from '@/utils/errors/handleError';
import NAV from '@/services/navigation';
import { changeResponsibleService } from '@/services/prescriptions/changeResponsibleService';

function RepassModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'RepassModal'>) {
  const { onCancel, onConfirm, title, prescriptionId } = route.params;
  const { current } = useCardAnimation();

  const { users } = useData();

  const { funcao, CPF } = useUser();

  const data = React.useMemo(() => {
    return Object.values(users).filter(
      (user) => user.funcao === funcao && user.CPF !== CPF,
    );
  }, [funcao, users, CPF]);

  const handleChoice = React.useCallback(
    (choice: string) => {
      navigation.navigate('AskModal', {
        onConfirm: async () => {
          try {
            await changeResponsibleService(prescriptionId, choice);
            onConfirm();
            navigation.goBack();
          } catch {
            handleError({
              title: 'Erro!',
              message: 'Falha ao mudar responsável',
            });
          }
        },
        subtitle: `Você deseja repassar sua atividade para ${choice}?`,
        title: 'Atenção!',
      });
    },
    [navigation, prescriptionId],
  );

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
        <VStack
          borderRadius="lg"
          alignItems="center"
          bg="white"
          p={4}
          space={3}
          w="100%"
          maxH="500px"
        >
          <HStack w="100%" position="relative">
            <Text fontWeight={600} mb={2} fontSize="xl">
              {title}
            </Text>
            <CloseButton />
          </HStack>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Box
                borderTopWidth={index === 0 ? 1 : 0}
                borderBottomWidth={1}
                borderColor="coolGray.200"
              >
                <Button
                  onPress={() => {
                    handleChoice(item.CPF);
                  }}
                  variant="ghost"
                >
                  <Text fontSize="md">{item.nome}</Text>
                </Button>
              </Box>
            )}
            w="100%"
          />
        </VStack>
      </Animated.View>
    </View>
  );
}

export default RepassModal;
