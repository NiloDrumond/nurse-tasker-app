import { OccurrenceType } from '@/modules/shared/interfaces';

function getOccurrenceTypeText(type: OccurrenceType): string {
  switch (type) {
    case 'CD':
      return 'Conselho/Discussão';
    case 'EM':
      return 'Erro na medicação';
    case 'EP':
      return 'Erro no procedimento';
    case 'RP':
      return 'Rever paciente';
    case 'O':
      return 'Outro';
    default:
      return '';
  }
}

export { getOccurrenceTypeText };
