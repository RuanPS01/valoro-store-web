import React, { useState } from "react";

export interface CategoryButtonProperties {
  category: string;
  inPromotion: boolean;
  image: string;
  onClick?: () => {};
}

const financeValueAdapter = (amount: number): string => {
  return amount.toFixed(2).toString().replace('.', ',');
};
export default function CategoryButton(
  props: CategoryButtonProperties
): JSX.Element {
  return (
    <button onClick={props.onClick}>
      <div className="transition ease-in-out hover:bg-primary-100 hover:-translate-y-2  flex flex-col bg-gray h-64 w-40 rounded-[21px] overflow-hidden">
        <div className="translate-x-16 absolute origin-top-left rotate-45 font-title text-[27px] text-white">
          {props.category}
        </div>
        {props.inPromotion && 
          <div className="absolute mt-16 z-20">
            <div className="flex bg-primary-300 h-6 w-[68px] rounded-r-[8px] items-center justify-center">
              <div className="font-primary text-center text-[10px] text-white">
                Promoção
              </div>
            </div>
          </div>
        }
        <div className="bg-primary-300 h-[1px] w-screen translate-x-3 origin-top-left rotate-45 z-0"></div>
        <div className="absolute flex justify-center z-10">
          <img className="object-cover object-top h-24 w-40 mt-24" src={props.image}></img>
        </div>
        <div className="absolute h-64 w-40 z-20 bg-gradient-to-t from-dark"></div>
      </div>
    </button>
  );
}

