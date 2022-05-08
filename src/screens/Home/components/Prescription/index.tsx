import React from 'react';
import { Text, HStack, VStack, Flex } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { useUser } from '@/hooks/User/useUser';
import { IPrescription } from '@/modules/shared/interfaces';
import { DoctorActions, NurseActions } from './Prescription.Actions';
import PrescriptionTasksList from './Prescription.TasksList';


type PrescriptionProps = {
  prescription: IPrescription
}

function Prescription({ prescription }: PrescriptionProps) {
  const { funcao } = useUser();
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

        {showBox && <PrescriptionTasksList />}
        {showBox &&
          (funcao === 'E' ? (
            <NurseActions prescription={prescription} />
          ) : (
            <DoctorActions />
          ))}
      </VStack>
    </TouchableHighlight>
  );
}

export default Prescription;
