import { AuthStorageData } from '../interfaces';

export default interface ILocalAuthentication {
  load(): Promise<AuthStorageData | null>;
  save(params: AuthStorageData): Promise<void>;
  updateUser(params: Pick<AuthStorageData, 'user'>): Promise<void>;
  clear(): Promise<void>;
}
