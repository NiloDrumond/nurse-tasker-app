import { useContext } from 'react';
import { DataContext } from './Data.provider';
import { DataContextData } from './Data.types';

export function useData(): DataContextData {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used whithin an DataProvider');
  }

  return context;
}
