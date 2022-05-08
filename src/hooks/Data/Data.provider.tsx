import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import { IPatient, IUser } from '@/modules/shared/interfaces';
import React, { createContext } from 'react';
import useSWR from 'swr';
import { useAuth } from '../Auth/useAuth';
import { DataContextData } from './Data.types';

export const DataContext = createContext<DataContextData>(
  {} as DataContextData,
);

export const DataProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { users: usersData } = useAuth();
  const [patients, setPatients] = React.useState<Record<string, IPatient>>({});
  const [users, setUsers] = React.useState<Record<string, IUser>>({});

  const { data: patientsData } = useSWR<IPatient[]>(
    config.PATIENTS_URL,
    async (url) => {
      const response = await api.get<IPatient[]>({ url });
      setIsLoading(false);
      return response.body;
    },
  );

  React.useEffect(() => {
    if (patientsData) {
      const aux: Record<string, IPatient> = {};
      for (let i = 0; i < patientsData.length; i++) {
        aux[patientsData[i].CPF] = patientsData[i];
      }
      setPatients(aux);
    }
  }, [patientsData]);

  React.useEffect(() => {
    if (usersData) {
      const aux: Record<string, IUser> = {};
      for (let i = 0; i < usersData.length; i++) {
        aux[usersData[i].CPF] = usersData[i];
      }
      setUsers(aux);
    }
  }, [usersData]);

  const providerProps = React.useMemo<DataContextData>(
    () => ({
      users,
      patients,
      isLoading,
    }),
    [users, patients, isLoading],
  );

  return (
    <DataContext.Provider value={providerProps}>
      {children}
    </DataContext.Provider>
  );
};
