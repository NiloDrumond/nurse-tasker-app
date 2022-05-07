import React from 'react';
import { VStack, Text, Center } from 'native-base';

function OcurrencesListModalItem() {
  return (
    <VStack
      mb={2}
      justifyItems="space-evenly"
      alignItems="flex-start"
      space="1"
      bg="background.box"
      padding="16px 24px"
      borderRadius="md"
    >
      <Center w="100%">
        <Text fontSize="lg" fontWeight={700}>
          Erro na administração
        </Text>
      </Center>
      <Text>Paciente: Victor Teixeira</Text>
      <Text>Responsável: Bárbara Silva</Text>
      <Text>
        Descrição: Paciente possu[ia alergia não conhecida com o medicamento
      </Text>
    </VStack>
  );
}

export default OcurrencesListModalItem;
