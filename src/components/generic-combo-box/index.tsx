import React from "react";
import ComboBox from "react-responsive-combo-box";

export interface InputProperties {
  options?: string[];
  onChange?: (value: any) => void;
  translateInX?: string
}

export default function GenericComboBox(props: InputProperties): JSX.Element {
  return (
    <ComboBox
              inputClassName="bg-dark rounded-[16px] outline-none pt-1"
              highlightColor="#FF4655"
              selectedOptionColor="#6B1B21"
              optionsClassName="hover:bg-primary-300 rounded-[16px] pl-6"
              listClassName="rounded-[16px] bg-dark/50 m-2"
              className={`
              ${props.translateInX ? 'translate-x-' + props.translateInX : 'translate-x-20'}
                absolute
                border-solid
                border-primary-300
                border-2
                backdrop-blur-md 
                rounded-[16px]
                transition ease-in-out hover:border-white
              `}
              options={props.options ?? []}
              enableAutocomplete
              onOptionsChange={option => props.onChange && props.onChange(option)}
            />
  );
}

