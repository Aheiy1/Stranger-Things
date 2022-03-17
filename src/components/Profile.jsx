import React, { useEffect, useState } from "react";
import { DeletePost } from "./index.js";

//messages should be displayed
//  link to post message is from

const Profile = ({ setToken, post, posts, setPosts, postId, userObj }) => {
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    makeMyPosts();
  }, []);

  const makeMyPosts = () => {
    const storedName = localStorage.getItem("username");
    const filteredResult = posts.filter(
      (post) => post.author.username === `${storedName}`
    );
    setMyPosts(filteredResult);
  };

  return (
    <>
      <div>
        <h1 className="welcomeText">
          {`Welcome ${localStorage.getItem("username")}`}
        </h1>
        <h2>{"My Posts:"}</h2>
        {myPosts.map((myPost) => {
          return (
            <>
              <div key={myPost._id}>
                <h3>{myPost.title}</h3>
                <h4>{myPost.author.username}</h4>
                <div>{myPost.description}</div>
                <div>{myPost.price}</div>
                <div>{myPost.location}</div>
                <div>
                  {myPost.willDeliver ? "Will Deliver" : "Will Not Deliver"}
                </div>
                <DeletePost
                  post={myPost}
                  postId={myPost._id}
                  posts={myPosts}
                  setPosts={setMyPosts}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
