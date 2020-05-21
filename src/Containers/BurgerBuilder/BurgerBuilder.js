import React, { Component } from "react";

import Burger from "../../Components/Burger/Burger";
import BurgerControls from "../../Components/Burger/BurgerControls/BurgerControls";
import Model from "../../Components/UI/Model/Model";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";

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
    purchasable: true,
    showOrderSummary: false,
  };

  modelOpenHandler = () => {
    this.setState({
      showOrderSummary: true,
    });
  };

  modelCloseHandler = () => {
    this.setState({
      showOrderSummary: false,
    });
  };

  updatePurchasableHandler = (ingredients) => {
    // let ingredients = {...this.state.ingredients};
    let sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({
      purchasable: sum <= 0,
    });
  };

  continuePurchaseHandler = () => {
    alert("Purchased Continue (@-@) !!");
    this.resetPurchasedOrder();
    this.modelCloseHandler();
  };

  resetPurchasedOrder = () => {
    this.setState({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      burgerCost: 400,
      purchasable: true,
      showOrderSummary: false,
    });
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
    this.updatePurchasableHandler(updatedIngredients);
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
      this.updatePurchasableHandler(updatedIngredients);
    }
  };

  checkedDisabledControls = () => {
    let disbaledInfo = { ...this.state.ingredients };
    for (let key in disbaledInfo) {
      disbaledInfo[key] = disbaledInfo[key] <= 0;
    }
    return disbaledInfo;
  };

  render() {
    const disabledControls = this.checkedDisabledControls();
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <Model
          show={this.state.showOrderSummary}
          modelClose={() => this.modelCloseHandler()}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            burgerCost={this.state.burgerCost}
            cancelClicked={() => this.modelCloseHandler()}
            continueClicked={() => this.continuePurchaseHandler()}
          />
        </Model>
        <BurgerControls
          addIngredientClick={(type) => this.addIngredientHandler(type)}
          removeIngredientClick={(type) => this.removeIngredientHandler(type)}
          disabledControls={disabledControls}
          burgerCost={this.state.burgerCost}
          disabled={this.state.purchasable}
          purchasedClick={() => this.modelOpenHandler()}
        />
      </>
    );
  }
}

export default BurgerBuilder;
