import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../main/hooks/window-dimensions";
import DefaultLogo from "../../assets/vectors/Logo_ValoroStore.svg";
import GenericInput from "../../components/generic-input";
import GenericButton from "../../components/generic-button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../main/hooks/main-hooks";
import { LoginRequest } from "../../domain/usecases/login/interfaces/login-request";
import { useSelector } from "react-redux";
import { RootState } from "../../main/store";
import { registerUser } from "../../domain/usecases/register-user/register-user-slice";

export default function RegisterUser(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [wrongStyle, setWrongStyle] = useState('');
  const statusRequest = useSelector((state: RootState) => state.userData.status);
  
  const handleRegister = () => {
    if(password !== secondPassword){
      setWrongStyle('border-solid border-primary-300 border-4');
    }
    const user: LoginRequest = {
      email: email,
      password: secondPassword
    };
    dispatch(registerUser(user));
  }

  useEffect(() => {
    if(statusRequest === 'success'){
      navigate('/login');
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
      <GenericInput className={wrongStyle + ` -mb-1`} type={'password'} characterIndicator="#" titlePosition="bottonRight" onChange={(value) => {setPassword(value); setWrongStyle('')}}/>
      <GenericInput className={wrongStyle} type={'password'} characterIndicator="#" title="sua senha" titlePosition="bottonRight" onChange={(value) => {setSecondPassword(value), setWrongStyle('')}}/>
      <GenericButton className="w-96 mt-10" text={"Cadastrar e voltar"} variantion={"big"} onClick={handleRegister}/>
    </div>
  );
}
