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
  TextArea
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';

function OccurenceModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'OccurenceModal'>) {
  const { onCancel, onConfirm, subtitle, title } = route.params;
  const { current } = useCardAnimation();

  const handleConfirm = React.useCallback(() => {
    onConfirm();
    navigation.goBack();
  }, [onConfirm, navigation]);

  const handleCancel = React.useCallback(() => {
    if (onCancel) onCancel();
    navigation.goBack();
  }, [onCancel, navigation]);

  const [type, setType] = React.useState("")

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
        <VStack borderRadius="lg" alignItems="center" bg="white" p={8} space={3}>
          <Text fontWeight={600} mb={2} fontSize="xl">
            {title}
          </Text>
          <VStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="md">
              {subtitle}
            </Text>
            <Select selectedValue={type}  accessibilityLabel="Choose Service" placeholder="Tipo de ocorrência" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setType(itemValue)}>
              <Select.Item label="Erro na medicação" value="med" />
              <Select.Item label="Procedimento" value="pro" />
              <Select.Item label="Conselho/Discussão" value="con" />
              <Select.Item label="Rever Paciente" value="pac" />
              <Select.Item label="Outro" value="out" />
            </Select>
          </VStack>
          <VStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="md">
              Selecione o remetente:
            </Text>
            <Select selectedValue={type}  accessibilityLabel="Choose Service" placeholder="Remetente" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setType(itemValue)}>
              <Select.Item label="Jorge Silva" value="med" />
              <Select.Item label="Ana Cláudia Ribeiro" value="pro" />
              <Select.Item label="Priscilla Lemos" value="con" />
              <Select.Item label="Lucas Drummond" value="pac" />
              <Select.Item label="Pedro Henrique de Castro" value="out" />
            </Select>
          </VStack>
          <VStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="md">
              Descreva a situação:
            </Text>
            <TextArea h={40} placeholder="Descrição" w="100%"/>
          </VStack>
          <HStack space={2}>
            <Button
              borderRadius="36px"
              onPress={handleCancel}
              colorScheme="coolGray"
            >
              <Text  marginX="16px" marginY="-2px">
              Cancelar
              </Text>
            </Button>
            <Button
              colorScheme='green'
              borderRadius="36px"
              onPress={handleConfirm}
            >
              <Text marginX="16px" marginY="-2px">
              Enviar
              </Text>
            </Button>
          </HStack>
          
        </VStack>
      </Animated.View>
    </View>
  );
}

export default OccurenceModal;
