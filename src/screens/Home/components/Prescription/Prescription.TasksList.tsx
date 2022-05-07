import React from 'react';
import { FlatList, Box, View } from 'native-base';
import PrescriptionTask from './Prescription.Task';

function PrescriptionTasksList() {
  return (
    <View position="relative">
      <FlatList
        data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]}
        renderItem={({ index, item }) => <PrescriptionTask key={item.id} />}
      />
      <Box
        position="absolute"
        borderColor="#749B97"
        borderLeftWidth={1}
        borderStyle="solid"
        left="50px"
        top="10%"
        h="80%"
      />
    </View>
  );
}

export default PrescriptionTasksList;
