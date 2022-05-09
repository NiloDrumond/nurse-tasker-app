import { ITask } from '@/modules/shared/interfaces';

const getTaskText = (task: ITask): string => {
  switch (task.status_correspondente) {
    case 'P':
      return '';
    case 'D':
      return 'Dispensar';
    case 'R':
      return 'Retirar';
    case 'A':
      return 'Administrar';
    case 'C':
      return '';
    case undefined:
      return '';
    default:
      return '';
  }
};

export { getTaskText };
