import { IAuthStoreReducer, IAuthState } from './IAuth';

export const authInitialState: IAuthState = {
  biometryState: false,
  isAuthenticated: false,
  isBiometryAvailable: false,
  loading: true,
};

export const AuthReducer: IAuthStoreReducer = (prevState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        loading: true,
        isAuthenticated: false,
        ...action.payload,
      };
    case 'SIGN_IN_SUCCESS':
      return {
        ...prevState,
        ...action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case 'SIGN_IN_FAIL':
      return {
        ...prevState,
        loading: false,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        user: undefined,
        previousLoginData: undefined,
        workspace: undefined,
        loading: false,
        isAuthenticated: false,
      };
    case 'REVALIDATE':
      return {
        ...prevState,
        ...action.payload,
      };
    case 'TOGGLE_BIOMETRY':
      return {
        ...prevState,
        biometryState: action.payload,
      };

    case 'SET_BIOMETRY_AVAILABLE':
      return {
        ...prevState,
        isBiometryAvailable: action.payload,
      };

    case 'CLEAR':
      return {
        ...authInitialState,
      };

    case 'SET_LOADING':
      return {
        ...prevState,
        loading: action.payload,
      };
    default:
      break;
  }

  return prevState;
};
