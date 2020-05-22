import React, { Component } from "react";

import contactDataCSS from "./ContactData.css";

import Button from "../../../Components/UI/Button/Button";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import WithErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";

import axios from "../../../services/axios/axios-order";

class ContactData extends Component {
  state = {
    customerDetail: {
      name: "Naveen Jain",
      address: {
        street: "kar",
        zipCode: "234577",
        country: "India",
      },
      email: "naveen@myburger.com",
    },
    loading: false,
  };

  getOrderDetails() {
    return {
      id: (Date.now() + Math.random()).toFixed(0),
      ingredients: this.props.ingredients,
      burgerCost: this.props.price,
      customer: this.state.customerDetail,
      deliveryMethod: "fastest",
    };
  }

  generateOrderHandler = (event) => {
    // event.preventDefault();
    this.setState({
      loading: true,
    });
    const orderDetails = this.getOrderDetails();
    axios
      .post("/orders.json", orderDetails)
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.history.replace("/");
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    let form = (
      <>
        <form>
          <input
            className={contactDataCSS.input}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          <input
            className={contactDataCSS.input}
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <input
            className={contactDataCSS.input}
            type="text"
            name="street"
            placeholder="Enter Street"
          />
          <input
            className={contactDataCSS.input}
            type="text"
            name="zipCode"
            placeholder="Enter Zipcode"
          />
          <input
            className={contactDataCSS.input}
            type="text"
            name="country"
            placeholder="Enter Contry"
          />
        </form>
        <Button btnType="Success" clicked={this.generateOrderHandler}>
          Order
        </Button>
      </>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={contactDataCSS.ContactData}>
        <p>::: Enter Your Contact Details :::</p>
        {form}
      </div>
    );
  }
}

export default WithErrorHandler(ContactData, axios);
