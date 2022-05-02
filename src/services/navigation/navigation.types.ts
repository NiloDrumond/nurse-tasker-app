import { AskProps } from '@/screens/Modals/AskModal/AskModal.types';
import { ConclusionProps } from '@/screens/Modals/ConclusionModal/ConclusionModal.types';
import { OccurenceProps } from '@/screens/Modals/OccurenceModal/OccurenceModal.types';
import { RepassProps } from '@/screens/Modals/RepassModal/RepassModal.types';

export type NTScreen = 'Home' | 'Profile';

export type AppStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  AskModal: AskProps;
  ConclusionModal: ConclusionProps;
  OccurenceModal: OccurenceProps;
  RepassModal: RepassProps;
};
