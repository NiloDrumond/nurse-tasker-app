import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import { IUser } from '@/modules/shared/interfaces';
import React, { createContext } from 'react';
import useSWR from 'swr';
import { AuthContextData } from './Auth.types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { data } = useSWR<IUser[]>(config.USERS_URL, async (url) => {
    setIsLoading(true);
    const response = await api.get<IUser[]>({ url });
    setIsLoading(false);
    return response.body;
  });

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
      users: data || [],
      selectedUser,
      isLoading,
    }),
    [selectedUser, signOut, isLoading, data],
  );

  return (
    <AuthContext.Provider value={providerProps}>
      {children}
    </AuthContext.Provider>
  );
};
