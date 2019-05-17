import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Posts from "../screens/Posts";

const PostStack = createStackNavigator(
  {
    Posts: Posts
  },
  {
    initialRouteName: 'Posts',
    headerMode: 'none'
  }
);

export default PostStack
