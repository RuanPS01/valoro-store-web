import React from "react";
import Instagram from '../../../../assets/vectors/instagram.svg'
import Facebook from '../../../../assets/vectors/facebook.svg'
import Twitter from '../../../../assets/vectors/twitter.svg'

export default function Footer(): JSX.Element {
  return (
    <div className="bg-primary-300 flex flex-col justify-center items-center w-screen h-48">
      <div className="text-white flex flex-row justify-around items-center gap-64">
        <div className="flex flex-col justify-center items-start gap-2">
          <button>FAQ</button>
          <button>Sobre nós</button>
          <button>Horários de atendimento</button>
          <button>Termos de uso & políticas de privacidade</button>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <button>Nossas redes sociais</button>
          <div className="flex flex-row gap-2">
            <img src={Instagram} />
            <img src={Facebook} />
            <img src={Twitter} />
          </div>
          <button>Formas de pagamento</button>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <button>Encomendas</button>
          <button>Upgrades</button>
          <button>Como vender suas skins</button>
          <button>Contato</button>
        </div>
      </div>
    </div>
  );
}

