import { AskProps } from '@/screens/Modals/AskModal/AskModal.types';
import { PrescriptionProps } from '@/screens/Modals/PrescriptionModal/PrescriptionModal.types';
import { RepassProps } from '@/screens/Modals/RepassModal/RepassModal.types';
import { OccurrenceProps } from '@/screens/Modals/OccurrenceModal/OccurrenceModal.types';
import { OccurrencesListModalProps } from '@/screens/Modals/OccurrencesListModal/OccurrencesListModal.types';

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  OccurrencesListModal: OccurrencesListModalProps;
  AskModal: AskProps;
  OccurrenceModal: OccurrenceProps;
  RepassModal: RepassProps;
  PrescriptionModal: PrescriptionProps;
};

export type NTScreen = keyof AppStackParamList;
