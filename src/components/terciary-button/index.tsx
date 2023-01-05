import React from "react";
import useWindowDimensions from "../../hooks/window-dimensions";

export interface TerciaryButtonProperties {
  text: string;
  alignLeft?: boolean;
  icon: any;
  onClick?: () => {};
}

export default function TerciaryButton(
  props: TerciaryButtonProperties
): JSX.Element {
  const { width } = useWindowDimensions();
  return (
    <button onClick={props.onClick} className="flex flex-row justify-center items-center transition-all ease-in-out hover:scale-110">
      {width > 800 && !props.alignLeft && 
        <div className="flex items-end justify-center w-[91px] mr-3">
          <div
            className={`font-primary text-right text-light-gray`}>
            {props.text}
          </div>
        </div>
      }
      
      <div className="flex flex-row items-center justify-center text-light-gray h-16 w-16 rounded-[95px] bg-gray">
        {props?.icon ? (
          <props.icon className="h-10 w-10" />
        ) : (
          <></>
        )}
      </div>

      {width > 800 && props.alignLeft &&
        <div className="flex items-end justify-center w-[91px] ml-3">
          <div
            className={`font-primary text-left text-light-gray`}>
            {props.text}
          </div>
        </div>
      }
    </button>
  );
}

