import React, { useState } from "react";
import TerciaryButton from "../../../components/terciary-button";
import { TiUserOutline, TiShoppingCart } from "react-icons/ti";
import DefaultLogo from "../../../assets/vectors/Logo_ValoroStore.svg";
import { Link } from "react-router-dom";

export interface TopBarProperties {
  logged: boolean;
}
export default function TopBar(
  props: TopBarProperties
): JSX.Element {
  return (
    <div className="flex flex-row justify-around w-screen p-12">
      {props.logged 
        ? <TerciaryButton text={"Ver meu carrinho"} icon={TiShoppingCart} alignLeft/> 
        : <div className="w-107"></div>}
      <img className="min-w-[90px] max-w-sm mr-4 ml-4" src={DefaultLogo} />
      <Link to={`/login`}><TerciaryButton text={"Entrar ou Registrar"} icon={TiUserOutline} alignLeft={false}/></Link>
      
    </div>
  );
}

