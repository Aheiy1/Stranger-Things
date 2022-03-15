import React from "react";

//messages should be displayed
//  link to post message is from

//WHY IS THIS NOT WORKING??!?
const Profile = ({ posts, setPosts, postId }) => {
  const filteredResult = posts.filter(
    (post) => post.author.username === localStorage.getItem("username")
  );

  console.log(filteredResult);
  setPosts(filteredResult);

  return (
    <>
      <div>
        <h1 className="welcomeText">
          {`Welcome ${localStorage.getItem("username")}`}
        </h1>
        <h2>{"Messages to me:"}</h2>
        {/* {{ filteredResult }} */}
      </div>
    </>
  );
};

export default Profile;
