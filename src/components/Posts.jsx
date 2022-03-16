import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/posts";
import CreatePost from "./CreatePost";
import DeletePost from "./DeletePost";

const Post = ({ setToken, postId, setPostId, posts, setPosts }) => {
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
        // <CreatePost setToken={setToken} setPosts={setPosts} posts={posts} />
        <Link to="CreatePost">
          <button type="button">Create Post</button>
        </Link>
      ) : null}
      {posts.map((post, i) => {
        console.log("Post: ", post);
        return (
          <div key={i}>
            <h3>{post.title}</h3>
            <h4>{post.author.username}</h4>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.location}</div>
            <div>{post.willDeliver ? "Will Deliver" : "Will Not Deliver"}</div>
            {
              localStorage.getItem("username") === post.author.username ? (
                /*<EditPost setToken={setToken} post={post} postId={post._id} />*/
                <DeletePost
                  setToken={setToken}
                  post={post}
                  postId={post._id}
                  posts={posts}
                  setPosts={setPosts}
                />
              ) : null /*<button type= "button"><WriteMessage setToken={setToken}
              post={post}
              postId={post._id}
              posts={posts}
              setPosts={setPosts} /></button>*/
            }
          </div>
        );
      })}
    </>
  );
};

export default Post;
