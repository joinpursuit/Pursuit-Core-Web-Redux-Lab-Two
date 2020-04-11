import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../Actions/postsActions";

const PostsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const posts = useSelector(state => state.posts);

  return (
    <ul>
      {posts.map(post => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </ul>
  );
};

export default PostsList;
