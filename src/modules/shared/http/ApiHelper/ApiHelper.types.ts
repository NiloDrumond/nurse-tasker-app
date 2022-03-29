export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export const httpStatusCodes = {
  200: 'OK',
  201: 'CREATED',
  204: 'NO_CONTENT',
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  404: 'NOT_FOUND',
  500: 'SERVER_ERROR',
};

export type ResponseCallback<T = any> = (response: HttpResponse<T>) => void;

export type HttpResponse<T> = {
  statusCode: number;
  body: T;
};

export type GetParams = {
  url: string;
  timeout?: number;
};

export type PostParams = {
  url: string;
  body?: any;
  timeout?: number;
};

export interface IApiHelper {
  token?: string;
  baseUrl: string;

  setToken(token: string): void;
  clearToken(): void;
  get<T = any>(params: GetParams): Promise<HttpResponse<T>>;
  post<T = any>(params: PostParams): Promise<HttpResponse<T>>;
  patch<T = any>(params: PostParams): Promise<HttpResponse<T>>;
  delete<T = any>(params: PostParams): Promise<HttpResponse<T>>;
}

export type HttpParamsConfig =
  | undefined
  | {
      headers: { Authorization: string } | undefined;
      validateStatus?: () => boolean;
    };
