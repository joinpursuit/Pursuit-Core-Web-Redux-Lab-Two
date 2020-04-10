import { GET_ALL_POSTS } from "./actionTypes";
import axios from "axios";
import * as postsApi from "../util/postsApi";

const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  payload: posts
});

export const fetchAllPosts = () => {
  async dispatch => {
    try {
      let res = await postsApi.fetchAllPosts();
      dispatch(getAllPosts(res.data));
    } catch (error) {
      console.log(error);
      //put error dispatch here too
    }
  };
};

export default getAllPosts;
