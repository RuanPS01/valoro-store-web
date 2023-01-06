import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export interface GenericButtonProperties {
  text: string;
  icon?: any;
  type?: "primary" | "secondary" | "terciary";
  variantion?: "big" | "dark";
  ref?: any;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function GenericButton(
  props: GenericButtonProperties
): JSX.Element {
  return (
    <button ref={props.ref} onClick={props.onClick}>
      <div className={ props.className + ' ' +
        `flex flex-row items-center justify-center ${
          props?.type === "primary" || !props?.type
            ? "bg-primary-300"
            : props?.type === "secondary"
              ? props?.variantion === "dark" 
                ? "bg-dark" 
                : props.active ? "bg-dark shadow-lg shadow-primary-300 border-solid border-primary-300 border-2" : "bg-gray"
              : ""
        } ${
          props?.variantion === "big"
            ? "text-dark font-bold text-3xl transition-all ease-in-out "
              + "hover:scale-110 hover:bg-primary-300/0 hover:text-primary-300 "
              + "hover:border-solid hover:border-4 hover:border-primary-300 "
              + "hover:shadow-lg hover:shadow-primary-300"
            : "text-white text-2xl transition-all ease-in-out hover:bg-primary-100"
          } ${
          props?.variantion === "big"
           ? "h-[71px]"
           : "h-16"
        } w-fit min-w-[160px] pb-3 rounded-[95px]`
        }>
        {props?.icon ? (
          props.active ? <TiArrowSortedDown className="h-10 w-10 mt-[10px]" /> : <props.icon className="h-10 w-10 mr-1 mt-[10px] ml-4" />
        ) : (
          <></>
        )}
        <div
          className={`font-primary text-right mb-[-12px] ${
            props?.icon ? props.active? "" : "mr-5" : "mr-6 ml-6"
          }`}>
          {props.active ? "" : props.text}
        </div>
      </div>
    </button>
  );
}

