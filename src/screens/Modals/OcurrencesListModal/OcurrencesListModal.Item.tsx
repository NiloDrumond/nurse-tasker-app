import React from 'react';
import { VStack, Text, Center, Pressable } from 'native-base';
import navigation from '@/services/navigation';

function OcurrencesListModalItem() {
  const handlePress = React.useCallback(() => {
    navigation.navigate('AskModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Deseja marcar essa ocurrência como concluída?',
      title: 'Atenção!',
    });
  }, []);

  return (
    <Pressable onPress={handlePress}>
      <VStack
        mb={2}
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
    </Pressable>
  );
}

export default OcurrencesListModalItem;
