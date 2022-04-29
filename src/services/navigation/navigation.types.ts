import { AskProps } from '@/screens/Modals/AskModal/AskModal.types';

export type NTScreen = 'Home' | 'Profile';

export type AppStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  AskModal: AskProps;
};
