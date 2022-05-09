import React from 'react';
import moment from 'moment';
import { HStack, View, VStack, Text } from 'native-base';
import { ITask } from '@/modules/shared/interfaces';
import { getTaskStatusText } from '@/utils/getTaskStatusText';
import { useData } from '@/hooks/Data/useAuth';
import { getTaskText } from '@/utils/getTaskText';

type PrescriptionTaskProps = {
  task: ITask;
  isCurrent: boolean;
};

function PrescriptionTask({ task, isCurrent }: PrescriptionTaskProps) {
  const { users } = useData();

  return (
    <HStack w="100%" space="15px" alignItems="center">
      <View w="42px">
        <Text color="black" fontSize="16px">
          {task.horario ? moment(task.horario).format('HH:mm') : ''}
        </Text>
      </View>
      <View
        width="12px"
        height="12px"
        borderRadius="6px"
        backgroundColor={isCurrent ? 'background.box' : '#749B97'}
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#749B97"
        zIndex={10}
        position="absolute"
        left="48px"
      />
      <VStack>
        <Text color="black" fontSize="10px" fontWeight={600}>
          {isCurrent
            ? getTaskText(task)
            : getTaskStatusText(task.status_correspondente)}
        </Text>
        <Text color="black" fontSize="10px">
          Responsável: {users[task.cpf_responsavel].nome}
        </Text>
      </VStack>
    </HStack>
  );
}

export default PrescriptionTask;
