import jwtDecode from 'jwt-decode';

interface IDecodedToken {
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  exp: number;
}

interface ITokenChecked {
  decoded?: IDecodedToken;
  token?: string;
  error?: string;
  valid: boolean;
  expiredAt?: Date;
}

const checkToken = (token: string): ITokenChecked => {
  if (!token) {
    return { error: 'not matched', valid: false };
  }

  try {
    const decoded = jwtDecode<IDecodedToken>(token);
    const expiredAt = decoded.exp * 1000;

    if (expiredAt > new Date().getTime()) {
      return {
        decoded,
        token,
        valid: true,
        expiredAt: new Date(expiredAt),
      };
    }
    return { error: 'Token expired', valid: false };
  } catch (e) {
    return { error: 'Server Error', valid: false };
  }
};

export default checkToken;
