export type UserRole = 'M' | 'F' | 'E';

export interface IUser {
  cpf: string;
  nome: string;
  funcao: UserRole;
}

export type PrescriptionStatus = 'P' | 'D' | 'R' | 'A' | 'F' | 'C';

export interface IPrescription {
  id_prescricao: string;
  nome_droga: string;
  patologia?: string;
  horario_previsto: Date;
  dosagem: number;
  status_atual: PrescriptionStatus;
  cpf_paciente: string;
  cpf_cadastrante: string;
}

export const occurrenceTypes = ['EM', 'EP', 'CD', 'RP', 'O'] as const;
export type OccurrenceType = typeof occurrenceTypes[number];

export interface IOccurrence {
  id_ocorrencia: string;
  prescricao_associada: string;
  tipo: OccurrenceType;
  descricao: string;
  cpf_paciente: string;
  usuario_cadastrante: string;

}
