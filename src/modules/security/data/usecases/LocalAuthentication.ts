/* eslint-disable no-underscore-dangle */
import ILocalAuthentication from '@/modules/security/domain/usecases/ILocalAuthentication';
import IAuthStorage from '@/modules/security/data/protocols/storage/IAuthStorage';
import { AuthStorageData } from '../../domain/interfaces';

async function timeout(): Promise<null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(null), 1000);
  });
}

class LocalAuthentication implements ILocalAuthentication {
  private storage: IAuthStorage;
  private _data: AuthStorageData | null;

  public constructor(storage: IAuthStorage) {
    this.storage = storage;
    this._data = null;
  }

  public async load(): Promise<AuthStorageData | null> {
    let data = await Promise.race([this.storage.getAuthData(), timeout()]);
    if (data === null) {
      data = await Promise.race([this.storage.getAuthData(), timeout()]);
    }
    this._data = data;
    return data;
  }

  public async save(params: AuthStorageData): Promise<void> {
    await this.storage.saveAuthData(params);
    this._data = params;
  }

  public async updateUser(
    params: Pick<AuthStorageData, 'user'>,
  ): Promise<void> {
    if (this._data) {
      await this.save({ ...this._data, ...params });
    }
  }

  public async clear(): Promise<void> {
    await this.storage.clear();
    this._data = null;
  }
}

export default LocalAuthentication;
