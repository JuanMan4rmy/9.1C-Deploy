import React, { useState } from "react";
import "./Login.css";
import Input from "./Input";
import Greeting from "./Greeting";
import HomeButton from "../HomeButton";
import "../HomeButton.css";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signinAuthUserWithEmailAndPassword,
} from "../utils/firebase";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocFromAuth(user);
};

const Login = (props) => {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  const { email, password } = contact;
  const navigate = useNavigate();

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

  // let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signinAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      navigate("/profile", { replace: true });
    } catch (error) {
      console.log("Error in login", error.message);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <body className="login-style">
        <br></br>
        <Greeting text="Welcome" />
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
        <HomeButton class="user buttons" type="submit" onClick={handleSubmit}>
          Login
        </HomeButton>
        <br></br>
        <HomeButton class="user buttons" type="submit" onClick={logGoogleUser}>
          Login With Google
        </HomeButton>
        <br></br>
        <Link classname="link" to="/signup">
          Sign Up
        </Link>
      </body>
    </div>
  );
};
export default Login;
