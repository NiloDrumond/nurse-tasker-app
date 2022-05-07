/* eslint-disable prettier/prettier */
import React from 'react';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
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
  Input
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
import RNDateTimePicker from '@react-native-community/datetimepicker';

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
          <Text fontWeight={600} mb={2} fontSize="l">
            {title}
          </Text>
          <VStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="md">
              Medicamento:
            </Text>
            <Select selectedValue={type}  accessibilityLabel="Choose Service" placeholder="Medicamento" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setType(itemValue)}>
              <Select.Item label="Dipirona" value="dip" />
              <Select.Item label="Aspirina" value="asp" />
              <Select.Item label="Omeprazol" value="ome" />
              <Select.Item label="Amoxicilina" value="amo" />
              <Select.Item label="Azitromicina" value="azi" />
            </Select>
            <HStack>
              <Input type='number' mt={2} w="90%" placeholder="Dosagem"/>
              <Text alignSelf="center">ml</Text>
            </HStack>
            
          </VStack>
          <VStack w="100%">
            <Text fontWeight={600} mb={2} fontSize="md">
              Selecione o paciente:
            </Text>
            <Select selectedValue={type}  accessibilityLabel="Choose Service" placeholder="Paciente" _selectedItem={{
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
              Horário:
            </Text>
            <HStack>
              <HStack w="50%">
                <Input type='number' mt={2} w="100%"  placeholder="Horas"/>
                <Text  alignSelf="center">h</Text>
              </HStack>
              <HStack w="50%">
              <Input type='number' mt={2} w="100%" placeholder="Minutos"/>
              <Text alignSelf="center">min</Text>
            </HStack>
            </HStack>
            
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
