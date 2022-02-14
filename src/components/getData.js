import React, { useState } from "react";
const GetData = () => {
  const [posts, setPosts] = useState([]);
  const post = fetch("https://jsonplaceholder.typicode.com/posts");
  const data = post.then((response) => response.json());
  data.then((postData) => setPosts(postData));
  return (
    <div>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};

export default GetData;
