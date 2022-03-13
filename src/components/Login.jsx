import React, { useState } from "react";
import { fetchLoginResults } from "../api/users";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginResults, setLoginResults] = useState("");

  const userSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = loginResults;
   
    try {
      const loginData= await fetchLoginResults({ username, password });
      setLoginResults(loginData)
    } catch (error) {
        console.error("trouble getting login results")
    }
  };

  return (
    <div>
      <form id="userQuery" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
