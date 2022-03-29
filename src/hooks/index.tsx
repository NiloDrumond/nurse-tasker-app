import React from 'react';

import { AuthProvider } from './Auth/Auth.provider';

const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const AuthenticatedProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export { AppProvider, AuthenticatedProvider };
