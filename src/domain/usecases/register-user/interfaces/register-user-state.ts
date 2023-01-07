import { UserData } from "./register-user-response";

export interface RegisterUserState {
  userData?: UserData;
  status: 'loading' | 'success' | 'failed' | 'idle';
}