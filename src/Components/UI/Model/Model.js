import React from "react";

import modelCSS from "./Model.css";

import Backdrop from "../Backdrop/Backdrop";

const model = (props) => {
  return (
    <>
    <Backdrop show={props.show} clicked={() => props.modelClose()} />
    <div
      className={modelCSS.Model}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
    </>
  );
};

export default model;
