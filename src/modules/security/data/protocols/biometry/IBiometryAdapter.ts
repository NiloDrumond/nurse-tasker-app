export type voidFunction = () => void;
export interface IBiometryAdapter {
  authenticate: (
    onAuthSuccess: voidFunction,
    onAuthFail: voidFunction,
  ) => Promise<void>;
  checkBiometryAvailability: () => Promise<boolean>;
}
