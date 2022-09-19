import React from "react";
import "./PostButton.css";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link className="link" to="/home">
      <button type="submit">Go Home</button>
    </Link>
  );
}
export default HomeButton;
