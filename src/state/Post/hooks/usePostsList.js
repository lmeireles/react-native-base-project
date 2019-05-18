import React from 'react';
import {useStateValue} from "../../index";
import {getPosts} from "../queries";
import {setPosts, requestPosts, failPosts} from "../actions";

const usePostsList = () => {
  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    dispatch(requestPosts());
    const response = await getPosts();

    if (response.genericError) {
      dispatch(failPosts(response.genericError));
      return
    }

    dispatch(setPosts(response));
  };

  return fetchData;
};

export default usePostsList;
