import React from "react";
import { useParams } from "react-router";

const Post1 = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h1>hello</h1>
      <h2>Post{id}</h2>
    </div>
  );
};

export default Post1;
