import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await fetchPosts();
      setPosts(allPosts);
    };
    getAllPosts();
  }, []);
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post, i) => {
        console.log("Post: ", post);
        return (
          <div key={i}>
            <h3>{post.title}</h3>
            <div>{post.description}</div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
