import './Button.css';

import { useState } from 'react';

function Button({
  visual,
  type,
  onClick,
  className,
  children,
}) {
  const [isClicked, setIsClicked] = useState(false);
  
  let buttonClass = "button-button";
  if(visual === "link"){
    buttonClass="button-link";
  }

  let buttonType = "button";
  if(type === "submit"){
    buttonType="submit";
  }

  return (
    <button
      className={`button ${buttonClass} ${isClicked ? "button-clicked" : ""} ${className || ""}`}
      type={buttonType}
      onClick={() => {
        setIsClicked(true);
        if(onClick){
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
