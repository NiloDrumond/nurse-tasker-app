import { IOccurrence } from '@/modules/shared/interfaces';

export type OccurrenceProps = {
  prescriptionId: string;
  title: string;
  onConfirm: () => void;
  onCancel?: () => void;
};

export type CreateOccurrenceData = Pick<IOccurrence, 'tipo' | 'descricao'>;
