export interface RegisterUserResponse {
  data: UserData;
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
}

export interface UserData {
  id: string;
  username: string;
  email: string;
  verified: boolean;
}

