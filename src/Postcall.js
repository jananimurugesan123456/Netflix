import React, { useEffect, useState } from "react";
import axios from "axios";
const Postcall = () => {
  const BaseURL = "https://jsonplaceholder.typicode.com/posts/1";

  const [fput, setPut] = useState([]);
  useEffect = () => {
    axios.put(BaseURL).then((res) => {
      setPut(res.data);
    });
  };
  function updatePost() {
    axios
      .put(`${BaseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post.",
      })
      .then((response) => {
        setPut(response.data);
      });
  }

  return (
    <div>
      Postcall
      <div>
        <h1>{fput.title}</h1>
        <button onClick={updatePost}>updatePost</button>
      </div>
    </div>
  );
};

export default Postcall;
