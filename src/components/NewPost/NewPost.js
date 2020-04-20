import React, { useState } from "react";
import axios from "axios";
import "./NewPost.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Juan");

  const postDataHandler = async () => {
    const data = {
      title,
      body,
      author,
    };
    const sendData = await axios.post("/posts", data);
    console.log(sendData);
  };

  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <label>Content</label>
      <textarea
        rows="4"
        value={body}
        onChange={event => setBody(event.target.value)}
      />
      <label>Author</label>
      <select
        value={author}
        onChange={event => setAuthor(event.target.value)}
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
