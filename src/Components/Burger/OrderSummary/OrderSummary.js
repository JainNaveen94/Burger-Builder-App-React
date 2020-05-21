import React from "react";

import orderSummaryCSS from "./OrderSummary.css";

const orderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>
            {key}
        </span>:{props.ingredients[key]}
      </li>
    );
  });
  return (
    <div className={orderSummaryCSS.OrderSummary}>
      <h2>Order Summary</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout ?</p>
    </div>
  );
};

export default orderSummary;
