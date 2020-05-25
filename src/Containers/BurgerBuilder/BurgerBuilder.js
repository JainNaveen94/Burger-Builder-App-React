import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionType from "../../store/action";

import Burger from "../../Components/Burger/Burger";
import BurgerControls from "../../Components/Burger/BurgerControls/BurgerControls";
import Model from "../../Components/UI/Model/Model";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

import axios from "../../services/axios/axios-order";

// import { placeOrder } from "../../services/orders/order";

// const INGREDIENT_PRICE_LIST = {
//   salad: 100,
//   bacon: 40,
//   meat: 200,
//   cheese: 180,
// };

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  state = {
    // ingredients: null,
    // burgerCost: 400,
    purchasable: true,
    showOrderSummary: false,
    loading: false,
    error: false,
  };

  componentDidMount = () => {
    // axios
    //   .get("/ingredient.json")
    //   .then((response) => {
    //     this.setState({
    //       ingredients: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       error: true,
    //     });
    //   });
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
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    return sum <= 0;
  };

  continuePurchaseHandler = () => {
    // this.props.history.push("/check-out", {
    //   ingredients: { ...this.props.ingredients },
    //   burgerCost: this.props.burgerCost,
    // });
    this.props.history.push("/check-out");
  };

  // getOrderDetails() {
  //   return {
  //     id: (Date.now() + Math.random()).toFixed(0),
  //     ingredients: this.props.ingredients,
  //     burgerCost: this.state.burgerCost,
  //     customer: {
  //       name: "Naveen Jain",
  //       address: {
  //         street: "kar",
  //         zipCode: "234577",
  //         country: "India",
  //       },
  //       email: "naveen@myburger.com",
  //     },
  //     deliveryMethod: "fastest",
  //   };
  // }

  // resetPurchasedOrder = () => {
  //   this.setState({
  //     ingredients: null,
  //     burgerCost: 400,
  //     purchasable: true,
  //     showOrderSummary: false,
  //     loading: false,
  //   });
  // };

  // Just to add Ingredient to local state not used when implemented Redux

  // addIngredientHandler = (type) => {
  //   // Getting and Updating the Ingredient Count Locally
  //   let oldIngredientValue = this.state.ingredients[type];
  //   let updatedIngredientValue = oldIngredientValue + 1;

  //   //Getting Ingredients copy from State
  //   let updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedIngredientValue;

  //   // getting and Updating the Burger Price as Per Ingredient Type
  //   let burgerCost = this.state.burgerCost;
  //   burgerCost = burgerCost + INGREDIENT_PRICE_LIST[type];

  //   // Updating the State Object
  //   this.setState({
  //     ingredients: updatedIngredients,
  //     burgerCost: burgerCost,
  //   });
  //   this.updatePurchasableHandler(updatedIngredients);
  // };

  // Just to add Ingredient to local state not used when implemented Redux

  // removeIngredientHandler = (type) => {
  //   // Getting and Updating the Ingredient Count Locally
  //   if (this.state.ingredients[type] > 0) {
  //     let oldIngredientValue = this.state.ingredients[type];
  //     let updatedIngredientValue = oldIngredientValue - 1;
  //     //Getting Ingredients copy from State
  //     let updatedIngredients = { ...this.state.ingredients };
  //     updatedIngredients[type] = updatedIngredientValue;

  //     // getting and Updating the Burger Price as Per Ingredient Type
  //     let burgerCost = this.state.burgerCost;
  //     burgerCost = burgerCost - INGREDIENT_PRICE_LIST[type];

  //     // Updating the State Object
  //     this.setState({
  //       ingredients: updatedIngredients,
  //       burgerCost: burgerCost,
  //     });
  //     this.updatePurchasableHandler(updatedIngredients);
  //   }
  // };

  checkedDisabledControls = () => {
    let disbaledInfo = { ...this.props.ingredients };
    for (let key in disbaledInfo) {
      disbaledInfo[key] = disbaledInfo[key] <= 0;
    }
    return disbaledInfo;
  };

  render = () => {
    const disabledControls = this.checkedDisabledControls();

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingrediant Can't be Loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.props.ingredients} />
          <BurgerControls
            addIngredientClick={(type) =>
              this.props.onIngredientAddClicked(type)
            }
            removeIngredientClick={(type) =>
              this.props.onIngredientRemoveClicked(type)
            }
            disabledControls={disabledControls}
            burgerCost={this.props.burgerCost}
            disabled={this.updatePurchasableHandler(this.props.ingredients)}
            purchasedClick={() => this.modelOpenHandler()}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          burgerCost={this.props.burgerCost}
          cancelClicked={() => this.modelCloseHandler()}
          continueClicked={() => this.continuePurchaseHandler()}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Model
          show={this.state.showOrderSummary}
          modelClose={() => this.modelCloseHandler()}
        >
          {orderSummary}
        </Model>
        {burger}
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    burgerCost: state.burgerCost,
  };
};

const mapDispatcherToProps = (dispatch) => {
  return {
    onIngredientAddClicked: (type) =>
      dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: type }),
    onIngredientRemoveClicked: (type) =>
      dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: type }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(WithErrorHandler(BurgerBuilder, axios));
