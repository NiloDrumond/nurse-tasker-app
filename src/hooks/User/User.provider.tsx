import React, { createContext } from 'react';
import { UserContextData, UserRole } from './User.types';

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider: React.FC = ({ children }) => {
  const [role, setRole] = React.useState<UserRole>('doctor');
  const [userId, setUserId] = React.useState('123');

  const providerProps = React.useMemo<UserContextData>(
    () => ({
      role,
      userId,
    }),
    [role, userId],
  );

  return (
    <UserContext.Provider value={providerProps}>
      {children}
    </UserContext.Provider>
  );
};
