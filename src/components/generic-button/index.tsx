import React from "react";
import { TiFilter, TiDownload } from "react-icons/ti";

export interface GenericButtonProperties {
  text: string;
  icon?: any;
  type?: "primary" | "secondary" | "terciary";
  variantion?: "big" | "dark";
  onClick?: () => {};
}

export default function GenericButton(
  props: GenericButtonProperties
): JSX.Element {
  return (
    <button onClick={props.onClick}>
      <div className={
        `flex flex-row items-center justify-center ${
          props?.type === "primary" || !props?.type
            ? "bg-primary-300"
            : props?.type === "secondary"
              ? props?.variantion === "dark" 
                ? "bg-dark" 
                : "bg-gray"
              : ""
        } ${
          props?.variantion === "big"
            ? "text-dark font-bold text-2xl"
            : "text-white text-xl"
          } ${
          props?.variantion === "big"
           ? "h-[71px]"
           : "h-16"
        } w-fit min-w-[205px] pb-3 rounded-[95px]`
        }>
        {props?.icon ? (
          <props.icon className="h-10 w-10 mr-1 mt-[10px] ml-4" />
        ) : (
          <></>
        )}
        <text
          className={`font-primary text-right mb-[-12px] ${
            props?.icon ? "mr-5" : "mr-6 ml-6"
          }`}>
          {props.text}
        </text>
      </div>
    </button>
  );
}

