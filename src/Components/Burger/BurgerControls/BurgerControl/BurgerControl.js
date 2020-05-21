import React from "react";

import burgerControlCSS from "./BurgerControl.css";

const burgerControl = (props) => {
  return (
    <div className={burgerControlCSS.BurgerControl}>
      <div className={burgerControlCSS.Label}>{props.label}</div>
      <button
        onClick={() => props.removeIngredientClick(props.type)}
        className={burgerControlCSS.Less}
        disabled={props.disabledControl}
      >
        Less
      </button>
      <button
        onClick={() => props.addIngredientClick(props.type)}
        className={burgerControlCSS.More}
      >
        More
      </button>
    </div>
  );
};

export default burgerControl;
