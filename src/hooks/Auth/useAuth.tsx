import { useContext } from 'react';
import { AuthContext } from './Auth.provider';
import { IAuthContextData } from './IAuth';

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}
