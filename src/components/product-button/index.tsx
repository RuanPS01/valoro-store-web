import React, { useState } from "react";

export interface ProductButtonProperties {
  category: string;
  name: string;
  promotionPercent?: number;
  spotPrice: number;
  forwardPrice: number;
  maxInstallmentsInterestFree: number;
  imageBase64: string;
  onClick?: () => {};
}

const financeValueAdapter = (amount: number): string => {
  return amount.toFixed(2).toString().replace(".", ",");
};

export default function ProductButton(
  props: ProductButtonProperties
): JSX.Element {
  return (
    <button onClick={props.onClick}>
      <div className="flex flex-col items-end bg-gray h-64 w-40 pb-3 rounded-[21px]">
        <div className="flex items-end justify-start flex-col py-1 px-3">
          <text className="font-title text-right text-[27px] text-white mb-[-12px] ">
            {props.category}
          </text>
          <text className="font-title text-right text-[19px] text-primary-300">
            {props.name}
          </text>
        </div>
        <div className="flex py-1 px-3 justify-center grow">
          <img className="object-contain" src={props.imageBase64}></img>
        </div>
        {props.promotionPercent ? (
          <div className="flex bg-primary-300 h-5 w-20 rounded-l-[15px] items-center justify-center">
            <text className="font-primary text-center text-[13px] text-white">
              {props.promotionPercent}% OFF
            </text>
          </div>
        ) : (
          <></>
        )}

        <div className="flex items-end justify-start flex-col py-1 px-3">
          <text className="font-primary text-right text-[13px] text-white mb-[-5px] ">
            a vista
          </text>
          <text className="font-primary text-right text-[19px] text-secondary-600">
            R$ {financeValueAdapter(props.spotPrice)}
          </text>
          <text className="font-primary text-right text-[10px] text-white mb-[-5px] ">
            R$ {financeValueAdapter(props.forwardPrice)} em{" "}
            {props.maxInstallmentsInterestFree}x sem juros
          </text>
        </div>
      </div>

      {/* <span className="bg-primary-100 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-200 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-300 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-400 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-500 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-600 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-100 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-200 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-300 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-400 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-500 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-600 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-dark px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-gray px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-white px-8 py-2 text-3xl rounded-md my-2"/>
        <text className="font-primary font-medium text-2xl text-white">Batalhe com estilo. É sua escolha.</text>
        <text className="font-primary font-bold text-2xl text-white">Comprar por 85% do preço</text>
        <text className="font-title text-2xl text-white">Melee</text> */}
    </button>
  );
}

