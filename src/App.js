import React from "react";
import "./App.css";
import Homepage from "./routes/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import NavigationBar from "./NavigationBar/NavigationBar.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Post from "./PostPage/Post.js";
import QuestionPage from "./QuestionPage/QuestionPage.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="home" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="post" element={<Post />} />
        <Route path="question" element={<QuestionPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
