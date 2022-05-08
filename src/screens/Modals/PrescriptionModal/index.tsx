/* eslint-disable prettier/prettier */
import React from 'react';
import { StackScreenProps, useCardAnimation } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Text,
  View,
  VStack,
  Button,
  HStack,
  Select,
  CheckIcon,
  TextArea,
  Input,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { IPrescription } from '@/modules/shared/interfaces';

function OccurenceModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'OccurenceModal'>) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<IPrescription>();
  const { onCancel, onConfirm, subtitle, title } = route.params;
  const { current } = useCardAnimation();

  const handleConfirm = React.useCallback(
    (data: IPrescription) => {
      console.log(data);
      onConfirm();
      navigation.goBack();
    },
    [onConfirm, navigation],
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
          p={8}
          space={3}
        >
          <Text fontWeight={600} mb={2} fontSize="l">
            {title}
          </Text>
          <VStack w="100%">
            <FormControl isRequired isInvalid={'medicamento' in errors}>
              <FormControl.Label>Medicamento</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    selectedValue={value}
                    accessibilityLabel="Choose Service"
                    placeholder="Medicamento"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => onChange(itemValue)}
                  >
                    <Select.Item label="Dipirona" value="dip" />
                    <Select.Item label="Aspirina" value="asp" />
                    <Select.Item label="Omeprazol" value="ome" />
                    <Select.Item label="Amoxicilina" value="amo" />
                    <Select.Item label="Azitromicina" value="azi" />
                  </Select>
                )}
                defaultValue="dip"
                name="medicamento"
                rules={{ required: 'Campo obrigatório' }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.medicamento?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl>
              <HStack alignItems="center" mt={2}>
                <Input
                  {...register('dosagem', { required: 'Campo obrigatório' })}
                  type="number"
                  w="80%"
                  placeholder="Dosagem"
                />
                <Text> ml</Text>
              </HStack>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.dosagem?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
          <FormControl>
            <VStack w="100%">
              <FormControl.Label fontWeight={600} mb={2} fontSize="md">
                Selecione o paciente:
              </FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    selectedValue={value}
                    accessibilityLabel="Choose Service"
                    placeholder="Paciente"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => onChange(itemValue)}
                  >
                    <Select.Item label="Jorge Silva" value="med" />
                    <Select.Item label="Ana Cláudia Ribeiro" value="pro" />
                    <Select.Item label="Priscilla Lemos" value="con" />
                    <Select.Item label="Lucas Drummond" value="pac" />
                    <Select.Item label="Pedro Henrique de Castro" value="out" />
                  </Select>
                )}
                defaultValue={undefined}
                name="paciente"
                rules={{ required: 'Campo obrigatório' }}
              />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.paciente?.message}
              </FormControl.ErrorMessage>
            </VStack>
          </FormControl>

          <FormControl>
            <VStack w="100%">
              <FormControl.Label>Horário:</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    mode="time"
                    onChange={(_e: any, date?: Date) => onChange(date)}
                  />
                )}
                defaultValue={new Date(0)}
                name="horario"
                rules={{ required: 'Campo obrigatório' }}
              />
            </VStack>
          </FormControl>
          <HStack space={2}>
            <Button
              borderRadius="36px"
              onPress={handleCancel}
              colorScheme="coolGray"
            >
              <Text marginX="16px" marginY="-2px">
                Cancelar
              </Text>
            </Button>
            <Button
              colorScheme="green"
              borderRadius="36px"
              onPress={handleSubmit(handleConfirm)}
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
