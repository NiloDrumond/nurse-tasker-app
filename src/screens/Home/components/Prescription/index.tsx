import React from 'react';
import { Text, HStack, VStack, Flex } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { useUser } from '@/hooks/User/useUser';
import { IPrescription } from '@/modules/shared/interfaces';
import { useData } from '@/hooks/Data/useAuth';
import moment from 'moment';
import { usePrescriptionBorderColor } from '@/utils/usePrescriptionBorderColor';
import { DoctorActions, NurseActions } from './Prescription.Actions';
import PrescriptionTasksList from './Prescription.TasksList';

type PrescriptionProps = {
  prescription: IPrescription;
};

function Prescription({ prescription }: PrescriptionProps) {
  const { funcao } = useUser();
  const { users, patients } = useData();
  const [showDetails, setShowDetails] = React.useState(false);

  const prescriptionBorderColor = usePrescriptionBorderColor(prescription);

  return (
    <TouchableHighlight onPress={() => setShowDetails(!showDetails)}>
      <VStack
        mb={2}
        alignItems="center"
        space="28px"
        bg="background.box"
        padding="16px 24px"
        borderRadius="md"
        overflow="hidden"
        borderColor={prescriptionBorderColor}
        borderWidth="3px"
      >
        <HStack overflow="hidden" alignItems="center" space={4} w="100%">
          <Flex w="25%">
            <Text color="black" fontSize="32px">
              {moment(prescription.horario_previsto).format('HH:mm')}
            </Text>
          </Flex>
          <VStack w="75%" overflow="hidden">
            <Text color="black" fontSize="14px">
              Médico: {users[prescription.cpf_cadastrante].nome}
            </Text>
            <Text color="black" fontSize="14px">
              Medicamento: {prescription.nome_droga}
            </Text>
            <Text flex={1} color="black" fontSize="14px">
              Paciente: {patients[prescription.cpf_paciente].nome}
            </Text>
          </VStack>
        </HStack>

        {showDetails && <PrescriptionTasksList tasks={prescription.tasks} />}
        {showDetails &&
          (funcao === 'E' ? (
            <NurseActions prescription={prescription} />
          ) : (
            <DoctorActions prescription={prescription} />
          ))}
      </VStack>
    </TouchableHighlight>
  );
}

export default Prescription;
