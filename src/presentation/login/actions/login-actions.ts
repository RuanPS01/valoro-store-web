import { LoginRequest } from "../../../domain/usecases/login/interfaces/login-request";
import { loginUser } from "../../../domain/usecases/login/login-slice";
import { useAppDispatch } from "../../../main/hooks/main-hooks";

export const handleLogin = (email: string, password: string) => {
  const dispatch = useAppDispatch();
  const user: LoginRequest = {
    email: email,
    password: password
  };
  dispatch(loginUser(user));
}