import AsyncStorage from '@react-native-async-storage/async-storage';

import IBiometricStorage from '@/modules/security/data/protocols/storage/IBiometricStorage';

enum keys {
  biometrics = '@TrackingTrade.WeCheck:biometrics',
}

class AsyncStorageAuthStorage implements IBiometricStorage {
  public async setBiometricState(state: string): Promise<void> {
    await AsyncStorage.setItem(keys.biometrics, state);
  }

  public async getBiometricState(): Promise<boolean> {
    const currentState: string | null = await AsyncStorage.getItem(
      keys.biometrics,
    );
    return !!currentState;
  }
}

export default AsyncStorageAuthStorage;
