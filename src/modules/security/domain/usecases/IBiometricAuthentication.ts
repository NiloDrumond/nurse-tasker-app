export type voidFunction = () => void;

export interface IBiometricAuthentication {
  checkAvailability: () => Promise<boolean>;
  checkBiometryState: () => Promise<boolean>;
  authenticate: (onAuthSuccess: voidFunction, onAuthFail: voidFunction) => void;
  toggle: () => Promise<boolean>;
}
