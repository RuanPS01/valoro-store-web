import React, { useState } from "react";
import ComboBox from "react-responsive-combo-box";
import GenericCheckboxOrRadio from "../generic-checkbox";
import GenericComboBox from "../generic-combo-box";
export interface FilterProperties {
  categories?: string[];
  inPromotion?: boolean;
  promotionPercentMin?: number;
  spotPriceMax?: number;
  spotPriceMin?: number;
  maxInstallmentsInterestFreeMin?: number;
  collection?: string;
  origin?: string;
  haveResources?: boolean;
}

export default function Filter(): JSX.Element {
  const category: string[] = [
    "America",
    "India",
    "Australia",
    "Argentina",
    "Ireland",
    "Indonesia",
    "Iceland",
    "Japan",
  ];
  const origin: string[] = [
    "America",
    "India",
    "Australia",
    "Argentina",
    "Ireland",
    "Indonesia",
    "Iceland",
    "Japan",
  ];
  const [order, setOrder] = useState("asc");
  return (
    <div className="bg-dark shadow-lg shadow-primary-300 border-solid border-primary-300 border-2 flex flex-col justify-between items-center w-fit h-fit p-2 pb-6 rounded-[21px] mb-10">
      <div className="text-white flex flex-row justify-between items-center gap-5 p-5">
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row items-center">
              <GenericCheckboxOrRadio
                onChange={() => {}}></GenericCheckboxOrRadio>
              <p className="ml-2 text-primary-300">Em promoção</p>
            </div>
            <div className="flex flex-row items-center">
              <GenericCheckboxOrRadio
                onChange={() => {}}></GenericCheckboxOrRadio>
              <p className="ml-2 text-primary-300">Possui recursos extras</p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Preço máximo:</p>
            <input
              className="ml-2 rounded-[21px] bg-dark pl-3 border-solid border-primary-300 border-2 outline-none"
              type={"number"}
            />
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Preço mínimo:</p>
            <input
              className="ml-2 rounded-[21px] bg-dark pl-3 border-solid border-primary-300 border-2 outline-none"
              type={"number"}
            />
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Categoria:</p>{" "}
            <GenericComboBox options={category} />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex flex-row items-center">
            <GenericCheckboxOrRadio
              type="radio"
              checked={order === "asc"}
              onChange={(value) => {
                setOrder(value && "asc");
              }}></GenericCheckboxOrRadio>
            <p className="ml-2 text-primary-300">Ordem Crescente</p>
          </div>
          <div className="flex flex-row items-center">
            <GenericCheckboxOrRadio
              type="radio"
              checked={order === "desc"}
              onChange={(value) => {
                setOrder(value && "desc");
              }}></GenericCheckboxOrRadio>
            <p className="ml-2 text-primary-300">Ordem Decrescente</p>
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Parcelas:</p>
            <input
              className="ml-2 rounded-[21px] bg-dark pl-3 border-solid border-primary-300 border-2 outline-none"
              type={"number"}
            />
          </div>
          <div className="flex flex-row">
            <p className="text-primary-300">Origem:</p>
            <GenericComboBox translateInX="16" options={origin} />
          </div>
        </div>
      </div>
    </div>
  );
}

