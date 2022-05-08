import { useContext } from 'react';
import { AuthContext } from './Auth.provider';
import { AuthContextData } from './Auth.types';

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}
