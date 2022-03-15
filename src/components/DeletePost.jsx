import React from "react";
import { getUserId } from "../api/users";
import { removePost } from "../api/posts";

const DeletePost = ({ posts, setPosts, postId }) => {
  //   console.log("postId delete component: ", postId);
  const storedToken = localStorage.getItem("token");
  const handleDelete = async () => {
    try {
      // console.log('postIdToDelete: '. postIdToDelete)
      const result = await removePost(postId, storedToken);
      console.log("removePost result: ", result);
      if (result.success) {
        const filteredResult = posts.filter((post) => post._id !== postId);
        setPosts(filteredResult);
        result;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <button type="button" className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeletePost;