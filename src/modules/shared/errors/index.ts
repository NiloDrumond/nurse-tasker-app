import InvalidCredentialsError from './InvalidCredentialsError';
import UnexpectedError from './UnexpectedError';
import UnauthorizedError from './UnauthorizedError';
import DeviceLimitExceededError from './DeviceLimitExceededError';
import UnableToLoadError from './UnableToLoadError';

export enum AuthenticationErrors {
  deviceLimitExceeded = 'device limit exceeded',
  invalidCredentials = 'invalid credentials',
  domainNotFound = 'Workspace not found',
}

export {
  InvalidCredentialsError,
  UnexpectedError,
  UnauthorizedError,
  DeviceLimitExceededError,
  UnableToLoadError,
};
