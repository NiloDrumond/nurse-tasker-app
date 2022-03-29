import IAuthentication from '@/modules/security/domain/usecases/IAuthentication';
import {
  AuthenticationErrors,
  DeviceLimitExceededError,
  InvalidCredentialsError,
  UnexpectedError,
} from '@/modules/shared/errors';
import {
  HttpResponse,
  HttpStatusCode,
  IApiHelper,
} from '@/modules/shared/http/ApiHelper/ApiHelper.types';
import axios from 'axios';
import { AuthParams, AuthReturn, SignOutParams } from '../../domain/interfaces';

class RemoteAuthentication implements IAuthentication {
  private readonly api: IApiHelper;
  private readonly url: string;
  private readonly signoutUrl: string;

  constructor(api: IApiHelper, url: string, signoutUrl: string) {
    this.api = api;
    this.url = url;
    this.signoutUrl = signoutUrl;
  }
  async signOut(params: SignOutParams): Promise<void> {
    try {
      await this.api.delete({
        url: `${this.signoutUrl}/${params.uuid}`,
        body: params,
      });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        switch (err.response.status) {
          default:
            throw new UnexpectedError();
        }
      }
    }
  }

  async auth(params: AuthParams): Promise<AuthReturn> {
    try {
      const response = await this.api.post<AuthReturn>({
        url: this.url,
        body: params,
      });
      return response.body;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        switch (err.response.status) {
          case HttpStatusCode.UNAUTHORIZED:
            throw this.unauthorizedErrors({
              body: err.response.data,
              statusCode: err.response.status,
            });
          default:
            throw new UnexpectedError();
        }
      }
      throw new UnexpectedError();
    }
  }

  private unauthorizedErrors(response: HttpResponse<any>): void {
    switch (response.body.error.user_authentication) {
      case AuthenticationErrors.deviceLimitExceeded:
        throw new DeviceLimitExceededError();
      case AuthenticationErrors.invalidCredentials:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export default RemoteAuthentication;
