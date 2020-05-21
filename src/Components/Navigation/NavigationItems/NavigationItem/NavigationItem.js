import React from "react";

import navigationItemCSS from "./NavigationItem.css";

const navigationItem = (props) => {
  return (
    <li className={navigationItemCSS.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? navigationItemCSS.active : null}
      >
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
