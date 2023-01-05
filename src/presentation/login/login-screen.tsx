import React from "react";
import useWindowDimensions from "../../hooks/window-dimensions";
import DefaultLogo from "../../assets/vectors/Logo_ValoroStore.svg";
import GenericInput from "../../components/generic-input";
import GenericButton from "../../components/generic-button";

export default function Login(): JSX.Element {
  const { width } = useWindowDimensions();

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
      <GenericInput type={'email'} characterIndicator="@" title="seu e-mail" titlePosition="topRight"/>
      <div className="bg-primary-300 w-screen h-[1px]"></div>
      <GenericInput type={'password'} characterIndicator="#" title="sua senha" titlePosition="bottonRight"/>
      <button className="text-primary-300 mt-16 mb-16">recuperar sua senha</button>

      <GenericButton text={"Entrar"} variantion={"big"}/>
    </div>
  );
}
