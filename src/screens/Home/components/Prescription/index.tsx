import React from 'react';
import { Text, HStack, VStack, Flex } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { useUser } from '@/hooks/User/useUser';
import { IPrescription, ITask } from '@/modules/shared/interfaces';
import { useData } from '@/hooks/Data/useAuth';
import moment from 'moment';
import { usePrescriptionBorderColor } from '@/utils/usePrescriptionBorderColor';
import { getNextTaskStatus } from '@/utils/getNextTaskStatus';
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

  const tasks = React.useMemo<ITask[]>(() => {
    if (['P', 'D', 'R'].includes(prescription.status_atual)) {
      return [
        ...prescription.tasks,
        {
          cpf_responsavel: prescription.responsavel_atual,
          id_horario: '1',
          prescricao_associado: prescription.id_prescricao,
          status_correspondente: getNextTaskStatus(prescription),
        },
      ];
    }
    return prescription.tasks;
  }, [prescription]);

  return (
    <TouchableHighlight onPress={() => setShowDetails(!showDetails)}>
      <VStack
        mb={2}
        alignItems="center"
        space="2"
        bg="background.box"
        padding="16px 24px"
        borderRadius="md"
        overflow="hidden"
        borderColor={prescriptionBorderColor}
        borderWidth="3px"
      >
        <HStack overflow="hidden" alignItems="center" space={4} w="100%">
          <Flex w="25%">
            <Text color="black" fontSize="28px">
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

        {showDetails && tasks.length > 0 && (
          <PrescriptionTasksList tasks={tasks} />
        )}
        {showDetails && funcao === 'E' && (
          <NurseActions prescription={prescription} />
        )}
        {showDetails && funcao === 'F' && (
          <NurseActions prescription={prescription} />
        )}
        {showDetails && funcao === 'M' && (
          <DoctorActions prescription={prescription} />
        )}
      </VStack>
    </TouchableHighlight>
  );
}

export default Prescription;
