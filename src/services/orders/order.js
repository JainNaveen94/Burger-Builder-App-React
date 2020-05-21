import axios from "../axios/axios-order";

const placeOrder = (orderObj) => {
  axios
    .post("/orders.json", orderObj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export { placeOrder };
