export type NTScreen = 'Home' | 'Profile';

export interface AppStackParamList extends Record<NTScreen, any> {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
}
