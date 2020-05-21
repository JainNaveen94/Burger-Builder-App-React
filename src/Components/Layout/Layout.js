import React from "react";

import layoutCSS from "./Layout.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={layoutCSS.container}>{props.children}</main>
    </>
  );
};

export default layout;
