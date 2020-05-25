import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// import checkoutCSS from "./Checkout.css";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  // state = {
  //   ingredients: {
  //     salad: 0,
  //     bacon: 0,
  //     cheese: 0,
  //     meat: 0,
  //   },
  //   burgerCost: 0,
  // };

  // componentWillMount = () => {
  //   const data = this.props.history.location.state;
  //   if (data !== null && data !== undefined) {
  //     this.setState({
  //       ingredients: data.ingredients ? data.ingredients : {},
  //       burgerCost: data.burgerCost ? data.burgerCost : 0,
  //     });
  //   }
  // };

  cancelCheckoutClickedHandler = () => {
    console.log("[Checkout.js] Cancel clicked");
    this.props.history.goBack();
  };

  continueCheckoutClickedHandler = () => {
    console.log("[Checkout.js] Continue clicked");
    this.props.history.replace("/check-out/contact-data");
  };

  render() {
    return (
      <>
        <p>hope You Like its Taste and Order From Here Again !! (@-@)</p>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          burgerCost={this.props.burgerCost}
          cancelCheckoutClicked={() => this.cancelCheckoutClickedHandler()}
          continueCheckoutClicked={() => this.continueCheckoutClickedHandler()}
        />
        {/* <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.burgerCost}
              {...props}
            />
          )}
        /> */}
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    ingredients: state.ingredients,
    burgerCost: state.burgerCost,
  };
};

export default connect(mapStateToProp)(Checkout);
