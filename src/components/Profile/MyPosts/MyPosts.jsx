import React from "react";
import s from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <textarea></textarea>
      <button>new post</button>

      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
};

export default MyPosts;
