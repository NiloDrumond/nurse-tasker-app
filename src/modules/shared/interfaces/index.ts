export type UserRole = 'M' | 'F' | 'E';

export interface IUser {
  CPF: string;
  nome: string;
  funcao: UserRole;
}

export interface IPatient {
  CPF: string;
  nome: string;
  observacao: string;
}

export type PrescriptionStatus = 'P' | 'D' | 'R' | 'A' | 'F' | 'C';

export interface IPrescription {
  id_prescricao: string;
  nome_droga: string;
  patologia?: string;
  horario_previsto: Date;
  dosagem: number;
  responsavel_atual: string;
  status_atual: PrescriptionStatus;
  cpf_paciente: string;
  cpf_cadastrante: string;
  tasks: ITask[];
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

export type TaskStatus = 'P' | 'D' | 'R' | 'A' | 'C';

export interface ITask {
  id_horario: string;
  prescricao_associado: string;
  status_correspondente: TaskStatus;
  horario?: Date;
  cpf_responsavel: string;
}
