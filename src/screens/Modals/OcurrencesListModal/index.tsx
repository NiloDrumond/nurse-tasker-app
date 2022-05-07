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

import { Animated, Pressable, StyleSheet } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import { Ionicons, Entypo } from '@expo/vector-icons';
import CloseButton from '@/components/CloseButton';
import OcurrencesListModalItem from './OcurrencesListModal.Item';

function OcurrencesListModal({
  navigation,
}: StackScreenProps<AppStackParamList, 'OcurrencesListModal'>) {
  const { current } = useCardAnimation();

  const handleCreate = React.useCallback(() => {
    navigation.navigate('OccurenceModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Selecione o tipo de ocorrência:',
      title: 'Formulário de ocorrência',
    });
  }, [navigation]);

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
              justifyItems="space-evenly"
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
                    as={<Entypo name="magnifying-glass" size={24} />}
                    color="black"
                  />
                }
              />
              <Button w="100%" onPress={handleCreate}>
                Criar Ocorrência
              </Button>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <OcurrencesListModalItem />}
              />
            </VStack>
          </VStack>
        </Center>
      </Animated.View>
    </View>
  );
}

export default OcurrencesListModal;