import { TaskStatus } from '@/modules/shared/interfaces';

function getTaskStatusText(status: TaskStatus): string {
  switch (status) {
    case 'A':
      return 'Medicamento administrado';
    case 'C':
      return 'Tarefa cancelada';
    case 'D':
      return 'Medicamento dispensado';
    case 'P':
      return 'Medicamento prescrito';
    case 'R':
      return 'Medicamento retirado';
    default:
      return '';
  }
}

export { getTaskStatusText };
