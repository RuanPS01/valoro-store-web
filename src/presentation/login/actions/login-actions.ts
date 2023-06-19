import { LoginRequest } from "../../../domain/usecases/login/interfaces/login-request";
import { loginUser } from "../../../domain/usecases/login/login-slice";

export const handleLogin = (email: string, password: string, dispatch: any) => {
  const user: LoginRequest = {
    email: email,
    password: password
  };
  console.log("Object to login: " + JSON.stringify(user)) //TODO: remove for use
  dispatch(loginUser(user));
}