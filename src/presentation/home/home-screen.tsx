import React, { useState } from "react";
import CategoryButton from "../../components/category-button";
import TopBar from "../components/top-bar";
import Meele from '../../assets/images/TacticalKnife.webp';
import Sidearms from '../../assets/images/Classic.webp';
import SMGs from '../../assets/images/Spectre.webp';
import Shotguns from '../../assets/images/Judge.webp';
import Rifles from '../../assets/images/Bulldog.webp';
import SniperRifles from '../../assets/images/Operator.webp';
import MachineGuns from '../../assets/images/Odin.webp';
import useWindowDimensions from "../../main/hooks/window-dimensions";
import SpaceLine from "../../components/space-line";
import RedDiamond from "../../assets/images/RedDiamond.png"
import GenericButton from "../../components/generic-button";
import ListProductsWithFilter from "../components/list-products-with-filter";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

export default function HomeScreen(): JSX.Element {
  const { width } = useWindowDimensions();

  const navigation = useNavigate();

  return (
    <div className="bg-dark overflow-hidden">
      <div className="
          flex
          items-center
          justify-center
          flex-col
      ">
        <TopBar logged={true} />
        <p className="text-white font-primary text-3xl text-center"> 
          Batalhe com estilo. É sua escolha.
        </p>
        <p className="text-secondary-600 font-primary text-lg text-center"> 
          Manda bala! Escolhe um tipo de arma aí!
        </p>
        <div className="flex flex-row mt-10 justify-start items-start space-x-3">
          <CategoryButton category={"Melee"} inPromotion={false} image={Meele} 
            onClick={() => navigation('/products', { replace: true, state: { category: 'Melee'}})}
          />
          <CategoryButton category={"Sidearms"} inPromotion={true} image={Sidearms} />
          <CategoryButton category={"SMGs"} inPromotion={true} image={SMGs} />
          <CategoryButton category={"Shotguns"} inPromotion={false} image={Shotguns} />
          <CategoryButton category={"Rifles"} inPromotion={true} image={Rifles} />
          <CategoryButton category={"Sniper Rifles"} inPromotion={false} image={SniperRifles} />
          <CategoryButton category={"Machine Guns"} inPromotion={false} image={MachineGuns} />
        </div>
        <SpaceLine />
        <div className="flex flex-col justify-center items-center h-fit">
          <p className="text-white font-primary text-3xl text-center"> 
            Você está pronto?
          </p>
          <img className="mt-3" src={RedDiamond} />
          <img className={`absolute ${width < 800 ? 'w-52' : 'w-144'}`}  src={SMGs} />
        </div>
        <GenericButton text="Comprar por 85% do preço" variantion="big" />
        <p className="text-white font-primary text-lg text-center"> 
          Até 10x sem juros
        </p>
        <SpaceLine />
        <p className="text-white font-primary text-3xl text-center"> 
          Aqui estão todas as promoções. Arrebenta!
        </p>
        <ListProductsWithFilter />
        <Footer />
      </div>
    </div>
  );
}
