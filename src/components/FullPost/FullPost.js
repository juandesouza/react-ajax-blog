import React, { useEffect, useState } from "react";
import axios from "axios";

import "./FullPost.css";

const FullPost = ({ id }) => {
  const [loadedPost, setLoadedPost] = useState(null);

  useEffect(() => {
    if (id) {
      if (!loadedPost || (loadedPost && loadedPost.id !== id))
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + id)
          .then(response => {
            console.log(response);
            setLoadedPost(response.data);
          });
    }
  }, []);

  let post = (
    <p style={{ textAlign: "center" }}>Please select a Post!</p>
  );
  if (id) {
    <p style={{ textAlign: "center" }}>Please select a Post!</p>;
  } else if (loadedPost) {
    post = (
      <div className="FullPost">
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>
    );
  }

  return post;
};

export default FullPost;
