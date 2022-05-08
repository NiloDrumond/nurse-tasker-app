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

export interface IEmployee {
  CPF: string;
  nome: string;
  senha: string;
  cargo: UserRole;
}
