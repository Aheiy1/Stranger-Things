import React, { useState } from "react";
import { newPost } from "../api/posts";
import { useHistory } from "react-router-dom";

const CreatePost = ({ posts, setPosts }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  let history = useHistory();
  // const isChecked = () => {
  //   let checkbox = document.querySelector("#willDeliver");
  //   if (checkbox) {
  //     let query = setWillDeliver(true);
  //     console.log(query, "query");
  //     return query;
  //   }
  // };

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      // isChecked();
      console.log(localStorage.getItem("token"));
      const result = await newPost(
        localStorage.getItem("token"),
        title,
        description,
        price,
        location,
        willDeliver
      );
      console.log(willDeliver, "will you deliver");
      console.log(result, "result");
      if (result.success) {
        //Display Error
        setPosts([result.data.post, ...posts]);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setTitle("");
      setDescription("");
      setPrice("");
      setWillDeliver(false);
      history.push("/");
    }
  };
  return (
    <div>
      <form id="newPost" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <span className="input">
          <input
            name="price"
            type="text"
            placeholder="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </span>
        <span className="input">
          <input
            name="location"
            type="text"
            placeholder="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </span>
        <input
          type="checkbox"
          id="willDeliver"
          value={willDeliver}
          onChange={(event) => setWillDeliver(event.target.checked)}
        ></input>
        <label> Will Deliver?</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
