import React from "react";
import { Route, Switch } from "react-router-dom";

import appCSS from "./App.css";

import Layout from "./hoc/Layout/Layout";

import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import Orders from "./Containers/Orders/Orders";

function App() {
  return (
    <div className={appCSS.App}>
      <Layout>
        <Switch>
          <Route path="/check-out" extact component={Checkout} />
          <Route path="/orders" extact component={Orders} />
          <Route path="/" extact component={BurgerBuilder} />

        </Switch>
        {/* <BurgerBuilder />
      <Checkout /> */}
      </Layout>
    </div>
  );
}

export default App;
