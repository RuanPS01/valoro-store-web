import React from "react";
import { Link, useRouteError } from "react-router-dom";
import GenericButton from "../../../components/generic-button";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="bg-dark flex flex-col justify-center items-center w-screen h-screen" id="error-page">
      <h1 className="text-primary-300 font-title text-8xl text-center mb-10">404. Lootbox perdida!</h1>
      <p className="text-primary-300 font-primary text-3xl text-center mb-20">
        Parece que a lootbox despedaçou e não te entregou o site que você queria. <br /> Bora mudar a estratégia.</p>
      <Link to={`/`}><GenericButton text={"voltar para o início"} type="primary" variantion="big"/></Link>
      
    </div>
  );
}