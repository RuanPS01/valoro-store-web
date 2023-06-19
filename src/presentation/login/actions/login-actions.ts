import { LoginRequest } from "../../../domain/usecases/login/interfaces/login-request";
import { loginUser } from "../../../domain/usecases/login/login-slice";
import { AppDispatch } from "../../../main/store";

export const handleLogin = (email: string, password: string, dispatch: AppDispatch) => {
  const user: LoginRequest = {
    email: email,
    password: password
  };
  console.log("Object to login: " + JSON.stringify(user)) //TODO: remove for use
  dispatch(loginUser(user));
}