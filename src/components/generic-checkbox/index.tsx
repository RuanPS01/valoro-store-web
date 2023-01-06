import React from "react";

export interface InputProperties {
  defaultChecked?: boolean;
  onChange?: (value: any) => void;
  type?: "checkbox" | "radio";
  value?: string;
  checked?: boolean
}

export default function GenericCheckboxOrRadio(props: InputProperties): JSX.Element {
  return (
    <input
      className="
                appearance-none 
                checked:bg-primary-300 
                bg-gray 
                border-solid
                border-primary-300
                border-[2px]
                h-4 w-4
                rounded-[4px]
                outline-none
              "
      type={props.type ?? 'checkbox'} 
      value={props.value}
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      onChange={event =>  props.onChange && props.onChange(event.target.checked)}
    />
  );
}

