import React from "react";

import checkoutSummaryCSS from "./CheckoutSummary.css";

import Burger from '../../Burger/Burger';

import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
  return <div className={checkoutSummaryCSS.CheckoutSummary}>
      <Burger ingredients={props.ingredients}/>
      <Button btnType="Danger" clicked={() => props.cancelCheckoutClicked()}>Cancel</Button>
      <Button btnType="Success" clicked={() => props.continueCheckoutClicked()}>Continue</Button>
  </div>;
};

export default checkoutSummary;
