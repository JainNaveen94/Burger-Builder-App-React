import React from "react";

import burgerCSS from "./Burger.css";

import BurgerIngrediant from "./BurgerIngrediants/BurgerIngrediant";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngrediant key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Add Some Ingredients !!</p>;
  }

  return (
    <div className={burgerCSS.Burger}>
      <BurgerIngrediant type="bread-top" />
      {/* <BurgerIngrediant type="cheese" />
      <BurgerIngrediant type="meat" /> */}
      {transformedIngredients}
      <BurgerIngrediant type="bread-bottom" />
    </div>
  );
};

export default burger;
