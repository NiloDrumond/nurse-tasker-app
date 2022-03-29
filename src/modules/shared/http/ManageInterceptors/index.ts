import { AxiosResponse } from 'axios';
import ApiHelper from '../ApiHelper';

class ManageInterceptors {
  static create(
    onResponse?: (response: AxiosResponse<any>) => AxiosResponse<any>,
    onReject?: (error: any) => any,
  ): () => void {
    const id = ApiHelper.createInterceptor(onResponse, onReject);
    return () => ApiHelper.removeInterceptor(id);
  }

  static remove(id: number): void {
    ApiHelper.removeInterceptor(id);
  }
}

export default ManageInterceptors;
