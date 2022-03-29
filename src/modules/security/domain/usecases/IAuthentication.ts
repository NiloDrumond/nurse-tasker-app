import { AuthParams, AuthReturn, SignOutParams } from '../interfaces';

export default interface IAuthentication {
  auth(params: AuthParams): Promise<AuthReturn>;
  signOut(params: SignOutParams): Promise<void>;
}
