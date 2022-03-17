import React, { useEffect, useState } from "react";
import { DeletePost } from "./index.js";
import { fetchMyPosts } from "../api/posts.js";
//messages should be displayed
//  link to post message is from

const Profile = ({ setToken, post, posts, setPosts, postId, userObj }) => {
  const [myPosts, setMyPosts] = useState([]);
  const storedName = localStorage.getItem("username");

  const makeMyPosts = async () => {
    try {
      const filteredResult = posts.filter(
        (post) => post.author.username === `${storedName}`
      );

      const result = await fetchMyPosts();
      setMyPosts(filteredResult);

      console.log(myPosts, "Myposts");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    makeMyPosts();
  }, []);

   function userTernary () {
    if (storedName){
      return(
        <>
      <h1 className="welcomeText">
      Welcome {storedName}
    </h1> 
     <h2>{"My Posts:"}
     </h2>
       <div className="cardField">
         {myPosts.map((myPost) => {
           return (
             <>
               <div className="postCard" key={`${myPost._id}Profile`}>
                 <div className="title">{myPost.title}</div>
                 <div className="author">{myPost.author.username}</div>
                 <div className="description">{myPost.description}</div>
                 <div className="location">{myPost.location}</div>
                 <div className="price">
                   {myPost.price},{" "}
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
    )

    } else { return ( 

      <h1>Please Login</h1>
      )
    }

  }

  return (
    userTernary()
      );
    };

export default Profile;
