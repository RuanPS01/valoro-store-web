import React, { useEffect, useState } from "react";
import TopBar from "../components/top-bar";
import useWindowDimensions from "../../main/hooks/window-dimensions";
import ListProductsWithFilter from "../components/list-products-with-filter";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import { RootState } from "../../main/store";
import GenericButton from "../../components/generic-button";
import { useNavigate } from "react-router-dom";

export interface ProductsScreenProperties {
  category?: string;
  inPromotion?: boolean;
}

export default function AccountScreen(props: ProductsScreenProperties): JSX.Element {
  const userData = useSelector((state: RootState) => state.userAccess.userAccess?.user)
  const navigation = useNavigate();

  useEffect(() => {
    if(!userData?.email){
      navigation('/')
    }
  }, [])
  
  return (
    <div className="bg-dark overflow-hidden">
      <div className="
          flex
          items-center
          justify-center
          flex-col
      ">
        <TopBar logged={true} />
        <div className="flex flex-row w-screen pl-[18%] pr-[18%]">
          <div className="flex flex-col justify-start items-start w-full">
            <p className="font-primary text-2xl text-primary-300 text-left">Usuário de e-mail:</p> 
            <p className="font-primary text-4xl text-white text-left">{userData?.email}</p> 
            <p className="font-primary text-xl text-light-gray text-left mt-6">Publicados:</p> 
            <p className="font-primary text-xl text-light-gray text-left">Vendidos:</p> 
            <p className="font-primary text-xl text-light-gray text-left">À venda:</p> 
          </div>
          <div className="flex flex-col justify-start items-end w-full">
            <p className="font-primary text-2xl text-white text-right">Valor a receber:</p> 
            <p className="font-primary text-8xl text-primary-300 text-right">R$ 0,00</p> 
            <GenericButton className="mt-5 h-24 w-[500px]" text={"Cadastrar novo produto"} variantion={'big'}/>
          </div>
          <div className="flex flex-col justify-start items-start"></div>
          
        </div>
        <p className="font-primary text-xl text-white text-left mt-20 -mb-6">Produtos cadastrados por vê para venda:</p> 
        <ListProductsWithFilter sellerUserId={userData?.id} category={props.category} inPromotion={props.inPromotion} />
        <Footer />
        <div className="fixed w-screen h-screen bg-secondary-100/60">
          <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="w-144 h-144 bg-dark rounded-[21px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
