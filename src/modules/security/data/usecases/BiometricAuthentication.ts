import {
  IBiometricAuthentication,
  voidFunction,
} from '@/modules/security/domain/usecases/IBiometricAuthentication';
import { IBiometryAdapter } from '@/modules/security/data/protocols/biometry/IBiometryAdapter';
import IBiometricStorage from '@/modules/security/data/protocols/storage/IBiometricStorage';

class BiometricAuthentication implements IBiometricAuthentication {
  private biometryHelper: IBiometryAdapter;
  private storage: IBiometricStorage;

  constructor(biometryHelper: IBiometryAdapter, storage: IBiometricStorage) {
    this.biometryHelper = biometryHelper;
    this.storage = storage;
  }

  public async checkAvailability(): Promise<boolean> {
    const response: boolean =
      await this.biometryHelper.checkBiometryAvailability();
    return response;
  }

  public async authenticate(
    onAuthSuccess: voidFunction,
    onAuthFail: voidFunction,
  ): Promise<void> {
    await this.biometryHelper.authenticate(onAuthSuccess, onAuthFail);
  }

  public async checkBiometryState(): Promise<boolean> {
    const currentState: boolean = await this.storage.getBiometricState();
    return currentState;
  }

  public async toggle(): Promise<boolean> {
    const currentState: boolean = await this.checkBiometryState();
    if (currentState) this.storage.setBiometricState('');
    else this.storage.setBiometricState('active');
    return !currentState;
  }
}

export default BiometricAuthentication;
