import React, { useEffect, useState } from "react";
import axios from "axios";

import "./FullPost.css";

const FullPost = ({ id }) => {
  const [loadedPost, setLoadedPost] = useState(null);

  useEffect(() => {
    if (id) {
      if (!loadedPost || (loadedPost && loadedPost.id !== id)) {
        const fetchData = async () => {
          let res = await axios.get("/posts/" + id);
          const { data } = res;
          setLoadedPost(data);
        };
        fetchData();
      }
    }
  }, [id]);

  const deletePostHandler = async () => {
    const deleteData = await axios.delete("/posts/" + id);
    console.log(deleteData);
  };

  let post = (
    <p style={{ textAlign: "center" }}>Please select a Post!</p>
  );
  if (id) {
    post = <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (loadedPost) {
    post = (
      <div className="FullPost">
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className="Edit">
          <button onClick={deletePostHandler} className="Delete">
            Delete
          </button>
        </div>
      </div>
    );
  }

  return post;
};

export default FullPost;
