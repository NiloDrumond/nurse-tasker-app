import { SignInParams, UserModel } from '@/modules/security/domain/interfaces';

export interface PreviousLoginData {
  email: string;
}

export interface AuthStateParams {
  token: string;
  user: UserModel;
}

export interface IAuthMethods {
  signIn(credentials: SignInParams): Promise<void>;
  signOut(): void;
  revalidateCredentials(userId: string): Promise<void>;
  toggleBiometryState(): Promise<void>;
}

export interface IAuthState {
  user?: UserModel;
  token?: string;
  workspace?: string;
  isAuthenticated: boolean;
  loading: boolean;
  isBiometryAvailable: boolean;
  biometryState: boolean;
  previousLoginData?: PreviousLoginData;
}

export type IAuthAction =
  | {
      type: 'SIGN_IN';
      payload: { previousLoginData: PreviousLoginData };
    }
  | {
      type: 'SIGN_IN_SUCCESS';
      payload: AuthStateParams;
    }
  | { type: 'SIGN_IN_FAIL' }
  | { type: 'SIGN_OUT' }
  | { type: 'REVALIDATE'; payload: { user: UserModel } }
  | { type: 'TOGGLE_BIOMETRY'; payload: boolean }
  | { type: 'SET_BIOMETRY_AVAILABLE'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR' };

export type IAuthStoreReducer = (
  prevState: IAuthState,
  action: IAuthAction,
) => IAuthState;

export type IAuthContextData = Pick<
  IAuthMethods,
  'signIn' | 'signOut' | 'toggleBiometryState'
> &
  IAuthState;
