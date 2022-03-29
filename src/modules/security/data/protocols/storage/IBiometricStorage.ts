interface IBiometricStorage {
  setBiometricState: (state: string) => Promise<void>;
  getBiometricState: () => Promise<boolean>;
}

export default IBiometricStorage;
