import AsyncStorage from '@react-native-async-storage/async-storage';

import IAuthStorage from '@/modules/security/data/protocols/storage/IAuthStorage';
import { AuthStorageData } from '@/modules/security/domain/interfaces';

enum keys {
  token = '@Grupo.NurseTasker:token',
  user = '@Grupo.NurseTasker:user',
  workspace = '@Grupo.NurseTasker:workspace',
  biometrics = '@Grupo.NurseTasker:biometrics',
}

class AsyncStorageAuthStorage implements IAuthStorage {
  public async getAuthData(): Promise<AuthStorageData | null> {
    const [token, user, workspace] = await AsyncStorage.multiGet([
      keys.token,
      keys.user,
      keys.workspace,
    ]);

    if (!token[1] || !user[1] || !workspace[1]) {
      return null;
    }

    return {
      token: token[1],
      user: JSON.parse(user[1]),
      workspace: workspace[1],
    };
  }

  public async clear(): Promise<void> {
    await AsyncStorage.multiRemove([
      keys.token,
      keys.user,
      keys.workspace,
      keys.biometrics,
    ]);
  }

  public async saveAuthData(params: AuthStorageData): Promise<void> {
    await AsyncStorage.multiSet([
      [keys.token, params.token],
      [keys.user, JSON.stringify(params.user)],
      [keys.workspace, params.workspace],
    ]);
  }
}

export default AsyncStorageAuthStorage;
