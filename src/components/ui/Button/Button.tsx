import React, { useEffect, useState } from "react";
import cmpstyle from "./Button.module.css";

interface IButtonProps {
  style?: object;
  bgcolor?: "tomato" | "skyble" | "aquamarin";
  type?: "button" | "reset" | "submit";
  clickAction: (a: string) => void;
  children: string | React.ReactElement | Array<string | React.ReactElement>;
}

const Button: React.FC<IButtonProps> = ({
  style,
  bgcolor,
  clickAction,
  children,
  type = "button",
}) => {
  const [clicked, setclicked] = useState(false);
  useEffect(()=>{
    setTimeout(() =>{
      setclicked(false)
    }, 300);
  }, [clicked]);
  
  const buttonOnClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setclicked(true);
    
    if (clickAction) {
      clickAction("on m'a violamment cliqué dessous");
    }
  };
  return (
    <button
      type={type}
      className={`${cmpstyle.Button}${clicked ? " "+ cmpstyle.clicked : ""}`}
      style={{ ...style, backgroundColor: bgcolor }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
