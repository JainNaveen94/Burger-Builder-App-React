import React, { Component } from "react";

import Burger from "../../Components/Burger/Burger";
import BurgerControls from "../../Components/Burger/BurgerControls/BurgerControls";

const INGREDIENT_PRICE_LIST = {
  salad: 100,
  bacon: 40,
  meat: 200,
  cheese: 180,
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    burgerCost: 400,
  };

  addIngredientHandler = (type) => {
    // Getting and Updating the Ingredient Count Locally
    let oldIngredientValue = this.state.ingredients[type];
    let updatedIngredientValue = oldIngredientValue + 1;

    //Getting Ingredients copy from State
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngredientValue;

    // getting and Updating the Burger Price as Per Ingredient Type
    let burgerCost = this.state.burgerCost;
    burgerCost = burgerCost + INGREDIENT_PRICE_LIST[type];

    // Updating the State Object
    this.setState({
      ingredients: updatedIngredients,
      burgerCost: burgerCost,
    });
  };

  removeIngredientHandler = (type) => {
    // Getting and Updating the Ingredient Count Locally
    if (this.state.ingredients[type] > 0) {
      let oldIngredientValue = this.state.ingredients[type];
      let updatedIngredientValue = oldIngredientValue - 1;
      //Getting Ingredients copy from State
      let updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedIngredientValue;

      // getting and Updating the Burger Price as Per Ingredient Type
      let burgerCost = this.state.burgerCost;
      burgerCost = burgerCost - INGREDIENT_PRICE_LIST[type];

      // Updating the State Object
      this.setState({
        ingredients: updatedIngredients,
        burgerCost: burgerCost,
      });
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
        addIngredientClick={(type) => this.addIngredientHandler(type)}
        removeIngredientClick={(type) => this.removeIngredientHandler(type)}
        />
      </>
    );
  }
}

export default BurgerBuilder;
