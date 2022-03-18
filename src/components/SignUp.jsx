import React, { useState } from "react";
import { registerUser } from "../api/users";
import { useHistory } from "react-router-dom";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await registerUser(username, password);
      if (result.success) {
      }
      localStorage.setItem("token", result.data.token);
      console.log(result);
      setToken(result.data.token);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
      history.push("/");
    }
  };

  return (
    <div>
      <form id="newUser" onSubmit={userSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
