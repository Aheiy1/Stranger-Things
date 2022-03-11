import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts, "posts");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
      );
      const data = await response.json();
      //   console.log(response, "response");
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>

      {/* {posts.map((post => 
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>))} */}
    </>
  );
};

export default Post;
