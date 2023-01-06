import React, { useState } from "react";
import ComboBox from "react-responsive-combo-box";
import GenericButton from "../generic-button";
import GenericCheckboxOrRadio from "../generic-checkbox";
import GenericComboBox from "../generic-combo-box";
export interface FilterProperties {
  category?: string;
  onchangeCategory?: (value: string) => void
  inPromotion?: boolean;
  onchangeInPromotion?: (value: boolean) => void
  promotionPercentMin?: number;
  onchangePromotionPercentMin?: (value: number) => void
  spotPriceMax?: number;
  onchangeSpotPriceMax?: (value: number) => void
  spotPriceMin?: number;
  onchangeSpotPriceMin?: (value: number) => void
  maxInstallmentsInterestFreeMin?: number;
  onchangeMaxInstallmentsInterestFreeMin?: (value: number) => void
  haveResources?: boolean;
  onchangeHaveResources?: (value: boolean) => void
  order?: 'asc' | 'desc';
  onChangeOrder?: (value: string) => void
  updateEvent?: () => void;
}

export default function Filter(props: FilterProperties): JSX.Element {
  const category: string[] = [
    "Melee",
    "Sidearm",
    "SMG",
    "Shotgun",
    "Rifle",
    "Sniper Rifle",
    "Machine Gun",
  ];
  const [order, setOrder] = useState("asc");
  return (
    <div className="
    bg-dark 
      shadow-lg 
      shadow-primary-300 
      border-solid 
      border-primary-300 
      border-2 
      flex flex-col 
      justify-between 
      items-center 
      w-fit h-fit 
      p-2 pb-1 
      rounded-[21px] 
      mb-10
      transition ease-in-out
      hover:border-white
    ">
      <div className="text-white flex flex-row justify-between items-start gap-5 p-5">
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row items-center">
              <GenericCheckboxOrRadio
                onChange={(value) => props.onchangeInPromotion && props.onchangeInPromotion(value)}></GenericCheckboxOrRadio>
              <p className="ml-2 text-primary-300">Em promoção</p>
            </div>
            <div className="flex flex-row items-center">
              <GenericCheckboxOrRadio
                onChange={(value) => props.onchangeHaveResources && props.onchangeHaveResources(value)}></GenericCheckboxOrRadio>
              <p className="ml-2 text-primary-300">Possui recursos extras</p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Preço máximo:</p>
            <input
              className="ml-2 rounded-[21px] bg-dark pl-3 border-solid border-primary-300 border-2 outline-none transition ease-in-out hover:border-white"
              type={"number"}
              onChange={(event) => props.onchangeSpotPriceMax && props.onchangeSpotPriceMax(Number(event.target.value))}
            />
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Preço mínimo:</p>
            <input
              className="ml-2 rounded-[21px] bg-dark pl-3 border-solid border-primary-300 border-2 outline-none transition ease-in-out hover:border-white"
              type={"number"}
              onChange={(event) => props.onchangeSpotPriceMin && props.onchangeSpotPriceMin(Number(event.target.value))}
            />
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Categoria:</p>{" "}
            <GenericComboBox options={category} onChange={(value) => props.onchangeCategory && props.onchangeCategory(value)}/>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex flex-row items-center">
            <GenericCheckboxOrRadio
              type="radio"
              checked={order === "asc"}
              onChange={() =>{
                setOrder('asc')
                props.onChangeOrder && props.onChangeOrder(order)
              }}></GenericCheckboxOrRadio>
            <p className="ml-2 text-primary-300">Ordem decrescente de preço</p>
          </div>
          <div className="flex flex-row items-center">
            <GenericCheckboxOrRadio
              type="radio"
              checked={order === "desc"}
              onChange={() => {
                setOrder('desc')
                props.onChangeOrder && props.onChangeOrder(order)
              }}></GenericCheckboxOrRadio>
            <p className="ml-2 text-primary-300">Ordem crescente de preço</p>
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Parcelas:</p>
            <input
              className="ml-2 rounded-[21px] bg-dark pl-3 border-solid border-primary-300 border-2 outline-none transition ease-in-out hover:border-white"
              type={"number"}
              onChange={(event) => props.onchangeMaxInstallmentsInterestFreeMin && props.onchangeMaxInstallmentsInterestFreeMin(Number(event.target.value))}
            />
          </div>
          <div className="flex flex-row items-center">
              <GenericButton text={"Atualizar lista"} onClick={() => props.updateEvent && props.updateEvent()} variantion={'big'} type={'primary'} 
              className={'ml-10 mt-2 w-60 h-[40px] text-xl'}/>
            </div>
        </div>
      </div>
    </div>
  );
}

