import ApiHelper from '@/modules/shared/http/ApiHelper';

class ManageToken {
  static set(token: string): void {
    ApiHelper.setToken(token);
  }

  static clear(): void {
    ApiHelper.clearToken();
  }
}

export default ManageToken;
