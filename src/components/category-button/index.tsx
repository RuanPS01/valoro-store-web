import React, { useState } from "react";

export interface CategoryButtonProperties {
  category: string;
  inPromotion: boolean;
  imageBase64: string;
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
      <div className="flex flex-col bg-gray h-64 w-40 rounded-[21px] overflow-hidden">
        <text className="translate-x-16 absolute origin-top-left rotate-45 font-title text-[27px] text-white">
          {props.category}
        </text>
        <div className="bg-primary-300 h-[1px] w-screen translate-x-3 origin-top-left rotate-45 z-0"></div>
        <div className="absolute flex justify-center z-10">
          <img className="object-cover object-top h-24 w-40 mt-24" src={props.imageBase64}></img>
        </div>
        <div className="absolute h-64 w-40 z-20 bg-gradient-to-t from-dark"></div>
      </div>
    </button>
  );
}

