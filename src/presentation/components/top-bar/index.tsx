import React, { useEffect, useState } from "react";
import TerciaryButton from "../../../components/terciary-button";
import { TiUserOutline, TiShoppingCart } from "react-icons/ti";
import DefaultLogo from "../../../assets/vectors/Logo_ValoroStore.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../main/store";

export interface TopBarProperties {
  logged: boolean;
}
export default function TopBar(
  props: TopBarProperties
): JSX.Element {
  const [logged, setlogged] = useState(false)
  const userAccessStatus = useSelector((state: RootState) => state.userAccess.status);

  useEffect(() => {
    if(userAccessStatus === 'success'){
      setlogged(true);
    }else{
      setlogged(false);
    }
    
  }, [userAccessStatus]);

  return (
    <div className="flex flex-row justify-around w-screen p-12">
      {props.logged 
        ? <TerciaryButton text={"Ver meu carrinho"} icon={TiShoppingCart} alignLeft/> 
        : <div className="w-107"></div>}
      <Link to={`/`}><img className="min-w-[90px] max-w-sm mr-4 ml-4" src={DefaultLogo} /></Link>
      {!logged 
        ? <Link to={`/login`}><TerciaryButton text={"Entrar ou Registrar"} icon={TiUserOutline} alignLeft={false}/></Link>
        : <Link to={`/account`}><TerciaryButton className="border-solid border-primary-300 border-2" text={"Minha Conta"} icon={TiUserOutline} alignLeft={false}/></Link>
      }
      
    </div>
  );
}

