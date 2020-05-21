import React from "react";

import orderSummaryCSS from "./OrderSummary.css";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <div className={orderSummaryCSS.OrderSummary}>
      <h2>Order Summary</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout ?</p>
      <p>
        <span>Burger Cost :: </span>
        <strong>{props.burgerCost}</strong>
      </p>
      <Button btnType="Danger" clicked={() => props.cancelClicked()}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={() => props.continueClicked()}>
        Continue
      </Button>
    </div>
  );
};

export default orderSummary;
