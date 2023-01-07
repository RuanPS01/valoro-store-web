export interface LoginResponse {
  data: UserDataAccess;
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
}

export interface UserDataAccess {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  createdAt: Date;
  verified: boolean;
}
