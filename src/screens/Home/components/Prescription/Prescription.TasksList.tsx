import React from 'react';
import { FlatList, Box, View, Text, Center } from 'native-base';
import { ITask } from '@/modules/shared/interfaces';
import { ListRenderItem } from 'react-native';
import PrescriptionTask from './Prescription.Task';

type PrescriptionTasksListProps = {
  tasks: ITask[];
};

function PrescriptionTasksList({ tasks }: PrescriptionTasksListProps) {
  const renderItem: ListRenderItem<ITask> = React.useCallback(({ item }) => {
    return (
      <PrescriptionTask
        key={item.id_horario}
        task={item}
        isCurrent={item.id_horario === '1'}
      />
    );
  }, []);

  return (
    <Center>
      <FlatList
        w="100%"
        keyExtractor={(item) => item.id_horario}
        data={tasks}
        renderItem={renderItem}
      />
      {tasks.length > 1 && (
        <Box
          position="absolute"
          borderColor="#749b97"
          borderLeftWidth={1}
          borderStyle="solid"
          left="54px"
          zIndex={1}
          top="15px"
          h={`${(tasks.length - 1) * 30 - 3}px`}
        />
      )}
    </Center>
  );
}

export default PrescriptionTasksList;
