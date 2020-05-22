import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
          <Route path="/new-order" exact component={BurgerBuilder} />
          <Route path="/check-out" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect from="/" to="/new-order" exact />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
