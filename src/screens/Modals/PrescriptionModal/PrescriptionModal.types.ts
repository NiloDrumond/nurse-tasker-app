import { IPrescription } from '@/modules/shared/interfaces';

export type PrescriptionProps = {
  title: string;
  subtitle?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};

export type CreatePrescriptionData = Pick<
  IPrescription,
  'nome_droga' | 'dosagem' | 'cpf_paciente' | 'horario_previsto'
>;
