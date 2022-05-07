import { AskProps } from '@/screens/Modals/AskModal/AskModal.types';
import { OccurenceProps } from '@/screens/Modals/OccurenceModal/OccurenceModal.types';
import { RepassProps } from '@/screens/Modals/RepassModal/RepassModal.types';

export type AppStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  OcurrencesListModal: undefined;
  AskModal: AskProps;
  OccurenceModal: OccurenceProps;
  RepassModal: RepassProps;
};

export type NTScreen = keyof AppStackParamList;
