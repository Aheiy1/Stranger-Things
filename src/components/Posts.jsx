import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreatePost, DeletePost, WriteMessage } from "./index.js";
import { fetchPosts } from "../api/posts";

const Post = ({
  setToken,
  post,
  setPost,
  postId,
  setPostId,
  posts,
  setPosts,
}) => {
  const [writeMessage, setWriteMessage] = useState({
    idx: undefined,
    button: true,
  });
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const allPosts = await fetchPosts();
  //     setPosts(allPosts.reverse());
  //   };
  //   getAllPosts();
  // }, []);
  return (
    <>
      <h1>Posts</h1>
      {localStorage.getItem("token") ? (
        <Link to="CreatePost">
          <button type="button">Create Post</button>
        </Link>
      ) : null}
      <div class="cardField">
        {posts.map((post, i) => {
          // console.log("Post: ", post);
          return (
            <div class="postCard" key={i}>
              <div class="title">{post.title}</div>
              <div class="author">{post.author.username}</div>
              <div class="description">{post.description}</div>
              <div class="price">{post.price}</div>
              <div class="location">{post.location}</div>
              <div class="willDeliver">
                {post.willDeliver ? "Will Deliver" : "Will Not Deliver"}
              </div>
              {localStorage.getItem("username") === post.author.username ? (
                /*<EditPost setToken={setToken} post={post} postId={post._id} />*/
                <DeletePost
                  setToken={setToken}
                  post={post}
                  postId={post._id}
                  posts={posts}
                  setPosts={setPosts}
                />
              ) : (
                <WriteMessage
                  postId={post._id}
                  writeMessage={writeMessage}
                  setWriteMessage={setWriteMessage}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
