import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../main/store";
import { ListProducts, Product } from "../../domain/usecases/list-products/interfaces/list-products-response";
import { useAppDispatch } from "../../main/hooks/main-hooks";

export default function HomeScreen(): JSX.Element {
  const { width } = useWindowDimensions();

  const [luckItem, setLuckItem] = useState<Product>();
  const listProducts = useSelector((state: RootState) => state.listProducts.products);
  const navigation = useNavigate();
  
  const generateRandom = (min = 0, max = 100): number => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference); 
    rand = rand + min;
    return rand;
  }

  useEffect(() => {
    const randomNumber = generateRandom(0, listProducts?.items && listProducts.items.length);
    const item = listProducts?.items[randomNumber];
    setLuckItem(item);
  }, [listProducts])

  

  const hundleSelectCategory = (category: string) => {
    navigation(`/products?category=${category}`)
  }
  

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
          <CategoryButton category={"Sidearms"} inPromotion={true} image={Sidearms} onClick={() => hundleSelectCategory('Sidearm')}/>
          <CategoryButton category={"SMGs"} inPromotion={true} image={SMGs} onClick={() => hundleSelectCategory('SMG')}/>
          <CategoryButton category={"Shotguns"} inPromotion={false} image={Shotguns} onClick={() => hundleSelectCategory('Shotgun')}/>
          <CategoryButton category={"Rifles"} inPromotion={true} image={Rifles} onClick={() => hundleSelectCategory('Rifle')}/>
          <CategoryButton category={"Sniper Rifles"} inPromotion={false} image={SniperRifles} onClick={() => hundleSelectCategory('Sniper%20Rifle')}/>
          <CategoryButton category={"Machine Guns"} inPromotion={false} image={MachineGuns} onClick={() => hundleSelectCategory('Machine%20Gun')}/>
        </div>
        <SpaceLine />
        <div className="flex flex-col justify-center items-center h-fit">
          <p className="text-white font-primary text-3xl text-center"> 
            Você está pronto?
          </p>
          <img className="mt-3" src={RedDiamond} />
          { listProducts 
            ? <img className={`absolute ${width < 800 ? 'w-52' : 'w-144'}`} src={'data:image/png;base64,' + luckItem?.image} /> 
            : <img className={`absolute ${width < 800 ? 'w-52' : 'w-144'}`} src={SMGs} />}
          
        </div>
        <GenericButton text={luckItem?.promotionPercent
          ? `Comprar por ${luckItem?.promotionPercent}% do preço`
          : `Comprar por apenas R$${luckItem?.spotPrice.toFixed(2)}`} variantion="big" />
        <p className="text-white font-primary text-lg text-center"> 
          Até {luckItem?.maxInstallmentsInterestFree}x sem juros
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
