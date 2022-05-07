import React from 'react';
import { Button, Text, HStack, View, VStack, Flex } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { AppStackParamList } from '@/services/navigation/navigation.types';
import { StackNavigationProp } from '@react-navigation/stack';
import useTextColor from '@/styles/hooks/useTextColor';
import { useUser } from '@/hooks/User/useUser';
import { DoctorActions, NurseActions } from './Prescription.Actions';

function Prescription() {
  const color = useTextColor();
  const { role } = useUser();
  const [showBox, setShowBox] = React.useState(false);

  return (
    <TouchableHighlight onPress={() => setShowBox(!showBox)}>
      <VStack
        mb={2}
        justifyItems="space-evenly"
        alignItems="center"
        space="28px"
        bg="background.box"
        padding="16px 24px"
        borderRadius="md"
        overflow="hidden"
      >
        <HStack
          overflow="hidden"
          justifyItems="space-evenly"
          alignItems="center"
          space={4}
          w="100%"
        >
          <Flex w="35%">
            <Text color="black" fontSize="36px">
              14:30
            </Text>
          </Flex>
          <VStack w="65%" overflow="hidden">
            <Text color="black" fontSize="14px">
              Médico: Roberto Silva
            </Text>
            <Text color="black" fontSize="14px">
              Medicamento: Dipirona
            </Text>
            <Text flex={1} color="black" fontSize="14px">
              Paciente: Ricardo Teixeiraasdasdasdasd
            </Text>
          </VStack>
        </HStack>

        {showBox && (
          <VStack>
            <HStack space="10px" alignItems="center">
              <Text color="black" fontSize="16px">
                14:00
              </Text>
              <View
                width="12px"
                height="12px"
                borderRadius="50%"
                backgroundColor="#749B97"
              />
              <VStack flex={1}>
                <Text color="black" fontSize="10px" fontWeight="bold">
                  Medicamento Prescrito
                </Text>
                <Text color="black" fontSize="10px">
                  Médico: Fábio da Silva
                </Text>
              </VStack>
            </HStack>
          </VStack>
        )}

        {showBox && (role === 'nurse' ? <NurseActions /> : <DoctorActions />)}
      </VStack>
    </TouchableHighlight>
  );
}

export default Prescription;
