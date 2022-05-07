import axios, { AxiosInstance, AxiosResponse } from 'axios';

import config from '@/config';
import {
  GetParams,
  HttpParamsConfig,
  HttpResponse,
  IApiHelper,
  PostParams,
  ResponseCallback,
} from './ApiHelper.types';

const apiConfig = {
  baseUrl: config.BASE_URL,
};

class AxiosHelper implements IApiHelper {
  token?: string;
  baseUrl: string;
  public instance: AxiosInstance;

  constructor(con: typeof apiConfig) {
    this.baseUrl = con.baseUrl;
    this.token = undefined;
    this.instance = axios.create();
    this.get = this.get.bind(this);
  }

  private prepareConfig(timeout?: number): HttpParamsConfig {
    const header = this.token ? { Authorization: this.token } : undefined;
    const config = {
      headers: header,
      timeout: timeout || 15000,
    };
    return config;
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public clearToken(): void {
    this.token = undefined;
  }

  public createInterceptor(
    onResponse?: (response: AxiosResponse<any>) => AxiosResponse<any>,
    onReject?: (error: any) => any,
  ): number {
    const id = this.instance.interceptors.response.use(onResponse, onReject);
    return id;
  }

  public removeInterceptor(id: number) {
    this.instance.interceptors.response.eject(id);
  }

  public async get<T = any>(params: GetParams): Promise<HttpResponse<T>> {
    const url = params.url.includes('http')
      ? params.url
      : `${this.baseUrl}/${params.url}`;

    const response = await this.instance.get(
      url,
      this.prepareConfig(params.timeout),
    );
    return {
      body: response.data,
      statusCode: response.status,
    };
  }

  public async post<T = any>(params: PostParams): Promise<HttpResponse<T>> {
    const url = params.url.includes('http')
      ? params.url
      : `${this.baseUrl}/${params.url}`;

    const response = await this.instance.post(
      url,
      params.body,
      this.prepareConfig(params.timeout),
    );
    return {
      body: response.data,
      statusCode: response.status,
    };
  }

  public async patch<T = any>(params: PostParams): Promise<HttpResponse<T>> {
    const url = params.url.includes('http')
      ? params.url
      : `${this.baseUrl}/${params.url}`;

    const response = await this.instance.patch(
      url,
      params.body,
      this.prepareConfig(),
    );
    return {
      body: response.data,
      statusCode: response.status,
    };
  }

  public async delete<T = any>(params: PostParams): Promise<HttpResponse<T>> {
    const url = params.url.includes('http')
      ? params.url
      : `${this.baseUrl}/${params.url}`;

    const response = await this.instance.delete(
      url,
      this.prepareConfig(params.timeout),
    );
    return {
      body: response.data,
      statusCode: response.status,
    };
  }
}

const api = new AxiosHelper(apiConfig);

export default api;
