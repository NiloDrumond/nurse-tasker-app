import React from 'react';
import moment from 'moment';
import { HStack, View, VStack, Text } from 'native-base';
import { ITask } from '@/modules/shared/interfaces';
import { getTaskStatusText } from '@/utils/getTaskStatusText';
import { useData } from '@/hooks/Data/useAuth';

type PrescriptionTaskProps = {
  task: ITask;
};

function PrescriptionTask({ task }: PrescriptionTaskProps) {
  const { users } = useData();

  return (
    <HStack space="10px" alignItems="center">
      <Text color="black" fontSize="16px">
        {moment(task.horario).format('HH:mm')}
      </Text>
      <View
        width="12px"
        height="12px"
        borderRadius="6px"
        backgroundColor="#749B97"
      />
      <VStack>
        <Text color="black" fontSize="10px" fontWeight={600}>
          {getTaskStatusText(task.status_correspondente)}
        </Text>
        <Text color="black" fontSize="10px">
          Médico: {users[task.cpf_responsavel].nome}
        </Text>
      </VStack>
    </HStack>
  );
}

export default PrescriptionTask;
