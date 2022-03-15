import React, { useState } from "react";
import { newPost } from "../api/posts";

const CreatePost = ({posts, setPosts}) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(localStorage.getItem("token"));
      const result = await newPost(
        localStorage.getItem("token"),
        title,
        description,
        price,
        willDeliver
      );
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
          &#36;
          <input
            name="price"
            type="number"
            step="0.01"
            min="0"
            placeholder="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </span>
        <input type="checkbox" id="willDeliver" value={willDeliver}></input>
        <label for="willDeliver"> Will Deliver?</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
