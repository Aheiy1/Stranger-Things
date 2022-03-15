import React from "react";
import { useEffect, useState } from "react";
import Login from "./Login";
import Posts from "./Posts";
import SignUp from "./SignUp";

const Main = () => {
  const [token, setToken] = useState("");
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div>
      <Login setToken={setToken} />
      <SignUp setToken={setToken} />

      <Posts setToken={setToken} postId={postId} setPostId={setPostId} />
    </div>
  );
};

export default Main;
