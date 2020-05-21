import React from "react";

import layoutCSS from "./Layout.css";

const layout = (props) => {
  return (
    <>
      <h1>Toolbar, SideDrawer, Backdrop</h1>
      <main className={layoutCSS.container}>{props.children}</main>
    </>
  );
};

export default layout;
