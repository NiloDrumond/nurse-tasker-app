import { IUser } from '@/modules/shared/interfaces';
import React, { createContext } from 'react';
import { AuthContextData } from './Auth.types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const users: IUser[] = [
  { cpf: '123', funcao: 'E', nome: 'Patricia' },
  { cpf: '123123', funcao: 'M', nome: 'Carinha' },
];

export const AuthProvider: React.FC = ({ children }) => {
  const [selectedUser, setSelectedUser] = React.useState<IUser | undefined>(
    undefined,
  );

  const signOut = React.useCallback(() => {
    setSelectedUser(undefined);
  }, []);

  const providerProps = React.useMemo<AuthContextData>(
    () => ({
      selectUser: setSelectedUser,
      signOut,
      users,
      selectedUser,
    }),
    [selectedUser, signOut],
  );

  return (
    <AuthContext.Provider value={providerProps}>
      {children}
    </AuthContext.Provider>
  );
};
