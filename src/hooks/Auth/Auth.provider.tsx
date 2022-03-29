import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';

import {
  CreateRemoteAuthentication,
  LocalAuthentication,
  ManageToken,
  GetDeviceID,
  BiometricAuthentication,
} from '@/modules/security/adapters';

import ManageInterceptors from '@/modules/shared/http/ManageInterceptors';

import handleError from '@/utils/errors/handleError';
import {
  AuthStorageData,
  SignInParams,
} from '@/modules/security/domain/interfaces';
import checkToken from '@/utils/auth/tokenValidator';
import { IAuthContextData, PreviousLoginData, AuthStateParams } from './IAuth';
import { authInitialState, AuthReducer } from './Auth.reducer';

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);
  const interceptorRef = React.useRef<() => void | undefined>();

  // const revalidateCredentials = useCallback(async (userId: string) => {
  //   try {
  //     const { user } = await fetchUser(userId);
  //     if (user) {
  //       dispatch({ type: 'REVALIDATE', payload: { user } });
  //       await LocalAuthentication.updateUser({
  //         user,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const signOut = useCallback(async () => {
    try {
      await LocalAuthentication.clear();
      dispatch({ type: 'SIGN_OUT' });
      const remoteAuthentication = CreateRemoteAuthentication();
      await remoteAuthentication.signOut({
        uuid: GetDeviceID.get(),
      });
      ManageToken.clear();
      if (interceptorRef.current) interceptorRef.current();
      interceptorRef.current = undefined;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const authSuccess = useCallback(
    (params: AuthStateParams) => {
      const { token } = params;
      ManageToken.set(token);
      interceptorRef.current = ManageInterceptors.create((response) => {
        if (response.status === 401) {
          signOut();
        }
        return response;
      });
      dispatch({ type: 'SIGN_IN_SUCCESS', payload: params });
      // setTimeout(() => {
      //   revalidateCredentials(user.id);
      // }, 200);
    },
    [signOut],
  );

  const checkBiometryAvailable = useCallback(async () => {
    const response: boolean = await BiometricAuthentication.checkAvailability();
    dispatch({ type: 'SET_BIOMETRY_AVAILABLE', payload: response });
    return response;
  }, []);

  const handleBiometricAuthentication = useCallback(
    async (params: AuthStateParams) => {
      await BiometricAuthentication.authenticate(
        () => authSuccess(params),
        signOut,
      );
    },
    [signOut, authSuccess],
  );

  const getBiometryState = useCallback(async () => {
    const response: boolean =
      await BiometricAuthentication.checkBiometryState();
    dispatch({ type: 'SET_BIOMETRY_AVAILABLE', payload: response });

    return response;
  }, []);

  const toggleBiometryState = useCallback(async () => {
    const nextState: boolean = await BiometricAuthentication.toggle();
    dispatch({ type: 'TOGGLE_BIOMETRY', payload: nextState });
  }, []);

  const handleAuth = useCallback(
    async ({ token, user }: AuthStateParams) => {
      const hasBiometry: boolean = await checkBiometryAvailable();
      const isBiometryActive: boolean = await getBiometryState();
      if (hasBiometry && isBiometryActive) {
        handleBiometricAuthentication({ token, user });
      } else {
        authSuccess({ token, user });
      }
    },
    [
      getBiometryState,
      handleBiometricAuthentication,
      authSuccess,
      checkBiometryAvailable,
    ],
  );

  const signIn = useCallback(
    async (params: SignInParams) => {
      const loginData: PreviousLoginData = {
        email: params.email,
      };

      dispatch({ type: 'SIGN_IN', payload: { previousLoginData: loginData } });

      // MOCK:
      authSuccess({
        token: '',
        user: { ...params, id: '', role: '', username: 'test' },
      });
      // const remoteAuthentication = CreateRemoteAuthentication();
      // try {
      //   const { auth_token: token, user_infos: user } =
      //     await remoteAuthentication.auth({
      //       uuid: GetDeviceID.get(),
      //       origin: 'mobile',
      //       ...params,
      //     });
      //   LocalAuthentication.save({ token, user });
      //   authSuccess({ token, user });
      // } catch (error) {
      //   handleError(error as Error);
      //   dispatch({ type: 'SIGN_IN_FAIL' });
      // }
    },
    [authSuccess],
  );

  const loadStoredData = useCallback(
    async ({
      onSuccess,
      onFail,
    }: {
      onSuccess: (payload: AuthStorageData) => void;
      onFail: () => void;
    }) => {
      const localData = await LocalAuthentication.load();
      if (localData) {
        const { token } = localData;
        if (checkToken(token)) {
          return onSuccess(localData);
        }
      }
      return onFail();
    },
    [],
  );

  useEffect(() => {
    checkBiometryAvailable();
    async function onStart() {
      if (!state.token) {
        await loadStoredData({
          onSuccess: handleAuth,
          onFail: () => dispatch({ type: 'SET_LOADING', payload: false }),
        });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
    onStart();
  }, [state.token, handleAuth, loadStoredData, checkBiometryAvailable]);

  const providerData = React.useMemo(() => {
    return {
      signIn,
      signOut,
      toggleBiometryState,
      user: state.user,
      loading: state.loading,
      isAuthenticated: state.isAuthenticated,
      isBiometryAvailable: state.isBiometryAvailable,
      biometryState: state.biometryState,
      previousLoginData: state?.previousLoginData,
    };
  }, [
    signIn,
    signOut,
    state.biometryState,
    state.isAuthenticated,
    state.isBiometryAvailable,
    state.loading,
    state?.previousLoginData,
    state.user,
    toggleBiometryState,
  ]);

  return (
    <AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
  );
};
