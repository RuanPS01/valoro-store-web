import { UserDataAccess } from "./login-response";

export interface LoginState {
  userAccess?: UserDataAccess;
  status: 'loading' | 'success' | 'failed' | 'idle';
}