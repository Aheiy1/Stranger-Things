import React from "react";
import { Link, Route } from "react-router-dom";
import { Profile, Login, SignUp, LogOut } from "./index.js";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      {!localStorage.getItem("token") ? (
        <>
          <Link to="/Login">
            <button type="button">Login</button>
          </Link>
          <Link to="/SignUp">
            <button type="button">SignUp</button>
          </Link>
        </>
      ) : (
        <Link to="/LogOut">
          <LogOut />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
