import { IPrescription, TaskStatus } from '@/modules/shared/interfaces';

const getNextTaskStatus = (prescription: IPrescription): TaskStatus => {
  switch (prescription.status_atual) {
    case 'P':
      return 'D';
    case 'D':
      return 'R';
    case 'R':
      return 'A';
    default:
      return 'A';
  }
};

export { getNextTaskStatus };
