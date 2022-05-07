import React from 'react';
import { Button, Flex, VStack, Text } from 'native-base';
import navigation from '@/services/navigation';

function NurseActions() {
  const onPressConclusion = React.useCallback(() => {
    navigation.navigate('AskModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Você deseja concluir essa atividade?',
      title: 'Atenção!',
    });
  }, []);
  const onPressOccurence = React.useCallback(() => {
    navigation.navigate('OccurenceModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Selecione o tipo de ocorrência:',
      title: 'Formulário de ocorrência',
    });
  }, []);
  const onPressRepass = React.useCallback(() => {
    navigation.navigate('RepassModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Selecione para quem quer repassar a atividade:',
      title: 'Novo responsável:',
    });
  }, []);

  return (
    <VStack space="10px">
      <Button
        background="green.button"
        colorScheme="green"
        color="black"
        borderRadius="36px"
        onPress={onPressConclusion}
      >
        <Text color="black" marginX="16px" marginY="-2px">
          Concluir Atividade
        </Text>
      </Button>
      <Button
        background="red.button"
        color="black"
        borderRadius="36px"
        onPress={onPressOccurence}
      >
        <Text color="black" marginX="16px" marginY="-2px">
          Registrar Ocorrência
        </Text>
      </Button>
      <Button
        background="white"
        color="black"
        borderRadius="36px"
        onPress={onPressRepass}
      >
        <Text color="black" marginX="16px" marginY="-2px">
          Repassar Atividade
        </Text>
      </Button>
    </VStack>
  );
}

function DoctorActions() {
  const onSeeOcurrences = React.useCallback(() => {
    navigation.navigate('OcurrencesListModal', undefined);
  }, []);

  return (
    <VStack space="10px">
      <Button
        background="white"
        color="black"
        borderRadius="36px"
        onPress={onSeeOcurrences}
      >
        <Text color="black" marginX="16px" marginY="-2px">
          Ver Ocorrências
        </Text>
      </Button>
    </VStack>
  );
}

export { NurseActions, DoctorActions };
