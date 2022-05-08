import { IPatient, IUser } from '@/modules/shared/interfaces';

export type DataContextData = {
  patients: Record<string, IPatient>;
  users: Record<string, IUser>;
  isLoading: boolean;
};
