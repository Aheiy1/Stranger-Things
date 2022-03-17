import React from "react";
import { Link, Route } from "react-router-dom";
import { Profile, Login, SignUp, LogOut } from "./index.js";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div class="lnk">
        <Link class="link" to="/">
          Home
        </Link>
        <Link class="link" to="/Profile">
          Profile
        </Link>
      </div>
      {!localStorage.getItem("token") ? (
        <div class="btn">
          <Link class="log" to="/Login">
            <button type="button">Login</button>
          </Link>
          <Link class="log" to="/SignUp">
            <button type="button">SignUp</button>
          </Link>
        </div>
      ) : (
        <div class="btn">
          <Link class="log" to="/LogOut">
            <LogOut />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
