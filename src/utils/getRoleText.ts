import { UserRole } from '@/modules/shared/interfaces';

function getRoleText(role: UserRole): string {
  switch (role) {
    case 'E':
      return 'Enfermeiro(a)';
    case 'F':
      return 'Farmaceutico(a)';
    case 'M':
      return 'Médico(a)';
    default:
      return '';
  }
}

export { getRoleText };
