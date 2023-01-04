import React from "react";

export interface TerciaryButtonProperties {
  text: string;
  icon: any;
  onClick?: () => {};
}

export default function TerciaryButton(
  props: TerciaryButtonProperties
): JSX.Element {
  return (
    <button onClick={props.onClick} className="flex flex-row justify-center items-center">
      <div className="flex items-end justify-center w-[91px] mr-2">
        <text
          className={`font-primary text-right text-light-gray`}>
          {props.text}
        </text>
      </div>
      
      <div className={
        `flex flex-row items-center justify-center text-light-gray h-16 w-16 rounded-[95px] bg-gray`
        }>
        {props?.icon ? (
          <props.icon className="h-10 w-10" />
        ) : (
          <></>
        )}
        
      </div>
    </button>
  );
}

