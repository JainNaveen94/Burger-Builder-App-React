import React from "react";

import orderCSS from "./Order.css";

const order = (props) => {
  
  let tableRow = Object.keys(props.orderDetail.ingredients).map((key) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{props.orderDetail.ingredients[key]}</td>
      </tr>
    );
  });

  return (
    <div className={orderCSS.Order}>
      <h1>{props.orderDetail.customer.name}</h1>
      <p className={orderCSS.Price}>Rs.{props.orderDetail.burgerCost}</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{tableRow}</tbody>
        </table>
      </div>
      <p>
        <button>Order Details</button>
      </p>
    </div>
  );
};

export default order;
