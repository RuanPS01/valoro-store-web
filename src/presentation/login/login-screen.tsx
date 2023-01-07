import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../main/hooks/window-dimensions";
import DefaultLogo from "../../assets/vectors/Logo_ValoroStore.svg";
import GenericInput from "../../components/generic-input";
import GenericButton from "../../components/generic-button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../main/hooks/main-hooks";
import { LoginRequest } from "../../domain/usecases/login/interfaces/login-request";
import { loginUser } from "../../domain/usecases/login/login-slice";
import { useSelector } from "react-redux";
import { RootState } from "../../main/store";

export default function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const statusRequest = useSelector((state: RootState) => state.userAccess.status);
  
  const handleLogin = () => {
    const user: LoginRequest = {
      email: email,
      password: password
    };
    dispatch(loginUser(user));
  }

  useEffect(() => {
    if(statusRequest === 'success'){
      navigate('/');
    }
  }, [statusRequest])
  
  return (
    <div className="
      bg-dark
        flex
        items-center
        justify-center
        flex-col
        w-screen
        h-screen
      ">

      <img className="min-w-[90px] max-w-sm mr-4 ml-4 mb-16" src={DefaultLogo} />
      <GenericInput type={'email'} characterIndicator="@" title="seu e-mail" titlePosition="topRight" onChange={(value) => setEmail(value)}/>
      <div className="bg-primary-300 w-screen h-[1px]"></div>
      <GenericInput type={'password'} characterIndicator="#" title="sua senha" titlePosition="bottonRight" onChange={(value) => setPassword(value)}/>
      <button className="font-primary text-primary-300 mt-16 mb-16">recuperar sua senha</button>
      <div className="flex flex-row justify-center items-center w-screen gap-4">
        <Link to={'/register-user'}><GenericButton text={"Cadastrar"} variantion={"big"} type={"secondary"}/></Link>
        <GenericButton text={"Entrar"} variantion={"big"} onClick={handleLogin}/>
      </div>
    </div>
  );
}
