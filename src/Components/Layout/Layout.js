import React from "react";

const layout = (props) => {
  return (
    <>
      <h1>Toolbar, SideDrawer, Backdrop</h1>
      <main>{props.children}</main>
    </>
  );
};

export default layout;
