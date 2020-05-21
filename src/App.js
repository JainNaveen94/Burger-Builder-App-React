import React from "react";
import appCSS from "./App.css";

import Layout from "./hoc/Layout/Layout";

import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";

function App() {
  return <div className={appCSS.App}>
    <Layout>
      <BurgerBuilder />
    </Layout>
  </div>;
}

export default App;
