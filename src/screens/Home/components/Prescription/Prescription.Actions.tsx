import React from 'react';
import { Button, Flex, VStack, Text } from 'native-base';
import navigation from '@/services/navigation';
import { IPrescription } from '@/modules/shared/interfaces';
import { nextStatePrescriptionService } from '@/services/prescriptions/nextStatePrescriptionService';
import handleError from '@/utils/errors/handleError';

type NurseActionProps = {
  prescription: IPrescription;
};

function NurseActions({ prescription }: NurseActionProps) {
  const onPressConclusion = React.useCallback(() => {
    navigation.navigate('AskModal', {
      onConfirm: async () => {
        try {
          await nextStatePrescriptionService(prescription.id_prescricao);
        } catch {
          handleError({ title: 'Erro', message: 'Falha ao criar prescrição' });
        }
      },
      subtitle: 'Você deseja concluir essa atividade?',
      title: 'Atenção!',
    });
  }, []);

  const onPressOccurrence = React.useCallback(() => {
    navigation.navigate('OccurrenceModal', {
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
        onPress={onPressOccurrence}
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
  const onSeeOccurrences = React.useCallback(() => {
    navigation.navigate('OccurrencesListModal', undefined);
  }, []);

  return (
    <VStack space="10px">
      <Button
        background="white"
        color="black"
        borderRadius="36px"
        onPress={onSeeOccurrences}
      >
        <Text color="black" marginX="16px" marginY="-2px">
          Ver Ocorrências
        </Text>
      </Button>
    </VStack>
  );
}

export { NurseActions, DoctorActions };
