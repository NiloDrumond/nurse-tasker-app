import * as LocalAuthentication from 'expo-local-authentication';

import {
  IBiometryAdapter,
  voidFunction,
} from '@/modules/security/data/protocols/biometry/IBiometryAdapter';

class BiometryClient implements IBiometryAdapter {
  async authenticate(
    onAuthSuccess: voidFunction,
    onAuthFail: voidFunction,
  ): Promise<void> {
    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      onAuthSuccess();
    } else {
      onAuthFail();
    }
  }

  async checkBiometryAvailability(): Promise<boolean> {
    const response = LocalAuthentication.hasHardwareAsync();
    return response;
  }
}

export default BiometryClient;
