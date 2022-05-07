import React from 'react';
import { Box, HStack, View, VStack, Text } from 'native-base';

function PrescriptionTask() {
  return (
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
          Médico: Fábio da Silvaasdasdasdasdasdasds
        </Text>
      </VStack>
    </HStack>
  );
}

export default PrescriptionTask;
