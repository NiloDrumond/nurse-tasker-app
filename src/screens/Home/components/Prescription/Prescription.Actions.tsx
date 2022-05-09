/* eslint-disable react/jsx-no-useless-fragment */
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
  const [canceled, setCanceled] = React.useState(
    prescription.status_atual === 'C',
  );
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
  }, [prescription]);

  const onCreateOccurrence = React.useCallback(() => {
    navigation.navigate('OccurrenceModal', {
      onConfirm: () => {
        setCanceled(true);
      },
      prescriptionId: prescription.id_prescricao,
      title: 'Formulário de ocorrência',
    });
  }, [prescription]);

  const onPressRepass = React.useCallback(() => {
    navigation.navigate('RepassModal', {
      onConfirm: () => {
        console.log('ok');
      },
      subtitle: 'Selecione para quem quer repassar a atividade:',
      title: 'Novo responsável:',
    });
  }, []);

  const onSeeOccurrence = React.useCallback(() => {
    navigation.navigate('OccurrenceShowModal', {
      prescriptionId: prescription.id_prescricao,
    });
  }, [prescription]);

  return canceled ? (
    <Button
      background="white"
      color="black"
      borderRadius="36px"
      onPress={onSeeOccurrence}
    >
      <Text color="black" marginX="16px" marginY="-2px">
        Ver Ocorrência
      </Text>
    </Button>
  ) : (
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
        onPress={onCreateOccurrence}
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

type DoctorActionProps = {
  prescription: IPrescription;
};

function DoctorActions({ prescription }: DoctorActionProps) {
  const [canceled, setCanceled] = React.useState(
    prescription.status_atual === 'C',
  );
  const onSeeOccurrences = React.useCallback(() => {
    navigation.navigate('OccurrenceShowModal', {
      prescriptionId: prescription.id_prescricao,
    });
  }, [prescription]);

  const onCreateOccurrence = React.useCallback(() => {
    navigation.navigate('OccurrenceModal', {
      onConfirm: () => {
        setCanceled(true);
      },
      prescriptionId: prescription.id_prescricao,
      title: 'Formulário de ocorrência',
    });
  }, [prescription]);

  return canceled ? (
    <Button
      background="white"
      color="black"
      borderRadius="36px"
      onPress={onSeeOccurrences}
    >
      <Text color="black" marginX="16px" marginY="-2px">
        Ver Ocorrência
      </Text>
    </Button>
  ) : (
    <Button
      onPress={onCreateOccurrence}
      colorScheme="orange"
      borderRadius="36px"
    >
      <Text color="white" marginX="16px" marginY="-2px">
        Criar Ocorrência
      </Text>
    </Button>
  );
}

export { NurseActions, DoctorActions };
