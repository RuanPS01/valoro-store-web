import React, { useState } from "react";

export interface ProductButtonProperties {
  category: string;
  name: string;
  promotionPercent?: number;
  spotPrice: number;
  forwardPrice: number;
  maxInstallmentsInterestFree: number;
  image: any;
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
      <div className="
        transition ease-out 
        hover:bg-primary-100/20 
        hover:scale-150 
        hover:backdrop-blur-md 
        flex flex-col items-end 
        bg-gray h-64 w-40 pb-3 rounded-[21px]
      ">
        <div className="flex items-end justify-start flex-col py-1 px-3">
          <div className="font-title text-right text-[27px] text-white mb-[-12px] ">
            {props.category}
          </div>
          <div className="font-title text-right text-[19px] text-primary-300">
            {props.name}
          </div>
        </div>
        <div className="flex py-1 px-3 justify-center grow">
          <img className="object-contain" src={props.image}></img>
        </div>
        {props.promotionPercent && 
          <div className="flex bg-primary-300 h-5 w-20 rounded-l-[15px] items-center justify-center">
            <div className="font-primary text-center text-[13px] text-white">
              {props.promotionPercent}% OFF
            </div>
          </div>
        }

        <div className="flex items-end justify-start flex-col py-1 px-3">
          <div className="font-primary text-right text-[13px] text-white mb-[-5px] ">
            a vista
          </div>
          <div className="font-primary text-right text-[19px] text-secondary-600">
            R$ {financeValueAdapter(props.spotPrice)}
          </div>
          <div className="font-primary text-right text-[10px] text-white mb-[-5px] ">
            R$ {financeValueAdapter(props.forwardPrice)} em{" "}
            {props.maxInstallmentsInterestFree}x sem juros
          </div>
        </div>
      </div>
    </button>
  );
}

