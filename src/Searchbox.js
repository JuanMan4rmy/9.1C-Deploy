import React from "react";
import { Input } from "semantic-ui-react";
import { db } from "./utils/firebase";
import { useState, useEffect } from "react";

function InputExampleActionIconButton() {
  return <Input action={{ icon: "search" }} placeholder="Search..." />;
}

export default InputExampleActionIconButton;
