import React, { Component } from "react";

// import checkoutCSS from "./Checkout.css";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 2,
      cheese: 2,
      meat: 2,
    },
  };

  cancelCheckoutClickedHandler = () => {
    console.log("[Checkout.js] Cancel clicked");
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
