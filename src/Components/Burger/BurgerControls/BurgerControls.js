import React from "react";

import burgerControlsCSS from "./BurgerControls.css";

import BurgerControl from "./BurgerControl/BurgerControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const burgerControls = (props) => {
  return (
    <div className={burgerControlsCSS.BurgerControls}>
      {controls.map((ctrl) => {
        return (
          <BurgerControl
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            addIngredientClick={(type) => props.addIngredientClick(type)}
            removeIngredientClick={(type) => props.removeIngredientClick(type)}
          />
        );
      })}
    </div>
  );
};

export default burgerControls;
