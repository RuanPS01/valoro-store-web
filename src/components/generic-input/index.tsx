import React from "react";

export interface InputProperties {
  title?: string;
  titlePosition?: 'topLeft' | 'topRight' | 'bottonLeft' | 'bottonRight';
  characterIndicator?: string;
  type?: string;
  className?: string;
  onChange?: (value: string) => void
}

export default function GenericInput(props: InputProperties): JSX.Element {
  return (
    <div className={props?.className + " flex flex-col justify-center items-start h-16 bg-gray w-96 rounded-[95px] m-4"}>
      {
        props.characterIndicator && 
          <h1 className="font-primary absolute text-primary-300 m-5 text-xl">{props.characterIndicator}</h1>
      }
      {
        props.titlePosition === 'topRight' && 
          <h1 className="font-primary relative text-primary-300 text-xl -top-12 -right-64">{props.title}</h1>
      }
      {
        props.titlePosition === 'topLeft' && 
          <h1 className="font-primary relative text-primary-300 text-xl -top-12 -right-6">{props.title}</h1>
      }
      {
        props.titlePosition === 'bottonLeft' && 
          <h1 className="font-primary relative text-primary-300 text-xl -top-12 -right-64">{props.title}</h1>
      }
      {
        props.titlePosition === 'bottonRight' && 
          <h1 className="font-primary relative text-primary-300 text-xl top-11 -right-64">{props.title}</h1>
      }
      <input type={props.type} onChange={(event) => props.onChange && props.onChange(event.target.value)} className="absolute ml-12 w-[320px] h-10 pl-3 rounded-[95px] font-primary text-white bg-gray/0 outline-none"></input>
      
    </div>
  );
}

