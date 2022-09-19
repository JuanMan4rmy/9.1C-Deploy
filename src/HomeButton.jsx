import React from "react";
import "./HomeButton.css";

function HomeButton(props) {
  return (
    <button
      class={props.class}
      type={props.type}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default HomeButton;
