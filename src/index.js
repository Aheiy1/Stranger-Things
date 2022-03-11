import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Post } from "./components";



ReactDom.render(
  <Router>
    <Post/>
    
  </Router>,
  document.getElementById("app")
);
