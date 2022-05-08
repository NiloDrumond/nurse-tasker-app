import React from 'react';

import { AuthenticatedProvider } from '@/hooks';
import { UserProvider } from '@/hooks/User/User.provider';
import { useAuth } from '../hooks/Auth/useAuth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const { selectedUser } = useAuth();

  if (!selectedUser) return <AuthRoutes />;
  return (
    <UserProvider user={selectedUser}>
      <AuthenticatedProvider>
        <AppRoutes />
      </AuthenticatedProvider>
    </UserProvider>
  );
}

export default Routes;
