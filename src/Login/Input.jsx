import React from "react";
import "./Login.css";

const Input = (props) => {
  return (
    <div className="Login-Input">
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
export default Input;
