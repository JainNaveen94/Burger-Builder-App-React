import React, { Component } from "react";

import ordersCSS from "./Orders.css";

import Order from "../../Components/Order/Order";
import Spinner from "../../Components/UI/Spinner/Spinner";

import axios from "../../services/axios/axios-order";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  generateOrderListFromResponseData = (data) => {
    const Orders = [];
    for (let key in data) {
      Orders.push({
        ...data[key],
      });
    }
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        const Orders = [];
        for (let key in response.data) {
          Orders.push({
            ...response.data[key],
          });
        }
        this.setState({ loading: false, orders: Orders });
        console.log(Orders);
      })
      .catch((error) => {
        this.setState({ loading: false, orders: [] });
      });
  };

  render() {
    let orderList = this.state.orders.map((order) => {
      return <Order key={order.id} orderDetail={order} />;
    });

    let orderDisplay = (
      <>
        <div className={ordersCSS.Title}><h1>Order List</h1></div>
        <div className={ordersCSS.Orders}>{orderList}</div>
      </>
    );

    if (this.state.loading) {
      orderDisplay = <Spinner />;
    }

    return <>{orderDisplay}</>;
  }
}

export default Orders;
