import { IUser } from '@/modules/shared/interfaces';
import React, { createContext } from 'react';
import { UserProviderProps } from './User.types';

export const UserContext = createContext<IUser>({} as IUser);

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
  user,
}) => {
  const providerProps = React.useMemo<IUser>(
    () => ({
      ...user,
    }),
    [user],
  );

  return (
    <UserContext.Provider value={providerProps}>
      {children}
    </UserContext.Provider>
  );
};
