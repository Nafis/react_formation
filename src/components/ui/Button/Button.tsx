import React from 'react';
import cmpstyle from './Button.module.css'


interface IButtonProps{
  style?:object  ;
  bgcolor?:'tomato'|'skyble'|'aquamarin';
  type?:'button'|'reset'|'submit';
  clickAction:(a:string)=>void;
  children:string | React.ReactElement | Array<string|React.ReactElement> 
}

const Button:React.FC<IButtonProps> = ({
  style, 
  bgcolor, 
  clickAction,
  children, 
  type="button"
}) => {
  console.trace(style);
  const buttonOnClick = ( 
    evt:React.MouseEvent<HTMLButtonElement, MouseEvent >
  ) =>{
    console.log("button clicked", evt);
    if (clickAction){
      clickAction("on m'a violamment cliqué dessous");
    }
  };
  return ( 

    <button 
      type={type} 
      className={cmpstyle.Button}
      style={{...style, backgroundColor: bgcolor}}
      data-testid="Button"
      onClick= {buttonOnClick}
      
      >
      {children}
    </button>
  )
};


export default Button;
