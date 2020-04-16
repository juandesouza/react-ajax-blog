import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import post from "../../components/Post/Post";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const { data } = res;
      const slicedData = data.slice(0, 4);
      const updatedPosts = slicedData.map(post => {
        return {
          ...post,
          author: "Max",
        };
      });
      setPosts(updatedPosts);
    };
    fetchData();
  }, []);

  const postSelectedHandler = id => {
    setSelectedPostId(id);
    console.log("selected!");
  };

  const renderPosts = posts.map(post => {
    return (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => postSelectedHandler(post.id)}
      />
    );
  });

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
