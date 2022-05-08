import { IUser } from '@/modules/shared/interfaces';
import { useContext } from 'react';
import { UserContext } from './User.provider';

export function useUser(): IUser {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used whithin an AuthProvider');
  }

  return context;
}
