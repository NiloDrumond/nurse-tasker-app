import React from 'react';
import { VStack, Text, Center, Pressable } from 'native-base';
import navigation from '@/services/navigation';
import { IOccurrence } from '@/modules/shared/interfaces';
import { getOccurrenceTypeText } from '@/utils/getOccurrenceTypeText';

type OccurrencesListModalItemProps = {
  occurrence: IOccurrence;
};

function OccurrencesListModalItem({
  occurrence,
}: OccurrencesListModalItemProps) {
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
    // <Pressable>
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
          {getOccurrenceTypeText(occurrence.tipo)}
        </Text>
      </Center>
      <Text>Paciente: {occurrence.cpf_paciente}</Text>
      <Text>Responsável: {occurrence.usuario_cadastrante}</Text>
      <Text>Descrição: {occurrence.descricao}</Text>
    </VStack>
    // </Pressable>
  );
}

export default OccurrencesListModalItem;
