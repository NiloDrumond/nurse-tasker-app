import React from 'react';
import { FlatList, Box, View } from 'native-base';
import { ITask } from '@/modules/shared/interfaces';
import { ListRenderItem } from 'react-native';
import PrescriptionTask from './Prescription.Task';

type PrescriptionTasksListProps = {
  tasks: ITask[];
};

function PrescriptionTasksList({ tasks }: PrescriptionTasksListProps) {
  const renderItem: ListRenderItem<ITask> = React.useCallback(({ item }) => {
    return <PrescriptionTask key={item.id_horario} task={item} />;
  }, []);

  return (
    <View>
      <FlatList data={tasks} renderItem={renderItem} />
      {tasks.length > 1 && (
        <Box
          position="absolute"
          borderColor="#749B97"
          borderLeftWidth={1}
          borderStyle="solid"
          left="50px"
          top="10%"
          h="80%"
        />
      )}
    </View>
  );
}

export default PrescriptionTasksList;
