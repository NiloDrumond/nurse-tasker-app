import React from 'react';

import Loading from '@/screens/Loading';
import { AuthenticatedProvider } from '@/hooks';
import { useAuth } from '../hooks/Auth/useAuth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated) return <AuthRoutes />;
  return (
    <AuthenticatedProvider>
      <AppRoutes />
    </AuthenticatedProvider>
  );
}

export default Routes;
