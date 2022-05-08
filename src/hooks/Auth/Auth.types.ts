import { IUser } from '@/modules/shared/interfaces';

export type AuthContextData = {
  selectUser: (user: IUser) => void;
  selectedUser?: IUser;
  signOut: () => void;
  users: IUser[];
  isLoading: boolean;
};
