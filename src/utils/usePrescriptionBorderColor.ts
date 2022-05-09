import { IPrescription } from '@/modules/shared/interfaces';

const usePrescriptionBorderColor = (prescription: IPrescription): string => {
  switch (prescription.status_atual) {
    case 'P':
      return 'green.300';
    case 'D':
      return 'background.green';
    case 'R':
      return 'green.400';
    case 'A':
      return 'green.500';
    case 'F':
      return 'blue.400';
    case 'C':
      return 'red.400';
    case undefined:
      return 'white';
    default:
      return 'white';
  }
};

export { usePrescriptionBorderColor };
