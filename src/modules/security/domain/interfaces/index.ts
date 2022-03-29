export type UserModel = {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  avatarUrl?: string;
  document?: string;
  phone?: string;
  role: string;
};

export interface AuthStorageData {
  token: string;
  user: UserModel;
}

export type SignInParams = {
  email: string;
  username?: string;
  password: string;
  workspace: string;
};

export type SignOutParams = {
  uuid: string;
};

export type AuthParams = {
  email: string;
  username?: string;
  password: string;
  uuid: string;
  origin: 'mobile';
  platform?: 'ios' | 'android' | 'windows' | 'macos' | 'web';
};

export type AuthReturn = {
  auth_token: string;
  user_infos: UserModel;
};
