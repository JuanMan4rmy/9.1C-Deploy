import React, { useState } from "react";
import "./SignUp.css";
import Input from "../Login/Input";
import Greeting from "../Login/Greeting";
import HomeButton from "../HomeButton";
import Login from "../Login/Login";
import "../HomeButton.css";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../utils/firebase";

const SignUp = (props) => {
  const [contact, setContact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = contact;

  console.log(contact);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      navigate("/login", { replace: true });
    } catch (error) {
      console.log("Error in creating user", error.message);
    }
  };

  return (
    <div className="signup-style">
      <br></br>
      <Greeting text="Sign Up" />
      <br></br>
      <Input
        name="displayName"
        type="text"
        placeholder="name"
        onChange={handleChange}
        value={contact.displayName}
      />
      <br></br>
      <Input
        name="email"
        type="text"
        placeholder="email"
        onChange={handleChange}
        value={contact.email}
      />
      <br></br>
      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={contact.password}
      />
      <br></br>
      <Input
        name="confirmPassword"
        type="password"
        placeholder="confirmPassword"
        onChange={handleChange}
        value={contact.confirmPassword}
      />
      <br></br>

      <HomeButton class="user buttons" type="submit" onClick={handleSubmit}>
        Sign Up
      </HomeButton>

      <br></br>
    </div>
  );
};
export default SignUp;
