import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="bg-dark flex flex-col justify-center items-center w-screen h-screen" id="error-page">
      <h1 className="text-primary-300 font-title text-8xl text-center mb-10">404. Pagina não encontrada!</h1>
      <p className="text-primary-300 font-primary text-3xl text-center mb-20">
        Parece que a pagina se perdeu no meio do caminho. <br /> Vamos começar de novo.</p>
      <Link to={`/`}><button>voltar para o início</button></Link>

    </div>
  );
}