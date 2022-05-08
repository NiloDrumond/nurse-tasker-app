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
  Input,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import handleError from '@/utils/errors/handleError';
import { useUser } from '@/hooks/User/useUser';
import { createPrescriptionService } from '@/services/prescriptions/createPrescriptionService';
import { CreatePrescriptionData } from './PrescriptionModal.types';

function OccurrenceModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'OccurrenceModal'>) {
  const { cpf } = useUser();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreatePrescriptionData>();
  const { onCancel, onConfirm, title } = route.params;
  const { current } = useCardAnimation();

  const handleConfirm = React.useCallback(
    async (data: CreatePrescriptionData) => {
      try {
        await createPrescriptionService(data, cpf);
        onConfirm();
        navigation.goBack();
      } catch {
        handleError({ title: 'Erro', message: 'Falha ao criar prescrição' });
      }
    },
    [onConfirm, navigation, cpf],
  );

  const handleInvalid = React.useCallback(
    (errors: FieldErrors<CreatePrescriptionData>) => {
      console.log(errors);
    },
    [],
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
            <FormControl isRequired isInvalid={'nome_droga' in errors}>
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
                name="nome_droga"
                rules={{ required: 'Campo obrigatório' }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.nome_droga?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={'dosagem' in errors}>
              <HStack alignItems="center" mt={2}>
                <Controller
                  control={control}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                      onBlur={onBlur}
                      placeholder="Dosagem"
                      type="number"
                      onChange={(e) => onChange(e)}
                      value={value.toString()}
                    />
                  )}
                  name="dosagem"
                  rules={{ required: 'Campo obrigatório' }}
                  defaultValue={0}
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

          <FormControl isRequired isInvalid={'cpf_paciente' in errors}>
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
                name="cpf_paciente"
                rules={{ required: 'Campo obrigatório' }}
              />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.cpf_paciente?.message}
              </FormControl.ErrorMessage>
            </VStack>
          </FormControl>

          <FormControl isRequired isInvalid={'horario_previsto' in errors}>
            <VStack w="100%">
              <FormControl.Label>Horário:</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    mode="datetime"
                    onChange={(_e: any, date?: Date) => onChange(date)}
                  />
                )}
                defaultValue={new Date()}
                name="horario_previsto"
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
              onPress={handleSubmit(handleConfirm, handleInvalid)}
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

export default OccurrenceModal;
