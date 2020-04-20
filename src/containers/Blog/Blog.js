import React, { useState, useEffect } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import { render } from "react-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("/posts");
        const { data } = res;
        const slicedData = data.slice(0, 4);
        const updatedPosts = slicedData.map(post => {
          return {
            ...post,
            author: "Max",
          };
        });
        setPosts(updatedPosts);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [renderPosts]);

  const postSelectedHandler = id => {
    setSelectedPostId(id);
  };

  let renderPosts = <p>Something went wrong. Try again.</p>;
  if (!error) {
    if (posts.length === 0) {
      renderPosts = <p>Loading posts...</p>;
    } else {
      renderPosts = posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => postSelectedHandler(post.id)}
          />
        );
      });
    }
  }

  return (
    <div>
      <section className="Posts">{renderPosts}</section>
      <section>
        <FullPost id={selectedPostId} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
