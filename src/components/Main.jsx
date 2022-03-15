import React from "react";
import { useEffect, useState } from "react";
import Login from "./Login";
import Posts from "./Posts";
import SignUp from "./SignUp";
import LogOut from "./LogOut";
import { Link, Route } from "react-router-dom";
import { Switch, useHistory } from "react-router-dom";
import CreatePost from "./CreatePost";

const Main = ({ posts, setPosts }) => {
  const [token, setToken] = useState("");
  const [postId, setPostId] = useState(null);

  useEffect(() => {

    console.log(token);
  }, []);

  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
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
      <Switch>
        <Route path="/Login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/SignUp">
          <SignUp setToken={setToken} />
        </Route>
        <Route path="/CreatePost">
          <CreatePost setToken={setToken} setPosts={setPosts} posts={posts} />
        </Route>
        <Route path="/">
          <Posts setToken={setToken} postId={postId} setPostId={setPostId} />
        </Route>
      </Switch>
      <div>
        {/* <LogOut />
       
          <Login setToken={setToken} />
     

        <SignUp setToken={setToken} />

        <Posts setToken={setToken} postId={postId} setPostId={setPostId} /> */}
      </div>
    </>
  );
};

export default Main;
