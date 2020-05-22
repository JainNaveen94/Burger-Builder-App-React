import React, { Component } from "react";

// import checkoutCSS from "./Checkout.css";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    burgerCost: 0,
  };

  componentDidMount = () => {
    const data = this.props.history.location.state;
    this.setState({
      ingredients: data.ingredients,
      burgerCost: data.burgerCost
    })
  }

  cancelCheckoutClickedHandler = () => {
    console.log("[Checkout.js] Cancel clicked");
    this.props.history.goBack();
  };

  continueCheckoutClickedHandler = () => {
    console.log("[Checkout.js] Continue clicked");
  };

  render() {
    return (
      <>
        <p>hope You Like its Taste and Order From Here Again !! (@-@)</p>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelCheckoutClicked={() => this.cancelCheckoutClickedHandler()}
          continueCheckoutClicked={() => this.continueCheckoutClickedHandler()}
        />
      </>
    );
  }
}

export default Checkout;
