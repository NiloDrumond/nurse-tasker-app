import { AuthStorageData } from '@/modules/security/domain/interfaces';

export default interface IAuthStorage {
  getAuthData(): Promise<AuthStorageData | null>;
  saveAuthData(params: AuthStorageData): Promise<void>;
  clear(): Promise<void>;
}
