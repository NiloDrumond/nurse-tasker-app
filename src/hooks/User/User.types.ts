export type UserRole = 'nurse' | 'doctor';

export interface UserContextData {
  userId: string;
  role: UserRole;
}
