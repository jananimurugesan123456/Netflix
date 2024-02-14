import React, { useEffect, useState } from "react";
import axios from "axios";
const Added = () => {
  const [first, setFirst] = useState(null);
  useEffect(() => {
    console.log("iam excueting");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((data) => data.json())
      //   .then((data) => {
      setFirst(res.data);
    });
  }, []);
  return (
    <div className="App">
      <div>
        {first ? (
          <ul>
            {first.map((post) => {
              return (
                <div key={post.id}>
                  <li>{post.title}</li>
                </div>
              );
            })}
          </ul>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default Added;
