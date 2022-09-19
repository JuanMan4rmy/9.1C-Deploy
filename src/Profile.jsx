import React from "react";
import "./Profile.css";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import HomeButton from "./HomeButton";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  const onLogout = () => {
    auth.signOut();
    navigate("/home");
  };
  return (
    <div className="Profile">
      <br></br>
      {user ? <h1>{user.email}</h1> : <h1>Not logged in</h1>}
      <button type="submit" onClick={onLogout} id="centre">
        {user ? "Logout" : "Go Home"}
      </button>
    </div>
  );
}

export default Profile;
