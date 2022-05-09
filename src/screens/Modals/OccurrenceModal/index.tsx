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
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { Animated, Pressable, StyleSheet } from 'react-native';
import useBackgroundColor from '@/styles/hooks/useBackgroundColor';
import CloseButton from '@/components/CloseButton';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import handleError from '@/utils/errors/handleError';
import { createOccurrenceService } from '@/services/occurrences/createOccurrenceData';
import { useUser } from '@/hooks/User/useUser';
import { occurrenceTypes } from '@/modules/shared/interfaces';
import { getOccurrenceTypeText } from '@/utils/getOccurrenceTypeText';
import { CreateOccurrenceData } from './OccurrenceModal.types';

function OccurrenceModal({
  route,
  navigation,
}: StackScreenProps<AppStackParamList, 'OccurrenceModal'>) {
  const { onCancel, onConfirm, title, prescriptionId } = route.params;
  const { CPF } = useUser();
  const { current } = useCardAnimation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateOccurrenceData>();

  const handleConfirm = React.useCallback(
    async (data: CreateOccurrenceData) => {
      try {
        await createOccurrenceService(data, CPF, prescriptionId);
        onConfirm();
        navigation.goBack();
      } catch {
        handleError({ title: 'Erro', message: 'Falha ao criar prescrição' });
      }
    },
    [onConfirm, navigation, CPF, prescriptionId],
  );

  const handleInvalid = React.useCallback(
    (errors: FieldErrors<CreateOccurrenceData>) => {
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
          <Flex w="100%" position="relative">
            <Text fontWeight={600} mb={2} fontSize="xl">
              {title}
            </Text>
            <CloseButton />
          </Flex>
          <FormControl isRequired isInvalid={'tipo' in errors}>
            <VStack w="100%">
              <FormControl.Label>Tipo:</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    selectedValue={value}
                    accessibilityLabel="Choose Service"
                    placeholder="Tipo de ocorrência"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => onChange(itemValue)}
                  >
                    {occurrenceTypes.map((type) => (
                      <Select.Item
                        key={type}
                        label={getOccurrenceTypeText(type)}
                        value={type}
                      />
                    ))}
                  </Select>
                )}
                defaultValue="EM"
                name="tipo"
                rules={{ required: 'Campo obrigatório' }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.tipo?.message}
              </FormControl.ErrorMessage>
            </VStack>
          </FormControl>

          <FormControl isRequired isInvalid={'descricao' in errors}>
            <VStack w="100%">
              <FormControl.Label>Descreva a situação:</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextArea
                    h={40}
                    value={value}
                    onChangeText={onChange}
                    multiline
                    textAlignVertical="top"
                    placeholder="Descrição"
                    w="100%"
                  />
                )}
                defaultValue=""
                name="descricao"
                rules={{ required: 'Campo obrigatório' }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors.descricao?.message}
              </FormControl.ErrorMessage>
            </VStack>
          </FormControl>

          <HStack space={2}>
            <Button
              borderRadius="36px"
              onPress={handleCancel}
              colorScheme="coolGray"
            >
              <Text color="white" marginX="16px" marginY="-2px">
                Cancelar
              </Text>
            </Button>
            <Button
              colorScheme="green"
              borderRadius="36px"
              onPress={handleSubmit(handleConfirm, handleInvalid)}
            >
              <Text color="white" marginX="16px" marginY="-2px">
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
